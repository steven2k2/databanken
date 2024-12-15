const fs = require('fs');
const path = require('path');
const ejs = require('ejs');
const config = require('./config.json');

// Set up paths
const viewsDir = path.join(__dirname, 'views');
const publicDir = path.join(__dirname, 'public');
const distDir = path.join(__dirname, 'dist');

// Ensure dist directory exists
if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir);
}

// Function to copy files recursively
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

// Copy public assets to dist
console.log('Copying public assets...');
copyFiles(publicDir, path.join(distDir, 'public'));
console.log('Public assets copied.');

// Define pages to generate
const pages = [
    { template: 'index.ejs', output: 'index.html', data: { company: config.company, activeKey: 'home' } },
    { template: 'e-bay.ejs', output: 'e-bay.html', data: { company: config.company, activeKey: 'e-bay' } },

    { template: 'stocklist.ejs', output: 'stocklist.html', data: { company: config.company, activeKey: 'stock-list' } },
];

// Generate static files
pages.forEach((page) => {
    const templatePath = path.join(viewsDir, page.template);
    const outputPath = path.join(distDir, page.output);

    ejs.renderFile(templatePath, page.data, {}, (err, html) => {
        if (err) {
            console.error(`Error rendering ${page.template}:`, err);
            return;
        }
        fs.writeFileSync(outputPath, html, 'utf-8');
        console.log(`Generated ${page.output}`);
    });
});