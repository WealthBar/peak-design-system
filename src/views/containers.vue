<template>
  <article class="container">
    <section>
      <h1>Containers</h1>
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
&lt;/div&gt;</code>
        </pre>
      </div>
    </section>

    <section>
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
&lt;/div&gt;</code>
        </pre>
      </div>
    </section>

    <section>
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
&lt;/div&gt;</code>
        </pre>
      </div>
    </section>

    <section>
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
&lt;/div&gt;</code>
        </pre>
      </div>
    </section>
  </article>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .visual-container {
    height: 150px;
    background-color: $neutral-100;
    display: inline-block;
  }
</style>
