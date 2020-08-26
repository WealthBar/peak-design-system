<template>
  <article class="container">
    <h1>Layout Styles — Card List</h1>

    <!-- CARD LIST-->
    <section>
      <h3>Default</h3>
      <div class="example">
        <div class="card">
          <ul class="card-list">
            <li>Here's <code>card-list</code> in its default form.</li>
            <li>An unordered list of class <code>card-list</code> is nested inside a <a href="card">card</a>.</li>
            <li>If additional text styling or layout is needed, it can be applied to the list items.</li>
          </ul>

          <hr />

          <ul class="card-list">
            <li>A 'summary row' can be created by placing an <code>hr</code> between two <code>card-list</code>s.</li>
          </ul>
        </div>
      </div>
      <strong>Markup</strong>
      <pre><code class="language-markup">&lt;div class="card"&gt;
  &lt;ul class="card-list"&gt;
    &lt;li&gt;…&lt;/li&gt;
    &lt;li&gt;…&lt;/li&gt;
    &lt;li&gt;…&lt;/li&gt;
  &lt;/ul&gt;
  &lt;hr /&gt;
  &lt;ul class="card-list"&gt;
    &lt;li&gt;…&lt;/li&gt;
  &lt;/ul&gt;
&lt;/div&gt;</code></pre>

      <hr />
      <h3>Compact</h3>
      <div cla ss="example">
        <div class="card">
          <ul class="card-list compact">
            <li>Here's <code>card-list</code> with a <code>compact</code> variant.</li>
            <li>It behaves the same as default card list but has tighter spacing</li>
            <li>If additional text styling or layout is needed, it can be applied to the list items.</li>
          </ul>
        </div>
      </div>
      <strong>Markup</strong>
      <pre><code class="language-markup">&lt;div class="card"&gt;
  &lt;ul class="card-list compact"&gt;
    &lt;li&gt;…&lt;/li&gt;
    &lt;li&gt;…&lt;/li&gt;
    &lt;li&gt;…&lt;/li&gt;
  &lt;/ul&gt;
&lt;/div&gt;</code></pre>
    </section>
  </article>
</template>

<style lang="scss" scoped>
  .example { margin-bottom: 1rem; }
  svg { width: 1rem; }
</style>
