<template>
  <article class="container">
    <h1>Form Patterns</h1>

    <section id="general">
      <h3>General Input Patterns</h3>

      <label for="optional-input">Input<span class="optional">optional</span></label>
      <input id="optional-input" type="text" name="optional-input" />
      <pre><code class="language-markup">&lt;label for="optional-input"&gt;Input&lt;span class="optional"&gt;optional&lt;/span&gt;&lt;/label&gt;
&lt;input type="text" id="optional-input" name="optional-input"&gt;</code></pre>

      <label for="disabled-input">Disabled</label>
      <input id="disabled-input" type="text" name="disabled-input" disabled />
      <pre><code class="language-markup">&lt;label for="disabled-input"&gt;Disabled&lt;/label&gt;
&lt;input type="text" id="disabled-input" name="disabled-input" disabled&gt;</code></pre>

      <label for="help-input">Help Message</label>
      <input id="help-input" type="text" name="help-input" />
      <p class="help-message">Additional help message</p>
      <pre><code class="language-markup">&lt;label for="help-input"&gt;Help Message&lt;/label&gt;
&lt;input type="text" id="help-input" name="help-input"&gt;
&lt;p class="help-message"&gt;Additional help message&lt;/p&gt;</code></pre>
    </section>

    <section id="inline">
      <h3>Inline Button Patterns</h3>
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

    <section id="check-radio">
      <h3>Checkbox and Radio Patterns</h3>
      <input id="element-check" type="checkbox" name="element-check" />
      <label for="element-check">
        <strong>Checkbox<span class="optional">Nested Elements</span></strong>
        <span class="description"><code>&lt;strong&gt;</code> for primary label, <code>&lt;span class="optional"&gt;</code> for optional, and <code>&lt;span class="description"&gt;</code> is used for description text. Can be used separately and/or  in conjunction with the <code>padded</code> and <code>border</code> input classes.</span>
      </label>

      <input id="padded-check" type="checkbox" class="padded" name="padded-check" />
      <label for="padded-check">Checkbox Padded</label>

      <input id="border-check" type="checkbox" class="border" name="border-check" />
      <label for="border-check">Checkbox Border</label>

      <input id="element-radio" type="radio" name="radio-options" />
      <label for="element-radio">
        <strong>Radio<span class="optional">Nested Elements</span></strong>
        <span class="description"><code>&lt;strong&gt;</code> for primary label, <code>&lt;span class="optional"&gt;</code> for optional, and <code>&lt;span class="description"&gt;</code> is used for description text. Can be used separately and/or in conjunction with the <code>radio</code> and <code>checkbox</code> input classes.</span>
      </label>

      <input id="padded-radio" type="radio" class="padded" name="radio-options" />
      <label for="padded-radio">Radio Padded</label>

      <input id="border-radio" type="radio" class="border" name="radio-options" />
      <label for="border-radio">Radio Border</label>

      <strong>Markup</strong>
      <pre><code class="language-markup">
&lt;input type="checkbox" id="element-check" name="element-check"&gt;
&lt;label for="element-check"&gt;
  &lt;strong&gt;Checkbox&lt;span class="optional"&gt;Nested Elements&lt;/span&gt;&lt;/strong&gt;
  &lt;span class="description"&gt;description text goes here&lt;/span&gt;
&lt;/label&gt;

&lt;input type="checkbox" class="padded" id="padded-check" name="padded-check"&gt;
&lt;label for="padded-check"&gt;Checkbox Padded&lt;/label&gt;

&lt;input type="checkbox" class="border" id="border-check" name="border-check"&gt;
&lt;label for="border-check"&gt;Checkbox Border&lt;/label&gt;

&lt;input type="radio" id="element-radio" name="radio-options"&gt;
&lt;label for="element-radio"&gt;
  &lt;strong&gt;Radio&lt;span class="optional"&gt;Nested Elements&lt;/span&gt;&lt;/strong&gt;
  &lt;span class="description"&gt;description text goes here&lt;/span&gt;
&lt;/label&gt;

&lt;input type="radio" class="padded" id="padded-radio"  name="radio-options"/&gt;
&lt;label for="padded-radio"&gt;Radio Padded&lt;/label&gt;

&lt;input type="radio" class="border" id="border-radio" name="radio-options"/&gt;
&lt;label for="border-radio"&gt;Radio Border&lt;/label&gt;
      </code></pre>
    </section>

    <section id="layout">
      <h2>Input Layout Patterns</h2>
      <label for="inline-pattern">Inline inputs</label>
      <div class="inline-input">
        <input id="inline-pattern" type="text" name="inline-pattern" style="max-width: 8rem;" />
        <input id="inline-pattern-two" type="text" name="inline-pattern-two" style="max-width: 16rem;" />
        <input id="inline-pattern-three" type="text" name="inline-pattern-three" style="max-width: 32rem;" />
      </div>
      <p class="help-message">Supports <code>max-width</code> via CSS</p>
      <pre><code class="language-markup">&lt;label for="inline-pattern"&gt;Inline inputs&lt;/label&gt;
&lt;div class="inline-input"&gt;
  &lt;input id="inline-pattern" type="text" name="inline-pattern" style="max-width: 8rem;"&gt;
  &lt;input id="inline-pattern-two" type="text" name="inline-pattern-two" style="max-width: 16rem;"&gt;
  &lt;input id="inline-pattern-three" type="text" name="inline-pattern-two" style="max-width: 32rem;"&gt;
&lt;/div&gt;
&lt;p class="help-message"&gt;Supports &lt;code&gt;max-width&lt;/code&gt; via CSS&lt;/p&gt;</code></pre>

      <div class="inline-input full">
        <div>
          <label for="inline-pattern-full-one">Inline inputs<span class="optional">full</span></label>
          <input id="inline-pattern-full-one" type="text" name="inline-pattern-full-one" />
          <p class="help-message">Even horizontal spacing on large screen</p>
        </div>
        <div>
          <label for="inline-pattern-full-two">Inline label two</label>
          <input id="inline-pattern-full-two" type="text" name="inline-pattern-full-two" />
          <p class="help-message">Full width on smaller screen</p>
        </div>
        <div>
          <label for="inline-pattern-full-three">Inline label three</label>
          <input id="inline-pattern-full-three" type="text" name="inline-pattern-full-three" />
          <p class="help-message">Accomodates any number of inputs</p>
        </div>
      </div>
      <pre><code class="language-markup">&lt;div class="inline-input full"&gt;
  &lt;div&gt;
    &lt;label for="inline-pattern-full-one"&gt;Inline inputs&lt;span&gt;full&lt;/span&gt;&lt;/label&gt;
    &lt;input type="text" id="inline-pattern-full-one" name="inline-pattern-full-one"&gt;
    &lt;p class="help-message"&gt;Even horizontal spacing on large screen&lt;/p&gt;
  &lt;/div&gt;
  &lt;div&gt;
    &lt;label for="inline-pattern-full-two"&gt;Inline label two&lt;/label&gt;
    &lt;input type="text" id="inline-pattern-full-two" name="inline-pattern-full-two"&gt;
    &lt;p class="help-message"&gt;Full width on smaller screen&lt;/p&gt;
  &lt;/div&gt;
  &lt;div&gt;
    &lt;label for="inline-pattern-full-three"&gt;Inline label three&lt;/label&gt;
    &lt;input type="text" id="inline-pattern-full-three" name="inline-pattern-full-three"&gt;
    &lt;p class="help-message"&gt;Accomodates any number of inputs&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>

      <div class="field">
        <label for="field-input">Field wrap class</label>
        <input id="field-input" type="text" name="field-input" />
        <p class="help-message">A basic wrapper to ensure structure formatting</p>
      </div>
      <pre><code class="language-markup">&lt;div class="field"&gt;
  &lt;!-- A basic wrapper to ensure structure formatting --&gt;
&lt;/div&gt;</code></pre>

      <fieldset class="fieldset">
        <legend>Fieldset class (with legend)</legend>
        <input id="fieldset-checkbox" type="checkbox" name="fieldset-checkbox" />
        <label for="fieldset-checkbox">Checkbox</label>
        <input id="fieldset-radio-one" type="radio" name="fieldset-radio" value="fieldset-radio-one" />
        <label for="fieldset-radio-one">Radio option one</label>
        <input id="fieldset-radio-two" type="radio" name="fieldset-radio" value="fieldset-radio-two" />
        <label for="fieldset-radio-two">Radio option two</label>
        <label for="text-input">Text</label>
        <input id="text-input" type="text" name="text-input" />
      </fieldset>
      <pre><code class="language-markup">&lt;fieldset name="fieldset" class="fieldset"&gt;
  &lt;legend&gt;Fieldset class (with legend)&lt;/legend&gt;
  &lt;!-- fieldset class can be applied to any block container--&gt;
&lt;/fieldset&gt;
      </code></pre>
    </section>

    <section id="invalid">
      <h2>Invalid &amp; Error states</h2>

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
  section {
    padding-bottom: 2rem;
    border-bottom: 1px solid $neutral-100;
  }
</style>
