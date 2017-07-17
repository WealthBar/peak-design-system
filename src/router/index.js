import Router from 'vue-router';
import routes from '@/views/routes';
import { installRouterPlugins } from '@/lib/vue';

const router = new Router({
  mode: 'history',
  routes,
});

installRouterPlugins(router);

export default router;
