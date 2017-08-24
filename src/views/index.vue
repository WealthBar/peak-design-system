<template>
  <main class="home">
    <footer>
      <router-link to="/components">Components</router-link>
    </footer>
  </main>
</template>

<script>
import { mapGetters } from '@/lib/vue';

export default {
  head: {
    title: 'Login | WealthBar Advisors',
  },

  route: {
    meta: {
      redirect(vm) {
        if (vm.isLoggedIn) return '/clients';
      },
    },
  },

  computed: {
    ...mapGetters(['isLoggedIn']),
  },

};
</script>
