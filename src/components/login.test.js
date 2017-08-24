import { shallow } from 'avoriaz';
import { stubHelpers } from '@/lib/vue';
import test from 'tape';
import login from './login';

test('renders root element', (t) => {
  stubHelpers(t.stub, login);

  const wrapper = shallow(login);
  const element = wrapper.find('form');
  t.equal(element.length, 1, 'should have exactly one root element');
  t.end();
});

test('renders the error message', (t) => {
  stubHelpers(t.stub, login);
  login.computed.loginErrorMessage.returns(null);

  let wrapper = shallow(login);
  let element = wrapper.find('.login-error-message');
  t.equal(element.length, 0, 'no error message');

  const errorMessage = 'random error message';
  login.computed.loginErrorMessage.returns(errorMessage);

  wrapper = shallow(login);
  element = wrapper.find('.login-error-message');
  t.equal(element.length, 1, 'an error message is displayed');
  t.equal(element[0].text(), errorMessage, 'the error message is the expected one');

  t.end();
});

test('Form handles calls submit handler', (t) => {
  stubHelpers(t.stub, login);

  const submit = t.stub();
  const wrapper = shallow(login, { methods: { submit } });

  const form = wrapper.find('form')[0];

  form.trigger('submit');

  t.ok(submit.called, 'submit handler called');
  t.end();
});

test('Methods: submit() the dispatcher is called with the right data', async (t) => {
  stubHelpers(t.stub, login);

  const loginData = { email: 'test@wb.test', password: 'password' };
  const wrapper = shallow(
    login,
    {
      data: Object.assign({}, loginData),
    },
  );

  await wrapper.vm.submit();
  t.assert(login.methods.login.calledWithMatch(loginData), 'login action dispatched.');

  t.end();
});
