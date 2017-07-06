import Vue from 'vue';
import Router from 'vue-router';
import { Home, NotFound } from '@/views';

/* istanbul ignore next: installing Vue plugin */
Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '*',
      name: '404',
      component: NotFound,
    },
  ],
});
