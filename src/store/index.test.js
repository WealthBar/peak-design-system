import test from 'tape';
import { requestWrapper, store } from './index';

// State
test('The correct default state should be returned', (t) => {
  t.equal(store.state.user, null, 'The user is null by default');
  t.end();
});

// Mutations
test('The user should be set when it gets set', (t) => {
  const currentState = {};
  const user = {};
  store.mutations.setUser(currentState, user);
  t.equal(currentState.user, user, 'The user is the expected one');
  t.end();
});

test('The user should be overriden if another one is already set', (t) => {
  const user1 = {};
  const user2 = {};
  const currentState = { user: user1 };
  t.equal(currentState.user, user1, 'The user is the first one');
  store.mutations.setUser(currentState, user2);
  t.equal(currentState.user, user2, 'The user is replaced');
  t.end();
});

test('The user should be unset when it gets unset', (t) => {
  const currentState = { user: {} };
  store.mutations.unsetUser(currentState);
  t.equal(currentState.user, null, 'The user is null');
  t.end();
});

// Actions
test('Logging in should call the service and commit', (t) => {
  t.plan(8);

  const mockData = {};
  const mockUser = {};

  requestWrapper.override({
    call(entityName, methodName, data) {
      t.pass('Call executed');
      t.equal(entityName, 'user', 'The right entity is called');
      t.equal(methodName, 'logIn', 'The right method is called');
      t.equal(data, mockData, 'The right data is sent');
      return new Promise((resolve) => {
        resolve(mockUser);
      });
    },
  });

  const context = {
    commit: (key, value) => {
      t.pass('Commit executed');
      t.equal(key, 'setUser', 'The correct mutation is called');
      t.equal(value, mockUser, 'The correct object is sent');
    },
  };

  store.actions.logUserIn(context, mockData)
  .then(() => t.pass('Promise executed'))
  .catch(error => t.fail(`Promised failed ${error}`));
});

test('Exceptions when loggin in should not commit', (t) => {
  t.plan(3);

  const context = {
    commit: () => {
      t.fail('Commit should not be called');
    },
  };

  requestWrapper.override({
    call() {
      t.pass('Call executed');
      return new Promise((resolve, reject) => {
        reject(new Error('random exception'));
      });
    },
  });

  store.actions.logUserIn(context)
  .then(() => t.fail('An exception is expected'))
  .catch((error) => {
    t.pass('An error is caught');
    t.equal(error.message, 'random exception', 'The thrown exception is caught');
  });
});
