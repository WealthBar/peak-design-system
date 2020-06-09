<template>
  <article class="container">
    <h1>Navigation</h1>

    <section id="tab-navigation">
      <h3>Tabs</h3>
      <tabs :tabs="tabs" :active-tab="tab" @clicked="setTab" />

      <div v-show="tab === 'markup'">
        <strong>Example Vue component markup</strong>
        <pre><code class="language-markup">
&lt;tabs :tabs="tabs" :activeTab="tab" @clicked="setTab" /&gt;
&lt;div v-if="tab === 'markup'"&gt;...&lt;/div&gt;
...
        </code></pre>
      </div>

      <div v-if="tab === 'script'">
        <strong>Example Vue component script</strong>
      <pre><code class="language-js">
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

      <div v-show="tab === 'output'">
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
import tabs from '@/components/tabs';
import prism from 'vue-prismjs';

export default {
  components: { prism, tabs },
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
