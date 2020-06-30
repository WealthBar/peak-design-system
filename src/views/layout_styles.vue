<template>
  <article class="container">
    <h1>Layout styles</h1>

    <!-- CARD -->
    <section id="card">
      <h2>Card</h2>
      <!-- TODO: ADD DESCRIPTION -->

      <div class="card">
        <h3>
          Simple card
        </h3>

        <p>
          Card in its simplest form. All margin is applied by the HTML element inside
        </p>

        <button type="button">
          Action
        </button>
      </div>

      <pre>
        <code class="language-markup">&lt;div class="card"&gt;
...
&lt;/div&gt;</code></pre>

      <h3>Step Card</h3>

      <div class="card step">
        <header>
          <h3>Card with step style applied</h3>
        </header>

        <article>
          <p>
            Card style, with the step content addition. Card style is applied, however
            the step styling is needed for the contents visual changes.
          </p>
        </article>

        <footer>
          <button type="button">
            Action
          </button>
        </footer>
      </div>

      <pre>
        <code class="language-markup">&lt;div class="step card"&gt;
&lt;header&gt;
  ...
&lt;/header&gt;

&lt;article&gt;
  ...
&lt;/article&gt;

&lt;footer&gt;
  ...
&lt;/footer&gt;
&lt;/div&gt;</code></pre>
    </section>
    <!-- CARD END -->

    <hr>

    <!-- NOTICE -->
    <section id="notice">
      <h2>Notice</h2>
      <p>Notice patterns are designed as an adaptable pattern for use in a variety of contexts from callouts to toast notifications. Adding a <code>notice</code> class to the containing element provides a default <code>$bg</code> coloured notice. Variants include <code>alt</code>, <code>light</code>, <code>alert</code>, and <code>neg</code>. For ease of building the <code>notice-content</code> class — as well as <code>&lt;header&gt;</code>, <code>&lt;article&gt;</code>, or <code>&lt;footer&gt;</code> elements inside the notice container will have a have side margins applied.</p>
      <h3>Default</h3>
      <pre><code class="language-markup">&lt;div class="notice"&gt;
  &lt;p class="notice-content"&gt; … &lt;/p&gt;
&lt;/div&gt;</code></pre>

      <div class="notice">
        <p class="notice-content">
          {{noticeCopy}}
        </p>
      </div>
      <hr>
      <h3>Alternate</h3>
      <pre><code class="language-markup">&lt;div class="notice alt"&gt;
  &lt;article&gt; … &lt;/article&gt;
&lt;/div&gt;</code></pre>
      <div class="notice alt">
        <article>
          <p>
            {{noticeCopy}}
          </p>
        </article>
      </div>
      <hr>
      <h3>Light</h3>
      <pre><code class="language-markup">&lt;div class="notice light"&gt;
  &lt;header&gt; … &lt;/header&gt;
  &lt;footer&gt; … &lt;/footer&gt;
&lt;/div&gt;</code></pre>
      <div class="notice light">
        <header>
          <h3>H3 Header</h3>
        </header>
        <footer>
          <p>
            {{noticeCopy}}
          </p>
        </footer>
      </div>
      <hr>
      <h3>Alert</h3>
      <pre><code class="language-markup">&lt;div class="notice alert"&gt;
  &lt;article&gt; … &lt;/article&gt;
&lt;/div&gt;</code></pre>
      <div class="notice alert">
        <article>
          <p>
            {{noticeCopy}}
          </p>
          <ul class="bullet">
            <li>This is a list item.</li>
            <li>This is the second item in the list.</li>
            <ul class="bullet">
              <li>This is a nested list.</li>
              <li>Let's have one more item.</li>
            </ul>
          </ul>
        </article>
      </div>
      <hr>
      <h3>Negative</h3>
      <pre><code class="language-markup">&lt;div class="notice neg"&gt;
  &lt;article&gt; … &lt;/article&gt;
&lt;/div&gt;</code></pre>
      <div class="notice neg">
        <article>
          <p>
            {{noticeCopy}}
          </p>
        </article>
      </div>
    </section>
    <!-- NOTICE END -->
  </article>
</template>

<script>
export default {
  data() {
    return {
      noticeCopy: `
        Body type is optimized for web readability. For additional emphasis or de-emphasis, we have 4 style
        classes that can be applied as needed to our base paragraph style.
      `
    }
  }
};
</script>
