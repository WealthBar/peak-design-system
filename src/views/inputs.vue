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

      <label for="number-input">Number</label>
      <input type="number" id="number-input" name="number-input" pattern="[0-9]*">

      <label for="search-input">Search</label>
      <input type="search" id="search-input" name="search-input" placeholder="search">

      <label for="password-input">Password</label>
      <input type="password" id="password-input" name="password-input">

      <strong>Markup</strong>
      <pre><code class="language-html">
&lt;label for="text-input"&gt;Text&lt;/label&gt;
&lt;input id="text-input" type="text" name="text-input"&gt;

&lt;label for="number-input"&gt;Number&lt;/label&gt;
&lt;input id="number-input" type="number" name="number-input" pattern="[0-9]*"&gt;

&lt;label for="search-input"&gt;Search&lt;/label&gt;
&lt;input type="search" id="search-input" name="search-input" placeholder="search"&gt;

&lt;label for="password-input"&gt;Password&lt;/label&gt;
&lt;input type="password" id="password-input" name="password-input" required&gt;
      </code></pre>

      <h3>Text input style options</h3>

      <label for="optional-input">Input<span class="optional">optional</span></label>
      <input type="text" id="optional-input" name="optional-input">

      <label for="disabled-input">Disabled</label>
      <input type="text" id="disabled-input" name="disabled-input" disabled>

      <label for="help-input">Help Message</label>
      <input type="text" id="help-input" name="help-input">
      <p class="help-message">Additional help message</p>

      <label for="inline-select">Select Inline Button</label>
      <div class="inline-button">
        <select id="inline-select" name="inline-select">
          <option value="one">Option 1</option>
          <option value="two">Option 2</option>
          <option value="three">Option 3</option>
        </select>
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
      <pre><code class="language-html">
&lt;label for="optional-input"&gt;Input&lt;span class="optional"&gt;optional&lt;/span&gt;&lt;/label&gt;
&lt;input type="text" id="optional-input" name="optional-input"&gt;

&lt;label for="disabled-input"&gt;Disabled&lt;/label&gt;
&lt;input type="text" id="disabled-input" name="disabled-input" disabled&gt;

&lt;label for="help-input"&gt;Help Message&lt;/label&gt;
&lt;input type="text" id="help-input" name="help-input"&gt;
&lt;p class="help-message"&gt;Additional help message&lt;/p&gt;

&lt;label for="inline-button"&gt;Inline Button&lt;/label&gt;
&lt;div class="inline-button"&gt;
  &lt;input id="inline-button" error-message type="text" name="inline-button"&gt;
  &lt;button type="button"&gt;Submit&lt;/button&gt;
&lt;/div&gt;

&lt;label for="inline-select"&gt;Select Inline Button&lt;/label&gt;
&lt;div class="inline-button"&gt;
  &lt;select id="inline-select" name="inline-select"&gt;
    &lt;option value="one"&gt;Option 1&lt;/option&gt;
    &lt;option value="two"&gt;Option 2&lt;/option&gt;
    &lt;option value="three"&gt;Option 3&lt;/option&gt;
  &lt;/select&gt;
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

      <legend>Checkbox</legend>
      <fieldset>
        <input type="checkbox" id="checkbox-input-one" name="checkbox-input-one">
        <label for="checkbox-input-one">Checkbox one</label>
        <input type="checkbox" id="checkbox-input-two" name="checkbox-input-two">
        <label for="checkbox-input-two">Checkbox two</label>
      </fieldset>

      <legend>Radio</legend>
      <fieldset>
        <input type="radio" id="radio-option-one" name="radio-input"/>
        <label for="radio-option-one">Option one</label>

        <input type="radio" id="radio-option-two" name="radio-input"/>
        <label for="radio-option-two">Option two</label>

        <input type="radio" id="radio-option-three" name="radio-input"/>
        <label for="radio-option-three">Option three</label>
      </fieldset>

      <label for="range">Range</label>
      <input id="range" type="range" min="0" max="100" value="0">

      <legend>File</legend>
      <label for="file-input" class="button">Upload file</label>
      <input type="file" name="file-input" id="file-input" @change="loadFile"/>
      <span class="help-message">File name: {{ fileName }}</span>

      <strong>Markup</strong>
      <pre><code class="language-html">
&lt;legend&gt;Checkbox&lt;/legend&gt;
&lt;input type="checkbox" id="checkbox-input-one" name="checkbox-input-one"&gt;
&lt;label for="checkbox-input-one"&gt;Checkbox one&lt;/label&gt;
&lt;input type="checkbox" id="checkbox-input-two" name="checkbox-input-two"&gt;
&lt;label for="checkbox-input-two"&gt;Checkbox two&lt;/label&gt;

&lt;legend&gt;Radio&lt;/legend&gt;
&lt;input type="radio" id="radio-option-one" name="radio-option-one"/&gt;
&lt;label for="radio-option-one"&gt;Option one&lt;/label&gt;
&lt;input type="radio" id="radio-option-two" name="radio-option-two"/&gt;
&lt;label for="radio-option-two"&gt;Option two&lt;/label&gt;
&lt;input type="radio" id="radio-option-three" name="radio-option-three"/&gt;
&lt;label for="radio-option-three"&gt;Option three&lt;/label&gt;

&lt;label for="range"&gt;Range&lt;/label&gt;
&lt;input type="range" id="range" min="0" max="100" value="0"/&gt;

&lt;legend&gt;File&lt;/legend&gt;
&lt;label for="file-input" class="button"&gt;Upload file&lt;/label&gt;
&lt;input type="file" name="file-input" id="file-input"/&gt;
&lt;span class="help-message"&gt;File name: {{ fileName }}&lt;/span&gt;
      </code></pre>
      <h3>Checkbox and Radio Style Options</h3>

      <input type="checkbox" id="element-check" name="element-check">
      <label for="element-check">
        <strong>Checkbox<span class="optional">Nested Elements</span></strong>
        <span class="description"><code>&lt;strong&gt;</code> for primary label, <code>&lt;span class="optional"&gt;</code> for optional, and <code>&lt;span class="description"&gt;</code> is used for description text. Can be used separately and/or  in conjunction with the <code>padded</code> and <code>border</code> input classes.</span>
      </label>

      <input type="checkbox" class="padded" id="padded-check" name="padded-check">
      <label for="padded-check">Checkbox Padded</label>

      <input type="checkbox" class="border" id="border-check" name="border-check">
      <label for="border-check">Checkbox Border</label>

      <input type="radio" id="element-radio" name="radio-options">
      <label for="element-radio">
        <strong>Radio<span class="optional">Nested Elements</span></strong>
        <span class="description"><code>&lt;strong&gt;</code> for primary label, <code>&lt;span class="optional"&gt;</code> for optional, and <code>&lt;span class="description"&gt;</code> is used for description text. Can be used separately and/or in conjunction with the <code>radio</code> and <code>checkbox</code> input classes.</span>
      </label>

      <input type="radio" class="padded" id="padded-radio"  name="radio-options"/>
      <label for="padded-radio">Radio Padded</label>

      <input type="radio" class="border" id="border-radio" name="radio-options"/>
      <label for="border-radio">Radio Border</label>

      <strong>Markup</strong>
      <pre><code class="language-html">
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

      <legend>Legend and Fieldset</legend>
      <fieldset>
        <input type="radio" id="radio-fieldset-one" name="radio-fieldset"/>
        <label for="radio-fieldset-one">Radio button one in fieldset</label>

        <input type="radio" id="radio-fieldset-two" name="radio-fieldset"/>
        <label for="radio-fieldset-two">Radio button two in fieldset</label>
      </fieldset>

      <strong>Markup</strong>
      <pre><code class="language-html">
&lt;label for="textarea"&gt;Textarea&lt;/label&gt;
&lt;textarea id="textarea" name=textarea&gt;&lt;/textarea&gt;

&lt;label for="select"&gt;Select&lt;/label&gt;
&lt;select id="select" name="select"&gt;
  &lt;option value="one"&gt;Option 1&lt;/option&gt;
  &lt;option value="two"&gt;Option 2&lt;/option&gt;
  &lt;option value="three"&gt;Option 3&lt;/option&gt;
&lt;/select&gt;

&lt;legend&gt;Legend and Fieldset&lt;/legend&gt;
&lt;fieldset&gt;
&lt;!-- fieldset content--&gt;
&lt;/fieldset&gt;
      </code></pre>
    </section>

    <section id="layout">
      <h2>Input layout patterns</h2>
      <label for="inline-pattern">Inline inputs</label>
      <div class="inline-input">
        <input id="inline-pattern" type="text" name="inline-pattern" style="max-width: 8rem;">
        <input id="inline-pattern-two" type="text" name="inline-pattern-two" style="max-width: 16rem;">
        <input id="inline-pattern-three" type="text" name="inline-pattern-three" style="max-width: 32rem;">
      </div>
      <p class="help-message">Supports <code>max-width</code> via CSS</p>

      <div class="inline-input full">
        <div>
          <label for="inline-pattern-full-one">Inline inputs<span class="optional">full</span></label>
          <input type="text" id="inline-pattern-full-one" name="inline-pattern-full-one">
          <p class="help-message">Even horizontal spacing on large screen</p>
        </div>
        <div>
          <label for="inline-pattern-full-two">Inline label two</label>
          <input type="text" id="inline-pattern-full-two" name="inline-pattern-full-two">
          <p class="help-message">Full width on smaller screen</p>
        </div>
        <div>
          <label for="inline-pattern-full-three">Inline label three</label>
          <input type="text" id="inline-pattern-full-three" name="inline-pattern-full-three">
          <p class="help-message">Accomodates any number of inputs</p>
        </div>
      </div>

      <div class="field">
        <label for="field-input">Field wrap class</label>
        <input type="text" id="field-input" name="field-input">
        <p class="help-message">A basic wrapper to ensure structure formatting</p>
      </div>

      <fieldset class="fieldset">
        <legend>Fieldset class (with legend)</legend>
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
      <pre><code class="language-html">
&lt;label for="inline-pattern"&gt;Inline inputs&lt;/label&gt;
&lt;div class="inline-input"&gt;
  &lt;input id="inline-pattern" type="text" name="inline-pattern" style="max-width: 8rem;"&gt;
  &lt;input id="inline-pattern-two" type="text" name="inline-pattern-two" style="max-width: 16rem;"&gt;
  &lt;input id="inline-pattern-three" type="text" name="inline-pattern-two" style="max-width: 32rem;"&gt;
&lt;/div&gt;
&lt;p class="help-message"&gt;Supports &lt;code&gt;max-width&lt;/code&gt; via CSS&lt;/p&gt;

&lt;div class="inline-input full"&gt;
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
&lt;/div&gt;

&lt;div class="field"&gt;
  &lt;!-- A basic wrapper to ensure structure formatting --&gt;
&lt;/div&gt;

&lt;fieldset name="fieldset" class="fieldset"&gt;
  &lt;legend&gt;Fieldset class (with legend)&lt;/legend&gt;
  &lt;!-- fieldset class can be applied to any block container--&gt;
&lt;/fieldset&gt;
      </code></pre>
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
        <fieldset name="example-fieldset" class=fieldset>
          <legend>Fieldset class with legend</legend>
          <div class="example">
            <input type="checkbox" id="example-fieldset-checkbox" name="example-fieldset-checkbox">
            <label for="example-fieldset-checkbox">Checkbox</label>
            <input type="radio" id="example-fieldset-radio-one" name="example-fieldset-radio" value="fieldset-radio-one">
            <label for="example-fieldset-radio-one">Radio one</label>
            <input type="radio" id="example-fieldset-radio-two" name="example-fieldset-radio" value="fieldset-radio-two">
            <label for="example-fieldset-radio-two">Radio two</label>
          </div>
        </fieldset>

        <input type="radio" id="example-fieldset-radio-one" name="example-fieldset-radio" value="fieldset-radio-one" class="padded">
        <label for="example-fieldset-radio-one">padded radio</label>
        <input type="radio" id="example-fieldset-radio-two" name="example-fieldset-radio" value="fieldset-radio-two" class="border">
        <label for="example-fieldset-radio-two"><strong>border radio</strong>
          <span class="description">Nested span wrapper with <code>description</code> class added to content in label. Can be used with <code>padded</code> and <code>border</code> classes.</span>
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
      <p class="warning-message">
        <svg viewBox="0 0 32 32">
        <path d="M16.1,4c0.7,0,1.3,0.3,1.7,0.9l11.9,18.9c0.6,0.9,0.2,1.7,0.1,2c-0.2,0.3-0.7,1-1.8,1H4.1c-1.1,0-1.6-0.7-1.8-1 c-0.2-0.3-0.5-1.1,0.1-2L14.4,5C14.7,4.4,15.4,4,16.1,4 M16.1,2c-1.3,0-2.6,0.6-3.4,1.9L0.8,22.8C-0.9,25.5,1,29,4.1,29H28 c3.1,0,5.1-3.5,3.4-6.1L19.5,3.9C18.7,2.7,17.4,2,16.1,2L16.1,2z"/>
        <rect x="15" y="8" width="2" height="12"/>
        <circle cx="16" cy="23.5" r="1.5"/>
        </svg>
        <span>Optional warning messaging</span>
      </p>

      <label for="invalid-select">Select</label>
      <select id="invalid-select" name="invalid-select" class="invalid">
        <option value="one">Option 1</option>
        <option value="two">Option 2</option>
        <option value="three">Option 3</option>
      </select>

      <fieldset name="invalid-fieldset" class="fieldset invalid">
      <legend>Invalid Fieldset</legend>
        <input type="checkbox" id="invalid-checkbox" name="invalid-checkbox" class="invalid">
        <label for="invalid-checkbox">Invalid checkbox</label>

        <input type="radio" id="invalid-radio" name="invalid-radio" value="invalid-radio" class="invalid">
        <label for="invalid-radio">Invalid radio</label>
      </fieldset>

      <input type="radio" id="invalid-border-radio" name="invalid-border-radio" value="invalid-border-radio" class="border invalid">
      <label for="invalid-border-radio">
        <strong>Invalid border radio</strong>
        <span class="description">Nested span wrapper with <code>description</code> class added to content in label. Can be used with <code>padded</code> and <code>border</code> classes.</span>
      </label>

      <strong>Markup</strong>
      <pre><code class="language-html">
&lt;label for="invalid-text-input"&gt;Input invalid&lt;/label&gt;
&lt;input type="text" id="invalid-text-input" name="invalid-text-iinput" class="invalid"&gt;
&lt;p class="error-message"&gt;Error messaging&lt;/p&gt;

&lt;label for="invalid-search"&gt;Search input&lt;/label&gt;
&lt;input type="search" id="invalid-search" name="search-input" class="invalid"&gt;

&lt;label for="invalid-inline-button"&gt;Inline Button&lt;/label&gt;
&lt;div class="inline-button"&gt;
  &lt;input id="invalid-inline-button" type="text" name="invalid-inline-button" class="invalid"&gt;
  &lt;button type="button" class="subtle"&gt;Submit&lt;/button&gt;
&lt;/div&gt;
&lt;p class="warning-message"&gt;
  &lt;svg&gt;…&lt;/svg&gt;
  &lt;span&gt;Optional warning messaging&lt;/span&gt;
&lt;/p&gt;

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

&lt;input type="radio" id="invalid-border-radio" name="invalid-border-radio" value="invalid-border-radio" class="border invalid"&gt;
&lt;label for="invalid-border-radio"&gt;
  &lt;strong&gt;Invalid border radio&lt;/strong&gt;
  &lt;span class="description"&gt;Nested span wrapper with description class added to content in label. Can be used with padded and border classes.&lt;/span&gt;
&lt;/label&gt;
      </code></pre>
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
