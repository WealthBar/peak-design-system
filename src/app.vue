<template>
  <body>
    <banner></banner>
    <login v-if="isLoginDisplayed"></login>
    <router-view id="app" v-if="!isLoginDisplayed"></router-view>
  </body>
</template>

<script>
import { login, banner } from '@/components';
import { mapGetters } from '@/lib/vue';

export default {
  name: 'app',
  computed: {
    ...mapGetters(['isLoggedIn']),
    isLoginDisplayed() {
      return this.$route.meta.requiresAuth === true && this.isLoggedIn === false;
    },
  },
  components: { login, banner },
};
</script>

<style lang="scss">
  @import 'style.scss';
</style>
