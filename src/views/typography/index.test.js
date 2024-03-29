import { shallow } from 'avoriaz';
import test from 'tape';
import { stubHelpers } from '@/lib/vue';
import typography from './index';


test('views/typography unitValue', (t) => {
  stubHelpers(t.stub, typography);

  t.test('calculates rem units', (t) => {
    typography.computed.getSelectedUnit.returns('rem');
    typography.computed.getSelectedScreen.returns('desktop');
    const wrapper = shallow(typography);
    t.equal(wrapper.vm.unitValue(16), '1rem', 'sets the correct value');
    t.end();
  });

  t.test('calculates px units', (t) => {
    typography.computed.getSelectedUnit.returns('px');
    typography.computed.getSelectedScreen.returns('desktop');
    const wrapper = shallow(typography);
    t.equal(wrapper.vm.unitValue(16), '16px', 'sets the correct value');
    t.end();
  });
});
