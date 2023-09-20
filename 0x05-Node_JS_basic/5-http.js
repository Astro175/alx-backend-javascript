const http = require('http');

const db = process.argv[2];
const url = require('url');
const countStudents = require('./3-read_file_async');

const port = 1245;
const host = 'localhost';

const requestlistener = function requestlistener(req, res) {
  res.statusCode = 200;
  res.end('Hello Holberton School!');
  res.setHeader('Content-Type', 'text/plain');
  const reqUrl = url.parse(req.url).pathname;
  if (reqUrl === '/') {
    res.write('Hello Holberton School!');
    res.end();
  } else if (reqUrl === '/students') {
    res.write('This is the list of our students\n');
    countStudents(db.toString()).then((output) => {
      const outString = output.slice(0, -1);
      res.end(outString);
    }).catch(() => {
      res.statusCode = 404;
      res.end('Cannot load the database');
    });
  }
};

const server = http.createServer(requestlistener);
server.listen(port, host);

module.exports = server;
