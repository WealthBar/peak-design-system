import test from 'tape';
import fetch from './fetch';

test.skip('lib/api/clients/fetch', async (t) => {
  await fetch.execute();
  t.end();
});
