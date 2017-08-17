<template>
  <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
    <div v-if="displayed" class="modal-overlay" @click.self="close"> 
      <article class="modal-box animate" @click.self.prevent="close">
        <header :class="{ title: title }">
          <button class="modal-close" @click="close">
            <svgicon name="close" alt="close"/>
          </button>
          <h2>{{title}}</h2>
          <slot class="header-action" name="header-action"/>
        </header>

        <section class="modal-body"> 
          <slot name="modal-body" />
        </section>
        
        <footer class="modal-footer"> 
          <slot name="modal-footer" />
        </footer>

      </article>

    </div>
  </transition>
</template>
<script>

import '@/lib/icons/close';

export default {
  props: {
    displayed: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '',
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

  .modal-overlay {
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    background-color: rgba(0, 178, 152, 0.85);
    display: flex;
    align-items: center;
    justify-content: center;
    animation-duration: 0.3s;
  }

  .modal-box {
    background-color: white;
    position: relative;
    height: 100%;
    width: 100%;
    overflow: auto;
    padding: 0;
    z-index: 101;

    @media #{$sw-medium} {
      border-radius: 0.5rem;
      height: auto;
      position: fixed;
      width: 432px;
    }

    header {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      align-items: center;
      flex: 1 0 auto;
      padding: $spacing-small;
      position: relative;
      min-height: $spacing-large;

      &.title { border-bottom: 1px solid $grey2; }

      h2 {
        padding-left: $spacing*1.5;
        flex-grow: 2;
        text-align: center;
      }
    }

    section { padding: $spacing-small; }

    footer {
      padding: $spacing-small;
      border-top: 1px solid $grey2;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }
  }

  .modal-overlay.v-enter-to .modal-box {
    animation-name: slideInUp;
    animation-duration: 0.3s;
  }

  .modal-overlay.v-leave-to .modal-box {
    animation-name: slideOutDown;
    animation-duration: 0.3s;
  }

  .modal-close {
    position: absolute;
    top: $spacing-small;
    left: 0;
    color: $black;
    background: none;
    box-shadow: none;
    cursor: pointer;

    svg {
      fill: $grey3;
    }

    &:hover, &:active {
      svg { fill: $black; }
    }
  }
</style>
