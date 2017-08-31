import { shallow } from 'avoriaz';
import test from 'tape';
import { stubComponents, stubHelpers } from '@/lib/vue';
import App from './app';

stubComponents(App, 'router-link', 'router-view');

test('views/App toggleMenu', (t) => {
  stubHelpers(t.stub, App);
  const $route = { meta: { requiresAuth: true } };
  const wrapper = shallow(App, { globals: { $route } });
  const state = wrapper.vm.menuDisplay;
  wrapper.vm.toggleMenu();
  t.equal(wrapper.vm.menuDisplay, !state, 'triggers the menu toggle');
  t.end();
});
