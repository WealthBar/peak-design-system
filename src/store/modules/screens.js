
export default {
  state: {
    screens: ['desktop', 'mobile'],
    selectedScreen: 'desktop',
  },

  getters: {
    getSelectedScreen(state) {
      return state.selectedScreen;
    },
    getScreens(state) {
      return state.screens;
    },
  },

  mutations: {
    updateSelectedScreen(state, screens) {
      state.selectedScreen = screens;
    },
  },

  actions: {
    setScreen({ commit }, selectedScreen) {
      commit('updateSelectedScreen', selectedScreen);
    },
  },
};
