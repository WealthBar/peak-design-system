import test from 'tape';
import router from './index';

test('The router has view routes.', (t) => {
  const routes = router.options.routes;
  t.assert(Array.find(routes, r => r.name === 'Home'), 'Has the Home route');
  t.assert(Array.find(routes, r => r.name === 'Clients'), 'Has the Clients route');
  t.assert(Array.find(routes, r => r.name === 'Not Found'), 'Has the Not Found route');
  t.end();
});
