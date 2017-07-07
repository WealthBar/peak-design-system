import { mount } from 'avoriaz';
// import store from '@/store';
import test from 'tape';
// import clientData from '@/lib/api/clients/fetch.data';
import Clients from './Clients';

test('views/Clients renders root element', (t) => {
  const wrapper = mount(Clients);
  const element = wrapper.find('.clients');
  t.equal(element.length, 1, 'should have exactly one root element');
  t.end();
});

test('views/Clients submit', async (t) => {
  const event = { preventDefault: t.spy() };
  const name = 'Test';
  const email = 'test@test.test';
  const wrapper = mount(Clients, { data: { name, email } });
  wrapper.vm.addClient = t.spy();
  await wrapper.vm.submit(event);
  t.equal(wrapper.vm.name, '', 'Clears name field after submit.');
  t.equal(wrapper.vm.email, '', 'Clears email field after submit.');
  t.assert(event.preventDefault.called, 'Calls event.preventDefault');
  t.assert(wrapper.vm.addClient.calledWithMatch(t.sinon.match({ name, email })), 'Calls addClient with name and email');
  t.end();
});
