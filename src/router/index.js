import Vue from 'vue';
import Router from 'vue-router';
import routes from '@/views/routes';
import installPlugins from './plugins';

console.log(routes);

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes,
});

installPlugins(router);

export default router;
