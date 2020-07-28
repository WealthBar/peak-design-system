<template>
  <article class="container">
    <h1>Structure</h1>
  </article>
</template>

<script>
export default {
  async beforeRouteEnter(to, from, next) {
    next('/structure/containers');
  },
};
</script>
