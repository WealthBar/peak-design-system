import { fetchClients } from '@/lib/api';

export default {
  state: {
    clients: [],
  },

  getters: { },

  mutations: {
    updateClients(state, clients) {
      state.clients = clients;
    },
  },

  actions: {
    async fetchClients({ commit }) {
      const clients = await fetchClients.execute();
      commit('updateClients', clients);
    },
  },
};
