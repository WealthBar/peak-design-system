/* istanbul ignore next */
export default {
  async execute(loginData) {
    /* istanbul ignore next: not yet implemented */
    if (process.env.DEMO) {
      if (loginData.password === 'password') return { id: 1, name: 'Demo User', email: loginData.email };
      throw Error('Incorrect email or password.');
    }
    /* istanbul ignore next: not yet implemented */
    console.warn(`Login not yet implemented. Received: ${loginData}`);
  },
};
