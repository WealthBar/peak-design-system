import { shallow } from 'avoriaz';
import test from 'tape';
import typography from './typography';

test('views/typography data', (t) => {
  const wrapper = shallow(typography);
  t.equal(wrapper.data().title, 'Typography', 'title set on page');
  t.end();
});
