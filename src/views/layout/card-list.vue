<template>
  <article class="container">
    <h1>Layout Styles — Card List</h1>

    <!-- CARD LIST-->
    <section>
      <h3>Default</h3>
      <div class="example">
        <div class="card">
          <ul class="card-list">
            <li>Card in its simplest form</li>
            <li>Margin is applied to the content using the <code>card-content</code> class.</li>
            <li>This basic card is often used against a white background.</li>
          </ul>
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
