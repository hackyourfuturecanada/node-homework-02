const http = require('http');
const handlers = require('./handlers');
const hostname = '127.0.0.1';
const port = 3000;
const fs = require('fs');
let data; 


const server = http.createServer((req, res) => {
  console.log(req.url)
  if (req.url.startsWith("/shoes")) {
    handlers.shoesHandler(req, res);

  } else if (req.url.startsWith("/socks")) {
    handlers.socksHandler(req, res);

  } else if (req.url.startsWith("/")) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write(data);
    res.end();
  }



});

server.listen(3000, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});