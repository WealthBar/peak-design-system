import { shallow } from 'avoriaz';
import { stubHelpers } from '@/lib/vue';
import test from 'tape';
import password from './password';

test('renders root element', (t) => {
  stubHelpers(t.stub, password);

  const wrapper = shallow(password);
  const element = wrapper.find('form');
  t.equal(element.length, 1, 'should have exactly one root element');
  t.end();
});
