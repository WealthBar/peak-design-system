<template>
  <article>
    <h1>Typography</h1>
    <p>WealthBar’s typography is a balance between readability and personality. Using our set of defined typography styles ensures consistent quality and a clear hierarchy. Our typography uses rem, the measurement unit we use. Read more about measurements.</p>
    <section>
      <h2>Headers</h2>
      <p>Headers create hierarchy in a layout and make scanning easy. Use them for content such as page titles or section titles. We have mobile and desktop header styles so that our typography is responsive to screen real estate.</p>

      <p>[ mobile | desktop ]</p>

      <h1>H1 This is a <span class="large">huge</span> huge header.</h1>
      <pre><code>&lt;h1&gt;H1 This is a huge header.&lt;/h1&gt;</code></pre>

      <h2>H2 This is a big header.</h2>
      <pre><code>&lt;h2&gt;H2 This is a big header.&lt;/h2&gt;</code></pre>

      <h3>H3 This is a medium header.</h3>
      <pre><code>&lt;h3&gt;H3 This is a medium header.&lt;/h3&gt;</code></pre>

      <h4>H4 This is a small header.</h4>
      <pre><code>&lt;h4&gt;H4 This is a small header.&lt;/h4&gt;</code></pre>

    </section>
    <section>
      <h2>Paragraphs</h2>
      <p>Paragraphs are optimized for web readability. For additional emphasis or de-emphasis, we have 4 style classes that can be applied as needed to our base Paragraph style.</p>
      <h3>Base style</h3>
      <p>Our base paragraph style is the foundation of our typography. All styles are variants of this style. It is also the default text style, meaning if no style is applied or specified, it should use this style.</p>
      <p>This is a paragraph.</p>
      <div class="code-split">
      <pre><code>&lt;p&gt;This is a paragraph.&lt;/p&gt;</code></pre>
      <p><pre>font-size: 16px
line-height: 22px
font-weight: normal
padding: 16px 0px 16px</pre></p>
      </div>
      <h2>Additional Styles</h2>
      <p class="small">This is a small text paragraph.</small></p>
      <pre><code>&lt;p class="small"&gt;This is small text.&lt;/p&gt;</code></pre>
      <p class="large">This is a large text paragraph.</p>
      <pre><code>&lt;p class=”large”&gt;This is large text.&lt;/p&gt;</code></pre>
      <p>This is <span class="subtle">subtle text</span> used in a paragraph.</p>
      <pre><code>&lt;p&gt;This is &lt;span class="subtle"&gt;subtle text&lt;/span&gt; used in a paragraph.&lt;/p&gt;</code></pre>
      <p>This is <strong>strong text</strong> used in a paragraph.</p>
      <pre><code>&lt;p&gt;This is &lt;strong&gt;strong text&lt;/strong&gt; used in a paragraph.&lt;/p&gt;</code></pre>
    </section>
    <section>
      <h2>Links</h2>
      <p>This is our default style for text links within paragraphs. Links inherit the paragraph’s size and style. We use progressive enhancement with a basic fallback if browsers don’t support certain types of styling.</p>
      <p><a href="#">This is a link</a></p>
      <p><button>Button link</button></p>
      <pre><code>&lt;a href="http://wealthbar.com"&gt;This is a link&lt;/a&gt;
&lt;button&gt;button link&lt;/button&gt;</code></pre>
    </section>
    <section>
      <h2>Font Stack</h2>
      <p>We use the same font stack regardless of the device. GT Walsheim is our typeface for it’s friendly and unique personality, as well as its web readability.</p>
      <pre><code>"GT-Walsheim", "Avenir", "Helvetica Neue", Helvetica, Arial, sans-serif;</code></pre>
    </section>
  </article>
</template>

<script>
  export default {
  };
</script>

<style lang="scss">
</style>
