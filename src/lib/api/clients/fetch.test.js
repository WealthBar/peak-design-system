import test from 'tape';
import caller from '@/lib/api/rest/caller';
import fetch from './fetch';

test('lib/api/clients/fetch', async (t) => {
  t.stub(caller, 'get');
  await fetch.execute();
  t.ok(caller.get.calledOnce, 'the caller was called once');
  t.ok(caller.get.calledWith('/advisor_clients', t.sinon.match.has('params', t.sinon.match.has('limit'))), 'the caller was called with the right parameters');
  t.end();
});
