self.addEventListener('install', event => {
    console.log('Service Worker installed');
    // Perform install steps, like caching assets, if needed
    event.waitUntil(self.skipWaiting()); // Activate SW immediately after installation
});

self.addEventListener('activate', event => {
    console.log('Service Worker activated');
    event.waitUntil(self.clients.claim()); // Take control of all pages
});

self.addEventListener('fetch', event => {
    const url = new URL(event.request.url);

    // Intercept requests to specific API endpoints
    if (url.pathname === '/api/products') {
        event.respondWith(
            new Response(
                JSON.stringify([
                    { id: 1, name: 'Mock Product A', price: 100 },
                    { id: 2, name: 'Mock Product B', price: 200 },
                    { id: 3, name: 'Mock Product C', price: 300 }
                ]),
                {
                    headers: { 'Content-Type': 'application/json' }
                }
            )
        );
    } else {
        // For other requests, let the browser handle it
        event.respondWith(fetch(event.request));
    }
});