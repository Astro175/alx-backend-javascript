const assert = require('assert');
const expect = require('chai').expect;
const getPaymentTokenFromAPI = require('./6-payment_token');

describe("Testing async functions", () => {
    it("Asserting api done" , async (done) => {
         const paymentToken = await getPaymentTokenFromAPI(true);
         expect(paymentToken).to.deep.equal({ data: 'Successful response from the API' });
         done();
    });
});