import Vuex from 'vuex';
import test from 'tape';
import { fetchClients } from '@/lib/api';
import clients from './clients';

const store = new Vuex.Store({
  modules: { clients },
});

test('Clients module state', (t) => {
  t.assert('clients' in store.state.clients, 'Provides clients state.');
  t.end();
});

test('Clients module mutations', (t) => {
  const data = [{ id: 1 }];
  store.commit('updateClients', data);
  t.equal(store.state.clients.clients, data, 'updateClients assigns all clients.');
  t.end();
});

test('Clients module actions', async (t) => {
  const data = [{ id: 1 }];

  t.stub(fetchClients);
  fetchClients.execute.resolves(data);
  await store.dispatch('fetchClients');
  t.equal(store.state.clients.clients, data, 'Fetch all clients.');
  t.assert(fetchClients.execute.called, 'fetchClients.execute was called.');
  t.equal(store.state.clients.clients, data, 'fetchClients updates the client list.');
  t.end();
});
