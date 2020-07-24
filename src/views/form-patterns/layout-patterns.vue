<template>
  <article class="container">
    <h1>Form Patterns - Layout Patterns</h1>

    <section id="layout">
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
  </article>
</template>

<style lang="scss" scoped>
</style>
