<template>
  <article class="container">
    <h1>Form Patterns - Input Layout</h1>

    <section id="general">
      <label for="optional-input">Input<span class="optional">optional</span></label>
      <input id="optional-input" type="text" name="optional-input" />
      <pre><code class="language-markup">&lt;label for="optional-input"&gt;Input&lt;span class="optional"&gt;optional&lt;/span&gt;&lt;/label&gt;
&lt;input type="text" id="optional-input" name="optional-input"&gt;</code></pre>

      <label for="disabled-input">Disabled</label>
      <input id="disabled-input" type="text" name="disabled-input" disabled />
      <pre><code class="language-markup">&lt;label for="disabled-input"&gt;Disabled&lt;/label&gt;
&lt;input type="text" id="disabled-input" name="disabled-input" disabled&gt;</code></pre>

      <label for="help-input">Help Message</label>
      <input id="help-input" type="text" name="help-input" />
      <p class="help-message">Additional help message</p>
      <pre><code class="language-markup">&lt;label for="help-input"&gt;Help Message&lt;/label&gt;
&lt;input type="text" id="help-input" name="help-input"&gt;
&lt;p class="help-message"&gt;Additional help message&lt;/p&gt;</code></pre>
    </section>
  </article>
</template>

<style lang="scss" scoped>
</style>
