import { shallow } from 'avoriaz';
import test from 'tape';
import View from './index';

const name = 'Test';
const email = 'test@test.test';
const globals = { $route: { params: { id: 10 } } };

test('views/clients/_id/index renders root element', (t) => {
  t.stub(View.methods, 'getClient').returns({ name, email });
  const wrapper = shallow(View, { globals });
  const element = wrapper.find('.client');
  t.equal(element.length, 1, 'should have exactly one root element');
  t.end();
});

test('views/clients/_id/index renders current client', async (t) => {
  const getClientStub = t.stub(View.methods, 'getClient');
  getClientStub.returns({ name, email });
  const wrapper = shallow(View, { globals });
  const nameEl = wrapper.find('.client-name')[0];
  const emailEl = wrapper.find('.client-email')[0];
  t.equal(nameEl.text(), name, 'renders client name');
  t.equal(emailEl.text(), `<${email}>`, 'renders client email');
  t.assert(getClientStub.calledWith(10), 'Gets the client by the route id');
  t.end();
});
