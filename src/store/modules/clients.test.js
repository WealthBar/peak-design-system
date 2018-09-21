import Vuex from 'vuex';
import test from 'tape';
import { fetchClients, createClient } from '@/lib/api';
import { AuthError } from '@/lib/utils/errors';
import clients from './clients';
import sessions from './sessions';

const store = new Vuex.Store({
  modules: { clients, sessions },
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
  const data = { id: 1, email: 'test@test.test', firstName: 'First', lastName: 'Last' };
  store.commit('addClient', data);
  t.assert(store.state.clients.clients.find(c => c === data), 'adds client to clients.');
  t.end();
});

test('store/modules/clients action fetchClients', async (t) => {
  const data = {
    data: {
      data: [
        { id: 1, email: 'em@ail.com', firstName: 'first', lastName: 'last' },
      ],
    },
  };

  t.stub(fetchClients);
  fetchClients.execute.resolves(data);
  await store.dispatch('fetchClients');
  t.assert(fetchClients.execute.calledOnce, 'fetchClients.execute was called.');
  t.equal(store.state.clients.clients.length, 1, 'the client list has as many clients than the data.');
  t.deepEqual(store.state.clients.clients[0], { id: 1, email: 'em@ail.com', firstName: 'first', lastName: 'last' }, 'the client matches the one provided.');

  const clientsData = [];
  store.state.clients.clients = clientsData;
  fetchClients.execute.reset();
  fetchClients.execute.throws(new AuthError('auth error'));
  await store.dispatch('fetchClients');
  t.assert(fetchClients.execute.calledOnce, 'fetchClients.execute was called.');
  t.equal(store.state.clients.clients, clientsData, 'Clients are unchanged.');

  const error = new Error('random error');
  store.state.clients.clients = clientsData;
  fetchClients.execute.reset();
  fetchClients.execute.throws(error);
  try {
    await store.dispatch('fetchClients');
    t.fail('an exception should have been thrown');
  } catch (exception) {
    t.pass('an exception is thrown');
    t.equal(exception, error, 'the exception is the expected one');
  }

  t.assert(fetchClients.execute.calledOnce, 'fetchClients.execute was called.');
  t.equal(store.state.clients.clients, clientsData, 'Clients are unchanged.');

  t.end();
});

test('store/modules/clients action addClient', async (t) => {
  const data = { email: 'test@test.test', firstName: 'First', lastName: 'Last' };

  t.stub(createClient);
  createClient.execute.resolves(data);
  await store.dispatch('addClient', data);
  t.assert(createClient.execute.calledWith(t.sinon.match(data)), 'createClient.execute was called with the client data.');
  t.assert(store.state.clients.clients.find(c => c.email === data.email), 'adds new client to client list.');

  const clientsData = [];
  store.state.clients.clients = clientsData;
  createClient.execute.reset();
  createClient.execute.throws(new AuthError('auth error'));
  await store.dispatch('addClient', data);
  t.assert(createClient.execute.calledOnce, 'createClient.execute was called.');
  t.equal(store.state.clients.clients, clientsData, 'Clients are unchanged.');

  const error = new Error('random error');
  store.state.clients.clients = clientsData;
  createClient.execute.reset();
  createClient.execute.throws(error);
  try {
    await store.dispatch('addClient', data);
    t.fail('an exception should have been thrown');
  } catch (exception) {
    t.pass('an exception is thrown');
    t.equal(exception, error, 'the exception is the expected one');
  }

  t.assert(createClient.execute.calledOnce, 'createClient.execute was called.');
  t.equal(store.state.clients.clients, clientsData, 'Clients are unchanged.');

  t.end();
});
