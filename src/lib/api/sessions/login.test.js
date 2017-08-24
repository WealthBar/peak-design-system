import test from 'tape';
import caller from '@/lib/api/rest/caller';
import login from './login';

test('lib/api/sessions/login calling the login should call the right endpoint', async (t) => {
  t.stub(caller, 'post');
  const loginData = {
    email: 'e@ma.il',
    password: 'password',
  };
  await login.execute(loginData);

  t.ok(caller.post.calledOnce, 'the caller was called once');
  t.ok(caller.post.calledWith('/sessions', loginData), 'the caller was called with the right parameters');

  t.end();
});
