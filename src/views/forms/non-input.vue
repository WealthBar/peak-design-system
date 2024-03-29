<template>
  <article class="container">
    <section id="non-input">
      <header class="peak-title">
        <h1>Forms - Other Form Elements</h1>
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
      <p>This covers all non-input elements used in forms. For those unfamiliar — a <code>&lt;fieldset&gt;</code> is a group container for form fields like that are used for a similar purpose. The <code>&lt;legend&gt;</code> is effectivly a label for the fieldset.</p>
      <div :class="showMargin ? 'example' : ''">
        <label for="textarea">Textarea</label>
        <textarea id="textarea" name="textarea"></textarea>
      </div>
      <strong>Markup</strong>
      <pre><code class="language-markup">&lt;label for="textarea"&gt;Textarea&lt;/label&gt;
&lt;textarea id="textarea" name=textarea&gt;&lt;/textarea&gt;
</code></pre>
      <div :class="showMargin ? 'example' : ''">
        <label for="select">Select</label>
        <select id="select" name="select">
          <option value="one">Option 1</option>
          <option value="two">Option 2</option>
          <option value="three">Option 3</option>
        </select>
      </div>
      <strong>Markup</strong>
      <pre><code class="language-markup">&lt;label for="select"&gt;Select&lt;/label&gt;
&lt;select id="select" name="select"&gt;
  &lt;option value="one"&gt;Option 1&lt;/option&gt;
  &lt;option value="two"&gt;Option 2&lt;/option&gt;
  &lt;option value="three"&gt;Option 3&lt;/option&gt;
&lt;/select&gt;</code></pre>

      <div :class="showMargin ? 'example' : ''">
        <legend>Fieldset and Legend</legend>
        <fieldset>
          <input id="radio-fieldset-one" type="radio" name="radio-fieldset" />
          <label for="radio-fieldset-one">Radio button one in fieldset</label>

          <input id="radio-fieldset-two" type="radio" name="radio-fieldset" />
          <label for="radio-fieldset-two">Radio button two in fieldset</label>
        </fieldset>
      </div>
      <strong>Markup</strong>
      <pre><code class="language-markup">&lt;legend&gt;Fieldset and Legend&lt;/legend&gt;
&lt;fieldset&gt;
  &lt;input id="radio-fieldset-one" type="radio" name="radio-fieldset" /&gt;
  &lt;label for="radio-fieldset-one"&gt;Radio button one in fieldset&lt;/label&gt;

  &lt;input id="radio-fieldset-two" type="radio" name="radio-fieldset" /&gt;
  &lt;label for="radio-fieldset-two"&gt;Radio button two in fieldset&lt;/label>&gt;
&lt;/fieldset&gt;</code></pre>
    </section>
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

  label,
  legend {
    background: $white;
    box-shadow: 0 1px 0 0 $tertiary-100, 0 -1px 0 0 $tertiary-100;
    &:first-child {
      box-shadow: 0 1px 0 0 $tertiary-100;
    }
  }
  fieldset {
    box-shadow: 0 1px 0 0 $secondary-100, 0 -1px 0 0 $secondary-100;
    background: $secondary-50;
    label { box-shadow: none; }
  }
}
</style>
