import Vue from 'vue';
import Vuex from 'vuex';

import { sessions } from './modules';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    sessions,
  },
});

