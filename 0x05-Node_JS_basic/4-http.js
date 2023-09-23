const http = require('http');

const port = 1245;
const host = '127.0.0.1';

const requestlistener = function requestlistener(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
};

const server = http.createServer(requestlistener);
server.listen(port, host, () => {});

module.exports = server;
