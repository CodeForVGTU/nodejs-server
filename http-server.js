import { createServer } from 'http';
import { readFile } from 'fs';

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
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
