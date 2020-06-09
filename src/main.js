import Vue from 'vue';
import Router from 'vue-router';
import Meta from 'vue-meta';

import prism from 'prismjs';
import app from './app';
import router from './router';
import store from './store';


/* istanbul ignore next: bootstrap code */
(function bootstrap() {
  Vue.use(Router);
  Vue.use(Meta, { keyName: 'head' });
  Vue.config.productionTip = false;
  Vue.mixin({ mounted() { prism.highlightAll(); } });

  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    router,
    store,
    render: h => h(app),
  });
}());
