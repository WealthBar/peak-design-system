import test from 'tape';
import login from './login';

test('test', (t) => {
  t.assert(login.execute());
  t.end();
});
