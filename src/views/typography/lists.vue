<template>
  <article class="container">
    <header>
      <h1>Lists</h1>
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
    <section>
      <p>Lists inherit the paragraph’s style and use the paragraph’s margin at bottom. <a href="#bullet-list">Bullet</a> and <a href="#ordered-list">Ordered</a> list items have an indent and bottom margin between list items to improve readability.</p>

      <h3>Unordered List</h3>
      <p><strong>By default unordered lists do not have any bullet or identifying markers.</strong><br />This was done so that lists could be used in a variety of contexts without the need for developers to override CSS in their templates — a majority of our UI tends to use <code class="language-markup">&lt;ul&gt;</code> lists in this regard.</p>

      <div :class="showMargin ? 'example' : ''">
        <ul>
          <li>This is a default list item.</li>
          <li>This is the second item in the list.</li>
          <ul>
            <li>This is a nested list.</li>
            <li>Let's have one more item.</li>
          </ul>
        </ul>
      </div>

      <strong>Markup:</strong>
      <pre>
        <code class="language-markup">&lt;ul&gt;
  &lt;li&gt;This is a default list item.&lt;/li&gt;
  &lt;li&gt;This is the second item in the list.&lt;/li&gt;
  &lt;ul&gt;
    &lt;li&gt;This is a nested list.&lt;/li&gt;
    &lt;li&gt;Let's have one more item.&lt;/li&gt;
  &lt;/ul&gt;
&lt;/ul&gt;</code>
      </pre>

      <hr />

      <h3 id="bullet-list">Bullet List</h3>
      <p>To add markers and margining to unordered lists simply class as <code class="language-markup">&lt;ul class="bullet"&gt;</code>.</p>

      <div :class="showMargin ? 'example' : ''">
        <ul class="bullet">
          <li>This is a bulleted list item.</li>
          <li>This is the second item in the list.</li>
          <ul class="bullet">
            <li>This is a nested list.</li>
            <li>Let's have one more item.</li>
          </ul>
        </ul>
      </div>
      <strong>Markup:</strong>
      <pre>
        <code class="language-markup">&lt;ul class="bullet"&gt;
  &lt;li&gt;This is a bulleted list item.&lt;/li&gt;
  &lt;li&gt;This is the second item in the list.&nbsp;&lt;/li&gt;
  &lt;ul class="bullet"&gt;
    &lt;li&gt;This is a nested list.&lt;/li&gt;
    &lt;li&gt;Let's have one more item.&lt;/li&gt;
  &lt;/ul&gt;
&lt;/ul&gt;</code>
      </pre>

      <hr />

      <h3 id="ordered-list">Ordered List</h3>
      <div :class="showMargin ? 'example' : ''">
        <ol>
          <li>This is an ordered list item.</li>
          <li>This is the second item in the list.</li>
          <ol>
            <li>This is a nested list.</li>
            <li>Let's have one more item.</li>
          </ol>
        </ol>
      </div>
      <strong>Markup</strong>
      <pre>
        <code class="language-markup">&lt;ol&gt;
  &lt;li&gt;This is an ordered list item.&lt;/li&gt;
  &lt;li&gt;second list item&lt;/li&gt;
  &lt;ol&gt;
    &lt;li&gt;This is a nested list.&lt;/li&gt;
    &lt;li&gt;Let's have one more item.&lt;/li&gt;
  &lt;/ol&gt;
&lt;/ol&gt;</code>
      </pre>
    </section>
  </article>
</template>

<script>
export default {
  data() {
    return {
      name: 'lists',
      title: 'Lists',
      showMargin: true,
    };
  },
};
</script>

<style lang="scss" scoped>
header {
  @media #{$screen-width-large} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}

.page-actions{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media #{$screen-width-large} {
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0 0 1rem;
    @media #{$screen-width-large} {
      margin: 0 0 0 1rem;
      align-items: center;
      justify-content: center;
    }
  }
}

section {
  border-bottom: 1px solid $neutral-100;
}

.example {
  display: inline-block;
  width: 100%;
  background: $tertiary-50;
  box-shadow: 0 1px 0 0 $tertiary-100,  0 -1px 0 0 $tertiary-100;
  ul,
  ol {
    background: $tertiary-50;
    border-top: none;
    box-shadow: inset 0 1px 0 0 $tertiary-100;
    li {
      background: $white;
      ul,
      ol {
        box-shadow: inset 0 -1px 0 0 $tertiary-100;
        border-bottom: none;
      }
    }
  }
}
</style>
