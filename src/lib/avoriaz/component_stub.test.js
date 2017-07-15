import test from 'tape';
import componentStub from './component_stub';

test('lib/avoriaz/componentStub creates component stubs by name', (t) => {
  const realComponent = {};
  const component = { components: { 'real-component': realComponent, 'override-component': realComponent } };

  componentStub(component, 'component-one', 'component-two', 'override-component');

  t.equal(component.components['component-one'].name, 'component-one', 'Adds a named stub.');
  t.equal(component.components['component-two'].name, 'component-two', 'Can add more than one stub.');
  t.equal(component.components['real-component'], realComponent, 'Will retain real components.');
  t.notEqual(component.components['override-component'], realComponent, 'Can override real components.');
  t.assert(!component.components['component-one'].rendered, 'ComponentStub.rendered is false before render() is called');
  component.components['component-one'].render(() => null);
  t.assert(component.components['component-one'].rendered, 'ComponentStub.rendered is true after render() is called');
  t.end();
});
