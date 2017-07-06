let id = 100;

export default {
  async execute({ email, name }) {
    console.warn('fetchClients not yet implemented.');
    id += 1;
    return { id, email, name };
  },
};
