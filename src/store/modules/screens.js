
export default {
  state: {
    screens: ['Desktop', 'Mobile'],
    selectedScreen: 'Desktop',
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
      console.log(selectedScreen, 'actions');
      commit('updateSelectedScreen', selectedScreen);
    },
  },
};
