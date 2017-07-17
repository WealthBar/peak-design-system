import test from 'tape';
import {
  parsePathTemplate,
  parseName,
  generateRoute,
  buildRoutes,
} from './build_routes';

test('parsePathTempalte', (t) => {
  const expectations = {
    './index.vue': '/',
    './clients.vue': '/clients',
    './clients/_id.vue': '/clients/:id?',
    './clients/_name.vue': '/clients/:name?',
    './clients/_id/index.vue': '/clients/:id',
    './clients/_name/index.vue': '/clients/:name',
    './clients/_id/accounts.vue': '/clients/:id/accounts',
    './my_account.vue': '/my_account',
    './my-account.vue': '/my-account',
  };

  Object.entries(expectations).forEach(([path, expected]) => {
    const template = parsePathTemplate(path);
    t.equal(template, expected, `parses '${path}' as '${expected}'`);
  });

  t.end();
});

test('parseName', (t) => {
  const expectations = {
    './index.vue': 'root',
    './clients.vue': 'clients',
    './clients/_id.vue': 'clients/:id',
    './clients/_name.vue': 'clients/:name',
    './clients/_id/index.vue': 'clients/:id',
    './clients/_name/index.vue': 'clients/:name',
    './clients/_id/accounts.vue': 'clients/:id/accounts',
    './my_account.vue': 'my_account',
    './my-account.vue': 'my-account',
  };

  Object.entries(expectations).forEach(([path, expected]) => {
    const template = parseName(path);
    t.equal(template, expected, `parses '${path}' as '${expected}'`);
  });

  t.end();
});

test('generateRoute', (t) => {
  const component = {};
  let route = generateRoute('index.vue', component);

  t.equal(route.path, '/', 'Generates a path for the route if there is no route.path.');
  t.equal(route.name, 'root', 'Generates a name for the route if there is no route.name.');
  t.equal(route.component, component, 'Sets the component for the route.');

  component.route = { path: '/path', name: 'name' };
  route = generateRoute('index.vue', component);

  t.equal(route.path, '/path', 'Uses component route.path if there is one');
  t.equal(route.name, 'name', 'Uses component route.name if there is one.');
  t.end();
});

test('buildRoutes', (t) => {
  const context = t.stub();
  const component = {};
  context.returns({ default: component });
  context.keys = () => ['./index.vue', './other.vue'];
  const routes = buildRoutes(context);
  t.equal(routes.length, 2, 'creates 2 routes for two keys in the context');
  t.end();
});
