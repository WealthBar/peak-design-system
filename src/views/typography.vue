<template>
  <!-- <section class="typography-page"> -->
    <article>
      <div class="typography-intro">
        <h1>Typography</h1>
        <a name="typography"></a>
        <p>WealthBar’s typography is a balance between readability and personality. Using our set of defined typography styles ensures consistent quality and a clear hierarchy.</p>
        <div class="download-typography">
          <p>Instantly apply on-point typography! 👌🏾</p>
          <button type="button" href="#">Download the CSS file</button>
        </div>
      </div>
      <hr />
     <strong>Screen Size</strong>
        <button class="toggle" @click="isMobile = !isMobile">
          <span :data-active="!isMobile">Desktop</span>
          <span :data-active="isMobile">Mobile</span>
        </button>
      <section>
        <h2 id="headers">Header Text</h2>
        <p>Headers create hierarchy in a layout and make scanning easy. Use them for content such as page titles or section titles. We have mobile and desktop header styles so that our typography is responsive to screen real estate. </p>


        <h3>H1 header</h3>
        <hr>
        <div class="example">
          <strong>Example</strong>
          <div>
            <h1 :class="[ isMobile ? 'mobile' : 'desktop' ]">This is a super large header.</h1>
          </div>
        </div>
        <div class="attributes">
          <div class="code-sample">
            <strong>Markup</strong>
            <pre><code class="html">&lt;h1&gt;This is a super large header.&lt;/h1&gt;</code></pre>
          </div>
          <div class="code-sample">
            <strong>Style</strong>
            <pre v-if="isMobile">
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
        <hr>
        <div class="example">
          <strong>Example</strong>
          <div>
            <h2 :class="[ isMobile ? 'mobile' : 'desktop' ]">This is a huge header.</h2>
          </div>
        </div>
        <div class="attributes">
          <div class="code-sample">
            <strong>Markup</strong>
            <pre>
              <code class="html">&lt;h2&gt;This is a huge header.&lt;/h2&gt;</code>
            </pre>
          </div>
          <div class="code-sample">
            <strong>Style</strong>
            <pre v-if="isMobile" >
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
        <hr>
        <div class="example">
          <strong>Example</strong>
          <div>
            <h3 :class="[ isMobile ? 'mobile' : 'desktop' ]">This is a big header.</h3>
          </div>
        </div>
        <div class="attributes">
          <div class="code-sample">
            <strong>Markup</strong>
            <pre>
              <code class="html">&lt;h3&gt;This is a big header.&lt;/h3&gt;</code>
            </pre>
          </div>
          <div class="code-sample">
            <strong>Style</strong>
            <pre v-if="isMobile">
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
        <hr>
        <div class="example">
          <strong>Example</strong>
          <div>
            <h4 :class="[ isMobile ? 'mobile' : 'desktop' ]">This is a medium header.</h4>
          </div>
        </div>
        <div class="attributes">
          <div class="code-sample">
            <strong>Markup</strong>
            <pre>
              <code class="html">&lt;h4&gt;This is a medium header.&lt;/h4&gt;</code>
            </pre>
          </div>
          <div class="code-sample">
            <strong>Style</strong>
            <pre v-if="isMobile">
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
        <hr>
        <div class="example">
          <strong>Example</strong>
          <div>
            <h5 :class="[ isMobile ? 'mobile' : 'desktop' ]">This is a small header.</h5>
          </div>
        </div>
        <div class="attributes">
          <div class="code-sample">
            <strong>Markup</strong>
            <pre>
              <code class="html">&lt;h5&gt;This is a small header.&lt;/h5&gt;</code>
            </pre>
          </div>
          <div class="code-sample">
            <strong>Style</strong>
            <pre v-if="isMobile">
              <code class="css">font-size: {{unitValue(16)}};
              line-height: {{unitValue(22)}};
              font-weight: 500;
              margin: {{unitValue(16)}} {{unitValue(0)}} {{unitValue(16)}};</code>
            </pre>
            <pre v-else><code class="css">
              font-size: {{unitValue(18)}};
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
        <hr>
        <div class="example">
          <strong>Example</strong>
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
        <strong>Notes</strong>
        <p>Our base paragraph style is the foundation of our typography. All styles are variants of this style. It is also the default text style, meaning if no style is applied or specified, it should use this style.</p>

        <h3>Large Text</h3>
        <hr>
        <div class="example">
          <strong>Example</strong>
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
        <strong>Notes</strong>
        <p>Only designed to work when applied to a paragraph &lt;p&gt; element.</p>

        <h3>Small Text</h3>
        <hr>
        <div class="example">
          <strong>Example</strong>
          <div>
            <p class="small">This is small paragraph text.</p>
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
        <strong>Notes</strong>
        <p>Small text, whether set as a class or as an inline element inherits basic sizing and spacing from the parent (eg: paragraph &lt;p&gt;) element.</p>

        <h3>Subtle Text</h3>
        <hr>
        <div class="example">
          <strong>Example</strong>
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
        <strong>Notes</strong>
        <p>This style de-emphasizes sentences or paragraphs, such as for micro-copy, minor details, or information that isn’t useful for most users.</p>


        <h3>Strong Text</h3>
        <hr>
        <div class="example">
          <strong>Example</strong>
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
        <strong>Notes</strong>
        <p>This style provides additional emphasis to bring attention to a specific word or phrases; don’t use for entire sentences or paragraphs. <strong>Don’t use the <span>&lt;b&gt;</span> tag, ever!</strong> 💀</p>
      </section>

      <section>
        <h2 id="lists">Lists</h2>
        <p>Lists inherit the paragraph’s style and use the paragraph’s spacing between list items to improve readability. List items are indented {{unitValue(8)}}.</p>

        <h3>Bulleted List</h3>
        <hr>
        <div class="example">
          <strong>Example</strong>
          <div>
            <ul>
              <li>Hey, here’s something that’s part of a list</li>
              <li>Here’s a long piece of text. What should go here I wonder. Just enough to push it to two lines. There we go!
                <ul>
                  <li>Here’s an example of a nested list item.</li>
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
                &nbsp;&nbsp;&lt;li&gt;unordered list item&lt;/li&gt;
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
                &nbsp;&nbsp;list-style-position: inside;
              }

              li {
                &nbsp;&nbsp;margin: 0 0 0.25rem;
              }</code>
            </pre>
          </div>
        </div>

        <h3>Numbered List</h3>
        <hr>
        <div class="example">
          <strong>Example</strong>
          <div>
            <ol>
              <li>Hey, here’s something that’s part of a list</li>
              <li>Here’s a long piece of text. What should go here I wonder. Just enough to push it to two lines. There we go!
                <ol>
                  <li>Here’s an example of a nested list item.</li>
                </ol>
              </li>
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
              &nbsp;&nbsp;&lt;li&gt;third list item&lt;/li&gt;
              &lt;/ol&gt;</code>
            </pre>
          </div>
          <div class="code-sample">
            <strong>Style</strong>
            <pre>
              <code class="css">ol {
                &nbsp;&nbsp;padding: 0;
                &nbsp;&nbsp;margin: 0 0 1rem;
                &nbsp;&nbsp;list-style-position: inside;
              }

              li {
                &nbsp;&nbsp;margin: 0 0 0.25rem;
              }</code>
            </pre>
          </div>
        </div>
      </section>

      <section>
        <h2 id="line-length">Line length</h2>
        <p>Our ideal range is from 60 to 80 characters. The character count in a line of text has a big impact on readability. <a href="#">See further reading on the topic.</a> </p>

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
        <hr />
      </section>
      <section>
        <h2 id="font-stack">Font Stack</h2>
        <p>We use the same font stack regardless of the device. GT Walsheim is our typeface for it’s friendly and unique personality, as well as its web readability.</p>

        <pre><code class="css">font-family: "GT-Walsheim", "Avenir", "Helvetica Neue", Helvetica, Arial, sans-serif;</code></pre>

        <h3>Alternative glyphs</h3>
        <hr>
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
        <hr>
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
  <!-- </section> -->
</template>

<script>
  import '@/lib/icons/close';
  import '@/lib/icons/check';
  import { mapGetters, mapActions } from '@/lib/vue';
  import toggleView from '../components/toggle_view';

  export default {
    data() {
      return {
        name: 'typography',
        title: 'Typography',
        isMobile: false,
        isPx: false,
      };
    },
    computed: {
      ...mapGetters(['getSelectedUnit', 'getUnits', 'getSelectedScreen', 'getScreens']),
    },
    methods: {
      ...mapActions(['setScreen', 'setUnits']),
      unitValue(value, ratio = 16) {
        if (this.getSelectedUnit === 'rem') {
          return `${value / ratio}${this.getSelectedUnit}`;
        }
        return `${value}${this.getSelectedUnit}`;
      },
    },
    components: {
      toggleView,
    },
  };
</script>

<style lang="scss">
  @import 'style.scss';

  .typography-page {
    margin: 2rem 4rem;
  }

  .typography-intro {
    position: relative;
  }

  .intro-copy {
    width: 35rem;
  }

  .download-typography {
    position: absolute;
    top: 2rem;
    left: 35rem;
    border: 1px solid $pearl-100;
    margin: 1.5rem;
    padding: 0.5rem;
    width: 14rem;
    border-radius: 2px;
    background-color: $white;
    z-index: 2;

    p {
      font-weight: bold;
    }
  }

  .attributes {
    display: flex;
    margin-bottom: 1rem;
  }

  .code-sample {
    display: flex;
    flex-direction: column;
    flex: 1 1 50%;
    &:last-child { padding-left: 1rem; }
    pre { flex: 1 1 50%; }
    code { height: 100%; }
  }

  .example {
    margin-bottom: 1rem;

    > :last-child {
      background: $pearl-50;
      border: 1px solid $pearl-300;
      border-radius: 0.25rem;
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
    }
  }

  .alternative-glyphs-container {
    display: flex;
    align-items: center;

    .alternative-examples {
      margin-right: 3rem;
      img { max-width: 21rem; }
    }
  }
</style>
