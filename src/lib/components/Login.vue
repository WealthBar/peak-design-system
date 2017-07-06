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
import { mapGetters } from 'vuex';

export default {
  name: 'login',

  computed: {
    ...mapGetters(['isLoggedIn', 'loginError']),
  },

  data() {
    return {
      email: 'wealthbar@wealthbar.test',
      password: '',
    };
  },

  methods: {
    async submit(event) {
      event.preventDefault();
      await this.$store.dispatch('login', { email: this.email, password: this.password });
      if (this.isLoggedIn) { this.$router.push('/clients'); }
    },
  },
};
</script>

<style scoped>
</style>
