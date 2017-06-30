import { Login, Logout } from '@/lib/api';

export const dependencies = { Login, Logout };

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
      const user = await Login.execute(loginData);
      commit('setCurrentUser', user);
    },

    async logout({ commit }) {
      await Logout.execute();
      commit('setCurrentUser', null);
    },
  },
};
