<template>
  <article class="container">
    <h1>Layout</h1>
  </article>
</template>

<script>
export default {
  async beforeRouteEnter(to, from, next) {
    next('/layout/card');
  },
};
</script>
