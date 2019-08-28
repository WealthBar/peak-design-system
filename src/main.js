import Vue from 'vue';
import Router from 'vue-router';
import Meta from 'vue-meta';
import VuePrism from 'vue-prism';


import app from './app';
import router from './router';
import store from './store';

/* istanbul ignore next: bootstrap code */
(function bootstrap() {
  Vue.use(Router);
  Vue.use(Meta, { keyName: 'head' });
  Vue.use(VuePrism);
  Vue.config.productionTip = false;

  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    router,
    store,
    render: h => h(app),
  });
}());
