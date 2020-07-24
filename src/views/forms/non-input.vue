<template>
  <article class="container">
    <section id="non-input">
      <h1>Forms - Other Form Elements</h1>

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
        <input id="radio-fieldset-one" type="radio" name="radio-fieldset" />
        <label for="radio-fieldset-one">Radio button one in fieldset</label>

        <input id="radio-fieldset-two" type="radio" name="radio-fieldset" />
        <label for="radio-fieldset-two">Radio button two in fieldset</label>
      </fieldset>
      <pre><code class="language-markup">&lt;legend&gt;Legend and Fieldset&lt;/legend&gt;
&lt;fieldset&gt;
&lt;!-- fieldset content--&gt;
&lt;/fieldset&gt;</code></pre>
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
</style>
