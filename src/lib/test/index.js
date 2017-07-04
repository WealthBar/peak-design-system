import sinon from 'sinon';
import tape from 'tape';

const Test = tape.Test;

const testRun = Test.prototype.run;
Test.prototype.run = function run(...args) {
  this.sandbox = sinon.sandbox.create();
  testRun.apply(this, args);
};

Test.prototype.stub = function stub(...args) {
  this.sandbox.stub(...args);
};

Test.prototype.spy = function spy(...args) {
  this.sandbox.spy(...args);
};

Test.prototype.mock = function mock(...args) {
  this.sandbox.spy(...args);
};

/* eslint-disable no-underscore-dangle */
const testEnd = Test.prototype._end;
Test.prototype._end = function end(...args) {
  this.sandbox.restore();
  testEnd.apply(this, args);
};
/* eslint-enable */

export default tape;
