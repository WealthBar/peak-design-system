import { shallow } from 'avoriaz';
import test from 'tape';
import contextMenu from './context_menu';
import testTemplate from './test_template';

test('views/contextMenu position validator', (t) => {
  t.equal(contextMenu.props.position.validator(''), false, 'empty string is an invalid value');

  let value = 'middle';
  t.equal(contextMenu.props.position.validator(value), false, `${value} is an invalid value`);

  value = 'top-left';
  t.equal(contextMenu.props.position.validator(value), true, `${value} is a valid value`);

  value = 'top-right';
  t.equal(contextMenu.props.position.validator(value), true, `${value} is a valid value`);

  value = 'right';
  t.equal(contextMenu.props.position.validator(value), true, `${value} is a valid value`);

  value = 'bottom-left';
  t.equal(contextMenu.props.position.validator(value), true, `${value} is a valid value`);

  value = 'bottom-right';
  t.equal(contextMenu.props.position.validator(value), true, `${value} is a valid value`);

  value = 'left';
  t.equal(contextMenu.props.position.validator(value), true, `${value} is a valid value`);

  t.end();
});

test('views/contextMenu not rendered by default', (t) => {
  const wrapper = shallow(contextMenu);
  const element = wrapper.find('.context-menu');
  t.equal(element.length, 0, 'should not be displayed');
  t.end();
});

test('views/contextMenu rendered when it is displayed', (t) => {
  const wrapper = shallow(contextMenu, { propsData: { displayed: true } });
  const element = wrapper.find('.context-menu');
  t.equal(element.length, 1, 'should be displayed');
  t.end();
});

test('views/contextMenu the slot title is empty by default', (t) => {
  const wrapper = shallow(contextMenu, { propsData: { displayed: true } });
  const element = wrapper.find('.title > *');
  t.equal(element.length, 0, 'no title by default');
  t.end();
});

test('views/contextMenu the slot title is filled when provided', (t) => {
  const wrapper = shallow(contextMenu, {
    propsData: { displayed: true },
    slots: { title: testTemplate },
  });
  const element = wrapper.find('.title > #test');
  t.equal(element.length, 1, 'the title is the expected one');
  t.end();
});

test('views/contextMenu close', (t) => {
  const wrapper = shallow(contextMenu);
  wrapper.vm.$emit = t.spy();
  wrapper.vm.close();
  t.assert(wrapper.vm.$emit.calledWithMatch(t.sinon.match('close')), 'the component emits the close event');
  t.end();
});
