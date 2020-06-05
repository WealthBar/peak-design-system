<template>
  <article class="container">
    <h1>Navigation</h1>

    <section id="tab-navigation">
      <h3>Tab Sub-Page Navigation</h3>

      <strong>Example</strong>
      <div class="example">
        <sub-page-navigation :tabs="tabs" :activeTab="tab" @clicked="setTab" />
        <p v-if="tab === 'cypress'">Sub-page content related to Cypress Mountain</p>
        <p v-if="tab === 'fromme'">Sub-page content related to Mount Fromme</p>
        <p v-if="tab === 'grouse'">Sub-page content related to Grouse Mountain</p>
      </div>

      <strong>Markup</strong>
      <pre><code class="language-markup">
&lt;sub-page-navigation :tabs="tabs" :activeTab="tab" @clicked="setTab" /&gt;
&lt;p v-if="tab === 'cypress'"&gt;Sub-page content related to Cypress Mountain&lt;/p&gt;
...
      </code></pre>
    </section>
  </article>
</template>


<script>
import SubPageNavigation from '@/components/sub-page-navigation';

export default {
  components: { SubPageNavigation },
  data() {
    return {
      tabs: [
        {
          name: 'Cypress',
          route: 'cypress'
        },
        {
          name: 'Fromme',
          route: 'fromme'
        },
        {
          name: 'Grouse',
          route: 'grouse'
        },
      ],
      tab: 'cypress'
    };
  },
  methods: {
    setTab(selectedTab) {
      this.tab = selectedTab
    },
  },
}
</script>


<style lang="scss" scoped>
  .example {
    padding: 1rem;
    margin-bottom: 1rem;
    border: 1px solid $neutral-300;
    border-radius: 0.25rem;
    width: auto;
    > * { margin-bottom: 1rem; }
  }
</style>