import sinon from 'sinon';
import test from 'tape';
import sessions from './sessions';

test('Session module provides session state', (t) => {
  t.assert('currentUser' in sessions.state, 'Provides currentUser state.');
  t.assert('loggedIn' in sessions.state, 'Provides loggedIn state.');
  t.end();
});

test('Session module mutations', (t) => {
  const state = { currentUser: null };
  const newUser = { id: 1 };
  sessions.mutuations.setCurrentUser(state, newUser);
  t.equal(state.currentUser, newUser, 'setCurrentUser assigns a user to currentUser.');
  t.end();
});

test('Session module login action', async (t) => {
  const context = { commit: sinon.spy() };
  const user = { id: 1 };
  const loginService = { execute: sinon.stub().resolves(user) };
  const loginData = { email: 'email@wealthbar.test', password: 'password' };
  await sessions.actions.login(context, loginData, loginService);

  t.assert(context.commit.calledWith('setCurrentUser', user), 'commits setCurrentUser with user data.');
  t.end();
});

test('Session module logout action', async (t) => {
  const context = { commit: sinon.spy() };
  const loginService = { execute: sinon.stub().resolves() };
  await sessions.actions.logout(context, loginService);

  t.assert(context.commit.calledWith('setCurrentUser', null), 'commits setCurrentUser with null.');
  t.end();
});
