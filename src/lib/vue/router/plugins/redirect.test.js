import test from 'tape';
import install from './redirect';
import { checkRedirect } from './redirect';

test('router/plugins/redirect: plugin installer', (t) => {
  const routerSpy = { beforeEach: t.spy() };
  install(routerSpy);
  t.assert(routerSpy.beforeEach.calledWith(checkRedirect), 'installs checkRedirect navigation guard');
  t.end();
});

test('router/plugins/redirect: redirect navigation guard', (t) => {
  const routeStub = {
    matched: [],
  };
  const nextStub = t.spy();
  checkRedirect(routeStub, routeStub, nextStub);
  t.assert(nextStub.calledWithExactly(), 'Calls next with no arguments if no routes have meta.redirect.');
  nextStub.reset();

  routeStub.matched = [{ meta: { redirect: '/path' } }];
  checkRedirect(routeStub, routeStub, nextStub);
  t.assert(nextStub.calledWithExactly('/path'), 'Calls next with meta.redirect if the route supports it.');
  nextStub.reset();

  routeStub.matched = [{ meta: { } }];
  checkRedirect(routeStub, routeStub, nextStub);
  t.assert(nextStub.calledWithExactly(), 'Calls next with no arguments if the matched route does not have a meta.redirect entry.');

  t.end();
});
