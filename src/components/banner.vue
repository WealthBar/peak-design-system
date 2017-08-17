<template>
  <header role="banner">
    <button id="menu-toggle" @click.self="menuToggle">
      <svgicon name="menu" height="1.25rem" width="1.25rem" alt="Menu Icon"></svgicon><span>Menu</span>
    </button>
    <img class="logo" src="~@/assets/logo.svg">
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
    height: 3rem;
    border-bottom: 1px solid $grey2;
    @media #{$sw-medium} { height: 4.5rem; }
  }

  img {
    height: 1rem;
    @media #{$sw-medium} { height: 1.375rem; }
  }

  button {
    background: none;
    color: $black;
    border: none;
    box-shadow: none;
    font-size: 1rem;

    span {
      display: none;
      padding-left: $spacing-small;
    }

    @media #{$sw-medium} {
      height: 1.25rem;
      .svg-icon { vertical-align: top; }
      span { display: inline-block; }
    }
  }
</style>
  
