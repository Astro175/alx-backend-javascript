const sinon = require('sinon');
const expect = require('chai').expect;
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require("./utils");
const Sinon = require('sinon');

describe('Testing using Sinon that stubs the add function', () => {
  it('Uses stub to make calculateNumber return 10', () => {

    const stub = Sinon.stub(Utils, 'calculateNumber');
    const spy = Sinon.spy(console, 'log');

    stub.returns(10);

    sendPaymentRequestToApi(100, 20);

    expect(stub.calledWith('SUM', 100, 20)).to.be.true;
    expect(stub.calledOnce).to.be.true;
    expect(spy.calledWith('The total is: 10')).to.be.true;

    spy.restore();
    stub.restore();
  });
});