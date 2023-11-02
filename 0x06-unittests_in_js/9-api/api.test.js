const chai = require('chai');
const sinon = require('sinon');
const request = require('request');

describe('Tests a basic express app', () => {
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
