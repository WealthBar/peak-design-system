<template>
  <article class="container">
    <section>
      <h1>Workflows</h1>

      <p>
        Cards in Peak have been designed to act as a wrapper with some padding, and not much else. Everything outside of the
        <code>&lt;div class="card-actions"&gt;</code> class, simply adheares to their usual style. Meaning it allows for 
        consistent styling behaviour at all time when using elements or classes.
      </p>
    </section>

    <h3>Workflow</h3>

    <div class="layout-focus">
      <div class="banner light">
        <div class="banner-content">
          <h5>Test title</h5>
          <button type="button" class="flat" icon>close</button>
        </div>
      </div>

      <div id="card">

        <div class="card">
          <button type="button" class="flat icon before" @click="goPrevious">
            <svg viewBox="0 0 32 32">
              <polygon points="28,15 8.9,15 19.2,4.7 17.8,3.3 5.1,16 17.8,28.7 19.2,27.3 8.9,17 28,17"/>
            </svg>
            Back
          </button>

          <h3>Example card</h3>

          <h5>Finance Ipsum</h5>
          <p>
            Securities default investment funds exchange market index value fall Fitch corporate 
            bonds treasury hedge fund. Term risk management gains taxpayer upswing fall receive expenses 
            volatile issuer rise. Term fiat 401k managed shares corporate bonds tax gains funds income maturities 
            downturn yield retirement. Bills district Fitch municipal bonds exchange bull. 
          </p>

          <div class="card-actions">
            <button type="submit">Next</button>
          </div>
        </div>
      </div>
    </div>

      <div class="code-sample">
        <strong>Markup</strong>
        <pre>
          <code class="language-markup">&lt;div class="card"&gt;
  &lt;h3&gt;Some h3 text&lt;/h3&gt;
  &lt;p&gt;Some p text&lt;/p&gt;

  &lt;div class="card-actions"&gt;
    &lt;button class="outlined"&gt;Cancel&lt;/button&gt;
    &lt;button type="submit"&gt;Next&lt;/button&gt;
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
