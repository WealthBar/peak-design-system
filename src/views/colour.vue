<template>
  <article class="container">
    <h1>Colour</h1>
    <p>WealthBar’s fresh colour palette fits our light, anti-institution personality without being too young or too loud. Colour also plays an important functional role. When properly used, colour can highlight, de-emphasize, contrast, or add emotion to our communication and UI.</p>

    <h2>Palette</h2>

    <hr>

    <h3>Colour Weight</h3>
    <p>In an effort to bulletproof our system of colours, we use weights from 50 to 900, similar to font weights. Weight is defined by the contrast ratio of the colour against white, allowing us to convey relevant weights across our entire colour palette. This means <code>$pos-50</code> and <code>$neg-50</code> should be pretty close in weight, even if they’re on opposite ends of the colour spectrum.</p>

    <h3>Themes</h3>
    <p>White label themes are use 1:1 colour matches to create a unique theme vairant based on the colours associated with the brand.</p>
    <p>
      <strong>Note for Devs:</strong> Using the generalized naming conventions for colours (<code>$primary-300</code>, <code>$bg-50</code>, <code>$tertiary-100</code>, etc) will automatically swap out colours based on the application build process. If your requirements state to use a specific colour regardless of theme the <code>$[name]-[weight]</code> convention will work (eg: <code>$jade-300</code>)
    </p>
    <tabs :tabs="tabs" :activeTab="tab" @clicked="setTab" />
    <wealthbar-theme v-if="tab === 'wealthbar'"/>
    <assante-theme v-if="tab === 'assante'"/>
  </article>
</template>
<script>

import wealthbarTheme from './colour/wealthbar.vue';
import assanteTheme from './colour/assante.vue';
import Tabs from '@/components/tabs';

export default {
  components: { Tabs, wealthbarTheme, assanteTheme },
  data() {
    return {
      tabs: [
        {
          name: 'WealthBar',
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
