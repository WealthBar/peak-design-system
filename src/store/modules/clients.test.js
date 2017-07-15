import Vuex from 'vuex';
import test from 'tape';
import { fetchClients, createClient } from '@/lib/api';
import clients from './clients';

const store = new Vuex.Store({
  modules: { clients },
});

test('Clients module state', (t) => {
  t.assert('clients' in store.state.clients, 'Provides clients state.');
  t.end();
});

test('Clients module getters', (t) => {
  const data = [{ id: 1 }];
  store.state.clients.clients = data;
  t.equal(store.getters.allClients, data, 'Provides allClients getter.');

  t.equal(store.getters.getClient(1), data[0], 'Provides getClient getter.');
  t.end();
});

test('store/modules/clients mutuation updateClients', (t) => {
  const data = [{ id: 1 }];
  store.commit('updateClients', data);
  t.equal(store.state.clients.clients, data, 'updateClients assigns all clients.');
  t.end();
});

test('store/modules/clients mutuation addClients', (t) => {
  const data = { id: 1, email: 'test@test.test', name: 'Name' };
  store.commit('addClient', data);
  t.assert(store.state.clients.clients.find(c => c === data), 'adds client to clients.');
  t.end();
});

test('store/modules/clients action fetchClients', async (t) => {
  const data = [{ id: 1 }];

  t.stub(fetchClients);
  fetchClients.execute.resolves(data);
  await store.dispatch('fetchClients');
  t.equal(store.state.clients.clients, data, 'Fetch all clients.');
  t.assert(fetchClients.execute.called, 'fetchClients.execute was called.');
  t.equal(store.state.clients.clients, data, 'fetchClients updates the client list.');
  t.end();
});

test('store/modules/clients action addClient', async (t) => {
  const data = { email: 'test@test.test', name: 'Name' };

  t.stub(createClient);
  createClient.execute.resolves(data);
  await store.dispatch('addClient', data);
  t.assert(createClient.execute.calledWith(t.sinon.match(data)), 'createClient.execute was called with the client data.');
  t.assert(store.state.clients.clients.find(c => c.email === data.email), 'adds new client to client list.');
  t.end();
});
