<template>
  <article class="container">
    <section>
      <h1>Steps</h1>
      <p>
        Steps are made for multi step forms(forms with more than 1 page). The card styling will disappear at the mobile breakpoint,
        and the step will fill the screen.
      </p>

      <p>
        The step consists of the following html elements:
        <strong>header</strong>,
        <strong>article</strong>,
        <strong>footer</strong>
      </p>
    </section>

    <section id="card">
      <div class="card step">
        <header>
          <h3>Some title</h3>
        </header>

        <article>
          <p>
            Term fiat 401k managed shares corporate bonds tax gains funds income maturities downturn yield
            retirement. Bills district Fitch municipal bonds exchange bull.
          </p>
        </article>

        <footer>
          <button type="button">Next</button>
        </footer>
      </div>

      <div class="code-sample">
        <pre>
          <code class="language-markup">&lt;div class="step card"&gt;
  &lt;header&gt;
    &lt;h3&gt;Header&lt;/h3&gt;
  &lt;/header&gt;

  &lt;article&gt;
    &lt;p&gt;Body&lt;/p&gt;
  &lt;/article&gt;

  &lt;footer&gt;
    &lt;button type="submit"&gt;Okay&lt;/button&gt;
  &lt;/footer&gt;
&lt;/div&gt;</code>
        </pre>
      </div>
    </section>
  </article>
</template>

<script>
export default { };
</script>
