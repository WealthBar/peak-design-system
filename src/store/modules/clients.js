import { fetchClients, createClient } from '@/lib/api';
import { AuthError } from '@/lib/utils/errors';

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
      try {
        const fetchedClients = await fetchClients.execute();
        const clients = fetchedClients.data.data.map(
          ({
            id, email, first_name, last_name,
          }) => ({
            id, email, firstName: first_name, lastName: last_name,
          }));
        commit('updateClients', clients);
      } catch (exception) {
        if (AuthError.ofType(exception)) {
          return;
        }
        throw exception;
      }
    },

    async addClient({ commit }, { email, firstName, lastName }) {
      try {
        const result = await createClient.execute({ email, firstName, lastName });
        commit('addClient', result);
      } catch (exception) {
        if (AuthError.ofType(exception)) {
          return;
        }
        throw exception;
      }
    },
  },
};
