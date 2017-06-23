import { mount } from 'avoriaz';
import test from 'tape';
import Logo from './Hello';

test('renders .hello', (t) => {
  const wrapper = mount(Logo);
  const element = wrapper.find('.hello');
  t.equal(element.length, 1, 'should have exactly one .hello element');
  t.end();
});

test('renders .hello', (t) => {
  const wrapper = mount(Logo);
  const element = wrapper.find('h1');
  t.assert(wrapper.vm.msg, 'should have a msg');
  t.equal(wrapper.vm.msg, element[0].text(), 'h1 should render msg');
  t.end();
});
