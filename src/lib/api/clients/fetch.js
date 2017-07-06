export default {
  async execute() {
    if (process.env.NODE_ENV === 'development') {
      const data = await import('./fetch.data');
      return data.default;
    }
    console.warn('fetchClients not yet implemented.');
  },
};
