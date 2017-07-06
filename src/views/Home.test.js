import { mount } from 'avoriaz';
import test from 'tape';
import Home from './Home';

test('renders root element', (t) => {
  const wrapper = mount(Home);
  const element = wrapper.find('.home');
  t.equal(element.length, 1, 'should have exactly one root element');
  t.end();
});
