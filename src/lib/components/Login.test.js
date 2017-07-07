import { mount } from 'avoriaz';
import test from 'tape';
import store from '@/store';
import router from '@/router';
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

test('Methods: submit()', async (t) => {
  t.stub(store, 'getters').value({ isLoggedIn: true });
  t.stub(store, 'dispatch');
  t.stub(router, 'push');
  const event = { preventDefault: t.spy() };
  const data = { email: 'test@wb.test', password: 'password' };
  const wrapper = mount(Login, { data });

  await wrapper.vm.submit(event);

  t.assert(event.preventDefault.called, 'event.preventDefault() called');
  t.assert(store.dispatch.calledWithMatch('login', t.sinon.match(data)), 'login action dispatched.');
  t.assert(router.push.calledWith('/clients'), 'router push called with /clients route');
  t.end();
});
