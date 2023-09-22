const assert = require('assert');
const expect = require('chai').expect;
const getPaymentTokenFromAPI = require('./6-payment_token');

describe.skip("Testing async functions", () => {
    it("Asserting api done" , (done) => {
         getPaymentTokenFromAPI().then(
            () => {
                done();
            });
    });
});