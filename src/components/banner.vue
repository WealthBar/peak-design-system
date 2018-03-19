<template>
  <header role="banner">
    <button id="menu-toggle" @click.self="menuToggle">
      <svgicon name="menu" height="1.25rem" width="1.25rem" alt="Menu Icon"></svgicon><span>Menu</span>
    </button>
    <router-link to="/"><img class="logo" src="~@/assets/logo.svg"></router-link>
    <button id="search-toggle" @click.self="searchToggle">
      <svgicon name="search" height="1.25rem" width="1.25rem" alt="Search Icon"></svgicon><span>Search</span>
    </button>

  </header>

</template>

<script>

import '@/lib/icons/menu';
import '@/lib/icons/search';

export default {
  methods: {
    menuToggle() {
      this.$emit('menu');
    },
    searchToggle() {
      this.$emit('search');
    },
  },
};
</script>

<style lang="scss" scoped>
  @import 'base/variables';

  header[role="banner"] {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: $spacing-large;
    border-bottom: 1px solid $grey;
    @media #{$sw-medium} { height: $spacing-huge; }
  }

  img { height: $baseline-height; }

  button {
    background: none;
    color: $black;
    border: none;
    box-shadow: none;

    span {
      display: none;
      padding-left: $spacing-small;
      @media #{$sw-medium} { display: inline-block; }
    }

    .svg-icon { vertical-align: top; }
  }
</style>
