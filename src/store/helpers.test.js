import test from 'tape';
/* eslint-disable */
import { mapState, mapGetters, mapGetterMethods, mapActions, mapMutations, stubHelpers } from './helpers';
/* eslint-enable */

const $store = { state: { test: 'value' }, getters: { test: 'value' }, dispatch() { }, commit() { } };
const thisStub = { $store };

test('mapState helper', (t) => {
  const results = mapState(['test']);
  t.equal(results.test.apply(thisStub), 'value', 'can map a state property');
  t.end();
});

test('mapGetters helper', (t) => {
  const results = mapGetters(['test']);
  t.equal(results.test.apply(thisStub), 'value', 'can map a getters property');
  t.end();
});

test('mapGetterMethods helper', (t) => {
  $store.getters.test = value => value;
  const results = mapGetterMethods(['test']);
  t.equal(results.test.apply(thisStub, ['value']), 'value', 'can map a getters method');
  t.end();
});

test('mapActions helper', (t) => {
  t.spy($store, 'dispatch');
  const results = mapActions(['test']);
  results.test.apply(thisStub, ['value']);
  t.assert($store.dispatch.calledWith('test', 'value'), 'can map an action');
  t.end();
});

test('mapMutations helper', (t) => {
  t.spy($store, 'commit');
  const results = mapMutations(['test']);
  results.test.apply(thisStub, ['value']);
  t.assert($store.commit.calledWith('test', 'value'), 'can map a mutuation');
  t.end();
});

test('stubHelpers', (t) => {
  const stub = {};
  const spy = () => stub;
  const computed = { helper: { vuex: true }, notHelper: 'notHelper' };
  const methods = { helper: { vuex: true }, notHelper: 'notHelper' };
  stubHelpers(spy, { computed, methods });
  t.equal(computed.helper, stub, 'replaces computed vuex helpers properties with a stub');
  t.equal(computed.notHelper, 'notHelper', 'does not replace other computed properties');
  t.equal(methods.helper, stub, 'replaces methods vuex helpers properties with a stub');
  t.equal(methods.notHelper, 'notHelper', 'does not replace other methods properties');
  t.end();
});
