<template>
  <article class="container">
    <h1>Layout Styles</h1>

    <!-- CARD -->
    <section id="card">
      <h2>Card</h2>
      <p>
        The <code>.card</code> is visual treatment class which can be applied to any block element to get the desired card look.
        There is no inner margin/padding — this is provided by internal containers and content. The card class is
        also used with other style patterns to provide a complete structure for content. Some examples of these
        patterns are the <a href="/workflows#step">Workflow step</a> pattern and several (upcoming) table styles:
      </p>

      <strong>Examples</strong>
      <div class="example">
        <div class="card">
          <p>
            Card in its simplest form. Margin can be added to the content. This basic card is often used against a white background.
          </p>
        </div>

        <div class="card shadow">
          <p>
            Card with box shadow. Margin can be added to the content. This box-shdaow variant is generally used on a grey background
          </p>
        </div>
      </div>

      <strong>Markup</strong>
      <pre><code class="language-markup">&lt;div class="card"&gt;
  &lt;p&gt;
    Card in its simplest form. Margin can be added to the content. This basic card is often used against a white background.
  &lt;/p&gt;
&lt;/div&gt;

&lt;div class="card shadow"&gt;
  &lt;p&gt;
    Card with box shadow. Margin can be added to the content. This box-shdaow variant is generally used on a grey background
  &lt;/p&gt;
&lt;/div&gt;</code></pre>
    </section>
    <!-- CARD END -->

    <hr>

    <!-- NOTICE -->
    <section id="notice">
      <h2>Notice</h2>
      <p>Notice patterns are designed as an adaptable pattern for use in a variety of contexts from callouts to toast notifications. Adding a <code>notice</code> class to the containing element provides a default <code>$bg</code> coloured notice. Variants include <code>alt</code>, <code>light</code>, <code>alert</code>, and <code>neg</code>. For ease of building the <code>notice-content</code> class — as well as <code>&lt;header&gt;</code>, <code>&lt;article&gt;</code>, or <code>&lt;footer&gt;</code> elements inside the notice container will have a have side margins applied.</p>
      <h3>Default</h3>

      <div class="notice">
        <p class="notice-content">
          {{ noticeCopy }}
        </p>
      </div>

      <pre><code class="language-markup">&lt;div class="notice"&gt;
  &lt;p class="notice-content"&gt; … &lt;/p&gt;
&lt;/div&gt;</code></pre>

      <hr>

      <h3>Alternate</h3>

      <div class="notice alt">
        <article>
          <p>
            {{ noticeCopy }}
          </p>
        </article>
      </div>

      <pre><code class="language-markup">&lt;div class="notice alt"&gt;
  &lt;article&gt; … &lt;/article&gt;
&lt;/div&gt;</code></pre>

      <hr>

      <h3>Light</h3>

      <div class="notice light">
        <header>
          <h3>H3 Header</h3>
        </header>
        <footer>
          <p>
            {{ noticeCopy }}
          </p>
        </footer>
      </div>

      <pre><code class="language-markup">&lt;div class="notice light"&gt;
  &lt;header&gt; … &lt;/header&gt;
  &lt;footer&gt; … &lt;/footer&gt;
&lt;/div&gt;</code></pre>

      <hr>

      <h3>Alert</h3>

      <div class="notice alert">
        <article>
          <p>
            {{ noticeCopy }}
          </p>
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

      <pre><code class="language-markup">&lt;div class="notice alert"&gt;
  &lt;article&gt; … &lt;/article&gt;
&lt;/div&gt;</code></pre>


      <hr>

      <h3>Negative</h3>

      <div class="notice neg">
        <article>
          <p>
            {{ noticeCopy }}
          </p>
        </article>
      </div>

      <pre><code class="language-markup">&lt;div class="notice neg"&gt;
  &lt;article&gt; … &lt;/article&gt;
&lt;/div&gt;</code></pre>
    </section>
    <!-- NOTICE END -->
  </article>
</template>

<script>
export default {
  data() {
    return {
      noticeCopy: `
        Body type is optimized for web readability. For additional emphasis or de-emphasis, we have 4 style
        classes that can be applied as needed to our base paragraph style.
      `,
    };
  },
};
</script>

<style lang="scss" scoped>
  .example {
    padding: 1rem;
    margin-bottom: 1rem;
    background: $neutral-50;
    border: 1px solid $neutral-300;
    border-radius: 0.25rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: auto;
    > * { margin-bottom: 1rem; }
    @media #{$screen-width-large} {
      flex-direction: row;
      display: flex;
      justify-content: space-around;
      align-items: flex-start;
      > * { margin: 0; }
      &.start { justify-content: flex-start; }
    }
    &.dark { background: $neutral-900; }
  }

  #card .card:nth-child(n+2) {
    @media #{$screen-width-large} {
      margin-left: 1rem;
    }
  }
</style>
