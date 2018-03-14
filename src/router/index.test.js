import test from 'tape';
import router from './index';

test('The router has view routes.', (t) => {
  const routes = router.options.routes;
  t.assert(Array.find(routes, r => r.path === '/'), 'Has the root route');
  t.assert(Array.find(routes, r => r.path === '*'), 'Has the * route');
  t.end();
});
