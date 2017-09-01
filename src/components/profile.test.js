import { shallow } from 'avoriaz';
import { stubHelpers } from '@/lib/vue';
import test from 'tape';
import profile from './profile';

test('renders root element', (t) => {
  stubHelpers(t.stub, profile);

  const wrapper = shallow(profile);
  const element = wrapper.find('form');
  t.equal(element.length, 1, 'should have exactly one root element');
  t.end();
});
