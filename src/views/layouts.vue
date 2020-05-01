<template>
  <article class="container">
    <section>
      <h1>Layouts</h1>

      <p>
        Cards in Peak have been designed to act as a wrapper with some padding, and not much else. Everything outside of the
        <code>&lt;div class="card-actions"&gt;</code> class, simply adheares to their usual style. Meaning it allows for 
        consistent styling behaviour at all time when using elements or classes.
      </p>
    </section>

    <h3>Focus</h3>

    <div class="layout-focus">
      <div class="card">
        <h3>Example card</h3>
        <div class="card-body">
          <h5>Finance Ipsum</h5>
          <p>
            Securities default investment funds exchange market index value fall Fitch corporate 
            bonds treasury hedge fund. Term risk management gains taxpayer upswing fall receive expenses 
            volatile issuer rise. Term fiat 401k managed shares corporate bonds tax gains funds income maturities 
            downturn yield retirement. Bills district Fitch municipal bonds exchange bull. 
          </p>
        </div>
      </div>
    </div>

    <div class="code-sample">
      <pre>
        <code class="language-markup">&lt;div class="layout-focus"&gt;
  &lt;div class="card"&gt;
    &lt;h3&gt;Some h3 text&lt;/h3&gt;
    &lt;p&gt;Some p text&lt;/p&gt;

    &lt;div class="card-actions"&gt;
      &lt;button class="outlined"&gt;Cancel&lt;/button&gt;
      &lt;button type="submit"&gt;Next&lt;/button&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code>
      </pre>
    </div>
  </article>
</template>

<script>
export default {
  
}
</script>
