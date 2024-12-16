const fs = require('fs');
const path = require('path');
const ejs = require('ejs');
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

// Function to copy files recursively from `public` to `dist/public`
const copyFiles = (src, dest) => {
    if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true });
    }
    fs.readdirSync(src).forEach((file) => {
        const srcPath = path.join(src, file);
        const destPath = path.join(dest, file);
        if (fs.lstatSync(srcPath).isDirectory()) {
            copyFiles(srcPath, destPath);
        } else {
            fs.copyFileSync(srcPath, destPath);
        }
    });
};

console.log('Copying public assets...');
copyFiles(paths.public, path.join(paths.dist, 'public'));
console.log('Public assets copied successfully.');

// Define pages to generate
const pages = [
    { template: 'about-us.ejs', output: 'about-us.html', data: { company: config.company, activeKey: 'about-us', basePath } },
    { template: 'donate.ejs', output: 'donate.html', data: { company: config.company, activeKey: 'donate', basePath } },
    { template: 'e-bay.ejs', output: 'e-bay.html', data: { company: config.company, activeKey: 'e-bay', basePath } },
    { template: 'index.ejs', output: 'index.html', data: { company: config.company, activeKey: 'home', basePath } },
    { template: 'stocklist.ejs', output: 'stocklist.html', data: { company: config.company, activeKey: 'stock-list', basePath } },
];

// Generate static files
pages.forEach(({ template, output, data }) => {
    const templatePath = path.join(paths.views, template);
    const outputPath = path.join(paths.dist, output);

    ejs.renderFile(templatePath, data, {}, (err, html) => {
        if (err) {
            console.error(`Error rendering ${template}:`, err);
            return;
        }
        fs.writeFileSync(outputPath, html, 'utf-8');
        console.log(`Generated: ${output}`);
    });
});

console.log('Static files generated successfully!');