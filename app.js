const express = require('express');
const app = express();
const config = require('./config.json'); // Load the JSON configuration
const PORT = 3000;
require('dotenv').config();
const pages = require('./pages'); // Import the pages Map

app.locals.basePath = '/databanken/';


// Set the company information from the JSON file
app.locals.company = config.company;
app.locals.social = config.social;

// Set EJS as the templating engine
app.set('view engine', 'ejs');
app.use(express.static('public')); // Serve static assets

console.log('Serving static files from:', __dirname + '/public');


// Middleware to fetch page data dynamically
app.use((req, res, next) => {
    const pageKey = req.path === '/' ? 'home' : req.path.slice(1).replace('/', '-');
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

pages.forEach((page, key) => {
    app.get(page.url, (req, res) => {
        const view = key === 'home' ? 'index' : key;
        res.render(view, {
            title: res.locals.title,
            subtitle: res.locals.subtitle,
            keywords: res.locals.keywords,
            description: res.locals.description,
            activeKey: res.locals.activeKey,
        });
    });
});

app.get('/api/stocklist', (req, res) => {
    const desktops = [
        {id: '11210', name: 'HP Prodesk 600 G1 SFF', processor: 'Intel i5-4590 3.7GHz', storage: '128GB SSD', ram: '8GB', monitor: '19" monitor', concessionPrice: 85.0, fullPrice: 127.5},
        {id: '11286', name: 'Lenovo M92p', processor: 'Intel i5-3470T 2.90GHz', storage: '256GB SSD', ram: '8GB', monitor: '24" monitor', concessionPrice: 110.0, fullPrice: 165.0},
        // More desktops...
    ];

    const laptops = [
        {id: '11304', name: 'HP ProBook 430 G4', processor: 'Intel i5-7200U 2.50GHz', storage: '128GB SSD', ram: '8GB', screen: '13.2"', concessionPrice: 150.0},
        {id: '11300', name: 'HP Elitebook 850 G6', processor: 'Intel i5-8265u 1.6GHz', storage: '128GB SSD', ram: '8GB', screen: '15.5"', concessionPrice: 280.0},
        {id: '11305', name: 'HP Elitebook 850 G6', processor: 'Intel i5-8265u 1.6GHz', storage: '128GB SSD', ram: '8GB', screen: '15.5"', concessionPrice: 280.0},

    ];

    res.json({desktops, laptops});
});


// Start server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});