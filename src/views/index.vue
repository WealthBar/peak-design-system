<template>
  <section class="home">
    <h1>WealthBar Vue Starter Kit</h1>
    <Login></Login>
  </section>
</template>

<script>
import { Login } from '@/lib/components';
import { mapGetters } from '@/store';

export default {
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

  components: { Login },
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
