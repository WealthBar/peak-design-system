import { shallow } from 'avoriaz';
import { stubHelpers } from '@/lib/vue';
import test from 'tape';
import View from './index';

const firstName = 'First';
const lastName = 'Last';
const email = 'test@test.test';
const globals = { $route: { params: { id: 10 } } };

test('views/clients/_id/index renders root element', (t) => {
  stubHelpers(t.stub, View);
  View.methods.getClient.returns({ firstName, lastName, email });
  const wrapper = shallow(View, { globals });
  const element = wrapper.find('.client');
  t.equal(element.length, 1, 'should have exactly one root element');
  t.end();
});

test('views/clients/_id/index sets the title', (t) => {
  const thisStub = { client: { firstName, lastName } };

  let head = View.head.apply(thisStub);
  t.equal(head.title, `${firstName} ${lastName} | WealthBar`, 'if client then sets the title to the client name');

  thisStub.client = null;
  head = View.head.apply(thisStub);
  t.assert(!head, 'if no client then does not set the title');
  t.end();
});

test('views/clients/_id/index renders current client', async (t) => {
  stubHelpers(t.stub, View);
  View.methods.getClient.returns({ firstName, lastName, email });
  const wrapper = shallow(View, { globals });
  const firstNameEl = wrapper.find('.client-first-name')[0];
  const lastNameEl = wrapper.find('.client-last-name')[0];
  const emailEl = wrapper.find('.client-email')[0];
  t.equal(firstNameEl.text(), firstName, 'renders client first name');
  t.equal(lastNameEl.text(), lastName, 'renders client last name');
  t.equal(emailEl.text(), `<${email}>`, 'renders client email');
  t.assert(View.methods.getClient.calledWith(10), 'Gets the client by the route id');
  t.end();
});
