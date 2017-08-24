import { shallow } from 'avoriaz';
import test from 'tape';
import modal from './modal';
import testTemplate from './test_template';

test('views/modal not rendered by default', (t) => {
  const wrapper = shallow(modal);
  const element = wrapper.find('.modal-overlay');
  t.equal(element.length, 0, 'should not be displayed');
  t.end();
});

test('views/modal rendered when it is displayed', (t) => {
  const wrapper = shallow(modal, { propsData: { displayed: true } });
  const element = wrapper.find('.modal-overlay');
  t.equal(element.length, 1, 'should be displayed');
  t.end();
});

test('views/modal the slot title is empty by default', (t) => {
  const wrapper = shallow(modal, { propsData: { displayed: true } });
  const element = wrapper.find('h2 > *');
  t.equal(element.length, 0, 'no title by default');
  t.end();
});

test('views/modal the slot title is filled when provided', (t) => {
  const wrapper = shallow(modal, {
    propsData: { displayed: true },
    slots: { title: testTemplate },
  });
  const element = wrapper.find('h2');
  t.equal(element.length, 1, 'the title is the expected one');
  t.end();
});

test('views/modal close', (t) => {
  const wrapper = shallow(modal);
  wrapper.vm.$emit = t.spy();
  wrapper.vm.close();
  t.assert(wrapper.vm.$emit.calledWithMatch(t.sinon.match('close')), 'the component emits the close event');
  t.end();
});
