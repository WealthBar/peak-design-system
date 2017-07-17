import store from '@/store';

export function checkAuth(to, from, next) {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const loggedIn = store.getters.isLoggedIn;
  if (requiresAuth && !loggedIn) return next({ path: '/', query: { redirect: to.fullPath } });
  next();
}

export default function (router) {
  router.beforeEach(checkAuth);
}
