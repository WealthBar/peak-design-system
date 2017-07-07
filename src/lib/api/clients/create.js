let id = 100;

export default {
  async execute({ email, name }) {
    id += 1;
    return { id, email, name };
  },
};
