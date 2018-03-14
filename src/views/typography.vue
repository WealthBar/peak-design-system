<template>
  <article>
    <h1>Typography</h1>
    <p>WealthBar’s typography is a balance between readability and personality. Using our set of defined typography styles ensures consistent quality and a clear hierarchy. Our typography uses rem, the measurement unit we use. Read more about measurements.</p>
    <section>
      <h2>Headers</h2>
      <p>Headers create hierarchy in a layout and make scanning easy. Use them for content such as page titles or section titles. We have mobile and desktop header styles so that our typography is responsive to screen real estate.</p>

      <p>[ mobile | desktop ]</p>

      <h1>H1 This is a huge header.</h1>
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
      <pre><code>&lt;p&gt;This is a paragraph.&lt;/p&gt;</code></pre>
      <h2>Additional Styles</h2>
    </section>
      <h3>body/copy</h3>
      <pre><code>"GT-Walsheim", "Avenir", "Helvetica Neue", Helvetica, Arial, sans-serif;</code></pre>
  </article>
</template>

<script>
  export default {
  };
</script>

<style lang="scss">
  @import 'style.scss';
</style>
