<template>
  <div class="main-container">
    <section class="intro">
      <h1>Peak</h1>
      <p>Use this design system to craft beautiful, scalable, and consistent experiences for Canadians investing in their futures.</p>
    </section>
  </div>
</template>

<script>

export default {
  head: {
    title: 'Peak Design System',
  },
};
</script>

<style scoped>
  .main-container {
    display: flex;
    height: 100%;
    background-image: url('../assets/homepage-bkg.jpg');
    background-size: cover;
    background-repeat: no-repeat;
  }

  .intro {
    width: 20rem;
    margin: 28rem 8rem;
  }

  .intro > h1 {
    font-size: 2.3rem;
  }

</style>
