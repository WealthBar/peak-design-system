import Vue from 'vue';
import Router from 'vue-router';
import * as views from '@/views';
import NotFound from '@/views/NotFound';
import installPlugins from './plugins';

Vue.use(Router);

const routes = [];

Object.values(views).forEach((view) => {
  routes.push({
    path: view.path,
    name: view.name,
    meta: view.meta,
    component: view,
  });
});

routes.push({
  path: '*',
  name: 'Not Found',
  component: NotFound,
});

const router = new Router({
  mode: 'history',
  routes,
});

installPlugins(router);

export default router;
