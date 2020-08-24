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
  &lt;ul class="card-list"&gt;
    &lt;/li&gt;…&lt;/li&gt;
    &lt;/li&gt;…&lt;/li&gt;
    &lt;/li&gt;…&lt;/li&gt;
  &lt;/ul&gt;
&lt;/div&gt;</code></pre>

      <hr />
      <h3>Compact</h3>
      <div cla ss="example">
        <div class="card">
          <ul class="card-list compact">
            <li>Card in its simplest form</li>
            <li>Margin is applied to the content using the <code>card-content</code> class.</li>
            <li>This basic card is often used against a white background.</li>
          </ul>
        </div>
      </div>
      <strong>Markup</strong>
      <pre><code class="language-markup">&lt;div class="card"&gt;
  &lt;ul class="card-list compact"&gt;
    &lt;/li&gt;…&lt;/li&gt;
    &lt;/li&gt;…&lt;/li&gt;
    &lt;/li&gt;…&lt;/li&gt;
  &lt;/ul&gt;
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
