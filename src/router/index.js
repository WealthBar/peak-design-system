import Router from 'vue-router';
import routes from '@/views/routes';
import installPlugins from './plugins';

const router = new Router({
  mode: 'history',
  routes,
});

installPlugins(router);

export default router;
