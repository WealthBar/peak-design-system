import caller from '@/lib/api/rest/caller';
import { AuthError } from '@/lib/utils/errors';

export default {
  async execute() {
    /* istanbul ignore next: development data */
    if (process.env.DEMO) {
      throw new AuthError();
    }
    return caller.get('/sessions');
  },
};
