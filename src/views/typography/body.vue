<template>
  <article class="container">
    <h1>Body Type & Patterns</h1>

    <section>
      <h2 id="body">Body Text</h2>
      <p>Body text is optimized for web readability. For additional emphasis or de-emphasis, we have 4 style classes that can be applied as needed to our base paragraph style.</p>

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

    <section>
      <h2 id="lists">Lists</h2>
      <p>Lists inherit the paragraph’s style and use the paragraph’s spacing between list items to improve readability. List items are indented {{ unitValue(8) }}.</p>

      <h3>Unordered List</h3>
      <div class="example">
        <ul>
          <li>Hey, here’s something that’s part of default list</li>
          <li>This is the second item in the list. What should go here I wonder. Just enough to push it to two lines. There we go!</li>
        </ul>
        <ul class="bullet">
          <li>Hey, here’s something that’s part of a bulleted list</li>
          <li>
            Here’s a long piece of text. What should go here I wonder. Just enough to push it to two lines. There we go!
            <ul class="bullet">
              <li>This is a nested bulleted list</li>
              <li>Let's have one more item</li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="attributes">
        <div class="code-sample">
          <strong>Markup</strong>
          <pre><code class="language-markup">&lt;ul&gt;
  &lt;li&gt;unordered list item&lt;/li&gt;
  &lt;li&gt;unordered list item&lt;/li&gt;
&lt;/ul&gt;

&lt;ul class="bullet"&gt;
  &lt;li&gt;unordered list item&lt;/li&gt;
  &lt;li&gt;unordered list item&nbsp;&lt;/li&gt;
  &lt;ul class="bullet"&gt;
    &lt;li&gt;unordered list item&lt;/li&gt;
    &lt;li&gt;unordered list item&lt;/li&gt;
  &lt;/ul&gt;
&lt;/ul&gt;
          </code></pre>
        </div>
        <div class="code-sample">
          <strong>Style</strong>
          <pre><code class="language-css">ul {
  padding: 0;
  margin: 0 0 {{ unitValue(16) }};
  list-style: none;
}

ul.bullet { list-style: disc; }

li ul {
  padding-left: {{ unitValue(16) }};
  margin: 0;
}          </code>
          </pre>
        </div>
      </div>

      <h3>Ordered List</h3>
      <div class="example">
        <ol>
          <li>Hey, here’s something that’s part of an ordered list</li>
          <li>Here’s a long piece of text. What should go here I wonder. Just enough to push it to two lines. There we go!</li>
        </ol>
      </div>
      <div class="attributes">
        <div class="code-sample">
          <strong>Markup</strong>
          <pre><code class="language-markup">&lt;ol&gt;
  &lt;li&gt;first list item&lt;/li&gt;
  &lt;li&gt;second list item&lt;/li&gt;
&lt;/ol&gt;</code></pre>
        </div>
        <div class="code-sample">
          <strong>Style</strong>
          <pre><code class="language-css">ol {
  padding: 0;
  margin: 0 0 {{ unitValue(16) }};
  list-style: decimal;
  }

  li ol {
  padding-left: {{ unitValue(16) }};
  margin: 0;
}</code></pre>
        </div>
      </div>
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
h1,
.h1 {
  font-weight: bold;
  font-size: 1.625rem;
  line-height: 2rem;
  padding: 0;
  margin: 2rem 0 1rem;

  // Desktop sizing done as SCSS mixin to allow for toggled sizing on any screen
  // if using in apps use as @media #{$screen-width-medium} { … }
  @mixin desktop {
    font-size: 2.25rem;
    line-height: 3rem;
    margin: 3rem 0 1rem;
  }

  &:not(.mobile) {
    @media #{$screen-width-medium} {
      @include desktop;
    }
  }

  &.desktop {
    @include desktop;
  }
}

h2,
.h2 {
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 1.875rem;
  padding: 0;
  margin: 1.875rem 0 1rem;

  // Desktop sizing done as SCSS mixin to allow for toggled sizing on any screen
  // if using in apps use as @media #{$screen-width-medium} { … }
  @mixin desktop {
    font-size: 1.875rem;
    line-height: 2.25rem;
    margin: 2.25rem 0 1rem;
  }

  &:not(.mobile) {
    @media #{$screen-width-medium} {
      @include desktop;
    }
  }

  &.desktop {
    @include desktop;
  }
}

h3,
.h3 {
  font-weight: bold;
  font-size: 1.25rem;
  line-height: 1.75rem;
  padding: 0;
  margin: 1.75rem 0 1rem;

  // Desktop sizing done as SCSS mixin to allow for toggled sizing on any screen
  // if using in apps use as @media #{$screen-width-medium} { … }
  @mixin desktop {
    font-size: 1.5rem;
    line-height: 1.875rem;
    margin: 1.875rem 0 1rem;
  }

  &:not(.mobile) {
    @media #{$screen-width-medium} {
      @include desktop;
    }
  }

  &.desktop {
    @include desktop;
  }
}

h4,
.h4 {
  font-weight: bold;
  font-size: 1.125rem;
  line-height: 1.5rem;
  padding: 0;
  margin: 1.5rem 0 1rem;

  // Desktop sizing done as SCSS mixin to allow for toggled sizing on any screen
  // if using in apps use as @media #{$screen-width-medium} { … }
  @mixin desktop {
    font-size: 1.25rem;
    line-height: 1.625rem;
    margin: 1.625rem 0 1rem;
  }

  &:not(.mobile) {
    @media #{$screen-width-medium} {
      @include desktop;
    }
  }

  &.desktop {
    @include desktop;
  }
}

h5,
.h5 {
  font-weight: bold;
  font-size: 1rem;
  line-height: 1.25rem;
  padding: 0;
  margin: 1.25rem 0 1rem;

  // Desktop sizing done as SCSS mixin to allow for toggled sizing on any screen
  // if using in apps use as @media #{$screen-width-medium} { … }
  @mixin desktop {
    font-size: 1.125rem;
    line-height: 1.5rem;
    margin: 1.5rem 0 1rem;
  }

  &:not(.mobile) {
    @media #{$screen-width-medium} {
      @include desktop;
    }
  }

  &.desktop {
    @include desktop;
  }
}

section {
  padding-bottom: 2rem;
  // margin-bottom: 3rem;
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

.typography-page {
  margin: 2rem 4rem;
}

.typography-intro {
  @media #{$screen-width-medium} {
    display: flex;
  }
  > p {
    flex: 1 1 100%;
  }
}

.intro-copy {
  width: 35rem;
}

.download-typography {
  border: 1px solid $pearl-100;
  margin: 0 2rem;
  padding: 0.5rem;
  border-radius: 2px;
  background-color: $white;
  z-index: 2;

  p {
    font-weight: bold;
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
    //   // code {
    //   //   flex: 1 1 100%;
    //   // }
    // }
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

.line-length-container {
  padding-bottom: 1rem;

  .line-length-content {
    .line-length-50 {
      max-width: 22rem;
    }

    .line-length-60 {
      max-width: 28rem;
    }

    .line-length-80 {
      max-width: 38rem;
    }

    .line-length-104 {
      max-width: 52rem;
    }

    .line-length-labels {
      .char-50,
      .char-60,
      .char-80,
      .char-104,
      .ideal {
        position: absolute;
        top: 0;
      }

      .char-50 {
        left: 22rem;
      }
      .char-60 {
        left: 28rem;
      }
      .ideal {
        left: 31rem;
      }
      .char-80 {
        left: 38rem;
      }
      .char-104 {
        left: 52rem;
      }
    }

    .line-0,
    .line-50,
    .line-60,
    .line-80,
    .line-104 {
      height: 90%;
      position: absolute;
      border-left: 1px solid $pearl-500;
      opacity: 0.5;
    }

    .line-50 {
      border-color: #e96654;
      left: 22rem;
    }

    .line-60 {
      border-color: $primary-300;
      left: 28rem;
    }

    .line-80 {
      border-color: $primary-300;
      left: 38rem;
    }

    .line-104 {
      border-color: #e96654;
      left: 52rem;
    }

    @media #{$screen-max-small} {
      .line-length-104,
      .line-104,
      .char-104 {
        display: none;
      }
    }
  }
}

.alternative-glyphs-container {
  display: flex;
  flex-direction: column;
  @media #{$screen-width-large} {
    flex-direction: row;
    align-items: center;

    .alternative-examples {
      margin-right: 3rem;
      img {
        max-width: 21rem;
      }
    }
  }
}
</style>
