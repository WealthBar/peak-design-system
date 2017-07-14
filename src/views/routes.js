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

export function generateRoute(key, component) {
  const route = { ...component.route, component };
  if (!('name' in route)) route.name = parseName(key);
  if (!('path' in route)) route.path = parsePathTemplate(key);
  return route;
}

export function generateRoutes(context) {
  return context.keys().map((key) => {
    const component = context(key);
    return generateRoute(key, component);
  });
}

const r = require.context('./', true, /\.vue$/);
export default generateRoutes(r);
