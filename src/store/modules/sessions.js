import { Login, Logout } from '@/lib/api';

export default {
  state: {
    currentUser: null,
    loggedIn: false,
  },

  mutuations: {
    setCurrentUser(state, user) {
      state.currentUser = user;
      state.loggedIn = (user != null);
    },
  },

  actions: {
    async login({ commit }, loginData, service = Login) {
      const user = await service.execute(loginData);
      commit('setCurrentUser', user);
    },

    async logout({ commit }, service = Logout) {
      await service.execute();
      commit('setCurrentUser', null);
    },
  },
};
