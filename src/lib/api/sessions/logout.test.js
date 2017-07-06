import test from 'tape';
import logout from './logout';

test('test', (t) => {
  t.assert(logout.execute());
  t.end();
});
