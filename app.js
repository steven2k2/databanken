const express = require('express');
const app = express();
const path = require('path');
const config = require('./config.json'); // Load the JSON configuration
const PORT = 3000;
require('dotenv').config();
const pages = require('./pages'); // Import the pages Map

// Set the basePath for local and production
app.locals.basePath = '/databanken/';

// Set the company information from the JSON file
app.locals.company = config.company;
app.locals.social = config.social;

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Serve static assets under the base path
app.use('/databanken', express.static(path.join(__dirname, 'public')));

// Middleware to fetch page data dynamically
app.use((req, res, next) => {
    const pageKey = req.path === '/databanken/' ? 'home' : req.path.replace('/databanken/', '').replace('/', '-');
    const page = pages.get(pageKey);

    if (page) {
        res.locals.title = page.title;
        res.locals.subtitle = page.subtitle || '';
        res.locals.keywords = page.keywords || '';
        res.locals.description = page.description || '';
        res.locals.activeKey = pageKey;
    }

    next();
});

// Set up routes with the base path
pages.forEach((page, key) => {
    app.get(`/databanken${page.url}`, (req, res) => {
        const view = key === 'home' ? 'index' : key;
        console.log('='.repeat(80));
        console.log(page.url);
        console.log(res.locals.title);


        res.render(view, {
            title: res.locals.title,
            subtitle: res.locals.subtitle,
            keywords: res.locals.keywords,
            description: res.locals.description,
            activeKey: res.locals.activeKey,
            basePath: app.locals.basePath,
        });
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}/databanken/`);
});