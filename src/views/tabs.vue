<template>
  <article class="container">
    <h1>Tab Navigation</h1>

    <section id="tab-navigation">
      <tabs :tabs="tabs">
        <template #structure>
          <strong>Base Structure for any tab UI system</strong>
          <pre><code class="language-markup">&lt;div class="tabs"&gt;
    &lt;nav role="tablist" aria-label="Tab List""&gt;
      &lt;button aria-selected="true" tabindex="0" id="tab-one" class="tab"&gt;One&lt;/button&gt;
      &lt;button aria-selected="false" tabindex="-1" id="tab-two" class="tab"&gt;Two&lt;/button&gt;
      &lt;button aria-selected="false" tabindex="-1" id="tab-three" class="tab"&gt;Three&lt;/button&gt;
    &lt;nav&gt;
  &lt;/div&gt;</code></pre>
        </template>
        <template #template>
          <h2>test</h2>
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
        </template>
        <template #component>
          <h2>this is the third option</h2>
        </template>
      </tabs>
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
          name: 'Structure',
          route: 'structure',
        },
        {
          name: 'Vue Template',
          route: 'template',
        },
        {
          name: 'Component',
          route: 'component',
        },
      ],
    };
  },
};
</script>
