<template>
    <form @submit.prevent="submit($event)">
      <span class="login-error-message" v-if="loginErrorMessage">{{loginErrorMessage}}</span>
      <label for="email">Email</label>
      <input type="email" id="email" v-model="email">
      <label for="password">Password</label>
      <input type="password" id="password" v-model="password">
      <button type="submit">Login</button>
    </form>
</template>

<script>
import { mapActions, mapGetters } from '@/lib/vue';

export default {

  data() {
    return {
      email: '',
      password: '',
    };
  },

  computed: {
    ...mapGetters(['loginErrorMessage']),
  },

  methods: {
    ...mapActions(['login']),

    async submit() {
      await this.login({ email: this.email, password: this.password });
    },
  },
};
</script>


<style lang="scss" scoped>
  @import 'base/variables';

  form {
    padding: $spacing-large 0;
    max-width: 32rem;
    margin: auto;
  }
</style>

