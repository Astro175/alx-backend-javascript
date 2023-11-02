const chai = require('chai');
const sinon = require('sinon');
const request = require('request');

describe('Index Page', function () {
  it('Tests the root route', () => {
    const url = 'http://localhost:7865/';
    request(url, (err, response, body) => {
      chai.expect(response.statusCode).to.equal(200);
    });
  });
  it('returns the correct message', function() {
    const url = 'http://localhost:7865/';
    request(url, (err, response, body) => {
      chai.expect(response.body).to.equal('Welcome to the payment system');
    });
  });
});

describe('Cart Page', () => {
  it('Tests the id route, when id is a number', () => {
    const url = 'http://localhost:7865/cart/63';
    request(url, (err, response, body) => {
      chai.expect(response.statusCode).to.equal(200);
    });
  });
  it('Tests the id route, when id is not a number', () => {
    const url = 'http://localhost:7865/cart/ee';
    request(url, (err, response, body) => {
      chai.expect(response.statusCode).to.equal(404);
    });
  });
});
