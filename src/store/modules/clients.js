import { fetchClients } from '@/lib/api';

export default {
  state: {
    clients: [],
  },

  getters: {
    allClients(state) {
      return state.clients;
    },
  },

  mutations: {
    updateClients(state, clients) {
      state.clients = clients;
    },

    addClient(state, client) {
      state.clients.push(client);
    },
  },

  actions: {
    async fetchClients({ commit }) {
      const clients = await fetchClients.execute();
      commit('updateClients', clients);
    },

    async addClient({ commit }, { email, name }) {
      commit('addClient', { email, name });
    },
  },
};
