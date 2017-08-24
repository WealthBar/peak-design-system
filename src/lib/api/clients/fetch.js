import caller from '@/lib/api/rest/caller';

export default {
  async execute() {
    /* istanbul ignore next: development data */
    if (process.env.DEMO) {
      const data = await import('./fetch.data');
      return data.default;
    }
    return caller.get('/advisor_clients', { params: { limit: 99999 } });
  },
};
