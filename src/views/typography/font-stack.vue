<template>
  <article class="container">
    <section>
      <h1 id="font-stack">Font Stack</h1>
      <p>We use the same font stack regardless of the device. GT Walsheim is our typeface for it’s friendly and unique personality, as well as its web readability.</p>

      <pre>
        <code class="language-css">font-family: "GT-Walsheim", "Avenir", "Helvetica Neue", Helvetica, Arial, sans-serif;</code>
      </pre>

      <h3>Alternative glyphs</h3>
      <p>This refers to alphanumeric characters where we’ve deviated from GT Walsheim’s default for readability reasons.</p>

      <p>Across the board we use the alternate Y, both lower and uppercase.</p>
      <div class="alternative-glyphs-container">
        <div class="alternative-examples">
          <img src="~@/assets/alternative-y.png" />
        </div>
        <div class="alternative-copy">
          <strong>Style</strong>
          <pre><code class="language-css">font-feature-settings: "kern", "liga", “pnum”, "ss04";</code></pre>
        </div>
      </div>
      <h3>Tabular Figures</h3>
      <p>For lists and tables with numbers, we use tabular figures (also known as monospaced numbers) for all text. This will ensure vertical alignment among numbers and special characters.</p>
      <div class="alternative-glyphs-container">
        <div class="alternative-examples">
          <img src="~@/assets/tabular-figures@2x.png" />
        </div>
        <div class="alternative-copy">
          <strong>Style</strong>
          <pre><code class="language-css">font-feature-settings: "kern", "liga", “tnum”, "ss04";</code></pre>
          <strong>Markup</strong>
          <pre><code class="language-markup">&lt;span class="tab-numbers"&gt;0123456789&lt;/span&gt;</code></pre>
        </div>
      </div>
    </section>
  </article>
</template>
