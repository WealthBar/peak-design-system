<template>
  <article class="container">
    <section>
      <h1>Form Elements</h1>
      <p>Inputs in Peak have been designed to require as minimal amount developer editing as possible. Several different input types have been defined in Peak to accomodate different functionality. As such, <strong>all <code>&lt;input&gt;</code> elements require a defined <code>type</code> attribute</strong>. The listing of input type styles can be found below aling with code examples.</p>
      <p>Additional attributes are optional and may vary depending on individual use. For accessability a <code>&lt;label&gt;</code> with a <code>for</code> attribute that matches <code>id</code> and <code>name</code> is highly recommened. Other attributes such as <code>placeholder</code>, <code>required</code>, and <code>disabled</code> will all effect the behaviour and look of the input.</p>
    </section>

    <section id="text">
      <h3>Text inputs</h3>

      <label for="text-input">Text</label>
      <input id="text-input" type="text" name="text-input">
      <pre><code class="language-markup">&lt;label for="text-input"&gt;Text&lt;/label&gt;
&lt;input id="text-input" type="text" name="text-input"&gt;</code></pre>

      <label for="number-input">Number</label>
      <input id="number-input" type="number" name="number-input" pattern="[0-9]*">
      <pre><code class="language-markup">&lt;label for="number-input"&gt;Number&lt;/label&gt;
&lt;input id="number-input" type="number" name="number-input" pattern="[0-9]*"&gt;</code></pre>

      <label for="search-input">Search</label>
      <input id="search-input" type="search" name="search-input" placeholder="search">
      <pre><code class="language-markup">&lt;label for="search-input"&gt;Search&lt;/label&gt;
&lt;input type="search" id="search-input" name="search-input" placeholder="search"&gt;</code></pre>

      <label for="password-input">Password</label>
      <input id="password-input" type="password" name="password-input">
      <pre><code class="language-markup">&lt;label for="password-input"&gt;Password&lt;/label&gt;
&lt;input type="password" id="password-input" name="password-input" required&gt;</code></pre>
    </section>

    <section id="non-text">
      <h2>Non-text inputs</h2>

      <legend>Checkbox</legend>
      <fieldset>
        <input id="checkbox-input-one" type="checkbox" name="checkbox-input-one">
        <label for="checkbox-input-one">Checkbox one</label>
        <input id="checkbox-input-two" type="checkbox" name="checkbox-input-two">
        <label for="checkbox-input-two">Checkbox two</label>
      </fieldset>
      <pre><code class="language-markup">&lt;legend&gt;Checkbox&lt;/legend&gt;
&lt;input type="checkbox" id="checkbox-input-one" name="checkbox-input-one"&gt;
&lt;label for="checkbox-input-one"&gt;Checkbox one&lt;/label&gt;
&lt;input type="checkbox" id="checkbox-input-two" name="checkbox-input-two"&gt;
&lt;label for="checkbox-input-two"&gt;Checkbox two&lt;/label&gt;</code></pre>

      <legend>Radio</legend>
      <fieldset>
        <input id="radio-option-one" type="radio" name="radio-input">
        <label for="radio-option-one">Option one</label>

        <input id="radio-option-two" type="radio" name="radio-input">
        <label for="radio-option-two">Option two</label>

        <input id="radio-option-three" type="radio" name="radio-input">
        <label for="radio-option-three">Option three</label>
      </fieldset>
      <pre><code class="language-markup">&lt;legend&gt;Radio&lt;/legend&gt;
&lt;input type="radio" id="radio-option-one" name="radio-option-one"/&gt;
&lt;label for="radio-option-one"&gt;Option one&lt;/label&gt;
&lt;input type="radio" id="radio-option-two" name="radio-option-two"/&gt;
&lt;label for="radio-option-two"&gt;Option two&lt;/label&gt;
&lt;input type="radio" id="radio-option-three" name="radio-option-three"/&gt;
&lt;label for="radio-option-three"&gt;Option three&lt;/label&gt;</code></pre>

      <label for="range">Range</label>
      <input id="range" type="range" min="0" max="100" value="0">
      <pre><code class="language-markup">&lt;label for="range"&gt;Range&lt;/label&gt;
&lt;input type="range" id="range" min="0" max="100" value="0"/&gt;</code></pre>

      <legend>File</legend>
      <label for="file-input" class="button">Upload file</label>
      <input id="file-input" type="file" name="file-input" @change="loadFile">
      <span class="help-message">File name: {{ fileName }}</span>
      <pre><code class="language-markup">&lt;legend&gt;File&lt;/legend&gt;
&lt;label for="file-input" class="button"&gt;Upload file&lt;/label&gt;
&lt;input type="file" name="file-input" id="file-input"/&gt;
&lt;span class="help-message"&gt;File name: {{ fileName }}&lt;/span&gt;</code></pre>
    </section>

    <section id="non-input">
      <h2>Non-input form elements</h2>

      <label for="textarea">Textarea</label>
      <textarea id="textarea" name="textarea"></textarea>
      <pre><code class="language-markup">&lt;label for="textarea"&gt;Textarea&lt;/label&gt;
&lt;textarea id="textarea" name=textarea&gt;&lt;/textarea&gt;</code></pre>

      <label for="select">Select</label>
      <select id="select" name="select">
        <option value="one">Option 1</option>
        <option value="two">Option 2</option>
        <option value="three">Option 3</option>
      </select>
      <pre><code class="language-markup">&lt;label for="select"&gt;Select&lt;/label&gt;
&lt;select id="select" name="select"&gt;
  &lt;option value="one"&gt;Option 1&lt;/option&gt;
  &lt;option value="two"&gt;Option 2&lt;/option&gt;
  &lt;option value="three"&gt;Option 3&lt;/option&gt;
&lt;/select&gt;</code></pre>

      <legend>Legend and Fieldset</legend>
      <fieldset>
        <input id="radio-fieldset-one" type="radio" name="radio-fieldset">
        <label for="radio-fieldset-one">Radio button one in fieldset</label>

        <input id="radio-fieldset-two" type="radio" name="radio-fieldset">
        <label for="radio-fieldset-two">Radio button two in fieldset</label>
      </fieldset>
      <pre><code class="language-markup">&lt;legend&gt;Legend and Fieldset&lt;/legend&gt;
&lt;fieldset&gt;
&lt;!-- fieldset content--&gt;
&lt;/fieldset&gt;</code></pre>
    </section>

    <section id="spacing">
      <h2>Input spacing structure</h2>

      <p>The following examples showcase the basic margin and padding structure for <code>labels</code>, <code>inputs</code>, and other form elements. If there is an instance that requires an input to have no margins a class of <code>no-margin</code> can be applied — this should be used sparingly.</p>
      <p>Also included are some common patterns such as <code>error-message</code>, <code>inline-input</code> class, and <code>padded</code> and <code>padded border</code> classes for radio/checkbox inputs. More info for these patterns can be found on in <router-link to="input-patterns">Form Patterns</router-link> section of the site.</p>

      <div class="example">
        <label for="example">Standard Input</label>
        <input id="example" type="text" name="example">

        <label for="example-inline-button">Inline Button</label>
        <div class="inline-button">
          <input id="example-inline-button" type="text" name="example-inline-button">
          <button type="button">button</button>
        </div>

        <label for="example-text-input">Password</label>
        <input id="example-text-input" type="password" name="example-text-input">
        <p class="help-message">help or <span class="neg">error</span> text</p>
      </div>

      <div class="example inline-input full">
        <div>
          <label for="example-inline-pattern-full-one">Inline label one</label>
          <input id="example-inline-pattern-full-one" type="text" name="example-inline-pattern-full-one">
        </div>
        <div>
          <label for="example-inline-pattern-full-two">Inline label two</label>
          <input id="example-inline-pattern-full-two" type="text" name="example-inline-pattern-full-two">
        </div>
        <div>
          <label for="example-inline-pattern-full-three">Inline label three</label>
          <input id="example-inline-pattern-full-three" type="text" name="example-inline-pattern-full-three">
        </div>
      </div>

      <div class="example">
        <fieldset name="example-fieldset" class="fieldset">
          <legend>Fieldset class with legend</legend>
          <div class="example">
            <input id="example-fieldset-checkbox" type="checkbox" name="example-fieldset-checkbox">
            <label for="example-fieldset-checkbox">Checkbox</label>
            <input id="example-fieldset-radio-one" type="radio" name="example-fieldset-radio" value="fieldset-radio-one">
            <label for="example-fieldset-radio-one">Radio one</label>
            <input id="example-fieldset-radio-two" type="radio" name="example-fieldset-radio" value="fieldset-radio-two">
            <label for="example-fieldset-radio-two">Radio two</label>
          </div>
        </fieldset>

        <input id="example-fieldset-radio-one" type="radio" name="example-fieldset-radio" value="fieldset-radio-one" class="padded">
        <label for="example-fieldset-radio-one">padded radio</label>
        <input id="example-fieldset-radio-two" type="radio" name="example-fieldset-radio" value="fieldset-radio-two" class="border">
        <label for="example-fieldset-radio-two"><strong>border radio</strong>
          <span class="description">Nested span wrapper with <code>description</code> class added to content in label. Can be used with <code>padded</code> and <code>border</code> classes.</span>
        </label>

        <label for="example-textarea">Textarea</label>
        <textarea id="example-textarea" name="example-textarea"></textarea>

        <label for="example-select">Select</label>
        <select id="example-select" name="example-select">
          <option value="one">Option 1</option>
          <option value="two">Option 2</option>
          <option value="three">Option 3</option>
        </select>
      </div>
    </section>
  </article>
</template>

<script>

export default {
  props: {
    fileName: {
      type: String,
      default: 'No file selected',
    },
  },
  methods: {
    loadFile(event) {
      const file = event.target.files[0];
      this.fileName = file.name;
    },
  },
};
</script>

<style lang="scss" scoped>
  section {
    padding-bottom: 2rem;
    border-bottom: 1px solid $neutral-100;
  }
  .example {
    background: $tertiary-50;
    box-shadow: 0 1px 0 0 $tertiary-100, 0 -1px 0 0 $tertiary-100;
    border-bottom: 1px solid transparent;
    input, label, legend {
      background: $white;
      box-shadow: 0 1px 0 0 $tertiary-100, 0 -1px 0 0 $tertiary-100;
      &:first-child { box-shadow: 0 1px 0 0 $tertiary-100 }
    }
    .help-message {
      background: $white;
      box-shadow: 0 1px 0 0 $tertiary-100;
    }
    fieldset {
      border: 1px solid $secondary-300;
      background: $secondary-50;
      .example, input:last-child {
        box-shadow: 0 -1px 0 0 $tertiary-100;
      }
    }
  }
</style>
