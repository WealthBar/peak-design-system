<template>
  <article>
    <header class="container">
      <h1>Layout Structures — Banners</h1>
    </header>
    <section class="container">
      <p>Header banners are used as the primary navigaional system at the top of a given page. Banners will eventually encompase a variety of style variants. Currently the banner in peak exists for use with <router-link to="workflows">workflows</router-link>.</p>
    </section>
    <section class="example">
      <header role="banner" class="banner">
        <div class="banner-content">
          <h5 class="banner-title">Test title</h5>

          <div class="banner-actions">
            <button type="button" class="flat dark">First</button>
            <button type="button" class="flat dark">Second</button>
            <button type="button" class="flat dark">Third</button>
          </div>
        </div>
      </header>
    </section>

    <div class="code-sample container">
      <strong>Markup</strong>
      <pre><code class="language-markup">&lt;header role="banner" class="banner"&gt;
  &lt;div class="banner-content"&gt;
    &lt;h5 class="banner-title"&gt;Test title&lt;/h5&gt;

    &lt;div class="banner-actions"&gt;
      &lt;button type="button" class="flat dark" icon&gt;First&lt;/button&gt;
      &lt;button type="button" class="flat dark" icon&gt;Second&lt;/button&gt;
      &lt;button type="button" class="flat dark" icon&gt;Third&lt;/button&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
    </div>
  </article>
</template>

<script>
export default { };
</script>

<style lang="scss" scoped>
  article {
    width: 100%;
    background: $neutral-50
  }
  .example { margin-bottom: 1rem; }
</style>
