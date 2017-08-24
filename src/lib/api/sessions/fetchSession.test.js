import test from 'tape';
import caller from '@/lib/api/rest/caller';
import fetchSession from './fetchSession';

test('lib/api/sessions/fetchSession fetching the session should call the right endpoint', async (t) => {
  t.stub(caller, 'get');
  await fetchSession.execute();

  t.ok(caller.get.calledOnce, 'the caller was called once');
  t.ok(caller.get.calledWith('/sessions'), 'the caller was called with the right parameters');

  t.end();
});
