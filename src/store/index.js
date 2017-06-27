import Vue from 'vue';
import Vuex from 'vuex';

import Wrapper from '../lib/utils/wrapper';

Vue.use(Vuex);

export const requestWrapper = new Wrapper();

export const store = {
  modules: {},
  state: {
    user: null,
  },
  mutations: {
    setUser(currentState, user) {
      currentState.user = user;
    },
    unsetUser(currentState) {
      currentState.user = null;
    },
  },
  actions: {
    logUserIn({ commit }, data) {
      return requestWrapper.get().call('user', 'logIn', data)
      .then(user => commit('setUser', user));
    },
  },
};

export const vuexStore = new Vuex.Store(store);
