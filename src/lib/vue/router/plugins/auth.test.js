import test from 'tape';
import store from '@/store';
import install from './auth';
import { checkAuth } from './auth';

test('router/plugins/auth: plugin installer', (t) => {
  const routerSpy = { beforeEach: t.spy() };
  install(routerSpy);
  t.assert(routerSpy.beforeEach.calledWith(checkAuth), 'installs checkAuth navigation guard');
  t.end();
});

test('router/plugins/auth: checkAuth navigation guard', async (t) => {
  const storeStub = t.stub(store, 'getters');
  t.stub(store, 'dispatch');
  storeStub.value({ isLoggedIn: true });
  let routeStub = {
    matched: [{ meta: { requiresAuth: false } }],
  };
  const nextStub = t.spy();

  await checkAuth(routeStub, routeStub, nextStub);
  t.assert(store.dispatch.notCalled, 'The store dispatcher is not called.');
  t.assert(nextStub.calledWithExactly(), 'Calls next.');

  store.dispatch.reset();
  routeStub = {
    matched: [{ meta: { requiresAuth: true } }],
  };
  await checkAuth(routeStub, routeStub, nextStub);
  t.assert(store.dispatch.calledOnce, 'The store dispatcher is called once.');
  t.assert(store.dispatch.calledWith('fetchSession'), 'The store dispatcher fetches the session.');
  t.assert(nextStub.calledWithExactly(), 'Calls next.');

  t.end();
});
