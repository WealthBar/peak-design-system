<template>
  <article class="container">
    <h1>Tab Navigation</h1>

    <section id="tab-navigation">
      <tabs :tabs="tabs" :active-tab="tab" @clicked="setTab" />

      <div tabindex="0" role="tabpanel" aria-labelledby="tab-template" :hidden="tab !== 'template'">
        <strong>Example usage in a Vue component template</strong>
        <pre><code class="language-markup">
&lt;tabs :tabs="tabs" :activeTab="tab" @clicked="setTab" /&gt;
&lt;div v-if="tab === 'template'"&gt;&hellip;&lt;/div&gt;
&hellip;
        </code></pre>

        <strong>Example usage in a Vue component script</strong>
        <pre><code class="language-js">
export default {
  components: { Tabs },
  data() {
    return {
      tabs: [
        {
          name: 'Template',
          route: 'template'
        },
        {
          name: 'Browser Output',
          route: 'output'
        },
      ],
      tab: 'template'
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

      <div tabindex="0" role="tabpanel" aria-labelledby="tab-output" :hidden="tab !== 'output'">
        <strong>Example browser HTML output when using the Vue component</strong>
        <pre><code class="language-markup">
&lt;div class="tabs"&gt;
  &lt;button to="template" class="tab active"&gt; Template &lt;/button&gt;
  &lt;button to="script" class="tab"&gt; Script &lt;/button&gt;
  &lt;button to="output" class="tab"&gt; Output &lt;/button&gt;
&lt;/div&gt;
        </code></pre>
      </div>

      <div tabindex="0" role="tabpanel" aria-labelledby="tab-third" :hidden="tab !== 'third'">
        <h2>this is the third option</h2>
      </div>
    </section>
  </article>
</template>

<script>
import tabs from '@/components/tabs';

export default {
  components: { tabs },
  data() {
    return {
      tabs: [
        {
          name: 'Template',
          route: 'template',
        },
        {
          name: 'Browser Output',
          route: 'output',
        },
        {
          name: 'Third Option',
          route: 'third',
        },
      ],
      tab: 'template',
    };
  },
  methods: {
    setTab(selectedTab) {
      this.tab = selectedTab;
    },
  },
};
</script>
