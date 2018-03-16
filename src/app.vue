<template>
  <div class="app-view">
    <nav>
      <ul>
        <li><router-link to="/typography">Type</router-link></li>
      </ul>
    </nav>
    <section>
      <router-view></router-view>
    </section>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        menuDisplayed: true,
      };
    },
  };
</script>

<style lang="scss">
  @import 'style.scss';
</style>
