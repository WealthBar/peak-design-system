import { shallow } from 'avoriaz';
import test from 'tape';
import { stubComponents, stubHelpers } from '@/lib/vue';
import App from './app';

stubComponents(App, 'router-link', 'router-view');

test('views/App isLoginDisplayed', (t) => {
  stubHelpers(t.stub, App);
  App.computed.isLoggedIn.returns(false);
  let $route = { meta: { requiresAuth: true } };
  let wrapper = shallow(App, { globals: { $route } });
  t.ok(App.computed.isLoggedIn.calledOnce, 'isLoggedIn was called once');
  t.equal(wrapper.vm.isLoginDisplayed, true, 'the login is displayed');

  App.computed.isLoggedIn.reset();
  $route = { meta: { requiresAuth: false } };
  wrapper = shallow(App, { globals: { $route } });
  t.ok(App.computed.isLoggedIn.notCalled, 'isLoggedIn was not called');
  t.equal(wrapper.vm.isLoginDisplayed, false, 'the login is not displayed');

  App.computed.isLoggedIn.reset();
  App.computed.isLoggedIn.returns(true);
  $route = { meta: { requiresAuth: true } };
  wrapper = shallow(App, { globals: { $route } });
  t.ok(App.computed.isLoggedIn.calledOnce, 'isLoggedIn was called once');
  t.equal(wrapper.vm.isLoginDisplayed, false, 'the login is not displayed');
  t.end();
});

test('views/App toggleMenu', (t) => {
  stubHelpers(t.stub, App);
  const $route = { meta: { requiresAuth: true } };
  const wrapper = shallow(App, { globals: { $route } });
  const state = wrapper.vm.menuDisplay;
  wrapper.vm.toggleMenu();
  t.equal(wrapper.vm.menuDisplay, !state, 'triggers the menu toggle');
  t.end();
});
