<template>
  <article>
    <header class="container">
      <h1>Banners</h1>
    </header>


    <header class="container">
      <h3>banner</h3>
    </header>

    <section class="example">
      <header role="banner" class="banner">
        <div class="banner-content">
          <h5 class="banner-title">Test title</h5>

          <div class="banner-actions">
            <button type="button" class="flat" icon>action 1</button>
            <button type="button" class="flat" icon>action 2</button>
            <button type="button" class="flat" icon>action 3</button>
          </div>
        </div>
      </header>
    </section>

    <div class="code-sample container">
      <pre>
        <code class="language-markup">&lt;div class="banner"&gt;
  &lt;div class="banner-content"&gt;
    &lt;h5 class="banner-title"&gt;Test title&lt;/h5&gt;

    &lt;div class="banner-actions"&gt;
      &lt;button type="button" class="flat" icon&gt;close&lt;/button&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
    </div>
    <section class="example">
      <header class="container">
        <h3>banner flat</h3>
      </header>

      <div class="banner flat">
        <div class="banner-content">
          <h5 class="banner-title">Test title</h5>

          <div class="banner-actions">
            <button type="button" class="flat" icon>action 1</button>
            <button type="button" class="flat" icon>action 2</button>
            <button type="button" class="flat" icon>action 3</button>
          </div>
        </div>
      </div>
    </section>
    <div class="code-sample container">
      <pre>
        <code class="language-markup">&lt;div class="banner flat"&gt;
&lt;div class="banner-content"&gt;
  &lt;h5 class="banner-title"&gt;Test title&lt;/h5&gt;

  &lt;div class="banner-actions"&gt;
    &lt;button type="button" class="flat" icon&gt;close&lt;/button&gt;
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
