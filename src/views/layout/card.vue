<template>
  <article class="container">
    <h1>Layout Styles — Card</h1>

    <!-- CARD -->
    <section>
      <p>The <code>.card</code> class can be applied to any block element to provide visual treatment. <code>.card</code> has no inner margin/padding — this is provided by internal containers and content. For ease of building the <code>card-content</code> class — as well as <code>&lt;header&gt;</code>, <code>&lt;article&gt;</code>, or <code>&lt;footer&gt;</code> elements inside the card container  are preset with margins applied.</p>
      <p>The card class can be combined with other style patterns to provide a complete structure for content. Some examples of these patterns are the <a href="/workflows#step">Workflow Step</a> pattern and several (upcoming) table styles.</p>
      <p>There are two variants of <code>.card</code>: a default and a variant with an added box-shadow. Generally, we use the default against a white background and the shadow variant against a light grey background.</p>

      <h3>Default</h3>
      <div class="example">
        <div class="card">
          <p class="card-content">Card in its simplest form. Margin is applied to the content using the <code>card-content</code> class. This basic card is often used against a white background.</p>
        </div>
      </div>
      <strong>Markup</strong>
      <pre><code class="language-markup">&lt;div class="card"&gt;
  &lt;p class="card-content"&gt;Card in its simplest form.&lt;/p&gt;
&lt;/div&gt;</code></pre>

      <hr />

      <h3>Box Shadow</h3>
      <div class="example">
        <div class="card shadow">
          <article>
            <p>Card with box shadow. Margin is applied to the contained <code>&lt;article&gt;</code>. This box-shdaow variant is generally used on a grey background.</p>
          </article>
        </div>
      </div>
      <strong>Markup</strong>
      <pre><code class="language-markup">&lt;div class="card shadow"&gt;
  &lt;header&gt;
    &lt;h3&gt;Shadow Card&lt;/h3&gt;
  &lt;/header&gt;
  &lt;article&gt;
    &lt;p&gt;Card with box shadow.&lt;/p&gt;
  &lt;/article&gt;
&lt;/div&gt;</code></pre>

      <hr />

      <h3>Modal-View Card</h3>
      <div class="example">
        <div class="card modal-view">
          <article>
            <p>Card layout for use with the <code>modal-page</code>/<code>workflow-page</code> views. With larger browser windows the card has a <code>max-width</code> and will center on screen. On mobile devices or small browser windows, it will fill the screen.</p>

            <p>Also to note is the<code>footer-next</code> class which ensures right alignment of the next buttons for use in workflows.</p>
          </article>
          <footer class="footer-next">
            <button type="button">next</button>
          </footer>
        </div>
      </div>
      <strong>Markup</strong>
      <pre><code class="language-markup">&lt;div class="card modal-view"&gt;
  &lt;article&gt;
    &lt;p&gt;Card as part of a modal/workflow view&lt;/p&gt;
  &lt;/article&gt;
  &lt;footer class="footer-next"&gt;
    &lt;button&gt;next&lt;/button&gt;
  &lt;/footer&gt;
&lt;/div&gt;</code></pre>
    </section>
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
    margin-bottom: 1rem;
  }
</style>
