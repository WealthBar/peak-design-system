<template>
  <article class="container">
    <h1>Typography</h1>
    <div class="typography-intro">
      <p>WealthBar’s typography is a balance between readability and personality. Using our set of defined typography styles ensures consistent quality and a clear hierarchy.</p>
      <div class="download-typography">
        <p>Instantly apply on-point typography! 👌🏾</p>
        <button type="button" href="https://www.npmjs.com/package/@wealthbar/peak-style">Install the Peak Package</button>
      </div>
    </div>
    <hr>
    <section>
      <h2 id="units">Units in Peak: use rem!</h2>
      <p>We use rems (Relative EMs) to ensure our typography stays scalable in a responsive web world. Peak's base unit of measure is <code>1rem</code> == <code class="alt">16px</code>. Too put it another way <strong>2px is equal to 0.125rem</strong>, or <strong>1/8 of a rem</strong>. Ideally we want to adhire to this 1/8th rem scale as much as possible.</p>
      <p>Here's some additional notes to keep in mind:</p>
      <ul class="bullet">
        <li>Use <strong>1/4 rem increments</strong> (<code>0</code> - <code>0.25</code> - <code>0.5</code> - <code>0.75</code> - <code>1</code>) when possible.</li>
        <li>Always use rems for <code>padding</code> and <code>margin</code>.</li>
        <li>Opt for rems as sizing for <code>svg</code> &amp; <code>img</code> when possible.</li>
        <li>Use pixels for anything smaller then <code>0.125rem</code>. Eg: <code class="alt">1px</code> for hairline borders.</li>
      </ul>
      <table class="convert">
        <th colspan="9"><h4 class="no-margin">PX to REM conversion chart</h4></th>
        <tr>
          <td><code class="alt">px</code></td>
          <td><code class="alt">2</code></td>
          <td><code class="alt">4</code></td>
          <td><code class="alt">6</code></td>
          <td><code class="alt">8</code></td>
          <td><code class="alt">10</code></td>
          <td><code class="alt">12</code></td>
          <td><code class="alt">14</code></td>
          <td><code class="alt">16</code></td>
        </tr>
        <tr>
          <td><code>rem</code></td>
          <td><code>0.125</code></td>
          <td><code>0.25</code></td>
          <td><code>0.375</code></td>
          <td><code>0.5</code></td>
          <td><code>0.625</code></td>
          <td><code>0.75</code></td>
          <td><code>0.875</code></td>
          <td><code>1</code></td>
        </tr>
      </table>
    </section>
    <section>
      <h2 id="headers">Header Text</h2>
      <p>Headers create hierarchy in a layout and make scanning easy. Use them for content such as page titles or section titles. We have mobile and desktop header styles so that our typography is responsive to screen real estate.</p>


      <h3>H1 header</h3>
      <div class="example">
        <h1 :class="getSelectedScreen">This is a super large H1 header.</h1>
      </div>
      <div class="attributes">
        <div class="code-sample">
          <strong>Markup</strong>
          <prism language="markup"><h1>This is a super large H1 header.</h1></prism>
        </div>
        <div class="code-sample">
          <strong>Style</strong>
          <prism language="css" :code="headerStyle('h1')" />
        </div>
      </div>

      <h3>H2 header</h3>
      <div class="example">
        <h2 :class="getSelectedScreen">This is a huge H2 header.</h2>
      </div>
      <div class="attributes">
        <div class="code-sample">
          <strong>Markup</strong>
          <prism language="markup"><h2>This is a huge H2 header.</h2></prism>
        </div>
        <div class="code-sample">
          <strong>Style</strong>
          <prism language="css" :class="getSelectedUnit">{{ headerStyle('h2') }}</prism>
        </div>
      </div>


      <h3>H3 header</h3>
      <div class="example">
        <h3 :class="getSelectedScreen">This is a big H3 header.</h3>
      </div>
      <div class="attributes">
        <div class="code-sample">
          <strong>Markup</strong>
          <prism language="markup"><h3>This is a big H3 header.</h3></prism>
        </div>
        <div class="code-sample">
          <strong>Style</strong>
          <prism language="css" :class="getSelectedUnit">{{ headerStyle('h3') }}</prism>
        </div>
      </div>

      <h3>H4 header</h3>
      <div class="example">
        <h4 :class="getSelectedScreen">This is a medium H4 header.</h4>
      </div>
      <div class="attributes">
        <div class="code-sample">
          <strong>Markup</strong>
          <prism language="markup"><h4>This is a medium H4 header.</h4></prism>
        </div>
        <div class="code-sample">
          <strong>Style</strong>
          <prism language="css" :class="getSelectedUnit">{{ headerStyle('h4') }}</prism>
        </div>
      </div>

      <h3>H5 header</h3>
      <div class="example">
        <h5 :class="getSelectedScreen">This is a small H5 header.</h5>
      </div>
      <div class="attributes">
        <div class="code-sample">
          <strong>Markup</strong>
          <prism language="markup"><h5>This is a small H5 header.</h5></prism>
        </div>
        <div class="code-sample">
          <strong>Style</strong>
          <prism language="css" :class="getSelectedUnit">{{ headerStyle('h5') }}</prism>
        </div>
      </div>

      <h3>H6 header</h3>
      <div class="example">
        <h6 :class="getSelectedScreen">This is a very small H6 header.</h6>
      </div>
      <div class="attributes">
        <div class="code-sample">
          <strong>Markup</strong>
          <prism language="markup"><h6>This is a very small H6 header.</h6></prism>
        </div>
        <div class="code-sample">
          <strong>Style</strong>
          <prism language="css" :class="getSelectedUnit">{{ headerStyle('h6') }}</prism>
        </div>
      </div>
    </section>

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
          <prism language="markup"><p>This is a paragraph.</p></prism>
        </div>
        <div class="code-sample">
          <strong>Style</strong>
          <prism language="css" :class="getSelectedUnit">{{ typeStyle('p') }}</prism>
        </div>
      </div>

      <h3>Large Text</h3>
      <p>Only designed to work when applied to a paragraph </p><p> element.</p>
      <div class="example">
        <p class="large">This is large paragraph text.</p>
      </div>
      <div class="attributes">
        <div class="code-sample">
          <strong>Markup</strong>
          <prism language="markup"><p class="large">This is large paragraph text.</p></prism>
        </div>
        <div class="code-sample">
          <strong>Style</strong>
          <prism language="css" :class="getSelectedUnit">{{ typeStyle('large') }}</prism>
        </div>
      </div>


      <h3>Small Text</h3>
      <p>Whether set as a class or as an inline element inherits basic sizing and spacing from the parent (eg: paragraph </p><p>) element.</p>
      <div class="example">
        <p class="small">This is small paragraph text.</p>
        <p>Regular text <small>(This is a small text block)</small> wrapping the small text.</p>
      </div>
      <div class="attributes">
        <div class="code-sample">
          <strong>Markup</strong>
          <pre><code class="language-markup">&lt;p class="small"&gt;This is small paragraph text.&lt;/p&gt;
&lt;p&gt;Regular text &lt;small&gt;(This is a small text block)&lt;/small&gt; wrapping the small text.&lt;/p&gt;</code></pre>
        </div>
        <div class="code-sample">
          <strong>Style</strong>
          <prism language="css" :class="getSelectedUnit">font-size: {{ unitValue(14) }};</prism>
        </div>
      </div>

      <h3>Subtle Text</h3>
      <p>This style de-emphasizes sentences or paragraphs, such as for micro-copy, minor details, or information that isn’t useful for most users.</p>
      <div class="example">
        <p>This is <span class="subtle">subtle text</span> in a paragraph.</p>
      </div>
      <div class="attributes">
        <div class="code-sample">
          <strong>Markup</strong>
          <pre><code class="language-markup">&lt;p&gt;This is &lt;span class="subtle"&gt;subtle text&lt;/p&gt; in a paragraph.&lt;/p&gt;</code></pre>
        </div>
        <div class="code-sample">
          <strong>Style</strong>
          <pre><code class="language-css" :class="getSelectedUnit">color: rgba(55, 55, 63, 0.77);
// 77% of $pearl-700; //</code></pre>
        </div>
      </div>

      <h3>Strong Text</h3>
      <p>
        This style provides additional emphasis to bring attention to a specific word or phrases; don’t use for entire sentences or paragraphs.
        <br><strong>Don’t use the <span>&lt;b&gt;</span> tag, ever!</strong> 💀
      </p>
      <div class="example">
        <p>This is <strong>strong text</strong> in a paragraph.</p>
      </div>
      <div class="attributes">
        <div class="code-sample">
          <strong>Markup</strong>
          <prism language="markup"><p>This is <strong>strong text</strong> in a paragraph.</p></prism>
        </div>
        <div class="code-sample">
          <strong>Style</strong>
          <prism language="css" :class="getSelectedUnit">
            font-weight: bold;
          </prism>
        </div>
      </div>
      <h3>No Margins</h3>
      <p>Default margins on any header or block element (eg: <code>h2</code> or <code>p</code>) can be removed by adding a class of <code>no-margin</code> to it.</p>
      <div class="example">
        <h3 class="no-margin">This is H3 element has no margin.</h3>
      </div>
      <div class="attributes">
        <div class="code-sample">
          <strong>Markup</strong>
          <prism language="markup"><h3 class="no-margin">This is H3 element has no margin.</h3></prism>
        </div>
        <div class="code-sample">
          <strong>Style</strong>
          <prism language="css" :class="getSelectedUnit">margin: 0;</prism>
        </div>
      </div>
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
          <pre><code class="language-css" :class="getSelectedUnit">ul {
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
          <pre><code class="language-css" :class="getSelectedUnit">ol {
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

    <section>
      <h2>General Reccomendations</h2>
      <h3 id="line-length">Line length</h3>
      <p>Our ideal range is from 60 to 80 characters. The character count in a line of text has a big impact on readability.</p>

      <h4>Test it out</h4>
      <p>Copy & paste the Lorem Ipsum paragraph below into your design file or code. You should only have 1 asterisk* since asterisks* are at 60 and 80 characters. If you have 0 or 2, that means your text is too narrow or too wide. </p>

      <div class="line-length-container">
        <div class="line-length-content">
          <p class="line-length-labels">
            <span class="subtle small">Characters</span>
            <span class="small char-50">50</span>
            <span class="small char-60">60</span>
            <span class="small ideal">Ideal 🎉</span>
            <span class="small char-80">80</span>
            <span class="small char-104">104</span>
          </p>
          <div class="line-0"></div>
          <div class="line-50"></div>
          <div class="line-60"></div>
          <div class="line-80"></div>
          <div class="line-104"></div>
          <p class="line-length-50">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam* condimentum, magna* at eleifend facilisis, tellus justo finibus est, sed maximus diam urna quis eros. Aliquam dictum ultrices magna.</p>
          <p class="line-length-60">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam* condimentum, magna* at eleifend facilisis, tellus justo finibus est, sed maximus diam urna quis eros. Aliquam dictum ultrices magna.</p>
          <p class="line-length-80">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam* condimentum, magna* at eleifend facilisis, tellus justo finibus est, sed maximus diam urna quis eros. Aliquam dictum ultrices magna.</p>
          <p class="line-length-104">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam* condimentum, magna* at eleifend facilisis, tellus justo finibus est, sed maximus diam urna quis eros. Aliquam dictum ultrices magna.</p>
        </div>
      </div>
    </section>
    <section>
      <h2 id="font-stack">Font Stack</h2>
      <p>We use the same font stack regardless of the device. GT Walsheim is our typeface for it’s friendly and unique personality, as well as its web readability.</p>

      <prism language="css">font-family: "GT-Walsheim", "Avenir", "Helvetica Neue", Helvetica, Arial, sans-serif;</prism>

      <h3>Alternative glyphs</h3>
      <p>This refers to alphanumeric characters where we’ve deviated from GT Walsheim’s default for readability reasons.</p>

      <p>Across the board we use the alternate Y, both lower and uppercase. </p>
      <div class="alternative-glyphs-container">
        <div class="alternative-examples">
          <img src="~@/assets/alternative-y.png">
        </div>
        <div class="alternative-copy">
          <strong>Style</strong>
          <prism language="css">font-feature-settings: "kern", "liga", “pnum”, "ss04";</prism>
        </div>
      </div>
      <h3>Tabular Figures</h3>
      <p>For lists and tables with numbers, we use tabular figures (also known as monospaced numbers) for all text. This will ensure vertical alignment among numbers and special characters.</p>
      <div class="alternative-glyphs-container">
        <div class="alternative-examples">
          <img src="~@/assets/tabular-figures@2x.png">
        </div>
        <div class="alternative-copy">
          <strong>Style</strong>
          <prism language="css">font-feature-settings: "kern", "liga", “tnum”, "ss04";</prism>
          <strong>Markup</strong>
          <prism language="markup"><span class="tab-numbers">0123456789</span></prism>
        </div>
      </div>
    </section>
  </article>
</template>

<script>
import { mapGetters, mapActions } from '@/lib/vue';
// import prism from 'vue-prismjs';
import typography from './typography.data';

export default {
  // components: { prism },
  data() {
    return {
      name: 'typography',
      title: 'Typography',
      isMobile: false,
      typography,
    };
  },
  computed: {
    ...mapGetters(['getSelectedUnit', 'getSelectedScreen']),
  },
  methods: {
    ...mapActions(['setScreen', 'setUnit']),
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
margin: ${this.propScreenValue(tag, 'marginTop')} 0 ${this.propScreenValue(tag, 'marginBottom')};`;
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

  h1, .h1 {
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

    &.desktop { @include desktop; }
  }

  h2, .h2 {
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

    &.desktop { @include desktop; }
  }

  h3, .h3 {
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

    &.desktop { @include desktop; }
  }

  h4, .h4 {
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

    &.desktop { @include desktop; }
  }

  h5, .h5 {
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

    &.desktop { @include desktop; }
  }

  section {
    padding-bottom: 2rem;
    // margin-bottom: 3rem;
    border-bottom: 1px solid $neutral-100;
    }

  .convert {
    width: 100%;
    margin: 0 0 1rem;
    @media #{$screen-width-medium} { table-layout: fixed; }
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
    @media #{$screen-width-medium} { display: flex; }
    > p { flex: 1 1 100%; }
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
      &:last-child { padding-left: 1rem; }
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
    > h1, > h2, > h3, > h4, > h5, > h6 {
      background: $white;
      border-top: 1px solid $tertiary-100;
      border-bottom: 1px solid $tertiary-100;
    }
    > p, > strong, > small, > .small, > .subtle {
      background: $white;
      border-top: 1px solid $tertiary-100;
      border-bottom: 1px solid $tertiary-100;
      &:first-child { border-top: none; }
    }
    ul, ol {
      background: $tertiary-50;
      border-top: none;
      border-bottom: 1px solid $tertiary-100;
      li {
        background: $white;
        ul, ol {
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
      .line-length-50 { max-width: 22rem; }

      .line-length-60 { max-width: 28rem; }

      .line-length-80 { max-width: 38rem; }

      .line-length-104 { max-width: 52rem; }

      .line-length-labels {
        .char-50,
        .char-60,
        .char-80,
        .char-104,
        .ideal {
          position: absolute;
          top: 0;
        }

        .char-50 { left: 22rem; }
        .char-60 { left: 28rem; }
        .ideal { left: 31rem; }
        .char-80 { left: 38rem; }
        .char-104 { left: 52rem; }
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
        .line-length-104, .line-104, .char-104 { display: none; }
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
        img { max-width: 21rem; }
      }
    }
  }
</style>
