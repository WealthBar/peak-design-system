
export default {
  state: {
    units: ['rem', 'px'],
    selected: 'px',
  },

  getters: {
    getSelectedUnit(state) {
      return state.selected;
    },
    getUnits(state) {
      return state.units;
    },
  },

  mutations: {
    updateSelectedUnit(state, unit) {
      state.selected = unit;
    },
  },

  actions: {
    setUnit({ commit }, unit) {
      commit('updateSelectedUnit', unit);
    },
  },
};
