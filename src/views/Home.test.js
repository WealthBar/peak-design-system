import { mount } from 'avoriaz';
// import store from '@/store';
import test from 'tape';
import Home from './Home';

test('views/Home renders root element', (t) => {
  const wrapper = mount(Home);
  const element = wrapper.find('.home');
  t.equal(element.length, 1, 'should have exactly one root element');
  t.end();
});

test('views/Home redirects to /clients when logged in', (t) => {
  const route = {};
  const next = t.spy();

  Home.isLoggedIn = false;
  Home.beforeRouteEnter(route, route, next);
  t.assert(next.calledWithExactly(), 'beforeRouteEnter calls next when not logged in');

  Home.isLoggedIn = true;
  Home.beforeRouteEnter(route, route, next);
  t.assert(next.calledWithExactly('/clients'), 'beforeRouteEnter calls next with /clients route when logged in');
  t.end();
});
