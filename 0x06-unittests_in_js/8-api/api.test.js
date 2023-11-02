const chai = require('chai');
const sinon = require('sinon');
const request = require('request');

describe('Tests a basic express app for correct status code', () => {
    const url = 'http://localhost:7865/';
    it('Tests the root route', () => {
        request(url, (err, response, body) => {
            chai.expect(response.statusCode).to.equal(200);
        })
    })
    it('returns the correct message', () => {
        request(url, (err, response, body) => {
            chai.expect(body).to.equal('Welcome to the payment system');
        })
    })
})