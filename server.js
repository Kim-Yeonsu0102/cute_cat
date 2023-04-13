// server.js
const http = require('http');

http
  .createServer((request, response) => {
    response.writeHead(200);
    response.end();
  })
  .listen(3000);


