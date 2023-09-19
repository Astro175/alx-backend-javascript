const http = require('http');

const port = 1245;
const host = 'localhost';

const requestlistener = function requestlistener(req, res) {
  res.writeHead(200);
  res.end('Hello Holberton School!');
   res.setHeader('Content-Type', 'text/plain');
};

const server = http.createServer(requestlistener);
server.listen(port, host);
