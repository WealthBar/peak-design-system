import { mount } from 'avoriaz';
import test from 'tape';
import Login from './Login';

test('renders root element', (t) => {
  const wrapper = mount(Login);
  const element = wrapper.find('.login');

  t.equal(element.length, 1, 'should have exactly one root element');
  t.end();
});

test('Form handles calls submit handler', (t) => {
  const submit = t.stub();
  const wrapper = mount(Login, { methods: { submit } });
  const form = wrapper.find('form')[0];

  form.trigger('submit');

  t.assert(submit.called, 'submit handler called');
  t.end();
});

test('Methods: submit()', (t) => {
  const $store = { dispatch: t.spy() };
  const event = { preventDefault: t.spy() };
  const data = { email: 'test@wb.test', password: 'password' };
  const wrapper = mount(Login, { data, globals: { $store } });

  wrapper.vm.submit(event);

  t.assert(event.preventDefault.called, 'event.preventDefault() called');
  t.assert($store.dispatch.calledWithMatch('login'), 'login action dispatched.');
  t.deepEqual($store.dispatch.args[0][1], data, 'login action displatched with loginData payload.');
  t.end();
});
