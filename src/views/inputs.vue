<template>
  <article class="container">
    <h1>Inputs</h1>
    <section>
      <label for="text">Text Input</label>
      <input type="text" id="text" name="text">
    </section>
    <section>
      <label for="text">Password Input</label>
      <input type="password" id="text" name="text">
    </section>
  </article>
</template>
<script>

import wealthbarTheme from './colour/wealthbar.vue';
import assanteTheme from './colour/assante.vue';
import SubPageNavigation from '@/components/sub-page-navigation';

export default {
  components: { SubPageNavigation, wealthbarTheme, assanteTheme },
  data() {
    return {
      tabs: [
        {
          name: 'Wealthbar',
          route: 'wealthbar'
        },
        {
          name: 'Assante Connect',
          route: 'assante'
        },
      ],
      tab: 'wealthbar'
    };
  },
  methods: {
    setTab(selectedTab) {
      this.tab = selectedTab
    },
  },
};
</script>
<style lang="scss" scoped>
  .container { padding-bottom: 2rem; }
</style>
