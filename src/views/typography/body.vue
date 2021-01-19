<template>
  <article class="container">
    <header class="peak-title">
      <h1>Typography — Body Type</h1>
      <div class="page-actions">
        <div>
          <label for="margin-toggle">Show Margins</label>
          <button id="margin-toggle" class="toggle" @click="showMargin = !showMargin">
            <span :data-active="showMargin">on</span>
            <span :data-active="!showMargin">off</span>
          </button>
        </div>
      </div>
    </header>

    <section>
      <p>Body type is optimized for web readability. For additional emphasis or de-emphasis, we have 4 style classes that can be applied as needed to our base paragraph style.</p>

      <h3>Paragraph</h3>
      <p>Our base paragraph style is the foundation of our typography. All styles are variants of this style. It is also the default text style, meaning if no style is applied or specified, it should use this style.</p>

      <div :class="showMargin ? 'example' : ''">
        <p>This is a paragraph.</p>
      </div>

      <strong>Markup</strong>
      <pre><code class="language-markup">&lt;p&gt;This is a paragraph.&lt;/p&gt;</code></pre>


      <h3>Large Text</h3>
      <p>Only designed to work when applied to a paragraph element.</p>
      <div :class="showMargin ? 'example' : ''">
        <p class="large">This is large paragraph text.</p>
      </div>

      <strong>Markup</strong>
      <pre><code class="language-markup">&lt;p class="large"&gt;This is large paragraph text.&lt;/p&gt;</code></pre>

      <h3>Small Text</h3>
      <p>
        Whether set as a class or as an inline element. Inherits spacing from the parent.
      </p>
      <div :class="showMargin ? 'example' : ''">
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
      <div :class="showMargin ? 'example' : ''">
        <p>This is <span class="subtle">subtle text</span> in a paragraph.</p>
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
      <div :class="showMargin ? 'example' : ''">
        <p>
          This is <strong>strong text</strong> in a paragraph.
        </p>
      </div>
      <strong>Markup</strong>
      <pre><code class="language-markup">&lt;p&gt;This is &lt;strong&gt;strong text&lt;/strong&gt; in a paragraph.&lt;/p&gt;</code></pre>

      <h3>No Margins</h3>
      <p>
        Default margins on any header or block element (eg:
        <code>h2</code> or
        <code>p</code>) can be removed by adding a class of
        <code>no-margin</code> to it.
      </p>
      <div :class="showMargin ? 'example' : ''">
        <p class="no-margin">This p element has no margin.</p>
      </div>
      <strong>Markup</strong>
      <pre>
        <code class="language-markup">&lt;p class="no-margin"&gt;This p element has no margin.&lt;/p&gt;</code>
      </pre>

      <h3>Capitalization</h3>
      <p>Several classes are available to help you adjust the capitalization of strings on a page:</p>
      <ul>
        <li>you may ask yourself, "what is that beautiful house?"</li>
        <li class="sentence-case">you may ask yourself, "where does that highway go to?"</li>
        <li class="title-case">and you may ask yourself, "am i right? am i wrong?"</li>
        <li class="uppercase">and you may say to yourself, "my god! what have i done?"</li>
      </ul>
      <strong>Markup</strong>
      <pre>
        <code class="language-markup">&lt;p&gt;what is that beautiful house?&lt;/p&gt;
&lt;p class="sentence-case"&gt;where does that highway go to?&lt;/p&gt;
&lt;p class="title-case"&gt;am i right? am i wrong?&lt;/p&gt;
&lt;p class="uppercase"&gt;my god! what have i done?&lt;/p&gt;</code>
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
      name: 'body-type',
      title: 'Body Type',
      showMargin: false,
      getSelectedUnit: 'rem',
      getSelectedScreen: 'desktop',
    };
  },
  methods: {
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

.example {
  display: inline-block;
  width: 100%;
  background: $tertiary-50;
  box-shadow: 0 1px 0 0 $tertiary-100,  0 -1px 0 0 $tertiary-100;
  > h3,
  > p,
  > strong,
  > small,
  > .small,
  > .subtle {
    background: $white;
    box-shadow: 0 1px 0 0 $tertiary-100,  0 -1px 0 0 $tertiary-100;
    &:first-child {
      border-top: none;
    }
  }
  .no-margin {
    margin: 0 !important;
    border: none;
  }
}

</style>
