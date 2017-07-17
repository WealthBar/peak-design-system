import { shallow } from 'avoriaz';
import test from 'tape';
import { stubComponents, stubHelpers } from '@/lib/vue';
import Clients from './clients';

stubComponents(Clients, 'router-link', 'router-view');

test('views/Clients renders root element', (t) => {
  stubHelpers(t.stub, Clients);
  const wrapper = shallow(Clients);
  const element = wrapper.find('.clients');
  t.equal(element.length, 1, 'should have exactly one root element');
  t.end();
});

test('views/Clients submit', async (t) => {
  stubHelpers(t.stub, Clients);
  const event = { preventDefault: t.spy() };
  const name = 'Test';
  const email = 'test@test.test';
  const wrapper = shallow(Clients, { data: { name, email } });
  await wrapper.vm.submit(event);
  t.equal(wrapper.vm.name, '', 'Clears name field after submit.');
  t.equal(wrapper.vm.email, '', 'Clears email field after submit.');
  t.assert(event.preventDefault.called, 'Calls event.preventDefault');
  t.assert(Clients.methods.addClient.calledWithMatch(t.sinon.match({ name, email })), 'Calls addClient with name and email');
  t.end();
});
