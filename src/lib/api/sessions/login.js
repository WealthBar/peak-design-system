import caller from '@/lib/api/rest/caller';
import { AuthError } from '@/lib/utils/errors';

/* istanbul ignore next */
export default {
  async execute(loginData) {
    /* istanbul ignore next: development data */
    if (process.env.DEMO) {
      if (loginData.password === 'password') {
        return { id: 1, firstName: 'Demo', lastName: 'User', email: loginData.email };
      }
      throw new AuthError('Wrong password');
    }
    return caller.post('/sessions', {
      email: loginData.email,
      password: loginData.password,
    });
  },
};
