import Vue from 'vue';
import App from './App';
import router from './router';

import store from './store';

/* istanbul ignore next: bootstrap code */
(function bootstrap() {
  Vue.config.productionTip = false;

  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
  });
}());
