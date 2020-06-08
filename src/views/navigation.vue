<template>
  <article class="container">
    <h1>Navigation</h1>

    <section id="tab-navigation">
      <h3>Tabs</h3>
      <tabs :tabs="tabs" :activeTab="tab" @clicked="setTab" />

      <div v-if="tab === 'markup'">
        <strong>Example Vue component markup</strong>
        <pre><code class="language-markup">
&lt;tabs :tabs="tabs" :activeTab="tab" @clicked="setTab" /&gt;
&lt;div v-if="tab === 'markup'"&gt;...&lt;/div&gt;
...
        </code></pre>
      </div>

      <div v-if="tab === 'script'">
        <strong>Example Vue component script</strong>
        <pre><code>
export default {
  components: { Tabs },
  data() {
    return {
      tabs: [
        {
          name: 'Markup',
          route: 'markup'
        },
        {
          name: 'Script',
          route: 'script'
        },
        {
          name: 'Output',
          route: 'output'
        },
      ],
      tab: 'markup'
    };
  },
  methods: {
    setTab(selectedTab) {
      this.tab = selectedTab
    },
  },
}
        </code></pre>
      </div>

      <div v-if="tab === 'output'">
        <strong>Example browser output when using the Vue component</strong>
        <pre><code class="language-markup">
&lt;div class="tabs"&gt;
  &lt;button to="markup" class="tab active"&gt; Markup &lt;/button&gt;
  &lt;button to="script" class="tab"&gt; Script &lt;/button&gt;
  &lt;button to="output" class="tab"&gt; Output &lt;/button&gt;
&lt;/div&gt;
        </code></pre>
      </div>
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
          name: 'Markup',
          route: 'markup'
        },
        {
          name: 'Script',
          route: 'script'
        },
        {
          name: 'Output',
          route: 'output'
        },
      ],
      tab: 'markup'
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
