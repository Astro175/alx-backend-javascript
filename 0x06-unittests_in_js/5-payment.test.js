const expect = require('chai').expect;
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./5-payment');

describe("Test suite 1/2, using beforeEach", () =>{
    afterEach(function() {
        sinon.restore();
    });
    it("Using hooks to resolve multiple spies, 1/2", () => {
        const spy = sinon.spy(console, 'log');
        sendPaymentRequestToApi(100, 20);
        expect(spy.calledOnce).to.be.true;
        expect(spy.calledWith('The total is: 120'));
    });
});

describe("Test suite 2/2, using beforeEach", () =>{
    afterEach(function() {
        sinon.restore();
    });
    it("Using hooks to resolve multiple spies, 2/2", () => {
        const spy = sinon.spy(console, 'log');
        sendPaymentRequestToApi(100, 20);
        expect(spy.calledOnce).to.be.true;
        expect(spy.calledWith('The total is: 120'));
    });
});