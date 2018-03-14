<template>
  <transition name="open-menu">
    <div class="side-menu-overlay" v-if="opened" @click="close">
      <div class="side-menu" @click.stop>
        <!-- <button class="menu-close" @click="close">
          <svgicon name="close" alt="close"/>
        </button> -->
        <nav>
          <slot name="content" />
        </nav>
      </div>
    </div>
  </transition>
</template>
<script>

export default {
  props: {
    opened: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    close() {
      this.$emit('close');
    },
  },
};

</script>

<style lang="scss">
  @import 'base/variables';

  .side-menu {
    nav {
      min-width: auto;
    }

    .side-menu-content,
    .side-menu-bottom-content {
      li {
        border: 0;
        padding: 0;
      }

      a {
        display: block;
        width: 100%;
        padding: $spacing-small $spacing-large;
        text-decoration: none;
      }

      hr {
        width: 100%;
        margin: $spacing-large - $spacing-med 0;
      }
    }

    .side-menu-content {
      a {
        color: $black;
      }

      a:hover {
        background-color: $brand-lighter;
        color: $brand;
      }
    }

    .side-menu-bottom-content {
      position: absolute;
      width: 100%;
      bottom: $spacing-large - $spacing-med;
    }
  }
</style>

<style lang="scss" scoped>
  @import 'base/variables';

  .menu-close {
    display: block;
    margin: 0 0 0 auto;
    color: $black;
    background: none;
    box-shadow: none;
    padding: $spacing-med $spacing;
    height: auto;
    line-height: $button-height;
    cursor: pointer;

    svg {
      fill: $grey3;
    }

    &:hover, &:active {
      svg { fill: $black; }
    }
  }

  .side-menu-overlay {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    pointer-events: auto;
    z-index: 150;
  }

  .open-menu-enter.side-menu-overlay,
  .open-menu-leave-to.side-menu-overlay {
    pointer-events: none;
  }

  .side-menu {
    position: relative;
    width: calc(100% - #{$spacing-huge});
    height: 100%;
    padding: 0 0 $spacing-large - $spacing-med 0;
    background-color: $white;
    color: $black;
    box-shadow: 4px 0 40px rgba(0, 0, 0, 0.24);
    display: flex;
    flex-direction: column;
    transform: none;
    will-change: transform;
    z-index: 160;
    pointer-events: auto;
    transition: transform 0.3s ease;
    font-size: $baseline-height;
  }

  @media #{$sw-medium} {
    .side-menu {
      width: 30%;
      max-width: 300px;
    }
  }

</style>
