<template>
  <article class="container">
    <section>
      <h1>Banners</h1>
      <p>
        Cards in Peak have been designed to act as a wrapper with some padding, and not much else. Everything outside of the
        <code>&lt;div class="card-actions"&gt;</code> class, simply adheares to their usual style. Meaning it allows for 
        consistent styling behaviour at all time when using elements or classes.
      </p>
    </section>

    <section>
      <h3>Banners</h3>

      <div class="banner light">
        <div class="banner-content">
          <h5>Test title</h5>
          <button type="button" class="flat" icon>close</button>
        </div>
      </div>

      <div class="code-sample">
        <strong>Markup</strong>
        <pre>
          <code class="language-markup">&lt;div class="banner light"&gt;
  &lt;div class="banner-content"&gt;
    &lt;h5&gt;Test title&lt;/h5&gt;
    &lt;button type="button" class="flat" icon&gt;close&lt;/button&gt;
  &lt;/div&gt;
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
