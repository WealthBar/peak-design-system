<template>
  <article class="container">
    <h1>Body Type</h1>

    <section>
      <p>Body type is optimized for web readability. For additional emphasis or de-emphasis, we have 4 style classes that can be applied as needed to our base paragraph style.</p>

      <h3>Paragraph</h3>
      <p>Our base paragraph style is the foundation of our typography. All styles are variants of this style. It is also the default text style, meaning if no style is applied or specified, it should use this style.</p>

      <div class="example">
        <p>This is a paragraph.</p>
      </div>
      <div class="attributes">
        <div class="code-sample">
          <strong>Markup</strong>
          <pre><code class="language-markup">&lt;p&gt;This is a paragraph.&lt;/p&gt;</code></pre>
        </div>
        <div class="code-sample">
          <strong>Style</strong>
          <pre class="language-css" :class="getSelectedUnit"><code>{{ typeStyle('p') }}</code></pre>
        </div>
      </div>

      <h3>Large Text</h3>
      <p>Only designed to work when applied to a paragraph element.</p>
      <div class="example">
        <p class="large">This is large paragraph text.</p>
      </div>
      <strong>Markup</strong>
      <pre><code class="language-markup">&lt;p class="large"&gt;This is large paragraph text.&lt;/p&gt;</code></pre>

      <h3>Small Text</h3>
      <p>
        Whether set as a class or as an inline element. Inherits spacing from the parent.
      </p>
      <div class="example">
        <p class="small">This is small paragraph text.</p>
        <p>
          Regular text <small>(This is a small text block)</small> wrapping the small text.
        </p>
      </div>

      <strong>Markup</strong>
      <pre>
        <code class="language-markup">&lt;p class="small"&gt;This is small paragraph text.&lt;/p&gt;
&lt;p&gt;Regular text &lt;small&gt;(This is a small text block)&lt;/small&gt; wrapping the small text.&lt;/p&gt;</code>
      </pre>

      <h3>Subtle Text</h3>
      <p>
        This style de-emphasizes sentences or paragraphs, such as for micro-copy, minor details, or information that isn’t useful for most users.
      </p>
      <div class="example">
        <p>This is<span class="subtle">subtle text</span> in a paragraph.</p>
      </div>

      <strong>Markup</strong>
      <pre>
        <code class="language-markup">&lt;p&gt;This is &lt;span class="subtle"&gt;subtle text&lt;/span&gt; in a paragraph.&lt;/p&gt;</code>
      </pre>


      <h3>Strong Text</h3>
      <p>
        This style provides additional emphasis to bring attention to a specific word or phrases; don’t use for entire sentences or paragraphs. <br />
        <strong> Don’t use the <span>&lt;b&gt;</span> tag, ever! </strong> 💀
      </p>
      <div class="example">
        <p>
          This is <strong>strong text</strong> in a paragraph.
        </p>
      </div>
      <!-- <div class="attributes">
      <div class="code-sample">-->
      <strong>Markup</strong>
      <pre><code class="language-markup">&lt;p&gt;This is &lt;strong&gt;strong text&lt;/strong&gt; in a paragraph.&lt;/p&gt;</code></pre>
      <h3>No Margins</h3>
      <p>
        Default margins on any header or block element (eg:
        <code>h2</code> or
        <code>p</code>) can be removed by adding a class of
        <code>no-margin</code> to it.
      </p>
      <div class="example">
        <h3 class="no-margin">This is H3 element has no margin.</h3>
      </div>
      <strong>Markup</strong>
      <pre>
        <code class="language-markup">&lt;h3 class="no-margin"&gt;This is H3 element has no margin.&lt;/h3&gt;</code>
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
  // margin-bottom: 3rem;
  border-bottom: 1px solid $neutral-100;
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
  > h1,
  > h2,
  > h3,
  > h4,
  > h5,
  > h6 {
    background: $white;
    border-top: 1px solid $tertiary-100;
    border-bottom: 1px solid $tertiary-100;
  }
  > p,
  > strong,
  > small,
  > .small,
  > .subtle {
    background: $white;
    border-top: 1px solid $tertiary-100;
    border-bottom: 1px solid $tertiary-100;
    &:first-child {
      border-top: none;
    }
  }
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
  .no-margin {
    margin: 0 !important;
    border: none;
  }
}

</style>
