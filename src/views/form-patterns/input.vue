<template>
  <article class="container">
    <header class="peak-title">
      <h1>Form Patterns - Input Options</h1>
    </header>
    <p>
      Several common patterns for styling forms have been prebuilt in Peak. Often this requires adding a wrapper, class, or both to a specific element or block of text. Some patterns such as the <code>help message</code> are designed to work inline with sibling elements while others are just variants based on specific attributes such as <code>disabled</code>.
    </p>
    <div :class="showMargin ? 'example' : ''">
      <label for="optional-input">
        <span>Input</span>
        <span class="optional">optional label text</span>
      </label>
      <input id="optional-input" type="text" name="optional-input" />
    </div>
    <strong>Markup</strong>
    <pre><code class="language-markup">
&lt;label for="optional-input"&gt;
  &lt;span&gt;Input&lt;/span&gt;
  &lt;span class="optional"&gt;optional label text&lt;/span&gt;
&lt;/label&gt;
&lt;input type="text" id="optional-input" name="optional-input"&gt;</code></pre>

    <div :class="showMargin ? 'example' : ''">
      <label for="help-input">Help Message</label>
      <input id="help-input" type="text" name="help-input" />
      <p class="help-message">Additional help message</p>
    </div>
    <strong>Markup</strong>
    <pre><code class="language-markup">&lt;label for="help-input"&gt;Help Message&lt;/label&gt;
&lt;input type="text" id="help-input" name="help-input"&gt;
&lt;p class="help-message"&gt;Additional help message&lt;/p&gt;</code></pre>

    <div :class="showMargin ? 'example' : ''">
      <label for="disabled-input">Disabled</label>
      <input id="disabled-input" type="text" name="disabled-input" disabled />
    </div>
    <strong>Markup</strong>
    <pre><code class="language-markup">&lt;label for="disabled-input"&gt;Disabled&lt;/label&gt;
&lt;input type="text" id="disabled-input" name="disabled-input" disabled&gt;</code></pre>
  </article>
</template>

<script>
export default {
  data() {
    return {
      showMargin: false,
    };
  },
};
</script>

<style lang="scss" scoped>
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
    transition: none;
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
