const fs = require('fs');
const path = require('path');
const ejs = require('ejs');
const beautify = require('js-beautify').html; // Import js-beautify for HTML formatting
const config = require('./config.json');

// Base path for deployment
const basePath = '/databanken/';

// Paths configuration
const paths = {
    views: path.join(__dirname, 'views'),
    public: path.join(__dirname, 'public'),
    dist: path.join(__dirname, 'dist'),
};

// Ensure `dist` directory exists
if (!fs.existsSync(paths.dist)) {
    fs.mkdirSync(paths.dist, { recursive: true });
    console.log(`Created directory: ${paths.dist}`);
}

// Function to copy files and preserve directory structure
const copyFilesWithStructure = (src, dest) => {
    fs.readdirSync(src).forEach((file) => {
        const srcPath = path.join(src, file);
        const destPath = path.join(dest, file);
        if (fs.lstatSync(srcPath).isDirectory()) {
            if (!fs.existsSync(destPath)) {
                fs.mkdirSync(destPath, { recursive: true });
            }
            copyFilesWithStructure(srcPath, destPath);
        } else {
            fs.copyFileSync(srcPath, destPath);
        }
    });
};

console.log('Copying public assets to the root of dist with structure...');
copyFilesWithStructure(paths.public, paths.dist);
console.log('Public assets copied successfully.');

// Define pages to generate
const pages = [
    { template: 'about-us.ejs', output: 'about-us.html', data: { company: config.company, activeKey: 'about-us', basePath } },
    { template: 'donate.ejs', output: 'donate.html', data: { company: config.company, activeKey: 'donate', basePath } },
    { template: 'e-bay.ejs', output: 'e-bay.html', data: { company: config.company, title: 'eBay', activeKey: 'e-bay', basePath } },
    { template: 'index.ejs', output: 'index.html', data: { company: config.company, activeKey: 'home', basePath } },
    { template: 'our-shop.ejs', output: 'our-shop.html', data: { company: config.company, activeKey: 'shop', basePath } },
    { template: 'our-computers.ejs', output: 'our-computers.html', data: { company: config.company, activeKey: 'our-computers', basePath } },

    { template: 'stocklist.ejs', output: 'stocklist.html', data: { company: config.company, activeKey: 'stock-list', basePath } },


    { template: 'simple.ejs', output: 'simple.html', data: { company: config.company, activeKey: 'simple', basePath } },

];

// Beautify options
const beautifyOptions = {
    indent_size: 2,
    space_in_empty_paren: true,
    preserve_newlines: false,
    wrap_line_length: 80,
};

// Generate static files
pages.forEach(({ template, output, data }) => {
    const templatePath = path.join(paths.views, template);
    const outputPath = path.join(paths.dist, output);

    ejs.renderFile(templatePath, data, {}, (err, html) => {
        if (err) {
            console.error(`Error rendering ${template}:`, err);
            return;
        }

        // Prettify the generated HTML
        const formattedHtml = beautify(html, beautifyOptions);

        fs.writeFileSync(outputPath, formattedHtml, 'utf-8');
        console.log(`Generated: ${output} (prettified)`);
    });
});

console.log('Static files generated and prettified successfully!');