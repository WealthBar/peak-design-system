export default {
  async execute(loginData) {
    if (process.env.NODE_ENV === 'development') {
      if (loginData.password === 'password') return { id: 1, name: 'Demo User', email: loginData.email };
      throw Error('Incorrect email or password.');
    }
    console.warn(`Login not yet implemented. Received: ${loginData}`);
  },
};
