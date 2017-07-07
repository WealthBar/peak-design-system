import test from 'tape';
import logout from './logout';

test.skip('lib/api/sessions/logout', async (t) => {
  t.assert(await logout.execute());
  t.end();
});
