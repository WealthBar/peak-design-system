import { shallow } from 'avoriaz';
import { stubHelpers } from '@/store';
import test from 'tape';
import View from './index';

const name = 'Test';
const email = 'test@test.test';
const globals = { $route: { params: { id: 10 } } };

test('views/clients/_id/index renders root element', (t) => {
  stubHelpers(t.stub, View);
  View.methods.getClient.returns({ name, email });
  const wrapper = shallow(View, { globals });
  const element = wrapper.find('.client');
  t.equal(element.length, 1, 'should have exactly one root element');
  t.end();
});

test('views/clients/_id/index sets the title', (t) => {
  const thisStub = { client: { name } };

  let head = View.head.apply(thisStub);
  t.equal(head.title, `${name} | WealthBar`, 'if client then sets the title to the client name');

  thisStub.client = null;
  head = View.head.apply(thisStub);
  t.assert(!head, 'if no client then does not set the title');
  t.end();
});

test('views/clients/_id/index renders current client', async (t) => {
  stubHelpers(t.stub, View);
  View.methods.getClient.returns({ name, email });
  const wrapper = shallow(View, { globals });
  const nameEl = wrapper.find('.client-name')[0];
  const emailEl = wrapper.find('.client-email')[0];
  t.equal(nameEl.text(), name, 'renders client name');
  t.equal(emailEl.text(), `<${email}>`, 'renders client email');
  t.assert(View.methods.getClient.calledWith(10), 'Gets the client by the route id');
  t.end();
});
