<template>
  <article>
    <header class="container">
      <h1>Containers</h1>
    </header>
    <section class="example">
      <div class="container visual-container">
        <div>
          <h3 class="subtle">container</h3>
          <p>max-width: 80rem</p>
        </div>
      </div>
    </section>

    <div class="code-sample container">
      <pre>
        <code class="language-markup">&lt;div class="container"&gt;
  &hellip;
&lt;/div&gt;</code></pre>
    </div>

    <section class="example">
      <div class="container-large visual-container">
        <div>
          <h3 class="subtle">container-large</h3>
          <p>max-width: 64rem</p>
        </div>
      </div>
    </section>

    <div class="code-sample container">
      <pre>
        <code class="language-markup">&lt;div class="container-large"&gt;
  &hellip;
&lt;/div&gt;</code></pre>
    </div>
    <section class="example">
      <div class="container-medium visual-container">
        <div>
          <h3 class="subtle">container-medium</h3>
          <p>max-width: 48rem</p>
        </div>
      </div>
    </section>

    <div class="code-sample container">
      <pre>
        <code class="language-markup">&lt;div class="container-medium"&gt;
  &hellip;
&lt;/div&gt;</code></pre>
    </div>

    <section class="example">
      <div class="container-small visual-container">
        <div>
          <h3 class="subtle">container-small</h3>
          <p>max-width: 32rem</p>
        </div>
      </div>
    </section>

    <div class="code-sample container">
      <pre>
        <code class="language-markup">&lt;div class="container-small"&gt;
  &hellip;
&lt;/div&gt;</code></pre>
    </div>
  </article>
</template>

<script>
export default { };
</script>

<style lang="scss" scoped>
  article { width: 100%; }
  .example {
    background-color: $tertiary-50;
    margin-bottom: 1rem;
  }
  .visual-container {
    background-color: $secondary-100;
    box-shadow: 1px 0 0 0 $secondary-500, -1px 0 0 0 $secondary-500;
    > div {
      background-color: $neutral-50;
      box-shadow: 1px 0 0 0 $secondary-500, -1px 0 0 0 $secondary-500;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      padding: 0 1rem;
    }
  }
</style>
