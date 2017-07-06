<template>
  <section class="login">
    <h3>Please Login</h3>
    <form @submit="submit($event)">
      <input type="email" placeholder="Email" v-model="email">
      <input type="password" placeholder="password" v-model="password">
      <button type="submit">Login</button>
    </form>
  </section>
</template>

<script>
export default {
  name: 'login',

  data() {
    return {
      email: 'test@wealthbar.test',
      password: '',
    };
  },

  methods: {
    submit(event) {
      event.preventDefault();
      this.$store.dispatch('login', { email: this.email, password: this.password });
    },
  },
};
</script>

<style scoped>
</style>
