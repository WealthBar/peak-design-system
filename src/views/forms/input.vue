<template>
  <article class="container">
    <header class="peak-title">
      <h1>Forms - Text Type Inputs</h1>
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
    <p>
      Inputs in Peak have been designed to require as minimal amount developer editing as possible. Several different input types have been defined in Peak to accomodate different functionality. As such,<code>type</code> attribute. The listing of input type styles can be found below aling with code examples.
    </p>
    <p>
      Additional attributes are optional and may vary depending on individual use. For accessability a <code>&lt;label&gt;</code> with a <code>for</code> attribute that matches <code>id</code> and <code>name</code> is highly recommened. Other attributes such as <code>placeholder</code>, <code>required</code>, and <code>disabled</code> will all effect the behaviour and look of the input.
    </p>

    <section id="text">
      <div :class="showMargin ? 'example' : ''">
        <label for="text-input">Text</label>
        <input id="text-input" type="text" name="text-input" />
      </div>
      <strong>Markup</strong>
      <pre><code class="language-markup">&lt;label for="text-input"&gt;Text&lt;/label&gt;
&lt;input type="text" id="text-input"  name="text-input"&gt;</code></pre>

      <div :class="showMargin ? 'example' : ''">
        <label for="number-input">Number</label>
        <input id="number-input" type="number" name="number-input" pattern="[0-9]*" />
      </div>
      <strong>Markup</strong>
      <pre><code class="language-markup">&lt;label for="number-input"&gt;Number&lt;/label&gt;
&lt;input type="number" id="number-input" name="number-input" pattern="[0-9]*"&gt;</code></pre>

      <div :class="showMargin ? 'example' : ''">
        <label for="search-input">Search</label>
        <input id="search-input" type="search" name="search-input" placeholder="search" />
      </div>
      <strong>Markup</strong>
      <pre><code class="language-markup">&lt;&lt;label for="search-input"&gt;Search&lt;/label&gt;
&lt;input type="search" id="search-input" name="search-input" placeholder="search"&gt;</code></pre>

      <div :class="showMargin ? 'example' : ''">
        <label for="password-input">Password</label>
        <input id="password-input" type="password" name="password-input" />
      </div>
      <strong>Markup</strong>
      <pre><code class="language-markup">&lt;label for="password-input"&gt;Password&lt;/label&gt;
&lt;input type="password" id="password-input" name="password-input" required&gt;</code></pre>
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
      this.$emit('file-name', file.name);
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

  label:not(.button),
  legend {
    background: $white;
    box-shadow: 0 1px 0 0 $tertiary-100, 0 -1px 0 0 $tertiary-100;
    &:first-child {
      box-shadow: 0 1px 0 0 $tertiary-100;
    }
  }
  .help-message {
    background: $white;
    box-shadow: 0 1px 0 0 $tertiary-100, 0 -1px 0 0 $tertiary-100;
  }
  fieldset {
    box-shadow: 0 1px 0 0 $secondary-100, 0 -1px 0 0 $secondary-100;
    background: $secondary-50;
    .example,
    input:last-child {
      box-shadow: 0 -1px 0 0 $tertiary-100;
    }
  }
}
</style>
