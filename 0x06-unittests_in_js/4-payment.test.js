const sinon = require('sinon');
const expect = require('chai').expect;
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require("./utils");

describe('Testing using Sinon that stubs the add function', () => {
  it('Uses stub to make calculateNumber return 10', () => {
    const sandbox = sinon.createSandbox();

    const stub = sandbox.stub(Utils, 'calculateNumber');
    const spy = sandbox.stub(console, 'log');

    stub.withArgs(100, 20).returns(10);

    sendPaymentRequestToApi(100, 20);

    expect(stub.calledWith('SUM', 100, 20)).to.be.true;
    expect(stub.calledOnce).to.be.true;

    sandbox.restore();
  });
});