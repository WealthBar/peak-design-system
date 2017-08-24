import { shallow } from 'avoriaz';
import test from 'tape';
import toggleSwitch from './toggle_switch';

test('components/toggleSwitch label', (t) => {
  let wrapper = shallow(toggleSwitch);
  let textLabels = wrapper.find('.text-label');

  t.equal(textLabels.length, 0, 'no text label');

  const label = 'random label';
  wrapper = shallow(toggleSwitch, { propsData: { label } });
  textLabels = wrapper.find('.text-label');

  t.equal(textLabels.length, 1, 'one text label');
  t.equal(textLabels[0].text(), label, 'the label is correct');

  t.end();
});

test('components/toggleSwitch change method', (t) => {
  const wrapper = shallow(toggleSwitch);
  const input = wrapper.find('input')[0];

  wrapper.vm.$emit = t.spy();
  input.trigger('click');
  t.ok(wrapper.vm.$emit.calledWithMatch(t.sinon.match('checked')), 'the switch is checked');

  wrapper.vm.$emit.reset();
  input.trigger('click');
  t.ok(wrapper.vm.$emit.calledWithMatch(t.sinon.match('unchecked')), 'the switch is not checked');

  wrapper.vm.$emit.reset();
  input.trigger('click');
  t.ok(wrapper.vm.$emit.calledWithMatch(t.sinon.match('checked')), 'the switch is checked');
  t.end();
});
