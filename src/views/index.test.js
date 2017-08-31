import { shallow } from 'avoriaz';
import { stubHelpers } from '@/lib/vue';
import test from 'tape';
import home from './index.vue';

test('views/index renders root element', (t) => {
  stubHelpers(t.spy, home);
  const wrapper = shallow(home);
  const element = wrapper.find('.home');
  t.equal(element.length, 1, 'should have exactly one root element');
  t.end();
});
