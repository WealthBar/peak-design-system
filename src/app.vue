<template>
  <div>
    <ul>
      <li><router-link to="/typography">Type</router-link></li>
    </ul>
  <router-view></router-view>
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
