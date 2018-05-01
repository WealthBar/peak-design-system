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

        <toggle-view>
          <ul slot="content" class="unit-selector">
            <li v-for="screen in getScreens" @click="setScreen(screen)" :key="screen" :class="{'active': getSelectedScreen === screen}">{{screen}}</li>
          </ul>
        </toggle-view>

        <h1 class="mobile-h1" v-if="getSelectedScreen === 'Mobile'">H1 This is a super large header.</h1>
        <h1 v-else> H1 This is a super large header.</h1>
        <div class="code-sample">
          <pre><code>&lt;h1&gt; H1 This is a super large header.&lt;/h1&gt;</code></pre>
          <div v-if="getSelectedUnit === 'rem' && getSelectedScreen === 'Desktop'" class="css-px">
            <ul>
              <li>font-size: 2.25rem;</li>
              <li>line-height: 3rem;</li>
              <li>font-weight: 500;</li>
              <li>padding: 2.25rem 0px 1rem;</li>
            </ul>
          </div>
          <div v-if="getSelectedUnit === 'rem' && getSelectedScreen === 'Mobile'" class="css-px">
            <ul>
              <li>font-size: 1.625rem;</li>
              <li>line-height: 2rem;</li>
              <li>font-weight: 500;</li>
              <li>padding: 1.625rem 0px 1rem;</li>
            </ul>
          </div>
          <div div v-else-if="getSelectedUnit === 'px' && getSelectedScreen === 'Mobile'" class="css-px">
            <ul>
              <li>font-size: 26px;</li>
              <li>line-height: 32px;</li>
              <li>font-weight: 500;</li>
              <li>padding: 26px 0px 16px;</li>
            </ul>
          </div>
          <div v-else-if="getSelectedUnit === 'px' && getSelectedScreen === 'Desktop'"  class="css-px">
            <ul>
              <li>font-size: 36px;</li>
              <li>line-height: 48px;</li>
              <li>font-weight: 500;</li>
              <li>padding: 36px 0px 16px;</li>
            </ul>
          </div>
        </div>
        <h2 class="mobile-h2" v-if="getSelectedScreen === 'Mobile'" >H2 This is a huge header.</h2>
        <h2 v-else >H2 This is a huge header.</h2>
        <div class="code-sample">
          <pre><code>&lt;h2&gt; H2 This is a huge header.&lt;/h2&gt;</code></pre>
          <div v-if="getSelectedUnit === 'rem' && getSelectedScreen === 'Desktop'" class="css-px">
            <ul>
              <li>font-size: 1.875rem;</li>
              <li>line-height: 2.25rem;</li>
              <li>font-weight: 500;</li>
              <li>padding: 1.875rem 0px 1rem;</li>
            </ul>
          </div>
          <div v-if="getSelectedUnit === 'rem' && getSelectedScreen === 'Mobile'" class="css-px">
            <ul>
              <li>font-size: 1.5rem;</li>
              <li>line-height: 1.875rem;</li>
              <li>font-weight: 500;</li>
              <li>padding: 1.5rem 0px 1rem;</li>
            </ul>
          </div>
          <div div v-else-if="getSelectedUnit === 'px' && getSelectedScreen === 'Mobile'" class="css-px">
            <ul>
              <li>font-size: 24px;</li>
              <li>line-height: 30px;</li>
              <li>font-weight: 500;</li>
              <li>padding: 24px 0px 16px;</li>
            </ul>
          </div>
          <div v-else-if="getSelectedUnit === 'px' && getSelectedScreen === 'Desktop'" class="css-px">
            <ul>
              <li>font-size: 30px;</li>
              <li>line-height: 36px;</li>
              <li>font-weight: 500;</li>
              <li>padding: 30px 0px 16px;</li>
            </ul>
          </div>
        </div>

        <h3 class="mobile-h3" v-if="getSelectedScreen === 'Mobile'" >H3 This is a big header.</h3>
        <h3 v-else >H3 This is a big header.</h3>
        <div class="code-sample">
          <pre><code>&lt;h3&gt; H3 This is a big header.&lt;/h3&gt;</code></pre>
          <div v-if="getSelectedUnit === 'rem' && getSelectedScreen === 'Desktop'" class="css-px">
            <ul>
              <li>font-size: 1.5rem;</li>
              <li>line-height: 1.875rem;</li>
              <li>font-weight: 500;</li>
              <li>padding: 1.5rem 0px 1rem;</li>
            </ul>
          </div>
          <div v-if="getSelectedUnit === 'rem' && getSelectedScreen === 'Mobile'" class="css-px">
            <ul>
              <li>font-size: 1.375rem;</li>
              <li>line-height: 1.75rem;</li>
              <li>font-weight: 500;</li>
              <li>padding: 1.375rem 0px 1rem;</li>
            </ul>
          </div>
          <div div v-else-if="getSelectedUnit === 'px' && getSelectedScreen === 'Mobile'" class="css-px">
            <ul>
              <li>font-size: 22px;</li>
              <li>line-height: 28px;</li>
              <li>font-weight: 500;</li>
              <li>padding: 22px 0px 16px;</li>
            </ul>
          </div>
          <div v-else-if="getSelectedUnit === 'px' && getSelectedScreen === 'Desktop'" class="css-px">
            <ul>
              <li>font-size: 24px;</li>
              <li>line-height: 30px;</li>
              <li>font-weight: 500;</li>
              <li>padding: 24px 0px 16px;</li>
            </ul>
          </div>
        </div>

        <h4 class="mobile-h4" v-if="getSelectedScreen === 'Mobile'">H4 This is a medium header.</h4>
        <h4 v-else>H4 This is a medium header.</h4>
        <div class="code-sample">
          <pre><code>&lt;h4&gt; H4 This is a medium header.&lt;/h4&gt;</code></pre>
          <div v-if="getSelectedUnit === 'rem' && getSelectedScreen === 'Desktop'" class="css-px">
            <ul>
              <li>font-size: 1.25rem;</li>
              <li>line-height: 1.625rem;</li>
              <li>font-weight: 500;</li>
              <li>padding: 1.25rem 0px 1rem;</li>
            </ul>
          </div>
          <div v-if="getSelectedUnit === 'rem' && getSelectedScreen === 'Mobile'" class="css-px">
            <ul>
              <li>font-size: 1.125rem;</li>
              <li>line-height: 1.5rem;</li>
              <li>font-weight: 500;</li>
              <li>padding: 1.125rem 0px 1rem;</li>
            </ul>
          </div>
          <div div v-else-if="getSelectedUnit === 'px' && getSelectedScreen === 'Mobile'" class="css-px">
            <ul>
              <li>font-size: 18px;</li>
              <li>line-height: 24px;</li>
              <li>font-weight: 500;</li>
              <li>padding: 18px 0px 16px;</li>
            </ul>
          </div>
          <div v-else-if="getSelectedUnit === 'px' && getSelectedScreen === 'Desktop'" class="css-px">
            <ul>
              <li>font-size: 20px;</li>
              <li>line-height: 26px;</li>
              <li>font-weight: 500;</li>
              <li>padding: 20px 0px 16px;</li>
            </ul>
          </div>
        </div>

        <h5 class="mobile-h4" v-if="getSelectedScreen === 'Mobile'">H5 This is a small header.</h5>
        <h5 v-else>H5 This is a small header.</h5>
        <div class="code-sample">
          <pre><code>&lt;h5&gt; H5 This is a small header.&lt;/h5&gt;</code></pre>
          <div v-if="getSelectedUnit === 'rem' && getSelectedScreen === 'Desktop'" class="css-px">
            <ul>
              <li>font-size: 1.125rem;</li>
              <li>line-height: 1.5rem;</li>
              <li>font-weight: 500;</li>
              <li>padding: 1.125rem 0px 1rem;</li>
            </ul>
          </div>
          <div v-if="getSelectedUnit === 'rem' && getSelectedScreen === 'Mobile'" class="css-px">
            <ul>
              <li>font-size: 1rem;</li>
              <li>line-height: 1.375rem;</li>
              <li>font-weight: 500;</li>
              <li>padding: 1rem 0px 1rem;</li>
            </ul>
          </div>
          <div div v-else-if="getSelectedUnit === 'px' && getSelectedScreen === 'Mobile'" class="css-px">
            <ul>
              <li>font-size: 16px;</li>
              <li>line-height: 22px;</li>
              <li>font-weight: 500;</li>
              <li>padding: 16px 0px 16px;</li>
            </ul>
          </div>
          <div v-else-if="getSelectedUnit === 'px' && getSelectedScreen === 'Desktop'" class="css-px">
            <ul>
              <li>font-size: 18px;</li>
              <li>line-height: 24px;</li>
              <li>font-weight: 500;</li>
              <li>padding: 18px 0px 16px;</li>
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
          <div v-if="getSelectedUnit === 'rem'" class="css-px">
            <ul>
              <li>font-size: 1rem;</li>
              <li>line-height: 1.375rem;</li>
              <li>font-weight: 500;</li>
              <li>padding: 1rem 0px 1rem;</li>
            </ul>
          </div>
          <div v-else class="css-px">
            <ul>
              <li>font-size: 16px;</li>
              <li>line-height: 22px;</li>
              <li>font-weight: 300;</li>
              <li>padding: 16px 0px 16px;</li>
            </ul>
          </div>
        </div>

        <h4>Additional Styles</h4>
        <p class="large">This is large text.</p>

        <div class="code-sample">
          <pre><code>&lt;span class="large"&gt; This is large text.&lt;/span&gt;</code></pre>
          <div v-if="getSelectedUnit === 'rem'" class="css-px">
            <ul>
              <li>font-size: 1.125rem;</li>
              <li>line-height: 1.5rem;</li>
              <li>padding: 1.125rem 0px 1.125rem;</li>
            </ul>
          </div>
          <div v-else class="css-px">
            <ul>
              <li>font-size: 18px;</li>
              <li>line-height: 24px;</li>
              <li>padding: 18px 0px 18px;</li>
            </ul>
          </div>
        </div>

        <p class="small">This is small text.</p>
        <div class="code-sample">
          <pre><code>&lt;small&gt; This is a small text.&lt;/small&gt;
&lt;span class="small"&gt; This is an alternate small text.&lt;/span&gt;</code></pre>
          <div v-if="getSelectedUnit === 'rem'" class="css-px">
            <ul>
              <li>font-size: 0.875rem;</li>
              <li>line-height: 1.52rem;</li>
              <li>padding: 0.875rem 0px 0.875rem;</li>
            </ul>
          </div>
          <div div v-else class="css-px">
            <ul>
              <li>font-size: 14px;</li>
              <li>line-height: 20px;</li>
              <li>padding: 14px 0px 14px;</li>
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
          <ol >
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
            <div class="line-length-labels">
            <p class="subtle small">Characters</p>
            <p class="small">50</p>
            <p class="small">60</p>
            <p class="small">Ideal 🎉</p>
            <p class="small">80</p>
            <p class="small">105</p>
            </div>
            <div class="line-0"></div>
            <div class="line-50"></div>
            <div class="line-60"></div>
            <div class="line-80"></div>
            <div class="line-105"></div>
            <p class="line-length-50">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam* condimentum, magna* at eleifend facilisis, tellus justo finibus est, sed maximus diam urna quis eros. Aliquam dictum ultrices magna.</p>
            <p class="line-length-60">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam* condimentum, magna* at eleifend facilisis, tellus justo finibus est, sed maximus diam urna quis eros. Aliquam dictum ultrices magna.</p>
            <p class="line-length-80">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam* condimentum, magna* at eleifend facilisis, tellus justo finibus est, sed maximus diam urna quis eros. Aliquam dictum ultrices magna.</p>
            <p class="line-length-105">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam* condimentum, magna* at eleifend facilisis, tellus justo finibus est, sed maximus diam urna quis eros. Aliquam dictum ultrices magna.</p>
          </div>
        </div>
        <hr />
      </section>
      <section>
        <h2 class="section-headers"><a name="font-stack">Font Stack</a></h2>
        <p class="intro-copy">We use the same font stack regardless of the device. GT Walsheim is our typeface for it’s friendly and unique personality, as well as its web readability.</p>

        <div class="code-sample">
        <pre><code>font-family: "GT-Walsheim", "Avenir", "Helvetica Neue", Helvetica, Arial, sans-serif;</code></pre>
        </div>

        <h4>Alternative glyphs</h4>
        <p class="intro-copy">This refers to alphanumeric characters where we’ve deviated from GT Walsheim’s default for readability reasons.</p>

        <div class="alternative-glyphs-container">
          <div class="alternative-examples">
            <img src="~@/assets/alternative-y.png" />
            <img src="~@/assets/tabular-figures@2x.png" />
          </div>
          <div class="alternative-copy">
            <p>Across the board we use the alternate Y, both lower and uppercase. </p>
            <div class="code-sample">
              <pre><code>font-feature-settings: "kern", "liga", “pnum”, "ss04";</code></pre>
            </div>
            <p>For lists and tables with numbers, we use tabular figures (also known as monospaced numbers) for all text. This will ensure vertical alignment among numbers and special characters.</p>
            <div class="code-sample">
              <pre><code>font-feature-settings: "kern", "liga", “tnum”, "ss04";</code></pre>
              <pre><code>&lt;span class="tab-numbers"&gt;0123456789&lt;/span&gt;</code></pre>
            </div>
          </div>
        </div>
        <hr />
      </section>
      <section>
        <h2 class="section-headers"><a name="measurements">Measurements</a></h2>
        <p class="intro-copy">We use REM to ensure our typography stays scalable in a responsive web world. Our base REM is 16px, which means 2px is equal to 0.125rem, or 1/8rem. </p>
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
      };
    },
    computed: {
      ...mapGetters(['getSelectedUnit', 'getSelectedScreen', 'getScreens']),
    },
    methods: {
      ...mapActions(['setScreen']),
    },
    components: {
      toggleView,
    },
  };
</script>

<style lang="scss">
  @import 'style.scss';

  .typography-page {
    padding: 2rem 4rem;
  }

  .typography-intro {
    position: relative;
  }

  .intro-copy {
    width: 35rem;
  }

  .download-typography {
    position: absolute;
    top: 44px;
    right: 244px;
    border: 1px solid $pearl-100;
    padding: 1.5rem;
    width: 14rem;
    border-radius: 2px;
    background-color: $white;
    z-index: 2;

    p {
      font-weight: bold;
    }
  }

  .section-headers {
    a {
      text-decoration: none;
      font-size: 24px;
      font-weight: bold;
      color: $pearl-900;
    }

    a:hover,
    a:focus {
      background-color: transparent;
    }
  }

  .code-sample {
    display: flex;

    pre {
      margin-right: $spacing-large;
      width: 25rem;

      code {
        font-size: 14px;
      }
    }

    .css-px > ul {
      list-style-type: none;
    }

    .css-px > ul > li {
      font-size: 14px;
      line-height: 1;
    }

    .text-description {
      flex: 2;
      max-width: 26rem;
    }
  }

  .mobile-h1 {
    font-size: 1.625rem;
  }

  .mobile-h2 {
    font-size: 1.5rem;
  }

  .mobile-h3 {
    font-size: 1.375rem;
  }

  .mobile-h4 {
    font-size: 1.125rem;
  }

  .mobile-h5 {
    font-size: 1rem;
  }

  .bulleted-list-example {
    ul,
    ol {
      margin-left: 2rem;
    }
  }

  .bulleted-list-example > ul {
    list-style-type: disc;
  }

  .line-length-container {
    padding-bottom: 1rem;

    .line-length-content {
      .line-length-50 {
        max-width: 24rem;
      }

      .line-length-60 {
        max-width: 28rem;
      }

      .line-length-80 {
        max-width: 34rem;
      }

      .line-length-105 {
        max-width: 48rem;
      }

      .line-length-labels {
        display: flex;

        p:first-of-type + p {
          margin-left: 292px;
          color: $ruby-300;
        }

        p:nth-child(3),
        p:nth-child(5) {
          color: $jade-300;
          margin-left: 48px;
        }

        p:nth-child(4) {
          margin-left: 40px;
        }

        p:last-child {
          color: $ruby-300;
          margin-left: 124px;
        }
      }

      .line-0,
      .line-50,
      .line-60,
      .line-80,
      .line-105 {
        height: 90%;
        position: absolute;
      }

      .line-0 {
        border-left: 1px solid $pearl-100;
      }

      .line-50 {
        border-left: 1px solid #e96654;
        left: 372px;
        opacity: 0.5;
      }

      .line-60 {
        border-left: 1px solid $jade-300;
        left: 436px;
        opacity: 0.5;
      }

      .line-80 {
        border-left: 1px solid $jade-300;
        margin-left: 592px;
        opacity: 0.5;
      }

      .line-105 {
        border-left: 1px solid #e96654;
        margin-left: 736px;
        opacity: 0.5;
      }
    }
  }

  .alternative-glyphs-container {
    display: flex;
    position: relative;
    margin-top: $spacing-large;

    .alternative-examples {
      display: flex;
      flex-direction: column;
      margin-right: $spacing-large;

      img:first-of-type {
        margin-bottom: $spacing;
      }

      img {
        width: 21rem;
      }
    }

    .alternative-copy {
      margin-right: 32rem;

      h4 {
        font-size: 1.125rem;
      }

      p {
        font-size: 0.875rem;
        max-width: 26rem;
      }

      .code-sample {
        flex-direction: column;
      }
    }
  }
</style>
