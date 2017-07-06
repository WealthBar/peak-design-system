import { login, logout } from '@/lib/api';

export default {
  state: {
    currentUser: null,
  },

  getters: {
    isLoggedIn(state) {
      return state.currentUser != null;
    },

    currentUser(state) {
      return state.currentUser;
    },
  },

  mutations: {
    setCurrentUser(state, user) {
      state.currentUser = user;
    },
  },

  actions: {
    async login({ commit }, loginData) {
      const user = await login.execute(loginData);
      commit('setCurrentUser', user);
    },

    async logout({ commit }) {
      await logout.execute();
      commit('setCurrentUser', null);
    },
  },
};
