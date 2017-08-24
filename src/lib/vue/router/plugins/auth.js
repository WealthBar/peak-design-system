import store from '@/store';

export async function checkAuth(to, from, next) {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (requiresAuth) {
    try {
      await store.dispatch('fetchSession');
    } catch (exception) {
      // TODO reporting (in Vuex?)
    }
  }
  next();
}

export default function (router) {
  router.beforeEach(checkAuth);
}
