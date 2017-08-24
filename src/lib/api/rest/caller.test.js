import test from 'tape';
import { responseHandler, errorHandler } from './caller';

test('lib/api/rest/caller the response handler should forward the response', (t) => {
  const response = {};
  t.equal(responseHandler(response), response, 'the response is forwarded');
  t.end();
});

test('lib/api/rest/caller the error handler gets the right message', async (t) => {
  const errorMessage = 'test error';
  let response = {
    response: {
      status: 500,
      data: {
        message: errorMessage,
      },
    },
  };

  try {
    await errorHandler(response);
    t.fail('an error should have been thrown');
  } catch (error) {
    t.equal(error.message, errorMessage, 'the message is the expected one');
  }

  response = {
    message: errorMessage,
  };

  try {
    await errorHandler(response);
    t.fail('an error should have been thrown');
  } catch (error) {
    t.equal(error.message, errorMessage, 'the message is the expected one');
  }

  t.end();
});

test('lib/api/rest/caller the error handler throws an error by default', async (t) => {
  const errorMessage = 'test error';
  const response = {
    response: {
      status: 500,
      data: {
        message: errorMessage,
      },
    },
  };

  try {
    await errorHandler(response);
    t.fail('an error should have been thrown');
  } catch (error) {
    t.equal(error.code, 'UNKNOWN', 'the code is the expected one');
    t.equal(error.message, errorMessage, 'the message is the expected one');
  }

  t.end();
});

test('lib/api/rest/caller when getting an authentication error, the error handler throws an authentication exception', async (t) => {
  const errorMessage = 'test error';
  const response = {
    config: {
      url: '/profile',
    },
    response: {
      status: 401,
      data: {
        message: errorMessage,
      },
    },
  };

  try {
    await errorHandler(response);
    t.fail('an error should have been thrown');
  } catch (error) {
    t.equal(error.code, 'FAILED_LOGIN', 'the code is the expected one');
    t.equal(error.message, errorMessage, 'the message is the expected one');
  }

  t.end();
});
