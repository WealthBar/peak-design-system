<template>
  <article class="container">
    <section>
    <h1>Inputs</h1>
    <p>Inputs in Peak have been designed to require as minimal amount developer editing as possible. Several different input types have been defined in Peak to accomodate different functionality. As such, <strong>all <code>&lt;input&gt;</code> elements require a defined <code>type</code> attribute</strong>. The listing of input type styles can be found below aling with code examples.</p>
    <p>Additional attributes are optional and may vary depending on individual use. For accessability a <code>&lt;label&gt;</code> with a <code>for</code> attribute that matches <code>id</code> and <code>name</code> is highly recommened. Other attributes such as <code>placeholder</code>, <code>required</code>, and <code>disabled</code> will all effect the behaviour and look of the input.</p>
    </section>



    <section id="text">
      <h3>Text inputs</h3>

      <label for="text-input">Text</label>
      <input type="text" id="text-input" name="text-input">

      <label for="search-input">Search</label>
      <input type="search" id="search-input" name="search-input" placeholder="search">

      <label for="password-input">Password</label>
      <input type="password" id="password-input" name="password-input" required>

      <strong>Markup</strong>
      <pre><code class="language-html">&lt;label for="text-input"&gt;Text&lt;/label&gt;
&lt;input id="text-input" type="text" name="text-input"&gt;

&lt;label for="search-input"&gt;Search&lt;/label&gt;
&lt;input type="search" id="search-input" name="search-input" placeholder="search"&gt;

&lt;label for="password-input"&gt;Password&lt;/label&gt;
&lt;input type="password" id="password-input" name="password-input" required&gt;</code></pre>

      <h3>Text input style options</h3>

      <label for="optional-input">Input<span class="optional">optional</span></label>
      <input type="text" id="optional-input" name="optional-input">

      <label for="disabled-input">Disabled</label>
      <input type="text" id="disabled-input" name="disabled-input" disabled>

      <label for="help-input">Help Messaging</label>
      <input type="text" id="help-input" name="help-input">
      <p class="help-message">Additional input help messaging</p>

      <label for="inline-button">Inline Button</label>
      <div class="inline-button">
        <input id="inline-button" type="text" name="inline-button">
        <button type="button">Submit</button>
      </div>

      <label for="inline-button">Inline Button <span class="optional">large outline neg</span></label>
      <div class="inline-button">
        <input id="inline-button" error-message type="text" name="inline-button">
        <button class=" large outline neg" type="button">Large</button>
      </div>

      <label for="inline-button">Inline Button <span class="optional">small subtle</span></label>
      <div class="inline-button">
        <input id="inline-button" error-message type="text" name="inline-button">
        <button class="small subtle" type="button">Small</button>
      </div>

      <label for="inline-button">Inline Button <span class="optional">flat alt</span></label>
      <div class="inline-button">
        <input id="inline-button" error-message type="text" name="inline-button">
        <button class="flat alt" type="button">Flat</button>
      </div>

      <label for="inline-button">Inline Button <span class="optional">icon</span></label>
      <div class="inline-button">
        <input id="inline-button" error-message type="text" name="inline-button">
        <button class="icon" type="button">
          <svg viewBox="0 0 32 32">
            <polygon points="14.2,3.3 12.8,4.7 23.1,15 4,15 4,17 23.1,17 12.8,27.3 14.2,28.7 26.9,16"/>
          </svg>
        </button>
      </div>

      <strong>Markup</strong>
      <pre><code class="language-html">&lt;label for="optional-input"&gt;Input&lt;span class="optional"&gt;optional&lt;/span&gt;&lt;/label&gt;
&lt;input type="text" id="optional-input" name="optional-input"&gt;

&lt;label for="disabled-input"&gt;Input Disabled&lt;/label&gt;
&lt;input type="text" id="disabled-input" name="disabled-input" disabled&gt;

&lt;label for="help-input"&gt;Input Help&lt;/label&gt;
&lt;input type="text" id="help-input" name="help-input"&gt;
&lt;p class="help-message"&gt;Additional input messaging&lt;/p&gt;

&lt;label for="inline-button"&gt;Inline Button&lt;/label&gt;
&lt;div class="inline-button"&gt;
  &lt;input id="inline-button" error-message type="text" name="inline-button"&gt;
  &lt;button type="button"&gt;Submit&lt;/button&gt;
&lt;/div&gt;

&lt;label for="inline-button"&gt;Inline Button&lt;span class="optional"&gt;large outline neg&lt;/span&gt;&lt;/label&gt;
&lt;div class="inline-button"&gt;
  &lt;input id="inline-button" error-message type="text" name="inline-button"&gt;
  &lt;button class=" large outline neg" type="button"&gt;Large&lt;/button&gt;
&lt;/div&gt;

&lt;label for="inline-button"&gt;Inline Button&lt;span class="optional"&gt;small subtle&lt;/span&gt;&lt;/label&gt;
&lt;div class="inline-button"&gt;
  &lt;input id="inline-button" error-message type="text" name="inline-button"&gt;
  &lt;button class="small subtle" type="button"&gt;Small&lt;/button&gt;
&lt;/div&gt;

&lt;label for="inline-button"&gt;Inline Button&lt;span class="optional"&gt;flat alt&lt;/span&gt;&lt;/label&gt;
&lt;div class="inline-button"&gt;
  &lt;input id="inline-button" error-message type="text" name="inline-button"&gt;
  &lt;button class="flat alt" type="button"&gt;Flat&lt;/button&gt;
&lt;/div&gt;

&lt;label for="inline-button"&gt;Inline Button&lt;span class="optional"&gt;icon&lt;/span&gt;&lt;/label&gt;
&lt;div class="inline-button"&gt;
  &lt;input id="inline-button" error-message type="text" name="inline-button"&gt;
  &lt;button class="icon" type="button"&gt;
    &lt;svg&gt;…&lt;/svg&gt;
  &lt;/button&gt;
&lt;/div&gt;
</code></pre>
    </section>

    <section id="non-text">
      <h2>Non-text inputs</h2>

      <legend>Checkbox input</legend>

      <input type="checkbox" id="checkbox-one" name="checkbox-one">
      <label for="checkbox-one">Checkbox item one</label>
      <input type="checkbox" id="checkbox-two" name="checkbox-two">
      <label for="checkbox-two">Checkbox item two</label>

      <legend>Radio inputs</legend>

      <input type="radio" id="radio-option-one" name="radio-input"/>
      <label for="radio-option-one">Option one</label>

      <input type="radio" id="radio-option-two" name="radio-input"/>
      <label for="radio-option-two">Option two</label>

      <input type="radio" id="radio-option-three" name="radio-input"/>
      <label for="radio-option-three">Option three</label>

      <label for="range">Range</label>
      <input id="range" type="range" min="0" max="100" value="25">

      <legend>File input</legend>
      <label for="file-input" class="button">Upload file</label>
      <input type="file" name="file-input" id="file-input" @change="loadFile"/>
      <span class="help-message">File name: {{ fileName }}</span>

      <strong>Markup</strong>
      <pre><code class="language-html">&lt;legend&gt;Checkbox&lt;/legend&gt;
&lt;input type="checkbox" id="checkbox-one" name="checkbox-one"&gt;
&lt;label for="checkbox-one"&gt;Checkbox item one&lt;/label&gt;
&lt;input type="checkbox" id="checkbox-two" name="checkbox-two"&gt;
&lt;label for="checkbox-two"&gt;Checkbox item two&lt;/label&gt;

&lt;legend&gt;Radio&lt;/legend&gt;
&lt;input type="radio" id="radio-option-one" name="radio-option-one"/&gt;
&lt;label for="radio-option-one"&gt;Option one&lt;/label&gt;
&lt;input type="radio" id="radio-option-two" name="radio-option-two"/&gt;
&lt;label for="radio-option-two"&gt;Option two&lt;/label&gt;
&lt;input type="radio" id="radio-option-three" name="radio-option-three"/&gt;
&lt;label for="radio-option-three"&gt;Option three&lt;/label&gt;

&lt;label for="range"&gt;Range&lt;/label&gt;
&lt;input type="range" id="range" min="0" max="100" value="25"/&gt;

&lt;legend&gt;File input&lt;/legend&gt;
&lt;label for="file-input" class="button"&gt;Upload file&lt;/label&gt;
&lt;input type="file" name="file-input" id="file-input"/&gt;
&lt;span class="help-message"&gt;File name: {{ fileName }}&lt;/span&gt;
      </code></pre>

      <h3>Non-text input style options</h3>

      <input type="checkbox" id="semi-fancy-check" class="semi-fancy" name="semi-fancy-check">
      <label for="semi-fancy-check">Semi-fancy checkbox
        <span>With more info to describe the option.</span>
      </label>

      <input type="radio" id="fancy-radio" class="fancy" name="fancy-radio"/>
      <label for="fancy-radio">Fancy radio</label>

      <input type="radio" id="semi-fancy-radio" class="semi-fancy" name="fancy-radio"/>
      <label for="semi-fancy-radio">Semi-fancy radio</label>

      <input type="radio" id="fancy-radio-alt" class="fancy" name="fancy-radio"/>
      <label for="fancy-radio-alt">Fancy radio description
        <span>With more info to describe the option. Can be used with fancy and semi-fancy classes.</span>
      </label>

      <strong>Markup</strong>
      <pre><code class="language-html">&lt;input type="checkbox" id="semi-fancy-check" class="semi-fancy" name="semi-fancy-check"&gt;
&lt;label for="semi-fancy-check"&gt;Semi-fancy checkbox
  &lt;span&gt;With more info to describe the option.&lt;/span&gt;
&lt;/label&gt;

&lt;input type="radio" id="fancy-radio" class="fancy" name="fancy-radio"/&gt;
&lt;label for="fancy-radio"&gt;Fancy radio&lt;/label&gt;

&lt;input type="radio" id="semi-fancy-radio" class="semi-fancy" name="fancy-radio"/&gt;
&lt;label for="semi-fancy-radio"&gt;Semi-fancy radio&lt;/label&gt;

&lt;input type="radio" id="fancy-radio-alt" class="fancy" name="fancy-radio"/&gt;
&lt;label for="fancy-radio-alt"&gt;Fancy radio description
  &lt;span&gt;With more info to describe the option. Can be used with fancy and semi-fancy classes.&lt;/span&gt;
&lt;/label&gt;</code></pre>
    </section>

    <section id="non-input">
      <h2>Non-input form elements</h2>

      <label for="textarea">Textarea</label>
      <textarea id="textarea" name=textarea></textarea>

      <label for="select">Select</label>
      <select id="select" name="select">
        <option value="one">Option 1</option>
        <option value="two">Option 2</option>
        <option value="three">Option 3</option>
      </select>

      <strong>Markup</strong>
      <pre><code class="language-html">&lt;label for="textarea"&gt;Textarea&lt;/label&gt;
&lt;textarea id="textarea" name=textarea&gt;&lt;/textarea&gt;

&lt;label for="select"&gt;Select&lt;/label&gt;
&lt;select id="select" name="select"&gt;
  &lt;option value="one"&gt;Option 1&lt;/option&gt;
  &lt;option value="two"&gt;Option 2&lt;/option&gt;
  &lt;option value="three"&gt;Option 3&lt;/option&gt;
&lt;/select&gt;</code></pre>
    </section>

    <section id="layout">
      <h2>Input layout patterns</h2>
      <label for="inline-pattern">Inline inputs</label>
      <div class="inline-input">
        <input id="inline-pattern" type="text" name="inline-pattern" style="max-width: 8rem;">
        <input id="inline-pattern-two" type="text" name="inline-pattern-two" style="max-width: 16rem;">
        <input id="inline-pattern-three" type="text" name="inline-pattern-three" style="max-width: 32rem;">
      </div>
      <p class="input-text">Supports <code>max-width</code> via CSS</p>

      <div class="inline-input full">
        <div>
          <label for="inline-pattern-full-one">Inline inputs<span class="optional">full</span></label>
          <input type="text" id="inline-pattern-full-one" name="inline-pattern-full-one">
          <p class="input-text">Even horizontal spacing on large screen</p>
        </div>
        <div>
          <label for="inline-pattern-full-two">Inline label two</label>
          <input type="text" id="inline-pattern-full-two" name="inline-pattern-full-two">
          <p class="input-text">Full width on smaller screen</p>
        </div>
        <div>
          <label for="inline-pattern-full-three">Inline label three</label>
          <input type="text" id="inline-pattern-full-three" name="inline-pattern-full-three">
          <p class="input-text">Accomodates any number of inputs</p>
        </div>
      </div>

      <div class="field">
        <label for="field-input">Field wrap class</label>
        <input type="text" id="field-input" name="field-input">
        <p class="input-text">A basic wrapper to ensure structure formatting</p>
      </div>

      <fieldset name="fieldset">
        <legend>Fieldset with legend</legend>
        <input type="checkbox" id="fieldset-checkbox" name="fieldset-checkbox">
        <label for="fieldset-checkbox">Checkbox</label>
        <input type="radio" id="fieldset-radio-one" name="fieldset-radio" value="fieldset-radio-one">
        <label for="fieldset-radio-one">Radio option one</label>
        <input type="radio" id="fieldset-radio-two" name="fieldset-radio" value="fieldset-radio-two">
        <label for="fieldset-radio-two">Radio option two</label>
        <label for="text-input">Text</label>
        <input type="text" id="text-input" name="text-input">
      </fieldset>

      <strong>Markup</strong>
      <pre><code class="language-html">&lt;label for="inline-pattern"&gt;Inline inputs&lt;/label&gt;
&lt;div class="inline-input"&gt;
  &lt;input id="inline-pattern" type="text" name="inline-pattern" style="max-width: 8rem;"&gt;
  &lt;input id="inline-pattern-two" type="text" name="inline-pattern-two" style="max-width: 16rem;"&gt;
  &lt;input id="inline-pattern-three" type="text" name="inline-pattern-two" style="max-width: 32rem;"&gt;
&lt;/div&gt;
&lt;p class="input-text"&gt;Supports &lt;code&gt;max-width&lt;/code&gt; via CSS&lt;/p&gt;

&lt;div class="inline-input full"&gt;
  &lt;div&gt;
    &lt;label for="inline-pattern-full-one"&gt;Inline inputs&lt;span&gt;full&lt;/span&gt;&lt;/label&gt;
    &lt;input type="text" id="inline-pattern-full-one" name="inline-pattern-full-one"&gt;
    &lt;p class="input-text"&gt;Even horizontal spacing on large screen&lt;/p&gt;
  &lt;/div&gt;
  &lt;div&gt;
    &lt;label for="inline-pattern-full-two"&gt;Inline label two&lt;/label&gt;
    &lt;input type="text" id="inline-pattern-full-two" name="inline-pattern-full-two"&gt;
    &lt;p class="input-text"&gt;Full width on smaller screen&lt;/p&gt;
  &lt;/div&gt;
  &lt;div&gt;
    &lt;label for="inline-pattern-full-three"&gt;Inline label three&lt;/label&gt;
    &lt;input type="text" id="inline-pattern-full-three" name="inline-pattern-full-three"&gt;
    &lt;p class="input-text"&gt;Accomodates any number of inputs&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;div class="field"&gt;
  &lt;label for="field-input"&gt;Field wrap class&lt;/label&gt;
  &lt;input type="text" id="field-input" name="field-input"&gt;
  &lt;p class="input-text"&gt;A basic wrapper to ensure structure formatting&lt;/p&gt;
&lt;/div&gt;

&lt;fieldset name="fieldset"&gt;
  &lt;legend&gt;Fieldset with legend&lt;/legend&gt;
  &lt;input type="checkbox" id="fieldset-checkbox" name="cfieldset-checkbox"&gt;
  &lt;label for="fieldset-checkbox"&gt;Checkbox&lt;/label&gt;
  &lt;input type="radio" id="fieldset-radio-one" name="fieldset-radio" value="fieldset-radio-one"&gt;
  &lt;label for="fieldset-radio-one"&gt;Radio option one&lt;/label&gt;
  &lt;input type="radio" id="fieldset-radio-two" name="fieldset-radio" value="fieldset-radio-two"&gt;
  &lt;label for="fieldset-radio-two"&gt;Radio option two&lt;/label&gt;
  &lt;label for="text-input"&gt;Text&lt;/label&gt;
  &lt;input type="text" id="text-input" name="text-input"&gt;
&lt;/fieldset&gt;</code></pre>
    </section>
    <section id="spacing">
      <h2>Input spacing structure</h2>

      <p>The following examples showcase the basic margin and padding structure for <code>labels</code>, <code>inputs</code>, and other form elements. If there is an instance that requires an input to have no margins a class of <code>no-margin</code> can be applied — this should be used sparingly.</p>

      <div class="example">
        <label for="example">Standard Input</label>
        <input id="example" type="text" name="example">

        <label for="example-inline-button">Inline Button</label>
        <div class="inline-button">
          <input id="example-inline-button" type="text" name="example-inline-button">
          <button type="button">button</button>
        </div>

        <label for="example-text-input">Password</label>
        <input type="password" id="example-text-input" name="example-text-input">
        <p class="help-message">help or <span class="neg">error</span> text</p>
      </div>

      <div class="example inline-input full">
        <div>
          <label for="example-inline-pattern-full-one">Inline label one</label>
          <input type="text" id="example-inline-pattern-full-one" name="example-inline-pattern-full-one">
        </div>
        <div>
          <label for="example-inline-pattern-full-two">Inline label two</label>
          <input type="text" id="example-inline-pattern-full-two" name="example-inline-pattern-full-two">
        </div>
        <div>
          <label for="example-inline-pattern-full-three">Inline label three</label>
          <input type="text" id="example-inline-pattern-full-three" name="example-inline-pattern-full-three">
        </div>
      </div>

      <div class="example">
        <fieldset name="example-fieldset">
          <legend>Fieldset with legend</legend>
          <div class="example">
            <input type="checkbox" id="example-fieldset-checkbox" name="example-fieldset-checkbox">
            <label for="example-fieldset-checkbox">Checkbox</label>
            <input type="radio" id="example-fieldset-radio-one" name="example-fieldset-radio" value="fieldset-radio-one">
            <label for="example-fieldset-radio-one">Radio one</label>
            <input type="radio" id="example-fieldset-radio-two" name="example-fieldset-radio" value="fieldset-radio-two">
            <label for="example-fieldset-radio-two">Radio two</label>
          </div>
        </fieldset>

        <input type="radio" id="fancy-example-fieldset-radio-one" name="fancy-example-fieldset-radio" value="fieldset-radio-one" class="fancy">
        <label for="fancy-example-fieldset-radio-one">Fancy radio one</label>
        <input type="radio" id="fancy-example-fieldset-radio-two" name="fancy-example-fieldset-radio" value="fieldset-radio-two" class="fancy">
        <label for="fancy-example-fieldset-radio-two">Fancy radio two
          <span>With more info to describe the option. Can be used with fancy and semi-fancy classes.</span>
        </label>

        <label for="example-textarea">Textarea</label>
        <textarea id="example-textarea" name=example-textarea></textarea>

        <label for="example-select">Select</label>
        <select id="example-select" name="example-select">
          <option value="one">Option 1</option>
          <option value="two">Option 2</option>
          <option value="three">Option 3</option>
        </select>
      </div>
    </section>
    <section id="invalid">
      <h2>Invalid &amp; Error states</h2>

      <label for="invalid-input">Text input</label>
      <input type="text" id="invalid-input" name="invalid-input" class="invalid">
      <p class="error-message">Optional error messaging</p>

      <label for="invalid-search">Search input</label>
      <input type="search" id="invalid-search" name="search-input" class="invalid">

      <label for="invalid-inline-button">Inline Button</label>
      <div class="inline-button">
        <input id="invalid-inline-button" type="text" name="invalid-inline-button" class="invalid">
        <button type="button" class="subtle">Submit</button>
      </div>

      <label for="invalid-select">Select</label>
      <select id="invalid-select" name="invalid-select" class="invalid">
        <option value="one">Option 1</option>
        <option value="two">Option 2</option>
        <option value="three">Option 3</option>
      </select>

      <fieldset name="invalid-fieldset" class="invalid">
      <legend>Fieldset</legend>
        <input type="checkbox" id="invalid-checkbox" name="invalid-checkbox" class="invalid">
        <label for="invalid-checkbox">Checkbox</label>
      </fieldset>

      <input type="radio" id="invalid-radio-one" name="invalid-radio" value="invalid-radio-one" class="semi-fancy invalid">
      <label for="invalid-radio-one">Fancy radio one</label>
      <input type="radio" id="invalid-radio-two" name="invalid-radio" value="invalid-radio-two" class="fancy invalid">
      <label for="invalid-radio-two">Fancy radio two
        <span>With more info to describe the option. Can be used with fancy and semi-fancy classes.</span>
      </label>

      <strong>Markup</strong>
      <pre><code class="language-html">&lt;label for="invalid-text-input"&gt;Input invalid&lt;/label&gt;
&lt;input type="text" id="invalid-text-input" name="invalid-text-iinput" class="invalid"&gt;
&lt;p class="error-message"&gt;Error messaging&lt;/p&gt;

&lt;label for="invalid-search"&gt;Search input&lt;/label&gt;
&lt;input type="search" id="invalid-search" name="search-input" class="invalid"&gt;

&lt;label for="invalid-inline-button"&gt;Inline Button&lt;/label&gt;
&lt;div class="inline-button"&gt;
  &lt;input id="invalid-inline-button" type="text" name="invalid-inline-button" class="invalid"&gt;
  &lt;button type="button" class="subtle"&gt;Submit&lt;/button&gt;
&lt;/div&gt;

&lt;label for="invalid-select"&gt;Select&lt;/label&gt;
&lt;select id="invalid-select" name="invalid-select" class="invalid"&gt;
  &lt;option value="one"&gt;Option 1&lt;/option&gt;
  &lt;option value="two"&gt;Option 2&lt;/option&gt;
  &lt;option value="three"&gt;Option 3&lt;/option&gt;
&lt;/select&gt;

&lt;fieldset name="invalid-fieldset" class="invalid"&gt;
  &lt;legend&gt;Fieldset&lt;/legend&gt;
  &lt;input type="checkbox" id="invalid-checkbox" name="invalid-checkbox" class="invalid"&gt;
  &lt;label for="invalid-checkbox"&gt;Checkbox&lt;/label&gt;
&lt;/fieldset&gt;

&lt;input type="radio" id="invalid-radio-one" name="invalid-radio" value="invalid-radio-one" class="semi-fancy invalid"&gt;
&lt;label for="invalid-radio-one"&gt;Fancy radio one&lt;/label&gt;
&lt;input type="radio" id="invalid-radio-two" name="invalid-radio" value="invalid-radio-two" class="fancy invalid"&gt;
&lt;label for="invalid-radio-two"&gt;Fancy radio two
  &lt;span&gt;With more info to describe the option. Can be used with fancy and semi-fancy classes.&lt;/span&gt;
&lt;/label></code></pre>
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
    .help {
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
