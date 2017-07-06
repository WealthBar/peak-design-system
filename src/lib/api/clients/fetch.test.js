import test from 'tape';
import fetch from './fetch';

test('test', (t) => {
  t.assert(fetch.execute());
  t.end();
});
