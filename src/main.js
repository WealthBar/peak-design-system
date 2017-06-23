import Vue from 'vue';
import App from './App';
import router from './router';

/* istanbul ignore next: bootstrap code */
(function bootstrap() {
  Vue.config.productionTip = false;

  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    router,
    render: h => h(App),
  });
}());
