import Vuex from 'vuex';
import test from 'tape';
import { fetchSession, login, logout } from '@/lib/api';
import { AuthError } from '@/lib/utils/errors';
import sessions from './sessions';

const store = new Vuex.Store({
  modules: { sessions },
});

const defaultState = Object.assign({}, store.state.sessions);

test('Session module provides session state', (t) => {
  t.assert('loginErrorMessage' in store.state.sessions, 'Provides loginErrorMessage state.');
  t.assert('currentUser' in store.state.sessions, 'Provides currentUser state.');
  t.assert('wasSessionChecked' in store.state.sessions, 'Provides wasSessionChecked state.');
  t.end();
});

test('Session module mutations', (t) => {
  const loginErrorMessage = 'error';
  store.commit('setLoginErrorMessage', loginErrorMessage);
  t.equal(store.state.sessions.loginErrorMessage, loginErrorMessage, 'setLoginErrorMessage assigns a value to loginErrorMessage.');

  const newUser = { id: 1 };
  store.commit('setCurrentUser', newUser);
  t.equal(store.state.sessions.currentUser, newUser, 'setCurrentUser assigns a user to currentUser.');

  t.equal(store.state.sessions.wasSessionChecked, false, 'the session has not been checked yet.');
  store.commit('checkSession');
  t.equal(store.state.sessions.wasSessionChecked, true, 'the session has been checked.');
  t.end();
});

test('Session module getters', (t) => {
  store.state.sessions = Object.assign({}, defaultState);

  t.equal(store.getters.loginErrorMessage, null, 'loginErrorMessage returns null by default.');
  t.equal(store.getters.isLoggedIn, false, 'isLoggedIn returns false if there is no current session user.');

  const newUser = { id: 1 };
  store.commit('setCurrentUser', newUser);
  t.equal(store.getters.currentUser, newUser, 'currentUser return current session user.');
  t.equal(store.getters.isLoggedIn, true, 'isLoggedIn returns true if there is a current session user.');
  t.end();
});

test('Session module actions', async (t) => {
  store.state.sessions = Object.assign({}, defaultState);

  t.stub(fetchSession);
  t.stub(login);
  t.stub(logout);

  const user = { id: 1 };

  fetchSession.execute.resolves(user);

  store.state.sessions.wasSessionChecked = true;

  await store.dispatch('fetchSession');
  t.assert(fetchSession.execute.notCalled, 'fetchSession.execute was not called.');
  t.ok(store.state.sessions.wasSessionChecked, 'The session was checked');

  store.state.sessions = Object.assign({}, defaultState);
  fetchSession.execute.resetHistory();

  await store.dispatch('fetchSession');
  t.assert(fetchSession.execute.called, 'fetchSession.execute was called.');
  t.ok(store.state.sessions.wasSessionChecked, 'The session was checked');
  t.equal(store.getters.currentUser, user, 'Fetching the session sets the user.');

  store.state.sessions = Object.assign({}, defaultState);
  fetchSession.execute.resetHistory();
  const randomException = new Error('random exception');
  fetchSession.execute.throws(randomException);

  try {
    await store.dispatch('fetchSession');
    t.fail('an exception was expected');
  } catch (exception) {
    t.pass('an exception is thrown');
    t.equal(exception, randomException, 'the thrown exception is the expected one');
  }
  t.assert(fetchSession.execute.called, 'fetchSession.execute was called.');
  t.ok(store.state.sessions.wasSessionChecked, 'The session was checked');
  t.equal(store.getters.currentUser, null, 'The user should be unchanged if there is an exception');

  store.state.sessions = Object.assign({}, defaultState);
  const authException = new AuthError('auth exception');
  fetchSession.execute.reset();
  fetchSession.execute.throws(authException);

  try {
    await store.dispatch('fetchSession');
    t.pass('no exception is thrown');
  } catch (exception) {
    t.fail('no exception expected');
  }
  t.assert(fetchSession.execute.called, 'fetchSession.execute was called.');
  t.ok(store.state.sessions.wasSessionChecked, 'The session was checked');
  t.equal(store.getters.currentUser, null, 'The user should be unchanged if there is an exception');

  store.state.sessions = Object.assign({}, defaultState);
  store.state.sessions.loginErrorMessage = 'error';

  login.execute.resolves(user);
  const loginData = { email: 'email@wealthbar.test', password: 'password' };
  await store.dispatch('login', loginData);
  t.assert(login.execute.calledWith(loginData), 'login.execute was called with loginData.');
  t.ok(store.state.sessions.wasSessionChecked, 'The session was checked');
  t.equal(store.state.sessions.currentUser, user, 'Login sets the currentUser.');
  t.assert(store.getters.isLoggedIn, 'Login successful.');
  t.equal(store.state.sessions.loginErrorMessage, null, 'The error message is reset.');

  store.state.sessions = Object.assign({}, defaultState);
  store.state.sessions.loginErrorMessage = 'error';
  login.execute.reset();
  login.execute.throws(authException);

  await store.dispatch('login', loginData);
  t.assert(login.execute.calledWith(loginData), 'login.execute was called with loginData.');
  t.not(store.state.sessions.wasSessionChecked, 'The session was not checked');
  t.equal(store.state.sessions.currentUser, null, 'The user is still unset.');
  t.assert(!store.getters.isLoggedIn, 'Login unsuccessful.');
  t.equal(store.state.sessions.loginErrorMessage, 'auth exception', 'The error message is extracted from the error.');

  store.state.sessions = Object.assign({}, defaultState);
  store.state.sessions.loginErrorMessage = 'error';
  login.execute.reset();
  login.execute.throws(randomException);

  try {
    await store.dispatch('login', loginData);
    t.fail('an exception was expected');
  } catch (exception) {
    t.pass('an exception is thrown');
    t.equal(exception, randomException, 'the thrown exception is the expected one');
  }

  t.assert(login.execute.calledWith(loginData), 'login.execute was called with loginData.');
  t.notOk(store.state.sessions.wasSessionChecked, 'The session was not checked');
  t.equal(store.state.sessions.currentUser, null, 'The user is still unset.');
  t.notOk(store.getters.isLoggedIn, 'Login unsuccessful.');
  t.equal(store.state.sessions.loginErrorMessage, 'error', 'The error message is unchanged.');

  store.state.sessions = Object.assign({}, defaultState);
  store.state.sessions.currentUser = {};
  await store.dispatch('logout');
  t.assert(logout.execute.called, 'logout.execute was called.');
  t.notOk(store.getters.isLoggedIn, 'Logout successful.');
  t.equal(store.state.sessions.currentUser, null, 'Logout unsets the currentUser.');

  store.state.sessions = Object.assign({}, defaultState);
  store.state.sessions.currentUser = user;
  logout.execute.reset();
  logout.execute.throws(authException);
  await store.dispatch('logout');
  t.assert(logout.execute.called, 'logout.execute was called.');
  t.notOk(store.getters.isLoggedIn, 'Logout successful.');
  t.equal(store.state.sessions.currentUser, null, 'Logout unsets the currentUser.');

  store.state.sessions = Object.assign({}, defaultState);
  store.state.sessions.currentUser = user;
  logout.execute.reset();
  logout.execute.throws(randomException);
  try {
    await store.dispatch('logout');
    t.fail('an exception was expected');
  } catch (exception) {
    t.pass('an exception is thrown');
    t.equal(exception, randomException, 'the thrown exception is the expected one');
  }
  t.assert(logout.execute.called, 'logout.execute was called.');
  t.ok(store.getters.isLoggedIn, 'Logout unsuccessful.');
  t.equal(store.state.sessions.currentUser, user, 'The currentUser is still set.');

  t.end();
});
