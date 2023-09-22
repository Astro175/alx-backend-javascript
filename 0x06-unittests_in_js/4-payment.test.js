const sinon = require("sinon");
const expect = require('chai').expect;
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require("./utils");

describe("Testing using Sinon to inspect the add function", () =>{
    it("Checks if sendPayment uses calculateNumber", () => {
        const stub = sinon.stub(Utils, 'calculateNumber');
        const spy = sinon.spy(console, 'log');
        stub.withArgs(100, 20).returns(10);
        sendPaymentRequestToApi(100, 20);

        
        expect(stub.calledWith('SUM', 100, 20)).to.be.true;
        expect(spy.calledWith('The total is: 10')).toBe(true);
        stub.restore();
        spy.restore();
    })
})