<template>
  <article class="container">
    <h1>Layout Styles — Notice</h1>

    <section>
      <p>Notice patterns are designed as an adaptable pattern for use in a variety of contexts from callouts to toast notifications. Adding a <code>notice</code> class to the containing element provides a default <code>$bg</code> coloured notice. Variants include <code>alt</code>, <code>light</code>, <code>alert</code>, and <code>neg</code>. For ease of building the <code>notice-content</code> class — as well as <code>&lt;header&gt;</code>, <code>&lt;article&gt;</code>, or <code>&lt;footer&gt;</code> elements inside the notice container will have a have side margins applied.</p>
      <h3>Default</h3>
      <pre><code class="language-markup">&lt;div class="notice"&gt;
  &lt;p class="notice-content"&gt; … &lt;/p&gt;
&lt;/div&gt;</code></pre>

      <div class="notice">
        <p class="notice-content">Body type is optimized for web readability. For additional emphasis or de-emphasis, we have 4 style classes that can be applied as needed to our base paragraph style.</p>
      </div>
      <hr />
      <h3>Alternate</h3>
      <pre><code class="language-markup">&lt;div class="notice alt"&gt;
  &lt;article&gt; … &lt;/article&gt;
&lt;/div&gt;</code></pre>
      <div class="notice alt">
        <article>
          <p>Body type is optimized for web readability. For additional emphasis or de-emphasis, we have 4 style classes that can be applied as needed to our base paragraph style.</p>
        </article>
      </div>
      <hr />
      <h3>Light</h3>
      <pre><code class="language-markup">&lt;div class="notice light"&gt;
  &lt;header&gt; … &lt;/header&gt;
  &lt;footer&gt; … &lt;/footer&gt;
&lt;/div&gt;</code></pre>
      <div class="notice light">
        <header>
          <h3>H3 Header</h3>
        </header>
        <footer>
          <p>Body type is optimized for web readability. For additional emphasis or de-emphasis, we have 4 style classes that can be applied as needed to our base paragraph style.</p>
        </footer>
      </div>
      <hr />
      <h3>Alert</h3>
      <pre><code class="language-markup">&lt;div class="notice alert"&gt;
  &lt;article&gt; … &lt;/article&gt;
&lt;/div&gt;</code></pre>
      <div class="notice alert">
        <article>
          <p>Body type is optimized for web readability. For additional emphasis or de-emphasis, we have 4 style classes that can be applied as needed to our base paragraph style.</p>
          <ul class="bullet">
            <li>This is a list item.</li>
            <li>This is the second item in the list.</li>
            <ul class="bullet">
              <li>This is a nested list.</li>
              <li>Let's have one more item.</li>
            </ul>
          </ul>
        </article>
      </div>
      <hr />
      <h3>Negative</h3>
      <pre><code class="language-markup">&lt;div class="notice neg"&gt;
  &lt;article&gt; … &lt;/article&gt;
&lt;/div&gt;</code></pre>
      <div class="notice neg">
        <article>
          <p>Body type is optimized for web readability. For additional emphasis or de-emphasis, we have 4 style classes that can be applied as needed to our base paragraph style.</p>
        </article>
      </div>

      <h3>Toast Notice</h3>
      <pre><code class="language-markup">&lt;div class="notice toast"&gt;
  &lt;p class="notice-content"&gt; … &lt;/p&gt;
  &lt;button type="button" class="flat dark icon"&gt;
    &lt;svg&gt; … &lt;/svg&gt;
  &lt;/button&gt;
&lt;/div&gt;</code></pre>
      <div class="notice toast">
        <p class="notice-content">Adding a class of <code>.toast</code> to the notice allows for the inclusion of a close button icon as sibling to a content block.</p>
        <button type="button" class="flat dark icon">
          <svg viewBox="0 0 32 32">
            <polygon points="26.7,6.7 25.3,5.3 16,14.6 6.7,5.3 5.3,6.7 14.6,16 5.3,25.3 6.7,26.7 16,17.4 25.3,26.7 26.7,25.3 17.4,16" />
          </svg>
        </button>
      </div>
    </section>
  </article>
</template>

<script>
export default { };
</script>

<style lang="scss" scoped>
</style>
