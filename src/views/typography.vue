<template>
  <article class="container">
    <h1>Typography</h1>
    <div class="typography-intro">
      <p>WealthBar’s typography is a balance between readability and personality. Using our set of defined typography styles ensures consistent quality and a clear hierarchy.</p>
      <div class="download-typography">
        <p>Instantly apply on-point typography! 👌🏾</p>
        <button type="button" href="https://www.npmjs.com/package/@wealthbar/peak-base.css">Install the Peak Package</button>
      </div>
    </div>
    <hr />
    <section>
      <h2 id="units">Units in Peak: REMs vs Pixels</h2>
      <p>We use REMs (Relavive em) to ensure our typography stays scalable in a responsive web world. The Peak base unit of measure is <code>1rem == 16px</code>, which means 2px is equal to 0.125rem, or 1/8 of a REM. Ideally we want to adhire to this <strong>1/8th rem scale</strong> as much as possible.</p>
    </section>
    <section>
      <h2 id="headers">Header Text</h2>
      <p>Headers create hierarchy in a layout and make scanning easy. Use them for content such as page titles or section titles. We have mobile and desktop header styles so that our typography is responsive to screen real estate. </p>


      <h3>H1 header</h3>
      <div class="example">
        <!--  -->
        <div>
          <h1 :class="getSelectedScreen">This is a super large H1 header.</h1>
        </div>
      </div>
      <div class="attributes">
        <div class="code-sample">
          <strong>Markup</strong>
          <pre><code class="html">&lt;h1&gt;This is a super large H1 header.&lt;/h1&gt;</code></pre>
        </div>
        <div class="code-sample">
          <strong>Style</strong>
          <pre v-if="getSelectedScreen == 'mobile'">
            <code class="css">font-size: {{unitValue(26)}};
            line-height: {{unitValue(32)}};
            font-weight: 500;
            margin: {{unitValue(26)}} {{unitValue(0)}} {{unitValue(16)}};</code>
          </pre>
          <pre v-else>
            <code class="css">font-size: {{unitValue(36)}};
            line-height: {{unitValue(48)}};
            font-weight: 500;
            margin: {{unitValue(36)}} {{unitValue(0)}} {{unitValue(16)}};</code>
          </pre>
        </div>
      </div>



      <h3>H2 header</h3>
      <div class="example">

        <div>
          <h2 :class="getSelectedScreen">This is a huge H2 header.</h2>
        </div>
      </div>
      <div class="attributes">
        <div class="code-sample">
          <strong>Markup</strong>
          <pre>
            <code class="html">&lt;h2&gt;This is a huge H2 header.&lt;/h2&gt;</code>
          </pre>
        </div>
        <div class="code-sample">
          <strong>Style</strong>
          <pre v-if="getSelectedScreen == 'mobile'" >
            <code class="css">font-size: {{unitValue(24)}};
            line-height: {{unitValue(30)}};
            font-weight: 500;
            margin: {{unitValue(24)}} {{unitValue(0)}} {{unitValue(16)}};</code>
          </pre>
          <pre v-else>
            <code class="css">font-size: {{unitValue(30)}};
            line-height: {{unitValue(36)}};
            font-weight: 500;
            margin: {{unitValue(30)}} {{unitValue(0)}} {{unitValue(16)}};</code>
          </pre>
        </div>
      </div>


      <h3>H3 header</h3>
      <div class="example">

        <div>
          <h3 :class="getSelectedScreen">This is a big H3 header.</h3>
        </div>
      </div>
      <div class="attributes">
        <div class="code-sample">
          <strong>Markup</strong>
          <pre>
            <code class="html">&lt;h3&gt;This is a big H3 header.&lt;/h3&gt;</code>
          </pre>
        </div>
        <div class="code-sample">
          <strong>Style</strong>
          <pre v-if="getSelectedScreen == 'mobile'">
            <code class="css">font-size: {{unitValue(22)}};
            line-height: {{unitValue(28)}};
            font-weight: 500;
            margin: {{unitValue(22)}} {{unitValue(0)}} {{unitValue(16)}};</code>
          </pre>
          <pre v-else>
            <code class="css">font-size: {{unitValue(24)}};
            line-height: {{unitValue(30)}};
            font-weight: 500;
            margin: {{unitValue(24)}} {{unitValue(0)}} {{unitValue(16)}};</code>
          </pre>
        </div>
      </div>

      <h3>H4 header</h3>
      <div class="example">

        <div>
          <h4 :class="getSelectedScreen">This is a medium H4 header.</h4>
        </div>
      </div>
      <div class="attributes">
        <div class="code-sample">
          <strong>Markup</strong>
          <pre>
            <code class="html">&lt;h4&gt;This is a medium H4 header.&lt;/h4&gt;</code>
          </pre>
        </div>
        <div class="code-sample">
          <strong>Style</strong>
          <pre v-if="getSelectedScreen == 'mobile'">
            <code class="css">font-size: {{unitValue(18)}};
            line-height: {{unitValue(24)}};
            font-weight: 500;
            margin: {{unitValue(18)}} {{unitValue(0)}} {{unitValue(16)}};</code>
          </pre>
          <pre v-else>
            <code class="css">font-size: {{unitValue(20)}};
            line-height: {{unitValue(26)}};
            font-weight: 500;
            margin: {{unitValue(20)}} {{unitValue(0)}} {{unitValue(16)}};</code>
          </pre>
        </div>
      </div>

      <h3>H5 header</h3>
      <div class="example">

        <div>
          <h5 :class="getSelectedScreen">This is a small H5 header.</h5>
        </div>
      </div>
      <div class="attributes">
        <div class="code-sample">
          <strong>Markup</strong>
          <pre>
            <code class="html">&lt;h5&gt;This is a small H5 header.&lt;/h5&gt;</code>
          </pre>
        </div>
        <div class="code-sample">
          <strong>Style</strong>
          <pre v-if="getSelectedScreen == 'mobile'">
            <code class="css">font-size: {{unitValue(16)}};
            line-height: {{unitValue(22)}};
            font-weight: 500;
            margin: {{unitValue(16)}} {{unitValue(0)}} {{unitValue(16)}};</code>
          </pre>
          <pre v-else>
            <code class="css">font-size: {{unitValue(18)}};
            line-height: {{unitValue(24)}};
            font-weight: 500;
            margin: {{unitValue(18)}} {{unitValue(0)}} {{unitValue(16)}};</code>
          </pre>
        </div>
      </div>
    </section>

    <section>
      <h2 id="body">Body Text</h2>
      <p>Body text is optimized for web readability. For additional emphasis or de-emphasis, we have 4 style classes that can be applied as needed to our base paragraph style.</p>

      <h3>Paragraph</h3>
      <p>Our base paragraph style is the foundation of our typography. All styles are variants of this style. It is also the default text style, meaning if no style is applied or specified, it should use this style.</p>

      <div class="example">

        <div>
          <p>This is a paragraph.</p>
        </div>
      </div>
      <div class="attributes">
        <div class="code-sample">
          <strong>Markup</strong>
          <pre><code class="html">&lt;p&gt;This is a paragraph.&lt;/p&gt;</code></pre>
        </div>
        <div class="code-sample">
          <strong>Style</strong>
          <pre>
            <code class="css">font-size: {{unitValue(16)}};
            line-height: {{unitValue(22)}};
            font-weight: 300;
            margin: {{unitValue(0)}} {{unitValue(0)}} {{unitValue(16)}};</code>
          </pre>
        </div>
      </div>

      <h3>Large Text</h3>
      <p>Only designed to work when applied to a paragraph &lt;p&gt; element.</p>
      <div class="example">

        <div>
          <p class="large">This is large paragraph text.</p>
        </div>
      </div>
      <div class="attributes">
        <div class="code-sample">
          <strong>Markup</strong>
          <pre>
            <code class="html">&lt;p class="large"&gt;This is large paragraph text.&lt;/p&gt;</code>
          </pre>
        </div>
        <div class="code-sample">
          <strong>Style</strong>
          <pre>
            <code class="css">font-size: {{unitValue(18)}};
            line-height: {{unitValue(24)}};
            font-weight: 300;
            margin: {{unitValue(18)}} {{unitValue(0)}} {{unitValue(18)}};</code>
          </pre>
        </div>
      </div>


      <h3>Small Text</h3>
      <p>Whether set as a class or as an inline element inherits basic sizing and spacing from the parent (eg: paragraph &lt;p&gt;) element.</p>
      <div class="example">

        <div>
          <p class="small">This is small paragraph text.</p>
          <br>
          <small>This is a small text block.</small>
        </div>
      </div>
      <div class="attributes">
        <div class="code-sample">
          <strong>Markup</strong>
          <pre>
            <code class="html">&lt;p class="small"&gt;This is small paragraph text.&lt;/p&gt;<br>&lt;small&gt;This is a small text block.&lt;/small&gt;</code>
          </pre>
        </div>
        <div class="code-sample">
          <strong>Style</strong>
          <pre>
            <code class="css">font-size: {{unitValue(14)}};</code>
          </pre>
        </div>
      </div>

      <h3>Subtle Text</h3>
      <p>This style de-emphasizes sentences or paragraphs, such as for micro-copy, minor details, or information that isn’t useful for most users.</p>
      <div class="example">

        <div>
          <p >This is <span class="subtle">subtle text</span> in a paragraph.</p>
        </div>
      </div>
      <div class="attributes">
        <div class="code-sample">
          <strong>Markup</strong>
          <pre>
            <code class="html">&lt;p&gt;This is &lt;span class="subtle"&gt;subtle text&lt;/p&gt; in a paragraph.&lt;/p&gt;</code>
          </pre>
        </div>
        <div class="code-sample">
          <strong>Style</strong>
          <pre>
            <code class="css">color: rgba(55, 55, 63, 0.77);
            // 77% of $pearl-700; //</code>
          </pre>
        </div>
      </div>

      <h3>Strong Text</h3>
      <p>This style provides additional emphasis to bring attention to a specific word or phrases; don’t use for entire sentences or paragraphs.
        <br><strong>Don’t use the <span>&lt;b&gt;</span> tag, ever!</strong> 💀
      </p>
      <div class="example">

        <div>
          <p>This is <strong>strong text</strong> in a paragraph.</p>
        </div>
      </div>
      <div class="attributes">
        <div class="code-sample">
          <strong>Markup</strong>
          <pre>
            <code class="html">&lt;p&gt;This is &lt;strong&gt;strong text&lt;/strong&gt; in a paragraph.&lt;/p&gt;</code>
          </pre>
        </div>
        <div class="code-sample">
          <strong>Style</strong>
          <pre>
            <code class="css">font-weight: 500;</code>
          </pre>
        </div>
      </div>

    </section>

    <section>
      <h2 id="lists">Lists</h2>
      <p>Lists inherit the paragraph’s style and use the paragraph’s spacing between list items to improve readability. List items are indented {{unitValue(8)}}.</p>

      <h3>Bulleted List</h3>
      <div class="example">

        <div>
          <ul>
            <li>Hey, here’s something that’s part of default list</li>
            <li>This is the second item in the list. What should go here I wonder. Just enough to push it to two lines. There we go!</li>
          </ul>
          <ul class="bullet">
            <li>Hey, here’s something that’s part of a bulleted list</li>
            <li>Here’s a long piece of text. What should go here I wonder. Just enough to push it to two lines. There we go!
              <ul class="bullet">
                <li>This is a nested bulleted list</li>
                <li>Let's have one more item</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div class="attributes">
        <div class="code-sample">
          <strong>Markup</strong>
          <pre>
            <code class="html">&lt;ul&gt;
              &nbsp;&nbsp;&lt;li&gt;unordered list item&lt;/li&gt;
              &nbsp;&nbsp;&lt;li&gt;unordered list item&lt;/li&gt;
            &lt;/ul&gt;

            &lt;ul class="bullet"&gt;
              &nbsp;&nbsp;&lt;li&gt;unordered list item&lt;/li&gt;
              &nbsp;&nbsp;&lt;li&gt;
              &nbsp;&nbsp;&nbsp;&nbsp;unordered list item
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;ul class="bullet"&gt;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;unordered list item&lt;/li&gt;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;unordered list item&lt;/li&gt;
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;/ul&gt;
              &nbsp;&nbsp;&lt;/li&gt;
            &lt;/ul&gt;
          </code>
          </pre>
        </div>
        <div class="code-sample">
          <strong>Style</strong>
          <pre>
            <code class="css">ul {
              &nbsp;&nbsp;padding: 0;
              &nbsp;&nbsp;margin: 0 0 1rem;
              &nbsp;&nbsp;list-style: none;
              }

              ul.bullet { list-style: disc; }

              li ul {
              &nbsp;&nbsp;padding-left: 1rem;
              &nbsp;&nbsp;margin: 0;
            }</code>
          </pre>
        </div>
      </div>

      <h3>Numbered List</h3>
      <div class="example">

        <div>
          <ol>
            <li>Hey, here’s something that’s part of an ordered list</li>
            <li>Here’s a long piece of text. What should go here I wonder. Just enough to push it to two lines. There we go!</li>
          </ol>
        </div>
      </div>
      <div class="attributes">
        <div class="code-sample">
          <strong>Markup</strong>
          <pre>
            <code class="html">&lt;ol&gt;
            &nbsp;&nbsp;&lt;li&gt;first list item&lt;/li&gt;
            &nbsp;&nbsp;&lt;li&gt;second list item&lt;/li&gt;
            &lt;/ol&gt;</code>
          </pre>
        </div>
        <div class="code-sample">
          <strong>Style</strong>
          <pre>
            <code class="css">ol {
              &nbsp;&nbsp;padding: 0;
              &nbsp;&nbsp;margin: 0 0 1rem;
              &nbsp;&nbsp;list-style: decimal;
              }

              li ol {
              &nbsp;&nbsp;padding-left: 1rem;
              &nbsp;&nbsp;margin: 0;
            }</code>
          </pre>
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

      <pre><code class="css">font-family: "GT-Walsheim", "Avenir", "Helvetica Neue", Helvetica, Arial, sans-serif;</code></pre>

      <h3>Alternative glyphs</h3>
      <p>This refers to alphanumeric characters where we’ve deviated from GT Walsheim’s default for readability reasons.</p>

      <p>Across the board we use the alternate Y, both lower and uppercase. </p>
      <div class="alternative-glyphs-container">
        <div class="alternative-examples">
          <img src="~@/assets/alternative-y.png" />
        </div>
        <div class="alternative-copy">
          <strong>Style</strong>
          <pre><code class="css">font-feature-settings: "kern", "liga", “pnum”, "ss04";</code></pre>
        </div>
      </div>
      <h3>Tabular Figures</h3>
      <p>For lists and tables with numbers, we use tabular figures (also known as monospaced numbers) for all text. This will ensure vertical alignment among numbers and special characters.</p>
      <div class="alternative-glyphs-container">
        <div class="alternative-examples">
          <img src="~@/assets/tabular-figures@2x.png" />
        </div>
        <div class="alternative-copy">
          <strong>Style</strong>
          <pre><code class="css">font-feature-settings: "kern", "liga", “tnum”, "ss04";</code></pre>
          <strong>Markup</strong>
          <pre><code>&lt;span class="tab-numbers"&gt;0123456789&lt;/span&gt;</code></pre>
        </div>
      </div>


    </section>
    <section>
      <h2 id="measurements">Measurements</h2>
      <p>We use REM to ensure our typography stays <button>scalable</button>  in a responsive web world. Our base REM is 16px, which means 2px is equal to 0.125rem, or 1/8rem. </p>
    </section>
  </article>
</template>

<script>
  import '@/lib/icons/close';
  import '@/lib/icons/check';
  import { mapGetters, mapActions } from '@/lib/vue';

  export default {
    data() {
      return {
        name: 'typography',
        title: 'Typography',
        isMobile: false,
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
    margin-bottom: 3rem;
    border-bottom: 1px solid $neutral-300;
    }

  ul, ol {
    list-style-position: inside;
  }

  .typography-page {
    margin: 2rem 4rem;
  }

  .typography-intro {
    position: relative;
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
    // width: 14rem;
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
      pre { flex: 1 1 50%; }
      code { height: 100%; }
    }
  }

  .example {
    margin-bottom: 1rem;

    > div {
      background: $tertiary-50;
      border-top: 1px solid $white;
      border-bottom: 1px solid $white;
      > h1, > h2, > h3, > h4, > h5, > h6 {
        background: $white;
        border-top: 1px solid $tertiary-100;
        border-bottom: 1px solid $tertiary-100;
      }
      > p, > strong, > small, > .small, > .subtle {
        background: $white;
        border-bottom: 1px solid $tertiary-100;
      }
      ul, ol {
        background: $tertiary-50;
        border-bottom: 1px solid $tertiary-100;
        li {
          background: $white;
          ul, ol { border-bottom: none; }
        }
      }
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
        border-color: $jade-300;
        left: 28rem;
      }

      .line-80 {
        border-color: $jade-300;
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
