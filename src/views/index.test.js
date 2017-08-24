import { shallow } from 'avoriaz';
import { stubHelpers } from '@/lib/vue';
import test from 'tape';
import home from './index.vue';

test('views/index renders root element', (t) => {
  stubHelpers(t.spy, home);
  const wrapper = shallow(home);
  const element = wrapper.find('.home');
  t.equal(element.length, 1, 'should have exactly one root element');
  t.end();
});

test('views/index route redirect', (t) => {
  const redirect = home.route.meta.redirect;
  let result = redirect({ isLoggedIn: false });
  t.equal(result, undefined, 'Returns nothing if not logged in.');

  result = redirect({ isLoggedIn: true });
  t.equals(result, '/clients', 'returns /clients path if logged in.');
  t.end();
});
