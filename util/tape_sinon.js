const sinon = require('sinon');
const tape = require('tape');

const Test = tape.Test;

const testRun = Test.prototype.run;
Test.prototype.run = function run(...args) {
  this.sinon = sinon.sandbox.create({
    injectInto: this,
    properties: ['stub', 'spy', 'mock', 'clock', 'request'],
    useFakeServer: true,
    useFakeTimers: true,
  });
  testRun.apply(this, args);
};

Test.prototype.stubMatch = sinon.match;

/* eslint-disable no-underscore-dangle */
const testEnd = Test.prototype._end;
Test.prototype._end = function end(...args) {
  this.sinon.restore();
  testEnd.apply(this, args);
};
/* eslint-enable */
