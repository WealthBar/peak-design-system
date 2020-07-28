<template>
  <article class="container">
    <header class="peak-title">
      <h1>Form Patterns - Checkbox and Radio</h1>
    </header>

    <section id="check-radio" :class="showMargin ? 'example' : ''">
      <input id="element-check" type="checkbox" name="element-check" />
      <label for="element-check">
        <strong>Checkbox</strong>
        <span class="optional">Nested Elements</span>
        <span class="description"><code>&lt;strong&gt;</code> for primary label, <code>&lt;span class="optional"&gt;</code> for optional, and <code>&lt;span class="description"&gt;</code> is used for description text. Can be used separately and/or  in conjunction with the <code>padded</code> and <code>border</code> input classes.</span>
      </label>

      <input id="padded-check" type="checkbox" class="padded" name="padded-check" />
      <label for="padded-check">Checkbox Padded</label>

      <input id="border-check" type="checkbox" class="border" name="border-check" />
      <label for="border-check">Checkbox Border</label>
    </section>
    <strong>Markup</strong>
    <pre><code class="language-markup">&lt;input type="checkbox" id="element-check" name="element-check"&gt;
&lt;label for="element-check"&gt;
  &lt;strong&gt;Checkbox&lt;/strong&gt;
  &lt;span class="optional"&gt;Nested Elements&lt;/span&gt;
  &lt;span class="description"&gt;description text goes here&lt;/span&gt;
&lt;/label&gt;

&lt;input type="checkbox" class="padded" id="padded-check" name="padded-check"&gt;
&lt;label for="padded-check"&gt;Checkbox Padded&lt;/label&gt;

&lt;input type="checkbox" class="border" id="border-check" name="border-check"&gt;
&lt;label for="border-check"&gt;Checkbox Border&lt;/label&gt;
      </code></pre>
    <section id="check" :class="showMargin ? 'example' : ''">
      <input id="element-radio" type="radio" name="radio-options" />
      <label for="element-radio">
        <strong>Radio</strong>
        <span class="optional">Nested Elements</span>
        <span class="description"><code>&lt;strong&gt;</code> for primary label, <code>&lt;span class="optional"&gt;</code> for optional, and <code>&lt;span class="description"&gt;</code> is used for description text. Can be used separately and/or in conjunction with the <code>radio</code> and <code>checkbox</code> input classes.</span>
      </label>

      <input id="padded-radio" type="radio" class="padded" name="radio-options" />
      <label for="padded-radio">Radio Padded</label>

      <input id="border-radio" type="radio" class="border" name="radio-options" />
      <label for="border-radio">Radio Border</label>
    </section>
    <strong>Markup</strong>
    <pre><code class="language-markup">&lt;input type="radio" id="element-radio" name="radio-options"&gt;
&lt;label for="element-radio"&gt;
  &lt;strong&gt;Radio&lt;/strong&gt;
  &lt;span class="optional"&gt;Nested Elements&lt;/span&gt;
  &lt;span class="description"&gt;description text goes here&lt;/span&gt;
&lt;/label&gt;

&lt;input type="radio" class="padded" id="padded-radio"  name="radio-options"/&gt;
&lt;label for="padded-radio"&gt;Radio Padded&lt;/label&gt;

&lt;input type="radio" class="border" id="border-radio" name="radio-options"/&gt;
&lt;label for="border-radio"&gt;Radio Border&lt;/label&gt;</code></pre>
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

  label {
    background: $white;
    box-shadow: 0 1px 0 0 $tertiary-100, 0 -1px 0 0 $tertiary-100;
    &:first-of-type { box-shadow: 0 1px 0 0 $tertiary-100; }
  }
}
</style>
