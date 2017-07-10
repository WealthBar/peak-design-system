import { mount } from 'avoriaz';
import test from 'tape';
import Home from './Home';

test('views/Home renders root element', (t) => {
  const wrapper = mount(Home);
  const element = wrapper.find('.home');
  t.equal(element.length, 1, 'should have exactly one root element');
  t.end();
});

test('views/Home meta.redirect', (t) => {
  let result = Home.meta.redirect({ isLoggedIn: false });
  t.equal(result, undefined, 'Returns nothing if not logged in.');

  result = Home.meta.redirect({ isLoggedIn: true });
  t.equals(result, '/clients', 'returns /clients path if logged in.');
  t.end();
});
