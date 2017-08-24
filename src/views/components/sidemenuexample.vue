<template>
  <section class="example">
    <h1>Side Menu</h1>
    <form>
      <label for="menu-content">Menu Content</label>
      <textarea id="menu-content" v-model="contentData" placeholder="Content"></textarea>
    </form>

    <button @click="toggle">Toggle</button>
    <side-menu :opened="openedData" @close="toggle">
      <div slot="content" v-if="contentData !== ''" v-html="contentData"></div>
    </side-menu>
  </section>
</template>

<script>
import { sideMenu } from '@/components';

export default {
  data() {
    return {
      openedData: false,
      contentData:
`<ul class="side-menu-content">
  <li><a href="#">Account</a></li>
  <li><a href="#">Password</a></li>
  <li><a href="#">Billing</a></li>
  <li><hr></li>
  <li><a href="#">Support</a></li>
  <li><a href="#">FAQ</a></li>
</ul>
<ul class="side-menu-bottom-content">
  <li><a href="#">Sign Out</a></li>
</ul>`,
    };
  },
  methods: {
    toggle() {
      this.openedData = !this.openedData;
    },
  },
  components: { 'side-menu': sideMenu },
};
</script>
