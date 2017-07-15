import Vue from 'vue';
import Vuex from 'vuex';

import * as modules from './modules';

Vue.use(Vuex);

const state = {};

const store = new Vuex.Store({
  state,
  modules,
});

// Handle hot module reloading of store modules
/* istanbul ignore next: webpack hmr block */
if (module.hot) {
  module.hot.accept(['./modules'], () => {
    const newModules = require('./modules'); // eslint-disable-line global-require
    store.hotUpdate({ newModules });
  });
}

export { mapState, mapGetters, mapGetterMethods, mapMutations, mapActions } from './helpers';

export default store;
