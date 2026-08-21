// Import the built-in HTTP module
const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {

    // Set response header
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });

    // Handle different HTTP requests
    if (req.url === '/' && req.method === 'GET') {
        res.end(`
            <h1>Welcome to Node.js Server</h1>
            <p>This is the Home Page.</p>
        `);
    }

    else if (req.url === '/about' && req.method === 'GET') {
        res.end(`
            <h1>About Page</h1>
            <p>This page demonstrates HTTP Request and Response handling.</p>
        `);
    }

    else if (req.url === '/contact' && req.method === 'GET') {
        res.end(`
            <h1>Contact Page</h1>
            <p>Email: example@gmail.com</p>
        `);
    }

    else {
        // Handle invalid routes
        res.writeHead(404, {
            'Content-Type': 'text/html'
        });

        res.end(`
            <h1>404 - Page Not Found</h1>
            <p>The requested URL does not exist.</p>
        `);
    }
});

// Define server port
const PORT = 3000;

// Start the server
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});