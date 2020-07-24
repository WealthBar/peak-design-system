<template>
  <article>
    <header class="container">
      <h1>Layout Structures — Containers</h1>
    </header>
    <section class="container">
      <p>Container classes are use on page level structural blocks (eg: <code>&lt;header&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;footer&gt;</code>, etc.) to ensure propper alignment and contaimnebt of elements on the page. Useing a container will enuser that a padding is applied to the sides for smaller viewports and the container itself stays cenetered on the page at larger viewport sizes.</p>
      <p><strong>Tip:</strong> Adjust the size of the browser window on this page to see containers in action.</p>
    </section>
    <header class="container"><h3>container</h3></header>
    <section class="example">
      <div class="container visual-container">
        <div>
          <strong>max-width: 80rem</strong>
        </div>
      </div>
    </section>
    <div class="code-sample container">
      <strong>Markup</strong>
      <pre><code class="language-markup">&lt;div class="container"&gt;
  &hellip;
&lt;/div&gt;</code></pre>
    </div>

    <hr />

    <header class="container"><h3>container-large</h3></header>
    <section class="example">
      <div class="container-large visual-container">
        <div>
          <strong>max-width: 64rem</strong>
        </div>
      </div>
    </section>
    <div class="code-sample container">
      <strong>Markup</strong>
      <pre><code class="language-markup">&lt;div class="container-large"&gt;
  &hellip;
&lt;/div&gt;</code></pre>
    </div>

    <hr />

    <header class="container"><h3>container-medium</h3></header>
    <section class="example">
      <div class="container-medium visual-container">
        <div>
          <strong>max-width: 48rem</strong>
        </div>
      </div>
    </section>
    <div class="code-sample container">
      <strong>Markup</strong>
      <pre><code class="language-markup">&lt;div class="container-medium"&gt;
  &hellip;
&lt;/div&gt;</code></pre>
    </div>

    <hr />

    <header class="container"><h3>container-small</h3></header>
    <section class="example">
      <div class="container-small visual-container">
        <div>
          <strong>max-width: 32rem</strong>
        </div>
      </div>
    </section>
    <div class="code-sample container">
      <strong>Markup</strong>
      <pre><code class="language-markup">&lt;div class="container-small"&gt;
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
      // padding: 0 1rem;
    }
    strong { margin: 1rem; }
  }
</style>
