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
          <ul class="card-list flex">
            <li><span>Card Item</span><svg width="16" height="16" viewBox="0 0 32 32"><polygon points="14.2,3.3 12.8,4.7 23.1,15 4,15 4,17 23.1,17 12.8,27.3 14.2,28.7 26.9,16"/></svg><span class="pos tab-numbers">$1337</span></li>
            <li><span>Code Block</span><span class="pos tab-numbers">$69</span></li>
            <li><span>Design Pattern</span><span class="neg tab-numbers">$420</span></li>
          </ul>
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
  .example { margin-bottom: 1rem; }
  svg { width: 1rem; }
</style>
