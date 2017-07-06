import test from 'tape';
import store from './index';

test('The store has modules installed.', (t) => {
  t.assert('sessions' in store.state, 'The sessions module is installed.');
  t.assert('clients' in store.state, 'The clients module is installed.');
  t.end();
});
