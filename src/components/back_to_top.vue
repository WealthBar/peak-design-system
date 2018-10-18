<template>
  <transition name="back-to-top-fade">
    <button type="button" class="button icon" :style="`bottom:${this.bottom};right:${this.right};`" v-show="visible" @click="backToTop">
      <slot>{{ text }}</slot>
    </button>
  </transition>
</template>

<script>
import '@/lib/icons/arrow-up';


export default {
  name: 'BackToTop',
  props: {
    text: {
      type: String,
      default: 'Back to top',
    },
    visibleOffset: {
      type: [String, Number],
      default: 600,
    },
    right: {
      type: String,
      default: '30px',
    },
    bottom: {
      type: String,
      default: '40px',
    },
  },
  data() {
    return {
      visible: false,
    };
  },
  /**
   * Catch window scroll event
   * @return {void}
   */
  created() {
    const catchScroll = () => {
      this.visible = (window.pageYOffset > parseInt(this.visibleOffset, 10));
    };

    window.smoothscroll = () => {
      const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(window.smoothscroll);
        window.scrollTo(0, Math.floor(currentScroll - (currentScroll / 5)));
      }
    };

    window.onscroll = catchScroll;
  },
  methods: {
    /**
     * The function who make the magics
     * @return {void}
     */
    backToTop() {
      window.smoothscroll();
    },
  },
};
</script>

<style lang="scss" scoped>
  button {
    position: fixed;
    z-index: 1000;
  }

  .back-to-top-fade-enter-active, .back-to-top-fade-leave-active {
    transition: opacity 0.7s;
  }

  .back-to-top-fade-enter, .back-to-top-fade-leave-to {
    opacity: 0;
  }
</style>
