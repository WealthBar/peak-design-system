<template>
  <main class="home">
    <article>
      <img class="logo" src="~@//assets/logo.svg"> 

      <h1>WealthBar Vue Starter Kit</h1>
      <h2>This is a title header</h2>
      <h3>This is a subheader</h3>
      <h4>This is a minor header</h4>
      <h5>This is a large body copy</h5>
      <hr/>
      <p>
        This is basic body copy</br>
        <strong>This is bold body copy</strong></br>
        <em>This is subtle body copy</em></br>
        <small>This is small body copy</small>
      </p>
    </article>
    <footer>
      <router-link to="/components">Components</router-link>
    </footer>
  </main>
</template>

<script>

export default {
  head: {
    title: 'WealthBar Starter',
  },
};
</script>

<style scoped>
 main {
   max-width: 32em;
   margin: auto;
 }
</style>
