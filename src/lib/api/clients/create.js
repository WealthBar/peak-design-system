let id = 100;

export default {
  async execute({ email, firstName, lastName }) {
    id += 1;
    return { id, email, firstName, lastName };
  },
};
