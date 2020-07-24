<template>
  <article class="container">
    <h1>Form Patterns - Inline Button</h1>

    <section id="inline">
      <label for="inline-button">Inline Button</label>
      <div class="inline-button">
        <input id="inline-button" type="text" name="inline-button" />
        <button type="button">Submit</button>
      </div>
      <pre><code class="language-markup">&lt;label for="inline-button"&gt;Inline Button&lt;/label&gt;
&lt;div class="inline-button"&gt;
  &lt;input id="inline-button" type="text" name="inline-button"&gt;
  &lt;button type="button"&gt;Submit&lt;/button&gt;
&lt;/div&gt;</code></pre>

      <label for="inline-select">Select Inline Button</label>
      <div class="inline-button">
        <select id="inline-select" name="inline-select">
          <option value="one">Option 1</option>
          <option value="two">Option 2</option>
          <option value="three">Option 3</option>
        </select>
        <button type="button">Submit</button>
      </div>
      <pre><code class="language-markup">&lt;label for="inline-select"&gt;Select Inline Button&lt;/label&gt;
&lt;div class="inline-button"&gt;
  &lt;select id="inline-select" name="inline-select"&gt;
    &lt;option value="one"&gt;Option 1&lt;/option&gt;
    &lt;option value="two"&gt;Option 2&lt;/option&gt;
    &lt;option value="three"&gt;Option 3&lt;/option&gt;
  &lt;/select&gt;
  &lt;button type="button"&gt;Submit&lt;/button&gt;
&lt;/div&gt;</code></pre>

      <label for="inline-button-large">Inline Button <span class="optional">large outline neg</span></label>
      <div class="inline-button">
        <input id="inline-button-large" error-message type="text" name="inline-button" />
        <button class=" large outline neg" type="button">Large</button>
      </div>
      <pre><code class="language-markup">&lt;label for="inline-button"&gt;Inline Button&lt;span class="optional"&gt;large outline neg&lt;/span&gt;&lt;/label&gt;
&lt;div class="inline-button"&gt;
  &lt;input id="inline-button" error-message type="text" name="inline-button"&gt;
  &lt;button class=" large outline neg" type="button"&gt;Large&lt;/button&gt;
&lt;/div&gt;</code></pre>

      <label for="inline-button-small">Inline Button <span class="optional">small subtle</span></label>
      <div class="inline-button">
        <input id="inline-button-small" error-message type="text" name="inline-button-small" />
        <button class="small subtle" type="button">Small</button>
      </div>
      <pre><code class="language-markup">&lt;label for="inline-button"&gt;Inline Button&lt;span class="optional"&gt;small subtle&lt;/span&gt;&lt;/label&gt;
&lt;div class="inline-button"&gt;
  &lt;input id="inline-button" error-message type="text" name="inline-button"&gt;
  &lt;button class="small subtle" type="button"&gt;Small&lt;/button&gt;
&lt;/div&gt;</code></pre>

      <label for="inline-button-flat">Inline Button <span class="optional">flat alt</span></label>
      <div class="inline-button">
        <input id="inline-button-flat" error-message type="text" name="inline-button-flat" />
        <button class="flat alt" type="button">Flat</button>
      </div>
      <pre><code class="language-markup">&lt;label for="inline-button"&gt;Inline Button&lt;span class="optional"&gt;flat alt&lt;/span&gt;&lt;/label&gt;
&lt;div class="inline-button"&gt;
  &lt;input id="inline-button" error-message type="text" name="inline-button"&gt;
  &lt;button class="flat alt" type="button"&gt;Flat&lt;/button&gt;
&lt;/div&gt;</code></pre>

      <label for="inline-button-icon">Inline Button <span class="optional">icon</span></label>
      <div class="inline-button">
        <input id="inline-button-icon" error-message type="text" name="inline-button-icon" />
        <button class="icon" type="button">
          <svg viewBox="0 0 32 32">
            <polygon points="14.2,3.3 12.8,4.7 23.1,15 4,15 4,17 23.1,17 12.8,27.3 14.2,28.7 26.9,16" />
          </svg>
        </button>
      </div>
      <pre><code class="language-markup">&lt;label for="inline-button"&gt;Inline Button&lt;span class="optional"&gt;icon&lt;/span&gt;&lt;/label&gt;
&lt;div class="inline-button"&gt;
  &lt;input id="inline-button" error-message type="text" name="inline-button"&gt;
  &lt;button class="icon" type="button"&gt;
    &lt;svg&gt;…&lt;/svg&gt;
  &lt;/button&gt;
&lt;/div&gt;</code></pre>
    </section>
  </article>
</template>

<style lang="scss" scoped>
</style>
