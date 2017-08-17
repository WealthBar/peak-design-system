import { shallow } from 'avoriaz';
import { stubHelpers } from '@/lib/vue';
import test from 'tape';
import { AuthError } from '@/lib/utils/errors';
import login from './login';

test('renders root element', (t) => {
  const wrapper = shallow(login);
  const element = wrapper.find('form');

  t.equal(element.length, 1, 'should have exactly one root element');
  t.end();
});

test('Form handles calls submit handler', (t) => {
  stubHelpers(t.spy, login);

  const submit = t.stub();
  const wrapper = shallow(login, { methods: { submit } });

  const form = wrapper.find('form')[0];

  form.trigger('submit');

  t.ok(submit.called, 'submit handler called');
  t.end();
});

test('Methods: submit() the dispatcher is called with the right data', async (t) => {
  stubHelpers(t.spy, login);

  const $router = { push: t.spy() };
  const $route = {
    query: {},
  };

  const loginData = { email: 'test@wb.test', password: 'password' };
  const wrapper = shallow(
    login,
    {
      globals: { $router, $route },
      data: Object.assign({}, loginData),
    },
  );

  await wrapper.vm.submit();
  t.assert(login.methods.login.calledWithMatch(loginData), 'login action dispatched.');

  t.end();
});

test('Methods: submit() when an authentication error is thrown, the state is updated', async (t) => {
  stubHelpers(t.spy, login);

  const errorMessage = 'auth error';
  const loginMethod = t.stub().throws(new AuthError(errorMessage));
  const $router = { push: t.spy() };

  const wrapper = shallow(login, { globals: { $router }, methods: { login: loginMethod } });

  await wrapper.vm.submit();
  t.ok($router.push.notCalled, 'the router is not called');
  t.equal(wrapper.data().loginErrorMessage, errorMessage, 'the error message is correct');
  t.end();
});

test('Methods: submit() a regular exception is not caught', async (t) => {
  stubHelpers(t.spy, login);

  const loginMethod = t.stub().throws('error');
  const $router = { push: t.spy() };
  const wrapper = shallow(login, { globals: { $router }, methods: { login: loginMethod } });

  try {
    await wrapper.vm.submit();
    t.fail('an exception should have been thrown');
  } catch (error) {
    t.pass('an exception is thrown');
  }
  t.ok($router.push.notCalled, 'the router is not called');
  t.equal(wrapper.data().loginErrorMessage, null, 'the error message is still null');
  t.end();
});

test('Methods: submit() the router is called with the requested path when present', async (t) => {
  stubHelpers(t.spy, login);

  const loginMethod = t.stub();
  const $router = { push: t.spy() };

  const originalPagePath = '/other-page';
  const $route = {
    query: { redirect: originalPagePath },
  };
  const wrapper = shallow(login, { globals: { $router, $route }, methods: { login: loginMethod } });

  await wrapper.vm.submit();
  t.ok($router.push.calledOnce, 'the router is called once');
  t.ok($router.push.calledWith(originalPagePath), 'the router pushes the requested page');

  t.end();
});

test('Methods: submit() the router is called with the default path when there is no requested path', async (t) => {
  stubHelpers(t.spy, login);

  const loginMethod = t.stub();
  const $router = { push: t.spy() };

  const $route = {
    query: {},
  };
  const wrapper = shallow(login, { globals: { $router, $route }, methods: { login: loginMethod } });

  await wrapper.vm.submit();
  t.ok($router.push.calledOnce, 'the router is called once');
  t.ok($router.push.calledWith('/clients'), 'the router pushes the client page');

  t.end();
});
