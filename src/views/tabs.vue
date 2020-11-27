<template>
  <article class="container">
    <h1>Tab Navigation</h1>

    <section id="tab-navigation">
      <tabs :tabs="tabList" @change="setRoute">
        <template #structure>
          <h2>Base Structure for any tab UI system</h2>
          <p>The following markup represents the basic HTML structure for a working Tab UI system. Developers can choose to build their component or template if they choose but the resulting structure should match this output as closely as possible.</p>
          <p>The <code>aria-selected="true"</code> and <code>tabindex="0"</code> attributes on each <code>&lt;button&gt;</code> determine and style the currently selected tab. Using the fanciest of javascript, <code>aria-controls="panel-ID"</code> will determine which <code>&lt;div role="tabpanel"&gt;</code> is active by the corrisponding <code>id</code> attribute.</p>
          <p>Inactive panels use the <code>hidden</code> attribute. <code>aria-labelledby="tab-ID"</code> ensures labeling by the corrisponding tab and <code>tabindex="0"</code> keeps the keyboard navigation happy.</p>

          <strong>Markup</strong>
          <pre><code class="language-markup">&lt;div class="tabs"&gt;
    &lt;nav role="tablist" aria-label="Tab List""&gt;
      &lt;button id="tab-one"
            class="tab"
            aria-controls="panel-one"
            aria-selected="true"
            tabindex="0"&gt;One
      &lt;/button&gt;
      &lt;button id="tab-two"
            class="tab"
            aria-controls="panel-two"
            aria-selected="false"
            tabindex="-1"&gt;Two
      &lt;/button&gt;
      &lt;button id="tab-three"
            class="tab"
            aria-controls="panel-three"
            aria-selected="false"
            tabindex="-1"&gt;Three
      &lt;/button&gt;
    &lt;nav&gt;

    &lt;div id="panel-one"
        role="tabpanel"
        aria-labelledby="tab-one"
        tabindex="0"&gt;
      &lt;!-- Panel One Content --&gt;
    &lt;/div&gt;
    &lt;div id="panel-two"
        role="tabpanel"
        aria-labelledby="tab-two"
        tabindex="0"
        hidden&gt;
      &lt;!-- Panel Two Content --&gt;
    &lt;/div&gt;
    &lt;div id="panel-three"
        role="tabpanel"
        aria-labelledby="tab-three"
        tabindex="0"
        hidden&gt;
      &lt;!-- Panel Three Content --&gt;
    &lt;/div&gt;
  &lt;/div&gt;</code></pre>
        </template>
        <template #template>
          <h2>Vue template</h2>
          <p>Below is a basic Vue page setup for the tabs component. The imported <code>&lt;tabs&gt;</code> component takes one prop <code>:tabs</code>, an array of objects containing <code>name</code>, <code>id</code>, and optional <code>disabled</code> key/value pairs. There is also a <code>@change</code> event that can be called to trigger a route change or any other change required on tab switching.</p>

          <p>Each tab panel is a <code>&lt;template&gt;</code> with a named <code>v-slot</code> attribute that matches to a corrisponding <code>id</code> key in the array of tabList passed to the <code>:tabs</code> prop.</p>

          <p>As an example, the <code>&lt;setRoute()&gt;</code> method is envoked on the <code>@change</code> event. This is this is done to set the route on tab changes making URL navigation more straightforward.</p>
          <strong>Vue Template Markup</strong>
          <pre><code class="language-markup">
  &lt;tabs :tabs="tabList" @change="setRoute"/&gt;
  &lt;!-- :tabs is a prop that take an Object Array of tabs--&gt;
  &lt;!-- @change is an event trigger on tab change (eg: setting route params) --&gt;
    &lt;template v-slot:tab-one&gt;
      &lt;!-- #tab-one matches the id key in the tabList Object Array --&gt;
      &lt;!-- Panel One Content --&gt;
    &lt;/template&gt;
    &lt;template #tab-two&gt;
      &lt;!-- v-slot: === # - so we can use that instead --&gt;
      &lt;!-- Panel Two Content --&gt;
    &lt;/template&gt;
    &lt;template #tab-three&gt;
      &lt;!-- Panel Three Content --&gt;
    &lt;/template&gt;
  &lt;/tabs&gt;
          </code></pre>

          <strong>Vue Script Code</strong>
          <pre><code class="language-js">import tabs from '~vue/components/tabs'
  export default {
    components: { tabs },
    data() {
      // Array of objects for each tab that includes: name, id, disabled(optional).
      return {
        tabList: [
          {
            name: 'Tab One',
            id: 'tab-one',
            disabled: false,
          },
          {
            name: 'Tab Two',
            id: 'tab-two',
            disabled: false,
          },
          {
            name: 'Tab Three',
            id: 'tab-three',
            disabled: true,
          },
        ],
      };
    },
    methods: {
      // Optional method to call on @change event to set the route's tab param
      setRoute(tab) {
        this.$router.replace({ query: { tab: tab.id } });
      },
    },
  }</code></pre>
        </template>
        <template #disabled>
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
      tabList: [
        {
          name: 'Structure',
          id: 'structure',
          disabled: false,
        },
        {
          name: 'Vue Template',
          id: 'template',
          disabled: false,
        },
        {
          name: 'Disabled Example',
          id: 'disabled',
          disabled: true,
        },
      ],
    };
  },
  methods: {
    setRoute(tab) {
      this.$router.replace({ query: { tab: tab.id } });
    },
  },
};
</script>
