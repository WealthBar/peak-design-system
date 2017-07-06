<template>
  <section class="home">
    <h1>WealthBar Vue Starter Kit</h1>
    <Login></Login>
  </section>
</template>

<script>
import { Login } from '@/lib/components';
import store from '@/store';

export default {
  path: '/',
  name: 'Home',
  beforeRouteEnter(to, from, next) {
    if (store.getters.isLoggedIn) return next('/clients');
    next();
  },

  data() {
    return {
      msg: 'Something else',
    };
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
