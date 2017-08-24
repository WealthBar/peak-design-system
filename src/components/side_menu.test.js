import { shallow } from 'avoriaz';
import test from 'tape';
import sideMenu from './side_menu';
import testTemplate from './test_template';

test('views/contextMenu the slot content is filled when provided', (t) => {
  const wrapper = shallow(sideMenu, {
    propsData: { opened: true },
    slots: { content: testTemplate },
  });
  const element = wrapper.find('.side-menu #test');
  t.equal(element.length, 1, 'the content of the menu is the expected one');
  t.end();
});

test('views/contextMenu close', (t) => {
  const wrapper = shallow(sideMenu);
  wrapper.vm.$emit = t.spy();
  wrapper.vm.close();
  t.assert(wrapper.vm.$emit.calledWithMatch(t.sinon.match('close')), 'the component emits the close event');
  t.end();
});
