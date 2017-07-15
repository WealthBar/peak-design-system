import { shallow } from 'avoriaz';
import test from 'tape';
import Login from './Login';

test('renders root element', (t) => {
  const wrapper = shallow(Login);
  const element = wrapper.find('.login');

  t.equal(element.length, 1, 'should have exactly one root element');
  t.end();
});

test('Form handles calls submit handler', (t) => {
  const submit = t.stub();
  const wrapper = shallow(Login, { methods: { submit } });
  const form = wrapper.find('form')[0];

  form.trigger('submit');

  t.assert(submit.called, 'submit handler called');
  t.end();
});

test('Methods: submit()', async (t) => {
  const $router = { push: t.spy() };
  const event = { preventDefault: t.spy() };
  const data = { email: 'test@wb.test', password: 'password' };
  const wrapper = shallow(Login, { data, globals: { $router } });

  t.stub(wrapper.vm, 'isLoggedIn').value(false);
  t.stub(wrapper.vm, 'login').resolves();
  await wrapper.vm.submit(event);

  t.assert(event.preventDefault.called, 'event.preventDefault() called');

  t.assert(wrapper.vm.login.calledWithMatch(t.sinon.match(data)), 'login action dispatched.');
  t.assert(!$router.push.called, 'router push not called when not logged in');

  t.stub(wrapper.vm, 'isLoggedIn').value(true);
  await wrapper.vm.submit(event);
  t.assert($router.push.calledWith('/clients'), 'router push called with /clients route');
  t.end();
});
