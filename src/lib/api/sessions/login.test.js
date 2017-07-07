import test from 'tape';
import login from './login';

test.skip('lib/api/sessions/login', async (t) => {
  await login.execute();
  t.end();
});
