<template>
  <article class="container-mid">
    <h1>Buttons</h1>
    <section>
      <h3>Default Buttons</h3>
      <div class="attributes">
        <div class="example">
          <strong>Example</strong>
          <button>Link</button>
          <button type="button">Button</button>
          <button type="button" class="outline">Outline</button>
          <button type="button" class="subtle">Subtle</button>
          <button type="button" class="flat">Flat</button>
        </div>
        <div class="code-sample">
          <strong>Markup</strong>
          <pre><code class="html">&lt;button&gt;Link&lt;/button&gt;
          &lt;button type="button"&gt;Button&lt;/button&gt;
          &lt;button type="button" class="outline"&gt;Outline&lt;/button&gt;
          &lt;button type="button" class="subtle"&gt;Subtle&lt;/button&gt;
          &lt;button type="button" class="flat"&gt;Flat&lt;/button&gt;</code></pre>
        </div>
      </div>
      <hr>
    </section>

    <section>
      <h3>Alternate Buttons</h3>
      <div class="attributes">
        <div class="example">
          <strong>Example</strong>
          <button class="alt">Link</button>
          <button type="button" class="alt">Button</button>
          <button type="button" class="outline alt">Outline</button>
          <button type="button" class="subtle alt">Subtle</button>
          <button type="button" class="flat alt">Flat</button>
        </div>
        <div class="code-sample">
          <strong>Markup</strong>
          <pre><code class="html">&lt;button class="alt"&gt;Link&lt;/button&gt;
          &lt;button type="button" class="alt"&gt;Button&lt;/button&gt;
          &lt;button type="button" class="outline alt"&gt;Outline&lt;/button&gt;
          &lt;button type="button" class="subtle alt"&gt;Subtle&lt;/button&gt;
          &lt;button type="button" class="flat alt"&gt;Flat&lt;/button&gt;</code></pre>
        </div>
      </div>

      <!-- <div>
        <h5>alert state buttons</h5>

        <button class="alert">Link</button>
        <button type="button" class="alert">Button</button>
        <button type="button" class="outline alert">Outline</button>
        <button type="button" class="subtle alert">Subtle</button>
        <button type="button" class="flat alert">Flat</button>
      </div>

      <div>
        <h5>neg state buttons</h5>

        <button class="neg">Link</button>
        <button type="button" class="neg">Button</button>
        <button type="button" class="outline neg">Outline</button>
        <button type="button" class="subtle neg">Subtle</button>
        <button type="button" class="flat neg">Flat</button>
      </div>

      <div>
        <h5>pos state buttons</h5>

        <button class="pos">Link</button>
        <button type="button" class="pos">Button</button>
        <button type="button" class="outline pos">Outline</button>
        <button type="button" class="subtle pos">Subtle</button>
        <button type="button" class="flat pos">Flat</button>
      </div> -->
    </section>
  </article>
</template>
<script>
export default {};
</script>
<style lang="scss">
  @import 'base/variables.scss';
  // section { display: flex; }

  .example {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding-right: 2rem;
    // border-right: 1px solid $pearl-300;
  }

  button { margin: 0.5rem 0; }

</style>
