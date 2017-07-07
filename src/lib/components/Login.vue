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
import { mapGetters, mapActions } from '@/store';
import router from '@/router';

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
    ...mapActions(['login']),

    async submit(event) {
      event.preventDefault();
      await this.login({ email: this.email, password: this.password });
      if (this.isLoggedIn) { router.push('/clients'); }
    },
  },
};
</script>

<style scoped>
</style>
