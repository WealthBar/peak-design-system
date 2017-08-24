import { fetchSession, login, logout } from '@/lib/api';
import { AuthError } from '@/lib/utils/errors';

export default {
  state: {
    loginErrorMessage: null,
    currentUser: null,
    wasSessionChecked: false,
  },

  getters: {
    loginErrorMessage(state) {
      return state.loginErrorMessage;
    },
    isLoggedIn(state) {
      return state.currentUser != null;
    },
    currentUser(state) {
      return state.currentUser;
    },
  },

  mutations: {
    setLoginErrorMessage(state, loginErrorMessage) {
      state.loginErrorMessage = loginErrorMessage;
    },
    setCurrentUser(state, user) {
      state.currentUser = user;
    },
    checkSession(state) {
      state.wasSessionChecked = true;
    },
  },

  actions: {
    async fetchSession({ commit, state }) {
      const wasSessionChecked = state.wasSessionChecked;
      if (!wasSessionChecked) {
        try {
          commit('checkSession', true);
          const user = await fetchSession.execute();
          commit('setCurrentUser', user);
        } catch (exception) {
          /*
            if the user is not logged in, it will fail silently
            and the user will need to log in when necessary
          */
          if (!AuthError.ofType(exception)) {
            throw exception;
          }
        }
      }
    },

    async login({ commit }, loginData) {
      try {
        const user = await login.execute(loginData);
        commit('checkSession', true);
        commit('setCurrentUser', user);
        commit('setLoginErrorMessage', null);
      } catch (exception) {
        if (AuthError.ofType(exception)) {
          commit('setLoginErrorMessage', exception.message);
          return;
        }
        throw exception;
      }
    },

    async logout({ commit }) {
      try {
        await logout.execute();
        commit('setCurrentUser', null);
      } catch (exception) {
        if (AuthError.ofType(exception)) {
          commit('setCurrentUser', null);
          return;
        }
        throw exception;
      }
    },
  },
};
