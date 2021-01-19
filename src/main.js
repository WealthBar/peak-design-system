import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import prism from 'prismjs';
import app from './app';
// import store from './store';

import routes from './views/routes';

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

/* istanbul ignore next: bootstrap code */
createApp(app)
  .use(router)
  // .use(store)
  .mixin({ mounted() { prism.highlightAll(); } })
  .mount('#app');
// (function bootstrap() {
//   Vue.use(Router);
//   Vue.use(Meta, { keyName: 'head' });
//   Vue.config.productionTip = false;
//   Vue.mixin({ mounted() { prism.highlightAll(); } });

//   /* eslint-disable no-new */
//   new Vue({
//     el: '#app',
//     router,
//     store,
//     render: h => h(app),
//   });
// }());
