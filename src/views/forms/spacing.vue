<template>
  <article class="container">
    <section id="spacing">
      <h1>Forms - Form Spacing</h1>

      <p>The following examples showcase the basic margin and padding structure for <code>labels</code>, <code>inputs</code>, and other form elements. If there is an instance that requires an input to have no margins a class of <code>no-margin</code> can be applied — this should be used sparingly.</p>
      <p>Also included are some common patterns such as <code>error-message</code>, <code>inline-input</code> class, and <code>padded</code> and <code>padded border</code> classes for radio/checkbox inputs. More info for these patterns can be found on in <router-link to="input-patterns">Form Patterns</router-link> section of the site.</p>

      <div class="example">
        <label for="example">Standard Input</label>
        <input id="example" type="text" name="example" />

        <label for="example-inline-button">Inline Button</label>
        <div class="inline-button">
          <input id="example-inline-button" type="text" name="example-inline-button" />
          <button type="button">button</button>
        </div>

        <label for="example-text-input">Password</label>
        <input id="example-text-input" type="password" name="example-text-input" />
        <p class="help-message">help or <span class="neg">error</span> text</p>
      </div>

      <div class="example inline-input full">
        <div>
          <label for="example-inline-pattern-full-one">Inline label one</label>
          <input id="example-inline-pattern-full-one" type="text" name="example-inline-pattern-full-one" />
        </div>
        <div>
          <label for="example-inline-pattern-full-two">Inline label two</label>
          <input id="example-inline-pattern-full-two" type="text" name="example-inline-pattern-full-two" />
        </div>
        <div>
          <label for="example-inline-pattern-full-three">Inline label three</label>
          <input id="example-inline-pattern-full-three" type="text" name="example-inline-pattern-full-three" />
        </div>
      </div>

      <div class="example">
        <fieldset name="example-fieldset" class="fieldset">
          <legend>Fieldset class with legend</legend>
          <div class="example">
            <input id="example-fieldset-checkbox" type="checkbox" name="example-fieldset-checkbox" />
            <label for="example-fieldset-checkbox">Checkbox</label>
            <input id="example-fieldset-radio-one" type="radio" name="example-fieldset-radio" value="fieldset-radio-one" />
            <label for="example-fieldset-radio-one">Radio one</label>
            <input id="example-fieldset-radio-two" type="radio" name="example-fieldset-radio" value="fieldset-radio-two" />
            <label for="example-fieldset-radio-two">Radio two</label>
          </div>
        </fieldset>

        <input id="example-fieldset-radio-one" type="radio" name="example-fieldset-radio" value="fieldset-radio-one" class="padded" />
        <label for="example-fieldset-radio-one">padded radio</label>
        <input id="example-fieldset-radio-two" type="radio" name="example-fieldset-radio" value="fieldset-radio-two" class="border" />
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
