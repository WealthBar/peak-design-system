<template>
  <section class="example">
    <h1>Context Menu</h1>
    <form>

      <label for="position">Desktop position</label>
      <select id="position" v-model="positionData" placeholder="Position">
        <option value="top-left">Top-Left</option>
        <option value="top-right">Top-Right</option>
        <option value="right">Right</option>
        <option value="bottom-left">Bottom-Left</option>
        <option value="bottom-right">Bottom-Right</option>
        <option value="left">Left</option>
      </select>

      <label for="content">Content</label>
      <textarea id="content" v-model="contentData" placeholder="Content"></textarea>

    </form>

    <context-menu :displayed="displayedData" :position="positionData" @close="close">
      <button slot="anchor" @click="toggle">Toggle</button>
      <!-- <template slot="title">test</template> -->
      <ul slot="content" v-html="contentData"></ul>
    </context-menu>
  </section>
</template>

<script>
import { contextMenu } from '@/components';
import animations from '@/lib/utils/animations';

export default {
  data() {
    return {
      displayedData: false,
      positionData: 'bottom-right',
      anchorData: '<button type="button">Toggle</button>',
      titleData: 'Title',
      contentData:
`<li><a @click="animateMenu" @animationend="unanimateMenu" href="#">Context menu item</a></li>
<li><a @click="animateMenu" @animationend="unanimateMenu" href="#">Another longer context menu</a></li>
<li><a @click="animateMenu" @animationend="unanimateMenu" href="#">Regular sized one</a></li>
<li><a @click="animateMenu" @animationend="unanimateMenu" href="#">Small one</a></li>
<li><a @click="animateMenu" @animationend="unanimateMenu" href="#">And a last one for fun</a></li>`,
    };
  },
  methods: {
    animateMenu(event) {
      animations.flashOrFill(event);
      setTimeout(() => {
        this.close();
      }, 200);
    },
    unanimateMenu: animations.unflashOrFill,
    toggle() {
      this.displayedData = !this.displayedData;
    },
    close() {
      this.displayedData = false;
    },
  },
  components: { 'context-menu': contextMenu },
};
</script>

<style lang="scss" scoped>

@import 'base/variables';

.context-menu-list {
  li {
    border-top: 1px solid $grey3;
    white-space: nowrap;
  }

  li > * {
    display: block;
    padding: 0.7rem 0;
  }

  li a {
    color: $black;
    text-decoration: none;
  }

  li a:hover {
    color: $black;
  }

  @media #{$sw-medium} {
    li {
      border-top: none;
      border-radius: 0.2rem;
    }

    li a:hover {
      background-color: rgba($brand-light, 0.1);
      color: $brand;
    }

    li > * {
      padding: 0.3rem 0.2rem;
    }
  }
}
</style>
