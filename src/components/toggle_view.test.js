import { shallow } from 'avoriaz';
import test from 'tape';
import toggleView from './toggle_view';

test('components/toggleView props', (t) => {
  const wrapper = shallow(toggleView, {
    propsData: { units: 'px' },
  });
  t.equal(wrapper.vm.$props.units, 'px', 'returns unit selected');
  t.end();
});
