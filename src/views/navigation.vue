<template>
  <article class="container">
    <h1>Navigation</h1>

    <section id="tab-navigation">
      <h3>Tabs</h3>

      <strong>Example</strong>
      <div class="example">
        <tabs :tabs="tabs" :activeTab="tab" @clicked="setTab" />
        <div v-if="tab === 'cypress'">
          <dl>
            <dt>Elevation</dt><dd>897 m</dd><br>
            <dt>Avg. Grade</dt><dd>5.6%</dd>
          </dl>
        </div>
        <div v-if="tab === 'grouse'">
          <dl>
            <dt>Elevation</dt><dd>239 m</dd><br>
            <dt>Avg. Grade</dt><dd>5%</dd>
          </dl>
        </div>
        <div v-if="tab === 'seymour'">
          <dl>
            <dt>Elevation</dt><dd>987 m</dd><br>
            <dt>Avg. Grade</dt><dd>7%</dd>
          </dl>
        </div>
      </div>

      <strong>Markup</strong>
      <pre><code class="language-markup">
&lt;tabs :tabs="tabs" :activeTab="tab" @clicked="setTab" /&gt;
&lt;div v-if="tab === 'cypress'"&gt;...&lt;/div&gt;
...
      </code></pre>
    </section>
  </article>
</template>

<script>
import Tabs from '@/components/tabs';

export default {
  components: { Tabs },
  data() {
    return {
      tabs: [
        {
          name: 'Cypress',
          route: 'cypress'
        },
        {
          name: 'Grouse',
          route: 'grouse'
        },
        {
          name: 'Seymour',
          route: 'seymour'
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

  dt {
    font-weight: bold;
    display: inline-block;
    width: 6rem;
  }

  dd {
    display: inline-block;
  }
</style>
