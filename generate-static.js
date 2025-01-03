const fs = require('fs');
const path = require('path');
const ejs = require('ejs');
const beautify = require('js-beautify').html;
const config = require('./config.json');

// Determine base path based on environment
const basePath = process.env.NODE_ENV === 'production' ? '/databanken/' : './';
console.log(`Base path: ${basePath}`);

// Paths configuration
const paths = {
    views: path.resolve('views'),
    public: path.resolve('public'),
    dist: path.resolve('dist'),
};

// Ensure `dist` directory exists
if (!fs.existsSync(paths.dist)) fs.mkdirSync(paths.dist, { recursive: true });

// Copy public assets to `dist`
const copyFiles = (src, dest) => {
    fs.readdirSync(src).forEach(file => {
        const srcPath = path.join(src, file);
        const destPath = path.join(dest, file);

        if (fs.lstatSync(srcPath).isDirectory()) {
            if (!fs.existsSync(destPath)) fs.mkdirSync(destPath, { recursive: true });
            copyFiles(srcPath, destPath);
        } else {
            fs.copyFileSync(srcPath, destPath);
        }
    });
};
copyFiles(paths.public, paths.dist);

// Define pages to generate
const pages = [
    { template: 'about-us.ejs', output: 'about-us.html', activeKey: 'about-us', title: 'About' },
    { template: 'donate.ejs', output: 'donate.html', activeKey: 'donate', title: 'Donate' },
    { template: 'e-bay.ejs', output: 'e-bay.html', activeKey: 'e-bay', title: 'e-Bay' },
    { template: 'index.ejs', output: 'index.html', activeKey: 'home', title: 'Home' },
    { template: 'our-mission.ejs', output: 'our-mission.html', activeKey: 'our-mission', title: 'Mission' },
    { template: 'our-shop.ejs', output: 'our-shop.html', activeKey: 'shop', title: 'Shop' },
    { template: 'our-computers.ejs', output: 'our-computers.html', activeKey: 'our-computers', title: 'Our computers' },
    { template: 'our-blog.ejs', output: 'our-blog.html', activeKey: 'our-blog', title: 'Our blog' },
    { template: 'services.ejs', output: 'services.html', activeKey: 'services', title: 'Services' },
    { template: 'stocklist.ejs', output: 'stocklist.html', activeKey: 'stock-list', title: 'StockList' },
    { template: 'simple.ejs', output: 'simple.html', activeKey: 'simple', title: 'Simple' },
    { template: 'volunteering.ejs', output: 'volunteering.html', activeKey: 'volunteering', title: 'Volunteers' },
    { template: 'contact.ejs', output: 'contact.html', activeKey: 'contact', title: 'Contact' },
];

// Beautify options
const beautifyOptions = { indent_size: 2, preserve_newlines: false, wrap_line_length: 80 };

// Generate static files
pages.forEach(({ template, output, activeKey, title }) => {
    const templatePath = path.join(paths.views, template);
    const outputPath = path.join(paths.dist, output);

    ejs.renderFile(templatePath, { company: config.company, activeKey, basePath, title }, {}, (err, html) => {
        if (err) return console.error(`Error rendering ${template}:`, err);

        fs.writeFileSync(outputPath, beautify(html, beautifyOptions), 'utf-8');
        console.log(`Generated: ${output}`);
    });
});

console.log('Static files generated successfully.');