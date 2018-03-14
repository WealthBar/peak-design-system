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

  main {
    margin: auto;
  }

  .logo {
    margin: 2rem 4rem;
  }

  .logo-area {
    display: flex;
    justify-content: center;
  }

  section.thirds {
    display: flex;
    width: 100%;
    align-items: flex-start;
    flex-direction: column;

    @media #{$sw-medium} {
      flex-direction: row;
    }

    > div {
      flex: 1 0 33%;
      padding: 0 1rem;
    }
  }

  p {
    font-size: 1rem;
    line-height: 1.25rem;
    &.one-three-eighths { line-height: 1.375rem; }
    &.one-seven-sixteenths { line-height: 1.4375rem; }
    &.one-half { line-height: 1.5rem; }
    &.one-five-eights { line-height: 1.625rem; }
    &.large { font-size: 1.125rem; }
    span { color: $brand; }
  }

</style>
