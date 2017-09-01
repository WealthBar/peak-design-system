<template>
  <section>
    <login v-if="isLoginDisplayed"></login>
    <h2 v-if="!isLoginDisplayed">Logged IN!</h2>
  </section>
</template>

<script>
import { login } from '@/components';
import { mapGetters } from '@/lib/vue';

export default {
  components: { login },

  computed: {
    ...mapGetters(['isLoggedIn']),
    isLoginDisplayed() {
      return this.isLoggedIn === false;
    },
  },
};
</script>

<style>

</style>

