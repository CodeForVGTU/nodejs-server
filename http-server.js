/*
Node.js Web Server for working with HTTP methods.
Using JavaScript ES6 (ECMAScript 6) standard.
Coded by Rimvydas Kanapka.
*/
const http = require('http');
const favicon = require('serve-favicon');
const finalhandler = require('finalhandler');
const formidable = require('formidable');
const path = require('path');
const util = require('util');

var _favicon = favicon(path.join(__dirname, '', 'favicon.ico'));

const hostname = '127.0.0.1';
const port = 3000;

var server = http.createServer(function onRequest (req, res) {
  var done = finalhandler(req, res);
  _favicon(req, res, function onNext (err) {
    if (err) return done(err)

    // continue to process the request here, etc.
    if (req.method.toLowerCase() == 'get') {
        res.writeHead(200, {
            "X-Powered-By": "HTTP 1.1 Server"
        });
        res.write('You are using GET method.');
        res.end();
    }
    else if (req.method.toLowerCase() == 'post') {
        let form = new formidable.IncomingForm();
        form.parse(req, function(error, fields, files) {
            if (error) {
                console.log(error.message);
                return;
            }
            res.writeHead(200, {
                "Content-": "text/plain",
                "X-Powered-By": "HTTP 1.1 Server"
            });
            res.write('You are using POST method.');
            res.end(util.inspect({fields:fields, files:files}));
        });
    }
    else {
        res.write('You are using Other method.');
        res.end();
    }
    //////////////////////
    console.log("Request url:", req.url)
    console.log("Request method:", req.method)
    console.log("Response code:", res.statusCode)

  })
})

server.listen(port, hostname, function(error) {
    if (error) {
        console.log('Error', error);
    } else {
        console.log(`Server running on http://${hostname}:${port}`);
    }
});
