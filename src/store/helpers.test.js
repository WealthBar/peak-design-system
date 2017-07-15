import test from 'tape';
/* eslint-disable */
import { mapState, mapGetters, mapGetterMethods, mapActions, mapMutations } from './helpers';
/* eslint-enable */

const store = { dispatch() { }, commit() { } };

test('mapState helper', (t) => {
  t.stub(store, 'state').value({ test: 'value' });
  const results = mapState(['test'], store);
  t.equal(results.test(), 'value', 'can map a state property');
  t.end();
});

test('mapGetters helper', (t) => {
  t.stub(store, 'getters').value({ test: 'value' });
  const results = mapGetters(['test'], store);
  t.equal(results.test(), 'value', 'can map a getters property');
  t.end();
});

test('mapGetterMethods helper', (t) => {
  t.stub(store, 'getters').value({ test: value => value });
  const results = mapGetterMethods(['test'], store);
  t.equal(results.test('value'), 'value', 'can map a getters method');
  t.end();
});

test('mapActions helper', (t) => {
  t.stub(store, 'dispatch');
  const results = mapActions(['test'], store);
  results.test('value');
  t.assert(store.dispatch.calledWith('test', 'value'), 'can map an action');
  t.end();
});

test('mapMutations helper', (t) => {
  t.stub(store, 'commit');
  const results = mapMutations(['test'], store);
  results.test('value');
  t.assert(store.commit.calledWith('test', 'value'), 'can map a mutuation');
  t.end();
});
