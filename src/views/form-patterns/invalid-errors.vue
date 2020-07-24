<template>
  <article class="container">
    <h1>Form Patterns - Invalid &amp; Error States</h1>

    <section id="invalid">
      <label for="invalid-input">Text input</label>
      <input id="invalid-input" type="text" name="invalid-input" class="invalid" />
      <p class="error-message">Optional error messaging</p>
      <pre><code class="language-markup">&lt;label for="invalid-text-input"&gt;Input invalid&lt;/label&gt;
&lt;input type="text" id="invalid-text-input" name="invalid-text-iinput" class="invalid"&gt;
&lt;p class="error-message"&gt;Error messaging&lt;/p&gt;</code></pre>

      <label for="invalid-search">Search input</label>
      <input id="invalid-search" type="search" name="search-input" class="invalid" />
      <pre><code class="language-markup">&lt;label for="invalid-search"&gt;Search input&lt;/label&gt;
&lt;input type="search" id="invalid-search" name="search-input" class="invalid"&gt;</code></pre>

      <label for="invalid-inline-button">Inline Button</label>
      <div class="inline-button">
        <input id="invalid-inline-button" type="text" name="invalid-inline-button" class="invalid" />
        <button type="button" class="subtle">Submit</button>
      </div>
      <p class="warning-message">
        <svg viewBox="0 0 32 32">
          <path d="m16.1,5c0.7,0 1.3,0.3 1.7,0.9l11.9,18.9c0.6,0.9 0.2,1.7 0.1,2c-0.2,0.3 -0.7,1 -1.8,1l-23.9,0c-1.1,0 -1.6,-0.7 -1.8,-1c-0.2,-0.3 -0.5,-1.1 0.1,-2l12,-18.8c0.3,-0.6 1,-1 1.7,-1m0,-2c-1.3,0 -2.6,0.6 -3.4,1.9l-11.9,18.9c-1.7,2.7 0.2,6.2 3.3,6.2l23.9,0c3.1,0 5.1,-3.5 3.4,-6.1l-11.9,-19c-0.8,-1.2 -2.1,-1.9 -3.4,-1.9l0,0z" />
          <rect x="15" y="9" width="2" height="12" />
          <circle cx="16" cy="24.5" r="1.5" />
        </svg>
        <span>Optional warning messaging</span>
      </p>
      <pre><code class="language-markup">&lt;label for="invalid-inline-button"&gt;Inline Button&lt;/label&gt;
&lt;div class="inline-button"&gt;
  &lt;input id="invalid-inline-button" type="text" name="invalid-inline-button" class="invalid"&gt;
  &lt;button type="button" class="subtle"&gt;Submit&lt;/button&gt;
&lt;/div&gt;
&lt;p class="warning-message"&gt;
  &lt;svg&gt;…&lt;/svg&gt;
  &lt;span&gt;Optional warning messaging&lt;/span&gt;
&lt;/p&gt;</code></pre>

      <label for="invalid-select">Select</label>
      <select id="invalid-select" name="invalid-select" class="invalid">
        <option value="one">Option 1</option>
        <option value="two">Option 2</option>
        <option value="three">Option 3</option>
      </select>
      <pre><code class="language-markup">&lt;label for="invalid-select"&gt;Select&lt;/label&gt;
&lt;select id="invalid-select" name="invalid-select" class="invalid"&gt;
  &lt;option value="one"&gt;Option 1&lt;/option&gt;
  &lt;option value="two"&gt;Option 2&lt;/option&gt;
  &lt;option value="three"&gt;Option 3&lt;/option&gt;
&lt;/select&gt;</code></pre>

      <fieldset name="invalid-fieldset" class="fieldset invalid">
        <legend>Invalid Fieldset</legend>
        <input id="invalid-checkbox" type="checkbox" name="invalid-checkbox" class="invalid" />
        <label for="invalid-checkbox">Invalid checkbox</label>

        <input id="invalid-radio" type="radio" name="invalid-radio" value="invalid-radio" class="invalid" />
        <label for="invalid-radio">Invalid radio</label>
      </fieldset>
      <pre><code class="language-markup">&lt;fieldset name="invalid-fieldset" class="invalid"&gt;
  &lt;legend&gt;Fieldset&lt;/legend&gt;
  &lt;input type="checkbox" id="invalid-checkbox" name="invalid-checkbox" class="invalid"&gt;
  &lt;label for="invalid-checkbox"&gt;Checkbox&lt;/label&gt;
&lt;/fieldset&gt;</code></pre>

      <input id="invalid-border-radio" type="radio" name="invalid-border-radio" value="invalid-border-radio" class="border invalid" />
      <label for="invalid-border-radio">
        <strong>Invalid border radio</strong>
        <span class="description">Nested span wrapper with <code>description</code> class added to content in label. Can be used with <code>padded</code> and <code>border</code> classes.</span>
      </label>
      <pre><code class="language-markup">&lt;input type="radio" id="invalid-border-radio" name="invalid-border-radio" value="invalid-border-radio" class="border invalid"&gt;
&lt;label for="invalid-border-radio"&gt;
  &lt;strong&gt;Invalid border radio&lt;/strong&gt;
  &lt;span class="description"&gt;Nested span wrapper with description class added to content in label. Can be used with padded and border classes.&lt;/span&gt;
&lt;/label&gt;</code></pre>
    </section>
  </article>
</template>

<style lang="scss" scoped>
</style>
