import { createApp } from 'vue';
import { createStore } from 'vuex';

import * as modules from './modules';

const state = {};

const store = createStore({
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

export default store;
