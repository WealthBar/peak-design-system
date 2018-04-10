import { shallow } from 'avoriaz';
import test from 'tape';
import nav from './nav';

test('views/nav', (t) => {
  const wrapper = shallow(nav);
  t.equal(wrapper.hasClass('logo'), true, 'has logo in nav');
  t.end();
});
