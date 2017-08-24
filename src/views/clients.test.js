import { shallow } from 'avoriaz';
import test from 'tape';
import { stubComponents, stubHelpers } from '@/lib/vue';
import Clients from './clients';

stubComponents(Clients, 'router-link', 'router-view');

test('views/clients renders root element', (t) => {
  stubHelpers(t.stub, Clients);
  const wrapper = shallow(Clients);
  const element = wrapper.find('.clients');
  t.equal(element.length, 1, 'should have exactly one root element');
  t.end();
});

test('views/clients submit', async (t) => {
  stubHelpers(t.stub, Clients);
  const event = { preventDefault: t.spy() };
  const firstName = 'First';
  const lastName = 'Last';
  const email = 'test@test.test';
  const wrapper = shallow(Clients, { data: { firstName, lastName, email } });
  await wrapper.vm.submit(event);
  t.equal(wrapper.vm.firstName, '', 'Clears first name field after submit.');
  t.equal(wrapper.vm.lastName, '', 'Clears last name field after submit.');
  t.equal(wrapper.vm.email, '', 'Clears email field after submit.');
  t.assert(event.preventDefault.called, 'Calls event.preventDefault');
  t.assert(Clients.methods.addClient.calledWithMatch(t.sinon.match({ firstName, lastName, email })),
    'Calls addClient with first name, last name and email');
  t.end();
});

test('modal close', (t) => {
  stubHelpers(t.stub, Clients);
  const wrapper = shallow(Clients);
  wrapper.vm.closeModal();
  t.equal(wrapper.vm.modalDisplay, false, 'sets modal state to closed');
  t.end();
});

test('add client', (t) => {
  stubHelpers(t.stub, Clients);
  const wrapper = shallow(Clients);
  wrapper.vm.openModal();
  t.equal(wrapper.vm.modalDisplay, true, 'sets modal state to open');
  t.end();
});
