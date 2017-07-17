import { fetchClients, createClient } from '@/lib/api';

export default {
  state: {
    clients: [],
  },

  getters: {
    allClients(state) {
      return state.clients;
    },

    getClient(state) {
      return id => state.clients.find(c => c.id === +id);
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
      const result = await createClient.execute({ email, name });
      commit('addClient', result);
    },
  },
};
