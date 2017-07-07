export default {
  async execute() {
    /* istanbul ignore next: development data */
    if (process.env.DEMO) {
      const data = await import('./fetch.data');
      return data.default;
    }
    /* istanbul ignore next: not yet implemented */
    console.warn('fetchClients not yet implemented.');
  },
};
