/*
Node.js Web Server for working with HTTP methods.
Using JavaScript ES6 (ECMAScript 6) standard.
Coded by Rimvydas Kanapka.
*/
import { createServer } from 'http';
import { readFile } from 'fs';

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer(function(req, res) {
    console.log("Response status code:", res.statusCode);
    res.writeHead(200, {
        'Content-Type': 'text/html',
        'X-Powered-By': 'HTTP 1.1 Server'
    });
    readFile('index.html', function(error, data) {
        if (error) {
            res.writeHead(404);
            res.write('Error: File Not Found');
        } else {
            res.write(data);
        }
        res.end();
    });
});

server.listen(port, hostname, function(error) {
    if (error) {
        console.log('Error', error);
    } else {
        console.log(`Server running on http://${hostname}:${port}`);
    }
});
