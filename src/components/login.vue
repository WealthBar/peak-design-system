<template>
  <form id="login" @submit.prevent="submit($event)">
    <span v-if="loginErrorMessage">{{loginErrorMessage}}</span>
    <label for="email">email</label>
    <input type="email" id="password" v-model="email">
    <label for="password">password</label>
    <input type="password" id="password" v-model="password">
    <button type="submit">Login</button>
  </form>
</template>

<script>
import { mapActions } from '@/lib/vue';
import { AuthError } from '@/lib/utils/errors';

export default {

  data() {
    return {
      email: '',
      password: '',
      loginErrorMessage: null,
    };
  },

  methods: {
    ...mapActions(['login']),

    async submit() {
      try {
        await this.login({ email: this.email, password: this.password });
        if (this.$route.query.redirect) {
          this.$router.push(this.$route.query.redirect);
        } else {
          this.$router.push('/clients');
        }
      } catch (exception) {
        if (AuthError.ofType(exception)) {
          this.loginErrorMessage = exception.message;
          return;
        }
        throw exception;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
  @import 'base/variables';

  form {
    max-width: 32rem;
    margin: auto;
  }
</style>
