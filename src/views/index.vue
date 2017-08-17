<template>
  <section class="home">
    <banner></banner>
    <login></login>
  </section>
</template>

<script>
import { banner, login } from '@/components';
import { mapGetters } from '@/lib/vue';

export default {
  head: {
    title: 'Vue Starter Kit | WealthBar',
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

  components: { banner, login },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
