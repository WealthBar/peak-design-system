import auth from './auth';
import redirect from './redirect';

function installRouterPlugins(router) {
  auth(router);
  redirect(router);
}

export { auth, redirect, installRouterPlugins };
