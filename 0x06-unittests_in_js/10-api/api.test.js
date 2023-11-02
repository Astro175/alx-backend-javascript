const chai = require('chai');
const sinon = require('sinon');
const request = require('request');
const { response } = require('express');

describe('Index Page', function () {
  it('Tests the root route', () => {
    const url = 'http://localhost:7865/';
    request(url, (err, response, body) => {
      chai.expect(response.statusCode).to.equal(200);
    });
  });
  it('returns the correct message', function () {
    const url = 'http://localhost:7865/';
    request.get(url, (err, response, body) => {
      chai.expect(response.body).to.equal('Welcome to the payment system');
    });
  });
});

describe('Cart Page', function () {
  it('Tests the id route, when id is a number', () => {
    const url = 'http://localhost:7865/cart/63';
    request(url, (err, response, body) => {
      chai.expect(response.statusCode).to.equal(200);
    });
  });
  it('Tests the id route, when id is not a number', function () {
    const url = 'http://localhost:7865/cart/ee';
    request(url, (err, response, body) => {
      chai.expect(response.statusCode).to.equal(404);
    });
  });
  it('Tests for return statement in cart page', function () {
    const url = 'http://localhost:7865/cart/12';
    request.get(url, (err, response, body) => {
      chai.expect(response.body).to.equal('Payment methods for cart 12');
    });
  });
});

describe('login Page', function () {
  it('Returns proper status code for login', function () {
    const url = 'http://localhost:7865/login';
    request.post(
      {
        url, json: { userName: 'John' }
      }, (err, response, body) => {
        chai.expect(response.statusCode).to.equal(200);
      });
  });

  it('Returns proper message on the route', function () {
    const url = 'http://localhost:7865/login';
    request.post(
      {
        url, json: { userName: 'John' }
      }, (err, response, body) => {
        chai.expect(body).to.equal('Welcome John');
      });
  });
});

describe('Available Payment test route', function () {
  it('Returns proper status for this route', function () {
    const url = 'http://localhost:7865/available_payments';
    request.get(url, (error, response, body) => {
      chai.expect(response.statusCode).to.equal(200);
      const expectedPaymentMethods = {
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      };
      chai.expect(JSON.parse(body)).to.deep.equal(expectedPaymentMethods);
    });
  });
});
