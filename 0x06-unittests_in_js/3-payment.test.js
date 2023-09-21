const sinon = require("sinon");
const expect = require('chai').expect;
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require("./utils");

describe("Testing using Sinon to inspect the add function", () =>{
    it("Checks if sendPayment uses calculateNumber", () => {
        const spy = sinon.spy(Utils, 'calculateNumber');
        sendPaymentRequestToApi(100, 20);

        expect(spy.calledOnce).to.be.true;
        expect(spy.calledWith('SUM', 100, 20)).to.be.true;
    })
})