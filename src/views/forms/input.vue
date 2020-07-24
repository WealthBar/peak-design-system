<template>
  <article class="container">
    <section>
      <h1>Forms - Input Elements</h1>
      <p>Inputs in Peak have been designed to require as minimal amount developer editing as possible. Several different input types have been defined in Peak to accomodate different functionality. As such, <strong>all <code>&lt;input&gt;</code> elements require a defined <code>type</code> attribute</strong>. The listing of input type styles can be found below aling with code examples.</p>
      <p>Additional attributes are optional and may vary depending on individual use. For accessability a <code>&lt;label&gt;</code> with a <code>for</code> attribute that matches <code>id</code> and <code>name</code> is highly recommened. Other attributes such as <code>placeholder</code>, <code>required</code>, and <code>disabled</code> will all effect the behaviour and look of the input.</p>
    </section>

    <section id="text">
      <h2>Text inputs</h2>

      <label for="text-input">Text</label>
      <input id="text-input" type="text" name="text-input" />
      <pre><code class="language-markup">&lt;label for="text-input"&gt;Text&lt;/label&gt;
&lt;input id="text-input" type="text" name="text-input"&gt;</code></pre>

      <label for="number-input">Number</label>
      <input id="number-input" type="number" name="number-input" pattern="[0-9]*" />
      <pre><code class="language-markup">&lt;label for="number-input"&gt;Number&lt;/label&gt;
&lt;input id="number-input" type="number" name="number-input" pattern="[0-9]*"&gt;</code></pre>

      <label for="search-input">Search</label>
      <input id="search-input" type="search" name="search-input" placeholder="search" />
      <pre><code class="language-markup">&lt;label for="search-input"&gt;Search&lt;/label&gt;
&lt;input type="search" id="search-input" name="search-input" placeholder="search"&gt;</code></pre>

      <label for="password-input">Password</label>
      <input id="password-input" type="password" name="password-input" />
      <pre><code class="language-markup">&lt;label for="password-input"&gt;Password&lt;/label&gt;
&lt;input type="password" id="password-input" name="password-input" required&gt;</code></pre>
    </section>

    <section id="non-text">
      <h2>Non-text inputs</h2>

      <legend>Checkbox</legend>
      <fieldset>
        <input id="checkbox-input-one" type="checkbox" name="checkbox-input-one" />
        <label for="checkbox-input-one">Checkbox one</label>
        <input id="checkbox-input-two" type="checkbox" name="checkbox-input-two" />
        <label for="checkbox-input-two">Checkbox two</label>
      </fieldset>
      <pre><code class="language-markup">&lt;legend&gt;Checkbox&lt;/legend&gt;
&lt;input type="checkbox" id="checkbox-input-one" name="checkbox-input-one"&gt;
&lt;label for="checkbox-input-one"&gt;Checkbox one&lt;/label&gt;
&lt;input type="checkbox" id="checkbox-input-two" name="checkbox-input-two"&gt;
&lt;label for="checkbox-input-two"&gt;Checkbox two&lt;/label&gt;</code></pre>

      <legend>Radio</legend>
      <fieldset>
        <input id="radio-option-one" type="radio" name="radio-input" />
        <label for="radio-option-one">Option one</label>

        <input id="radio-option-two" type="radio" name="radio-input" />
        <label for="radio-option-two">Option two</label>

        <input id="radio-option-three" type="radio" name="radio-input" />
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
      <input id="range" type="range" min="0" max="100" value="0" />
      <pre><code class="language-markup">&lt;label for="range"&gt;Range&lt;/label&gt;
&lt;input type="range" id="range" min="0" max="100" value="0"/&gt;</code></pre>

      <legend>File</legend>
      <label for="file-input" class="button">Upload file</label>
      <input id="file-input" type="file" name="file-input" @change="loadFile" />
      <span class="help-message">File name: {{ fileName }}</span>
      <pre><code class="language-markup">&lt;legend&gt;File&lt;/legend&gt;
&lt;label for="file-input" class="button"&gt;Upload file&lt;/label&gt;
&lt;input type="file" name="file-input" id="file-input"/&gt;
&lt;span class="help-message"&gt;File name: {{ fileName }}&lt;/span&gt;</code></pre>
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
</style>
