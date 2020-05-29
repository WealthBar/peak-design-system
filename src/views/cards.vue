<template>
  <article class="container">
    <section>
      <h1>Cards</h1>
      <p>
        Cards in Peak have been designed to act as a wrapper with some padding, and not much else. Everything outside of the
        <code>&lt;div class="card-footer"&gt;</code> class, simply adheares to their usual style. Meaning it allows for 
        consistent styling behaviour at all time when using elements or classes.
      </p>
    </section>

    <section id="card">
      <h3>Card</h3>

      <div class="card">
        <div class="card-header">
          <h3>Some title</h3>
        </div>

        <div class="card-body">
          <p>
            Term fiat 401k managed shares corporate bonds tax gains funds income maturities downturn yield 
            retirement. Bills district Fitch municipal bonds exchange bull.
          </p>
        </div>
      </div>

      <div class="code-sample">
        <pre>
          <code class="language-markup">&lt;div class="card"&gt;
  &lt;h3&gt;Simple card&lt;/h3&gt;

  &lt;p&gt;Card body&lt;/p&gt;

  &lt;div class="card-footer"&gt;
    &lt;button type="submit"&gt;Okay&lt;/button&gt;
  &lt;/div&gt;
&lt;/div&gt;</code>
        </pre>
      </div>
    </section>

    <section>
      <h3>Card body styles</h3>

      <div class="card">
        <div class="card-header">
          <h3>Example card</h3>
        </div>

        <div class="card-body">
          <h5>Finance Ipsum</h5>

          <div class="card">
            <div class="card-body">
              <div class="inline-input full">
                <div>
                  <label for="inline-pattern-one">First name</label>
                  <input id="inline-pattern-one" type="text" name="inline-pattern-two">
                </div>

                <div>
                  <label for="inline-pattern-two">Last name</label>
                  <input id="inline-pattern-two" type="text" name="inline-pattern-two">
                </div>
              </div>

              <hr>

              <p>
                Term fiat 401k managed shares corporate bonds tax gains funds income maturities
                downturn yield retirement. Bills district Fitch municipal bonds exchange bull.
              </p>
            </div>
          </div>
        </div>

        <div class="card-footer">
          <button type="submit" class="outline">Cancel</button>
          <button type="submit">Next</button>
        </div>
      </div>

      <div class="code-sample">
        <pre>
          <code class="language-markup">&lt;div class="card"&gt;
  &lt;h3&gt;Example card&lt;/h3&gt;

  &lt;div class="card-body"&gt;
    &lt;h5&gt;Finance Ipsum&lt;/h5&gt;

    &lt;div class="content-box"&gt;
      &lt;div class="inline-input full"&gt;

        &lt;div&gt;
          &lt;label for="inline-pattern-one"&gt;First name&lt;/label&gt;
          &lt;input id="inline-pattern-one" type="text" name="inline-pattern-two"&gt;
        &lt;/div&gt;

        &lt;div&gt;
          &lt;label for="inline-pattern-two"&gt;Last name&lt;/label&gt;
          &lt;input id="inline-pattern-two" type="text" name="inline-pattern-two"&gt;
        &lt;/div&gt;
      &lt;/div&gt;

      &lt;div class="divider"&gt;&lt;/div&gt;

      &lt;p&gt;
        Term fiat 401k managed shares corporate bonds tax gains funds income maturities
        downturn yield retirement. Bills district Fitch municipal bonds exchange bull.
      &lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;

  &lt;div class="card-footer"&gt;
    &lt;button type="submit" class="outline"&gt;Cancel&lt;/button&gt;
    &lt;button type="submit"&gt;Next&lt;/button&gt;
  &lt;/div&gt;
&lt;/div&gt;</code>
        </pre>
      </div>
    </section>


    <section>
      <h3>Card</h3>

      <div class="card small">

        <div class="card-body space-between-horizontal center-horizontal">
          <div>
            <div class="card x-small accent no-border">
              <div class="card-body">
                #100476602
              </div>
            </div>

            <p class="no-margin">
              <strong>One-time deposit for: </strong><span>$100</span>
            </p>
          </div>

          <button>View Transfer</button>
        </div>
      </div>

      <div class="code-sample">
        <pre>
          <code class="language-markup">&lt;div class="card"&gt;
  &lt;h3&gt;Simple card&lt;/h3&gt;

  &lt;p&gt;Card body&lt;/p&gt;

  &lt;div class="card-footer"&gt;
    &lt;button type="submit"&gt;Okay&lt;/button&gt;
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
