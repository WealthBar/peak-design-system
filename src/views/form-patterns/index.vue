<template>
  <article class="container">
    <h1>Forms</h1>
  </article>
</template>

<script>
export default {
  async beforeRouteEnter(to, from, next) {
    next('/form-patterns/input');
  },
};
</script>
