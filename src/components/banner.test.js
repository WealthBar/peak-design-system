import { shallow } from 'avoriaz';
import test from 'tape';
import banner from './banner';

test('logo is rendered', (t) => {
  const wrapper = shallow(banner);
  const element = wrapper.find('.logo');
  t.equal(element.length, 1, 'should be displayed');
  t.end();
});

test('menu toggle', (t) => {
  const wrapper = shallow(banner);
  wrapper.vm.$emit = t.spy();
  wrapper.vm.menuToggle();
  t.assert(wrapper.vm.$emit.calledWithMatch(t.sinon.match('menu')), 'emits the menu event');
  t.end();
});

test('search toggle', (t) => {
  const wrapper = shallow(banner);
  wrapper.vm.$emit = t.spy();
  wrapper.vm.searchToggle();
  t.assert(wrapper.vm.$emit.calledWithMatch(t.sinon.match('search')), 'emits the search event');
  t.end();
});
