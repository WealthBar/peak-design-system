<template>
  <div class="main-container">
    <section class="intro">
      <div class="intro-content">
        <h1>Peak</h1>
        <p>Use this design system to craft beautiful, scalable, and consistent experiences for Canadians investing in their futures.</p>
      </div>
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

<style lang="scss">
  @import 'style.scss';

  .main-container {
    display: flex;
    height: 100%;
    background-image: url('../assets/homepage-bkg.jpg');
    background-size: cover;
    background-repeat: no-repeat;
  }

  .intro {
    margin: 28rem 8rem;
  }

  .intro-content {
    padding-right: 20rem;

    h1 {
      font-size: 3rem;
    }

    p {
      font-size: 1.125rem;
    }
  }

</style>
