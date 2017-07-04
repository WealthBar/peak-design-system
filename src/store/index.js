import Vue from 'vue';
import Vuex from 'vuex';

import { sessions } from './modules';

Vue.use(Vuex);

const state = {};

export default new Vuex.Store({
  state,
  modules: {
    sessions,
  },
});
