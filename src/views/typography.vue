<template>
  <section class="typography-page">
    <article>
      <div class="typography-intro">
        <h1>Typography</h1>
        <a name="typography"></a>
        <p class="intro-copy">WealthBar’s typography is a balance between readability and personality. Using our set of defined typography styles ensures consistent quality and a clear hierarchy.</p>
        <div class="download-typography">
          <p>Instantly apply on-point typography! 👌🏾</p>
          <button type="button" href="#">Download the CSS file</button>
        </div>
      </div>
      <hr />

      <section>
        <h2 class="section-headers"><a name="headers">Headers</a></h2>
        <p class="intro-copy">Headers create hierarchy in a layout and make scanning easy. Use them for content such as page titles or section titles. We have mobile and desktop header styles so that our typography is responsive to screen real estate. </p>

        <button class="toggle" @click="mobile = !mobile">
          <span :data-active="!mobile">Desktop</span>
          <span :data-active="mobile">Mobile</span>
        </button>

        <h1 :class="[ mobile ? 'mobile' : 'desktop' ]">H1 This is a super large header.</h1>
        <div class="code-sample">
          <!-- <h3>Markup</h3> -->
          <pre><code>&lt;h1&gt; H1 This is a super large header.&lt;/h1&gt;</code></pre>
          <!-- <h3>Style</h3>
          <pre><code>
            font-size: {{unitValue(26)}};
            line-height: {{unitValue(32)}};
            font-weight: 500;
            margin: {{unitValue(26)}} 0px {{unitValue(16)}};
          </code></pre> -->
          <div class="css-px">
            <ul v-if="mobile">
              <li>font-size: {{unitValue(26)}};</li>
              <li>line-height: {{unitValue(32)}};</li>
              <li>font-weight: 500;</li>
              <li>margin: {{unitValue(26)}} 0px {{unitValue(16)}};</li>
            </ul>
            <ul v-else>
              <li>font-size: {{unitValue(36)}};</li>
              <li>line-height: {{unitValue(48)}};</li>
              <li>font-weight: 500;</li>
              <li>margin: {{unitValue(36)}} 0px {{unitValue(16)}};</li>
            </ul>
          </div>
        </div>

        <h2 :class="[ mobile ? 'mobile' : 'desktop' ]">H2 This is a huge header.</h2>
        <div class="code-sample">
          <pre><code>&lt;h2&gt; H2 This is a huge header.&lt;/h2&gt;</code></pre>
          <div class="css-px">
            <ul v-if="mobile">
              <li>font-size: {{unitValue(24)}};</li>
              <li>line-height: {{unitValue(30)}};</li>
              <li>font-weight: 500;</li>
              <li>margin: {{unitValue(24)}} 0px {{unitValue(16)}};</li>
            </ul>
            <ul v-else>
              <li>font-size: {{unitValue(30)}};</li>
              <li>line-height: {{unitValue(36)}};</li>
              <li>font-weight: 500;</li>
              <li>margin: {{unitValue(30)}} 0px {{unitValue(16)}};</li>
            </ul>
          </div>
        </div>

        <h3 :class="[ mobile ? 'mobile' : 'desktop' ]">H3 This is a big header.</h3>
        <div class="code-sample">
          <pre><code>&lt;h3&gt; H3 This is a big header.&lt;/h3&gt;</code></pre>

          <div class="css-px">
            <ul v-if="mobile">
              <li>font-size: {{unitValue(22)}};</li>
              <li>line-height: {{unitValue(28)}};</li>
              <li>font-weight: 500;</li>
              <li>margin: {{unitValue(22)}} 0px {{unitValue(16)}};</li>
            </ul>
            <ul v-else>
              <li>font-size: {{unitValue(24)}};</li>
              <li>line-height: {{unitValue(30)}};</li>
              <li>font-weight: 500;</li>
              <li>margin: {{unitValue(24)}} 0px {{unitValue(16)}};</li>
            </ul>
          </div>
        </div>

        <h4 :class="[ mobile ? 'mobile' : 'desktop' ]">H4 This is a medium header.</h4>
        <div class="code-sample">
          <pre><code>&lt;h4&gt; H4 This is a medium header.&lt;/h4&gt;</code></pre>
          <div class="css-px">
            <ul v-if="mobile">
              <li>font-size: {{unitValue(18)}};</li>
              <li>line-height: {{unitValue(24)}};</li>
              <li>font-weight: 500;</li>
              <li>margin: {{unitValue(18)}} 0px {{unitValue(16)}};</li>
            </ul>
            <ul v-else>
              <li>font-size: {{unitValue(20)}};</li>
              <li>line-height: {{unitValue(26)}};</li>
              <li>font-weight: 500;</li>
              <li>margin: {{unitValue(20)}} 0px {{unitValue(16)}};</li>
            </ul>
          </div>
        </div>

        <h5 :class="[ mobile ? 'mobile' : 'desktop' ]">H5 This is a small header.</h5>
        <div class="code-sample">
          <pre><code>&lt;h5&gt; H5 This is a small header.&lt;/h5&gt;</code></pre>
          <div class="css-px">
            <ul v-if="mobile">
              <li>font-size: {{unitValue(16)}};</li>
              <li>line-height: {{unitValue(22)}};</li>
              <li>font-weight: 500;</li>
              <li>margin: {{unitValue(16)}} 0px {{unitValue(16)}};</li>
            </ul>
            <ul v-else>
              <li>font-size: {{unitValue(18)}};</li>
              <li>line-height: {{unitValue(24)}};</li>
              <li>font-weight: 500;</li>
              <li>margin: {{unitValue(18)}} 0px {{unitValue(16)}};</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 class="section-headers"><a name="paragraphs">Paragraphs</a></h2>
        <p class="intro-copy">Paragraphs are optimized for web readability. For additional emphasis or de-emphasis, we have 4 style classes that can be applied as needed to our base Paragraph style.</p>

        <h4>Base style</h4>
        <p class="intro-copy">Our base paragraph style is the foundation of our typography. All styles are variants of this style. It is also the default text style, meaning if no style is applied or specified, it should use this style.</p>

        <p>This is a paragraph.</p>
        <div class="code-sample">
          <pre><code>&lt;p&gt; This is a paragraph.&lt;/p&gt;</code></pre>
          <div class="css-px">
            <ul>
              <li>font-size: {{unitValue(16)}};</li>
              <li>line-height: {{unitValue(22)}};</li>
              <li>font-weight: 300;</li>
              <li>margin: {{unitValue(16)}} 0px {{unitValue(16)}};</li>
            </ul>
          </div>
        </div>

        <h4>Additional Styles</h4>
        <p class="large">This is large text.</p>

        <div class="code-sample">
          <pre><code>&lt;span class="large"&gt; This is large text.&lt;/span&gt;</code></pre>
          <div class="css-px">
            <ul>
              <li>font-size: {{unitValue(18)}};</li>
              <li>line-height: {{unitValue(24)}};</li>
              <li>margin: {{unitValue(18)}} 0px {{unitValue(18)}};</li>
            </ul>
          </div>
        </div>

        <p class="small">This is small text.</p>
        <div class="code-sample">
          <pre><code>&lt;small&gt; This is a small text.&lt;/small&gt;
&lt;span class="small"&gt; This is an alternate small text.&lt;/span&gt;</code></pre>
          <div class="css-px">
            <ul>
              <li>font-size: {{unitValue(14)}};</li>
              <li>line-height: {{unitValue(20)}};</li>
              <li>margin: {{unitValue(14)}} 0px {{unitValue(14)}};</li>
            </ul>
          </div>
        </div>

        <p>This is <span class="subtle">subtle text</span></p>
        <div class="code-sample">
          <pre><code>&lt;span class="subtle"&gt; This is a subtle text.&lt;/small&gt;</code></pre>
          <div class="text-description">
            <p>This style de-emphasizes sentences or paragraphs, such as for micro-copy, minor details, or information that isn’t useful for most users.</p>
            <p>colour: 77% $black;</p>
          </div>
        </div>

        <p> <strong>This is strong text</strong></p>
        <div class="code-sample">
          <pre><code>&lt;p&gt; This is strong text.&lt;/p&gt;</code></pre>
          <div class="text-description">
            <p>This style provides additional emphasis to bring attention to a specific word or phrases; don’t use for entire sentences or paragraphs.
            <p>font-weight: 500;</p>
            <p>Don’t use the <span>&lt;b&gt;</span> tag, ever! 💀</p>
          </div>
        </div>
      </section>

      <hr />

      <section>
        <h2 class="section-headers"><a name="lists">Lists</a></h2>
        <p class="intro-copy">Lists inherit the paragraph’s style and use the paragraph’s spacing between list items to improve readability. List items are indented 8px.</p>

        <h4>Bulleted List</h4>
        <div class="bulleted-list-example">
          <ul >
            <li>Hey, here’s something that’s part of a list</li>
            <li>Here’s a long piece of text. What should go here I wonder. Just enough to push it to two lines. There we go!
              <ul>
                <li>Here’s an example of a nested list item.</li>
              </ul>
            </li>
          </ul>
        </div>

        <div class="code-sample">
          <pre>
          <code>&lt;ul&gt;
  &lt;li&gt;unordered list item&lt;/li&gt;
  &lt;li&gt;unordered list item&lt;/li&gt;
  &lt;li&gt;unordered list item&lt;/li&gt;
&lt;/ul&gt;</code></pre>
        </div>

        <h4>Numbered List</h4>
        <div class="bulleted-list-example">
          <ol>
            <li>Hey, here’s something that’s part of a list</li>
            <li>Here’s a long piece of text. What should go here I wonder. Just enough to push it to two lines. There we go!
              <ol>
                <li>Here’s an example of a nested list item.</li>
              </ol>
            </li>
          </ol>
        </div>

        <div class="code-sample">
          <pre>
          <code>&lt;ol&gt;
  &lt;li&gt;first list item&lt;/li&gt;
  &lt;li&gt;first list item&lt;/li&gt;
  &lt;li&gt;first list item&lt;/li&gt;
&lt;/ol&gt;</code></pre>
        </div>
        <hr />
      </section>
      <section>
        <h2 class="section-headers"><a name="line-length">Line length</a></h2>
        <p class="intro-copy">Our ideal range is from 60 to 80 characters. The character count in a line of text has a big impact on readability. <a href="#">See further reading on the topic.</a> </p>

        <h4>Test it out</h4>
        <p class="intro-copy">Copy & paste the Lorem Ipsum paragraph below into your design file or code. You should only have 1 asterisk* since asterisks* are at 60 and 80 characters. If you have 0 or 2, that means your text is too narrow or too wide. </p>

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
        <h2 class="section-headers"><a name="font-stack">Font Stack</a></h2>
        <p class="intro-copy">We use the same font stack regardless of the device. GT Walsheim is our typeface for it’s friendly and unique personality, as well as its web readability.</p>

        <pre><code>font-family: "GT-Walsheim", "Avenir", "Helvetica Neue", Helvetica, Arial, sans-serif;</code></pre>

        <h4>Alternative glyphs</h4>
        <p class="intro-copy">This refers to alphanumeric characters where we’ve deviated from GT Walsheim’s default for readability reasons.</p>

        <div class="alternative-glyphs-container">
          <div class="alternative-examples">
            <img src="~@/assets/alternative-y.png" />
            <img src="~@/assets/tabular-figures@2x.png" />
          </div>
          <div class="alternative-copy">
            <p>Across the board we use the alternate Y, both lower and uppercase. </p>
            <pre><code>font-feature-settings: "kern", "liga", “pnum”, "ss04";</code></pre>

            <p>For lists and tables with numbers, we use tabular figures (also known as monospaced numbers) for all text. This will ensure vertical alignment among numbers and special characters.</p>
            <pre><code>font-feature-settings: "kern", "liga", “tnum”, "ss04";</code></pre>
            <pre><code>&lt;span class="tab-numbers"&gt;0123456789&lt;/span&gt;</code></pre>
          </div>
        </div>
        <hr />
      </section>
      <section>
        <h2 class="section-headers"><a name="measurements">Measurements</a></h2>
        <p class="intro-copy">We use REM to ensure our typography stays <button>scalable</button>  in a responsive web world. Our base REM is 16px, which means 2px is equal to 0.125rem, or 1/8rem. </p>
      </section>
    </article>
  </section>
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
        mobile: false,
      };
    },
    computed: {
      ...mapGetters(['getSelectedUnit', 'getSelectedScreen', 'getScreens']),
    },
    methods: {
      ...mapActions(['setScreen']),
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

  .code-sample {
    display: flex;

    > * {
      margin-right: 1rem;
      width: 28rem;
    }

    ul { list-style: none; }
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
    position: relative;
    margin-top: 3rem;

    .alternative-examples {
      display: flex;
      flex-direction: column;
      margin-right: 3rem;

      img:first-of-type {
        margin-bottom: 1rem;
      }

      img {
        width: 21rem;
      }
    }
  }
</style>
