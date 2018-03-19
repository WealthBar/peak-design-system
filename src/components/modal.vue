<template>
  <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
    <div v-if="displayed" class="modal-overlay" :class="{ 'fullscreen': fullscreen }" @click.self="close">
      <dialog class="modal-box animate" @click.self.prevent>
        <header :class="{ 'title': title }">
          <button class="modal-close" @click.self.capture="close">
            <svgicon name="close" alt="close"/>
          </button>
          <div class="title-block">
            <h2 v-if="title">{{title}}</h2>
            <slot class="title-action" name="title-action"/>
          </div>
        </header>

        <section class="body">
          <slot name="body" />
        </section>

        <footer class="modal-footer">
          <slot name="footer" />
        </footer>
      </dialog>

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
    fullscreen: {
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

dialog {
  background-color: white;
  position: relative;
  height: 100%;
  max-height: 100vh;
  width: 100%;
  overflow: auto;
  padding: 0;
  z-index: 101;
  border: none;

  @media #{$sw-medium} {
    border-radius: 0.5rem;
    height: auto;
    width: 32rem;
  }
}

header {
  padding: $spacing-small $spacing-small 0;
  position: relative;
  min-height: $spacing*2;

  &.title {
    border-bottom: 1px solid $grey;
    padding: $spacing-small;

    .modal-close { top: $spacing; }
    .title-block { justify-content: flex-start; }
  }
}

.title-block {
  flex: 2 0 0;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items: center;

  h2 {
    text-transform: capitalize;
    flex-grow: 2;
    text-align: center;
  }
}

.modal-close {
  color: $black;
  position: absolute;
  top: $spacing-small;
  left: $spacing-small;
  background: none;
  box-shadow: none;
  padding: 0;
  height: 1rem;
  line-height: 1rem;
  cursor: pointer;

  svg {
    fill: $darkgrey;
  }

  &:hover, &:active {
    svg { fill: $black; }
  }
}

section { padding: $spacing-small; }

footer {
  padding: $spacing-small;
  border-top: 1px solid $grey;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;

  &:empty { display: none; }
}

// -- FullScreen Settings

.fullscreen {
  @media #{$sw-medium} {
    .modal-box {
      width: 100%;
      height: 100%;
      border-radius: 0;
    }

    section,
    footer {
      margin: auto;
      padding: $spacing;
      max-width: 32rem;
    }

    header .title-block {
      margin: auto;
      padding: 0 $spacing;
      max-width: 32rem;
      justify-content: space-between;

      h2 {
        text-align: left;
        padding: 0;
      }
    }
  }

  @media #{$sw-large} {
    section,
    footer {
      padding: $spacing;
      max-width: 52.25rem;
    }

    header .title-block {
      // padding: 0 $spacing;
      max-width: 52.25rem;
    }
  }
}

// -- Animation

.v-enter-to dialog {
  animation-name: slideInUp;
  animation-duration: 0.3s;
}

.v-leave-to dialog {
  animation-name: slideOutDown;
  animation-duration: 0.3s;
}

</style>
