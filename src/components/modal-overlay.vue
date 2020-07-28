<template>
  <div>
    <transition name="modal-fade">
      <div v-if="displayed" class="modal-overlay"></div>
    </transition>

    <transition name="modal-slide">
      <div v-if="displayed" class="modal-container" @click.self="close">
        <dialog tabindex="-1">
          <header>
            <h4>{{ title }}</h4>
            <button v-if="showExit" type="button" class="flat dark" @click="close">Exit</button>
          </header>

          <article>
            <slot name="article"></slot>
          </article>

          <footer>
            <slot name="footer"></slot>
          </footer>
        </dialog>
      </div>
    </transition>
  </div>
</template>

<script>
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

    showExit: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    close() {
      this.$emit('close');
    },

    HandleKeyboard(e) {
      const modal = document.querySelector('dialog');
      const modalHeight = modal.offsetHeight;
      const modalContentHeight = modal.scrollHeight;

      switch (e.key) {
        case 'Escape': e.preventDefault(); this.close(); break;
        case 'ArrowUp': e.preventDefault(); modal.scrollBy(0, -40); break;
        case 'ArrowDown': e.preventDefault(); modal.scrollBy(0, 40); break;
        case 'PageUp': e.preventDefault(); modal.scrollBy(0, -modalHeight - 32); break;
        case 'PageDown': e.preventDefault(); modal.scrollBy(0, modalHeight - 32); break;
        case 'Home': e.preventDefault(); modal.scrollTop = 0; break;
        case 'End': e.preventDefault(); modal.scrollTop = modalContentHeight; break;
        default: break;
      }
    },

    scrollByWheel(e) {
      const modal = document.querySelector('dialog');
      e.preventDefault();
      modal.scrollBy(e.deltaX, e.deltaY);
    },

    handleFocus(e) {
      const dialog = document.querySelector('dialog');
      const button = document.querySelector('dialog button');

      if (!dialog.contains(e.relatedTarget)) {
        button.focus();
      }
    },
  },

  watch: {
    displayed(displayed) {
      if (displayed) {
        document.addEventListener('keydown', this.HandleKeyboard);
        document.addEventListener('wheel', this.scrollByWheel, { passive: false });
        document.addEventListener('focusout', this.handleFocus);

        this.$nextTick(() => {
          const dialog = document.querySelector('dialog');
          dialog.scrollTop = 0;
          dialog.focus();
        });
      } else {
        document.removeEventListener('keydown', this.HandleKeyboard);
        document.removeEventListener('wheel', this.scrollByWheel);
        document.removeEventListener('focusout', this.handleFocus);
      }
    },
  },
};
</script>
