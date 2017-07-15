export function parseName(path) {
  const name = path.toLowerCase()
    // Remove starting ./
    .replace(/^\.\//, '')
    // Parameters
    .replace(/\/_(\w+)(\/|\.vue$)/, '/:$1/')
    // Remove file extension and 'index'
    .replace(/(index)?\.vue$/, '')
    // Remove trailing '/'
    .replace(/\/$/, '');
    // Replace beginning '/'
  if (name === '') return 'root';
  return name;
}

export function parsePathTemplate(path) {
  const template = path.toLowerCase()
    // Remove starting ./
    .replace(/^\.\//, '')
    // Conditional parameters
    .replace(/\/_(\w+).vue$/, '/:$1?')
    // Required parameters
    .replace(/\/_(\w+)\//, '/:$1/')
    // Remove file extension and 'index'
    .replace(/(index)?\.vue$/, '')
    // Remove trailing '/'
    .replace(/\/$/, '');
    // Replace beginning '/'
  return `/${template}`;
}

export function hasChildren(path) {
  return !path.match(/(index)\.vue$/i) &&
   !path.match(/\/_(\w+).vue$/i);
}

export function generateRoute(key, component) {
  const route = { ...component.route, component };
  if (!('name' in route)) route.name = parseName(key);
  if (!('path' in route)) route.path = parsePathTemplate(key);
  if (hasChildren(key)) route.children = [];
  return route;
}

export function nestRoutes([route, ...rest]) {
  let routes = rest;
  if (route == null) return [];
  if (route.children) {
    const children = routes.filter(r => r.path.startsWith(route.path));
    routes = routes.filter(r => !r.path.startsWith(route.path));
    if (children.length === 0) {
      delete route.children;
    } else {
      route.children = nestRoutes(children);
    }
  }
  return [route, ...nestRoutes(routes)];
}

export function generateRoutes(context) {
  const routes = context.keys().map((key) => {
    const component = context(key).default;
    return generateRoute(key, component);
  });
  return nestRoutes(routes);
}

const r = require.context('./', true, /\.vue$/);
export default generateRoutes(r);
