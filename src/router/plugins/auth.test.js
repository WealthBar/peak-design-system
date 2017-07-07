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

test('router/plugins/auth: checkAuth navigation guard', (t) => {
  const storeStub = t.stub(store, 'getters');
  storeStub.value({ isLoggedIn: true });
  const routeStub = {
    matched: [{ meta: { requiresAuth: true } }],
    fullPath: '/full-path',
  };
  const nextStub = t.spy();
  checkAuth(routeStub, routeStub, nextStub);
  t.assert(nextStub.calledWithExactly(), 'Calls next if requiresAuth: true and logged in.');
  nextStub.reset();

  storeStub.value({ isLoggedIn: false });
  checkAuth(routeStub, routeStub, nextStub);
  t.assert(nextStub.calledWith(t.sinon.match({ path: '/', query: { redirect: '/full-path' } })), 'Calls next with root path if requiresAuth: true and not logged in.');

  t.end();
});
