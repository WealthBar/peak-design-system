<template>
  <article class="container">
    <h1>Lists</h1>
    <section>
      <p>Lists inherit the paragraph’s style and use the paragraph’s margin at bottom, and between list items to improve readability. List items are indented {{ unitValue(8) }}.</p>

      <h3>Unordered List</h3>
      <p><strong>By default unordered lists do not have any bullet or identifying markers.</strong> This was done so that lists could be used in a variety of contexts without the need for developers to override CSS in their templates — a majority of our UI tends to use <code class="language-markup">&lt;ul&gt;</code> lists in this regard.</p>

      <strong>Markup:</strong>
      <pre>
        <code class="language-markup">&lt;ul&gt;
  &lt;li&gt;This is a default list item.&lt;/li&gt;
  &lt;li&gt;This is the second item in the list.&lt;/li&gt;
  &lt;ul&gt;
    &lt;li&gt;This is a nested list.&lt;/li&gt;
    &lt;li&gt;Let's have one more item.&lt;/li&gt;
  &lt;/ul&gt;
&lt;/ul&gt;</code>
      </pre>
      <strong>Output:</strong>
      <ul class="no-margin">
        <li>This is a default list item.</li>
        <li>This is the second item in the list.</li>
        <ul class="no-margin">
          <li>This is a nested list.</li>
          <li>Let's have one more item.</li>
        </ul>
        <ul>
          <li>This is a nested list.</li>
          <li>Let's have one more item.</li>
        </ul>
      </ul>

      <hr />

      <h3>Bulleted Unordered List</h3>
      <p>To add markers and margining to unordered lists simply class as <code class="language-markup">&lt;ul class="bullet"&gt;</code>.</p>

      <strong>Markup:</strong>
      <pre>
        <code class="language-markup">&lt;ul class="bullet"&gt;
  &lt;li&gt;This is a bulleted list item.&lt;/li&gt;
  &lt;li&gt;This is the second item in the list.&nbsp;&lt;/li&gt;
  &lt;ul class="bullet"&gt;
    &lt;li&gt;This is a nested list.&lt;/li&gt;
    &lt;li&gt;Let's have one more item.&lt;/li&gt;
  &lt;/ul&gt;
&lt;/ul&gt;</code>
      </pre>
      <strong>Output:</strong>
      <ul class="bullet">
        <li>This is a bulleted list item.</li>
        <li>This is the second item in the list.</li>
        <ul class="bullet">
          <li>This is a nested list.</li>
          <li>Let's have one more item.</li>
        </ul>
      </ul>
      <h3>Ordered List</h3>
      <ol>
        <li>This is an ordered list item.</li>
        <li>This is the second item in the list.</li>
        <ol>
          <li>This is a nested list.</li>
          <li>Let's have one more item.</li>
        </ol>
      </ol>
      <strong>Markup</strong>
      <pre>
        <code class="language-markup">&lt;ol&gt;
  &lt;li&gt;This is an ordered list item.&lt;/li&gt;
  &lt;li&gt;second list item&lt;/li&gt;
  &lt;ol&gt;
    &lt;li&gt;This is a nested list.&lt;/li&gt;
    &lt;li&gt;Let's have one more item.&lt;/li&gt;
  &lt;/ol&gt;
&lt;/ol&gt;</code>
      </pre>
    </section>
  </article>
</template>

<script>
import { mapGetters, mapActions } from '@/lib/vue';
import typography from './typography.data';

export default {
  data() {
    return {
      name: 'typography',
      title: 'Typography',
      isMobile: false,
      typography,
    };
  },
  computed: {
    ...mapGetters([
      'getSelectedUnit',
      'getUnits',
      'getSelectedScreen',
      'getScreens',
    ]),
  },
  methods: {
    ...mapActions(['setScreen', 'setUnit']),
    toggleUnit() {
      this.setUnit(this.getSelectedUnit === 'px' ? 'rem' : 'px');
    },
    toggleScreen() {
      this.setScreen(
        this.getSelectedScreen === 'desktop' ? 'mobile' : 'desktop',
      );
    },
    unitValue(value, ratio = 16) {
      if (this.getSelectedUnit === 'rem') {
        return `${value / ratio}${this.getSelectedUnit}`;
      }
      return `${value}${this.getSelectedUnit}`;
    },
    propScreenValue(tag, prop) {
      return this.unitValue(typography[tag][this.getSelectedScreen][prop]);
    },
    propValue(tag, prop) {
      return this.unitValue(typography[tag][prop]);
    },
    headerStyle(tag) {
      return `font-size: ${this.propScreenValue(tag, 'fontSize')}
line-height: ${this.propScreenValue(tag, 'lineHeight')}
font-weight: bold;
margin: ${this.propScreenValue(tag, 'marginTop')} 0 ${this.propScreenValue(
  tag,
  'marginBottom',
)};`;
    },
    typeStyle(tag) {
      return `font-size: ${this.propValue(tag, 'fontSize')}
line-height: ${this.propValue(tag, 'lineHeight')}
font-weight: normal;
margin: 0 0 ${this.propValue(tag, 'marginBottom')};`;
    },
  },
};
</script>

<style lang="scss" scoped>

section {
  padding-bottom: 2rem;
  border-bottom: 1px solid $neutral-100;
}

.convert {
  width: 100%;
  margin: 0 0 1rem;
  @media #{$screen-width-medium} {
    table-layout: fixed;
  }
  h4 {
    text-align: left;
  }
  td {
    text-align: center;
    padding: 0.125rem;
  }
  code {
    display: block;
    padding: 0.125rem;
  }
}

.attributes {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  @media #{$screen-width-large} {
    flex-direction: row;
  }
}

.code-sample {
  display: flex;
  flex-direction: column;
  @media #{$screen-width-large} {
    flex: 1 1 50%;
    &:last-child {
      padding-left: 1rem;
    }
    pre {
      flex: 1 1 50%;
      display: flex;
    }
  }
}

.example {
  background: $tertiary-50;
  border-top: 1px solid $tertiary-100;
  border-bottom: 1px solid $tertiary-100;
  margin-bottom: 1rem;
  ul,
  ol {
    background: $tertiary-50;
    border-top: none;
    border-bottom: 1px solid $tertiary-100;
    li {
      background: $white;
      ul,
      ol {
        border-top: 1px solid $tertiary-100;
        border-bottom: none;
      }
    }
  }
}
</style>
