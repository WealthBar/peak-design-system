<template>
  <article class="container">
    <header class="peak-title">
      <h1>Forms - Non-text Inputs</h1>
      <div class="page-actions">
        <div>
          <label for="margin-toggle">Show Margins</label>
          <button id="margin-toggle" class="toggle" @click="showMargin = !showMargin">
            <span :data-active="showMargin">on</span>
            <span :data-active="!showMargin">off</span>
          </button>
        </div>
      </div>
    </header>

    <section id="non-text">
      <div :class="showMargin ? 'example' : ''">
        <label>Checkbox</label>
        <input id="checkbox-input-one" type="checkbox" name="checkbox-input-one" />
        <label for="checkbox-input-one">Checkbox one</label>
        <input id="checkbox-input-two" type="checkbox" name="checkbox-input-two" />
        <label for="checkbox-input-two">Checkbox two</label>
      </div>
      <strong>Markup</strong>
      <pre><code class="language-markup">&lt;input type="checkbox" id="checkbox-input-one" name="checkbox-input-one"&gt;
&lt;label for="checkbox-input-one"&gt;Checkbox one&lt;/label&gt;

&lt;input type="checkbox" id="checkbox-input-two" name="checkbox-input-two"&gt;
&lt;label for="checkbox-input-two"&gt;Checkbox two&lt;/label&gt;</code></pre>

      <div :class="showMargin ? 'example' : ''">
        <label>Radio</label>

        <input id="radio-option-one" type="radio" name="radio-input" />
        <label for="radio-option-one">Option one</label>

        <input id="radio-option-two" type="radio" name="radio-input" />
        <label for="radio-option-two">Option two</label>

        <input id="radio-option-three" type="radio" name="radio-input" />
        <label for="radio-option-three">Option three</label>
      </div>
      <strong>Markup</strong>
      <pre><code class="language-markup">&lt;input type="radio" id="radio-option-one" name="radio-option-one"/&gt;
&lt;label for="radio-option-one"&gt;Option one&lt;/label&gt;

&lt;input type="radio" id="radio-option-two" name="radio-option-two"/&gt;
&lt;label for="radio-option-two"&gt;Option two&lt;/label&gt;

&lt;input type="radio" id="radio-option-three" name="radio-option-three"/&gt;
&lt;label for="radio-option-three"&gt;Option three&lt;/label&gt;</code></pre>

      <div :class="showMargin ? 'example' : ''">
        <label for="range">Range</label>
        <input id="range" type="range" min="0" max="100" value="0" />
      </div>
      <strong>Markup</strong>
      <pre><code class="language-markup">&lt;label for="range"&gt;Range&lt;/label&gt;
&lt;input type="range" id="range" min="0" max="100" value="0"/&gt;</code></pre>

      <div :class="showMargin ? 'example' : ''">
        <label>File</label>
        <label for="file-input" class="button">Upload file</label>
        <input id="file-input" type="file" name="file-input" @change="loadFile" />
        <span class="help-message">File name: {{ fileName }}</span>
      </div>
      <strong>Markup</strong>
      <pre><code class="language-markup">&lt;label for="file-input" class="button"&gt;Upload file&lt;/label&gt;
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
  data() {
    return {
      showMargin: false,
    };
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
  display: inline-block;
  width: 100%;
  background: $tertiary-50;
  box-shadow: 0 1px 0 0 $tertiary-100;

  label{
    background: $white;
    box-shadow: 0 1px 0 0 $tertiary-100, 0 -1px 0 0 $tertiary-100;
    &:first-child {
      box-shadow: 0 1px 0 0 $tertiary-100;
    }
  }
  .help-message {
    background: $white;
    box-shadow: 0 -1px 0 0 $tertiary-100;
  }
}
</style>
