<template>
  <span class="context-container">
    <slot name="anchor"/>
    <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
      <div v-if="displayed" class="pop-up" :class="position">
        <span class="context-bg" @click="close"></span>
        <div class="context-menu">
          <span class="title"><slot name="title"/></span>
          <slot class="context-menu" name="content" />
        </div>
      </div>
    </transition>
  </span>
</template>
<script>

export default {
  props: {
    displayed: {
      type: Boolean,
      default: false,
    },
    position: {
      type: String,
      default: 'bottom-right',
      validator: value => (['top-left', 'top-right', 'right', 'bottom-left', 'bottom-right', 'left'].indexOf(value) > -1),
    },
  },
  methods: {
    close() {
      this.$emit('close');
    },
  },
};

</script>

<style lang="scss" scoped>

  @import 'base/variables';

  .context-bg {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 178, 152, 0.85);
    @media #{$sw-medium} { background: transparent; }
  }

  .context-container {
    display: inline-block;
    position: relative;
  }

  .pop-up {
    position: absolute;
    z-index: 10000;
    animation-duration: 0.3s;
    @media #{$sw-medium} {
      &.top-left {
        right: 0;
        bottom: 100%;
        margin-bottom: $spacing-med;
      }

      &.top-right {
        left: 0;
        bottom: 100%;
        margin-bottom: $spacing-med;
      }

      &.bottom-left {
        right: 0;
        top: 100%;
        margin-top: $spacing-med;
      }

      &.bottom-right {
        left: 0;
        top: 100%;
        margin-top: $spacing-med;
      }

      &.right {
        left: 100%;
        top: 0;
        margin-left: $spacing-med;
      }

      &.left {
        right: 100%;
        top: 0;
        margin-right: $spacing-med;
      }
    }
  }

  .context-menu {
    background-color: $white;
    border-radius: $spacing-tiny;
    margin: $spacing-small;
    padding: $spacing-small;
    border: 1px solid $grey;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    @media #{$sw-medium} {
      position: relative;
      bottom: none;
      left: none;
      margin: 0;
    }
  }

  // -- Animations -- //

  .fadeIn {
    animation-name: fadeIn;
    @media #{$sw-medium} {
      &.top-left, &.top-right { animation-name: fadeInUp; }
      &.right { animation-name: fadeInLeft; }
      &.bottom-left, &.bottom-right { animation-name: fadeInDown; }
      &.left { animation-name: fadeInRight; }
    }

    .context-menu {
      animation-duration: 0.3s;
      animation-fill-mode: both;
      animation-name: slideInUp;
      @media #{$sw-medium} { animation-name: none; }
    }
  }

  .fadeOut {
    animation-name: fadeOut;
    @media #{$sw-medium} {
      &.top-left, &.top-right { animation-name: fadeOutDown; }
      &.right { animation-name: fadeOutLeft; }
      &.bottom-left, &.bottom-right { animation-name: fadeOutUp; }
      &.left { animation-name: fadeOutRight; }
    }

    .context-menu {
      animation-duration: 0.3s;
      animation-fill-mode: both;
      animation-name: slideOutDown;
      @media #{$sw-medium} { animation-name: none; }
    }
  }
</style>
