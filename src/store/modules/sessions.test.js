import Vuex from 'vuex';
import test from 'tape';
import { login, logout } from '@/lib/api';
import sessions from './sessions';

const store = new Vuex.Store({
  modules: { sessions },
});

test('Session module provides session state', (t) => {
  t.assert('currentUser' in store.state.sessions, 'Provides currentUser state.');
  t.end();
});

test('Session module mutations', (t) => {
  const newUser = { id: 1 };
  store.commit('setCurrentUser', newUser);
  t.equal(store.state.sessions.currentUser, newUser, 'setCurrentUser assigns a user to currentUser.');
  t.end();
});

test('Session module getters', (t) => {
  store.commit('setCurrentUser', null);
  t.equal(store.getters.isLoggedIn, false, 'isLoggedIn returns false if there is no current session user.');

  const newUser = { id: 1 };
  store.commit('setCurrentUser', newUser);
  t.equal(store.getters.currentUser, newUser, 'currentUser return current session user.');
  t.equal(store.getters.isLoggedIn, true, 'isLoggedIn returns true if there is a current session user.');
  t.end();
});

test('Session module actions', async (t) => {
  t.stub(login);
  t.stub(logout);

  store.commit('setCurrentUser', null);
  const user = { id: 1 };
  login.execute.resolves(user);
  const loginData = { email: 'email@wealthbar.test', password: 'password' };
  await store.dispatch('login', loginData);
  t.assert(login.execute.calledWith(loginData), 'login.execute was called with loginData.');
  t.assert(store.getters.isLoggedIn, 'Login successful.');
  t.equal(store.getters.currentUser, user, 'Login sets the currentUser.');

  await store.dispatch('logout');
  t.assert(logout.execute.called, 'logout.execute was called.');
  t.not(store.getters.isLoggedIn, 'Logout successful.');
  t.equal(store.getters.currentUser, null, 'Logout unsets the currentUser.');

  t.end();
});
