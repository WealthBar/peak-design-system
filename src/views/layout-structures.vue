<template>
  <article class="container">
    <h1>Layout Structures</h1>

    <!-- CONTAINER -->
    <section id="container">
      <h2>Containers</h2>

      <p>
        Containers are agreed upon widths between dev and design.
      </p>
    </section>

    <section id="containers">
      <h3>Default</h3>

      <div class="container visual-container">
        <h2>
          80rem
        </h2>
      </div>

      <div class="code-sample">
        <pre>
          <code class="language-markup">&lt;div class="container"&gt;
  ...
&lt;/div&gt;</code></pre>
      </div>

      <h3>Large</h3>

      <div class="container-large visual-container">
        <h2>
          64rem
        </h2>
      </div>

      <div class="code-sample">
        <pre>
          <code class="language-markup">&lt;div class="container-large"&gt;
    ...
  &lt;/div&gt;</code></pre>
      </div>

      <h3>Medium</h3>

      <div class="container-medium visual-container">
        <h2>
          48rem
        </h2>
      </div>

      <div class="code-sample">
        <pre>
          <code class="language-markup">&lt;div class="container-medium"&gt;
  ...
  &lt;/div&gt;</code></pre>
      </div>

      <h3>Small</h3>

      <div class="container-small visual-container">
        <h2>
          32rem
        </h2>
      </div>

      <div class="code-sample">
        <pre>
          <code class="language-markup">&lt;div class="container-small"&gt;
    ...
&lt;/div&gt;</code></pre>
      </div>
    </section>
    <!-- CONTAINER END -->

    <hr>

    <!-- BANNER -->
    <section id="banner">
      <h2>Banner</h2>

      <div class="banner">
        <div class="banner-content">
          <h5 class="banner-title">Test title</h5>

          <div class="banner-actions">
            <button type="button" class="flat" icon>action 1</button>
            <button type="button" class="flat" icon>action 2</button>
            <button type="button" class="flat" icon>action 3</button>
          </div>
        </div>
      </div>

      <div class="code-sample">
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
    </section>

    <section id="banners">
      <h3>Banner flat</h3>

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

      <div class="code-sample">
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
    </section>

    <section>
      <h3>Modal Page Banner</h3>

      <div class="banner modal-page-banner">
        <div class="banner-content">
          <h5 class="banner-title">Test title</h5>

          <div class="banner-actions">
            <button type="button" class="flat action" icon>close</button>
          </div>
        </div>
      </div>

      <div class="code-sample">
        <pre>
          <code class="language-markup">&lt;div class="banner modal-page-banner"&gt;
  &lt;div class="banner-content"&gt;
    &lt;h5 class="banner-title"&gt;Test title&lt;/h5&gt;

    &lt;div class="banner-actions"&gt;
      &lt;button type="button" class="flat" icon&gt;close&lt;/button&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
    </section>
  </article>
</template>

<script>
export default { };
</script>

<style lang="scss" scoped>
  .visual-container {
    height: 150px;
    background-color: $neutral-100;
    display: inline-block;
  }
</style>
