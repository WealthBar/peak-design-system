<template>
  <article class="container">
    <h1>Layout Structures — Icon Block Pattern</h1>
    <p>Icon Block is a common structural pattern used to display an icon and paired content. It uses iconography to give emphasis and hierarchy to a specific piece of content. This stucture can be combined with a layout style such as <router-link to="/layout/card">Card</router-link> or <router-link to="/layout/notice">Notice</router-link>.</p>

    <hr />

    <h3>Icon Block</h3>
    <p>Basic examples of <code>.icon-block</code> containers. The first one inlcudes two text blocks nested in a container — the second is a single text block.</p>

    <article class="icon-block">
      <svg viewBox="0 0 16 16" title="Information">
        <path d="M7,9.25 C7.41421356,9.25 7.75,9.58578644 7.75,10 C7.75,10.4142136 7.41421356,10.75 7,10.75 C6.58578644,10.75 6.25,10.4142136 6.25,10 C6.25,9.58578644 6.58578644,9.25 7,9.25 Z M7.5,3 L7.5,8 L6.5,8 L6.5,3 L7.5,3 Z M7,1 C10.3,1 13,3.7 13,7 C13,10.3 10.3,13 7,13 C3.7,13 1,10.3 1,7 C1,3.7 3.7,1 7,1 L7,1 Z M7,0 C3.15,0 0,3.15 0,7 C0,10.85 3.15,14 7,14 C10.85,14 14,10.85 14,7 C14,3.15 10.85,0 7,0 L7,0 Z" transform="matrix(1 0 0 -1 1 15)" />
      </svg>
      <div>
        <h6>Strong Title</h6>
        <p>The <code>.icon-block</code> pattern contains an <strong>image</strong> (<code>&lt;svg&gt;</code> or <code>&lt;img&gt;</code>) and a <strong>content block</strong> (<code>&lt;div&gt;</code>, <code>&lt;p&gt;,</code>, etc) For text. This format allows for an icon to be used like a bullet. Any nested content in the <strong>content block</strong> will be margined to offset the icon</p>
      </div>
    </article>

    <hr />

    <article class="icon-block">
      <svg viewBox="0 0 16 16" title="Information">
        <path d="M7,9.25 C7.41421356,9.25 7.75,9.58578644 7.75,10 C7.75,10.4142136 7.41421356,10.75 7,10.75 C6.58578644,10.75 6.25,10.4142136 6.25,10 C6.25,9.58578644 6.58578644,9.25 7,9.25 Z M7.5,3 L7.5,8 L6.5,8 L6.5,3 L7.5,3 Z M7,1 C10.3,1 13,3.7 13,7 C13,10.3 10.3,13 7,13 C3.7,13 1,10.3 1,7 C1,3.7 3.7,1 7,1 L7,1 Z M7,0 C3.15,0 0,3.15 0,7 C0,10.85 3.15,14 7,14 C10.85,14 14,10.85 14,7 C14,3.15 10.85,0 7,0 L7,0 Z" transform="matrix(1 0 0 -1 1 15)" />
      </svg>
      <p>The Icon Block pattern can be applied directly to a paragraph without a title.</p>
    </article>

    <strong>Markup</strong>
    <pre><code class="language-markup">&lt;div class="icon-block"&gt;
  &lt;svg&gt;...&lt;/svg&gt; &lt;!-- Image --&gt;
  &lt;div&gt; &lt;!-- Start Content Block --&gt;
    &lt;p class="strong"&gt;Strong Title&lt;/p&gt;
    &lt;p&gt;Multiple text blocks nested in a container&lt;/p&gt;
  &lt;/div&gt; &lt;!-- End Content Block --&gt;
&lt;/div&gt;


&lt;div class="icon-block"&gt;
  &lt;svg&gt;...&lt;/svg&gt; &lt;!-- Image --&gt;
  &lt;p&gt;this has no title.&lt;/p&gt; &lt;!-- Content Block --&gt;
&lt;/div&gt;</code></pre>

    <h3>Variants and Patterns</h3>
    <article>
      <div class="icon-block">
        <svg viewBox="0 0 16 16" title="Information">
          <path d="M7,9.25 C7.41421356,9.25 7.75,9.58578644 7.75,10 C7.75,10.4142136 7.41421356,10.75 7,10.75 C6.58578644,10.75 6.25,10.4142136 6.25,10 C6.25,9.58578644 6.58578644,9.25 7,9.25 Z M7.5,3 L7.5,8 L6.5,8 L6.5,3 L7.5,3 Z M7,1 C10.3,1 13,3.7 13,7 C13,10.3 10.3,13 7,13 C3.7,13 1,10.3 1,7 C1,3.7 3.7,1 7,1 L7,1 Z M7,0 C3.15,0 0,3.15 0,7 C0,10.85 3.15,14 7,14 C10.85,14 14,10.85 14,7 C14,3.15 10.85,0 7,0 L7,0 Z" transform="matrix(1 0 0 -1 1 15)" />
        </svg>
        <p class="strong">Icon Block Content</p>
      </div>
      <p class="icon-block-content">Sometimes design will require text to flow under the icon in small screens and align with text/content on large. In this scenario use <code>.icon-block-content</code> as a sibling (in the same parent) container to <code>.icon-block</code>.</p>
      <p class="icon-block-content">Margining is removed from the <code>.icon-block-content</code> mobile views and text will appear directly below the icon.</p>
      <hr />
      <div class="icon-block small">
        <svg viewBox="0 0 16 16" title="Information">
          <path d="M7,9.25 C7.41421356,9.25 7.75,9.58578644 7.75,10 C7.75,10.4142136 7.41421356,10.75 7,10.75 C6.58578644,10.75 6.25,10.4142136 6.25,10 C6.25,9.58578644 6.58578644,9.25 7,9.25 Z M7.5,3 L7.5,8 L6.5,8 L6.5,3 L7.5,3 Z M7,1 C10.3,1 13,3.7 13,7 C13,10.3 10.3,13 7,13 C3.7,13 1,10.3 1,7 C1,3.7 3.7,1 7,1 L7,1 Z M7,0 C3.15,0 0,3.15 0,7 C0,10.85 3.15,14 7,14 C10.85,14 14,10.85 14,7 C14,3.15 10.85,0 7,0 L7,0 Z" transform="matrix(1 0 0 -1 1 15)" />
        </svg>
        <p class="strong">This is Small</p>
      </div>
      <p class="icon-block-content">Use the class <code class="small">.small</code> to get a smaller 0.875rem (14px) font size and smaller bottom margin after <code>.icon-block</code>. This also works in conjunction with other variants such as<code>.icon-block-content</code> as is that case in this example.</p>
    </article>

    <strong>Markup</strong>
    <pre><code class="language-markup">&lt;!-- Icon Block --&gt;
&lt;div class="icon-block"&gt;
  &lt;svg&gt;...&lt;/svg&gt; &lt;!-- Image --&gt;
  &lt;p class="strong"&gt;Icon Block Content&lt;/p&gt; &lt;!-- Content Block --&gt;
&lt;/div&gt;

&lt;!-- Sibling Icon Block Content --&gt;
&lt;p class="icon-block-content"&gt;Margining is removed from the mobile views.&lt;/p&gt;
&lt;p class="icon-block-content"&gt;you can include multiple siblings.&lt;/p&gt;

&lt;hr&gt;

&lt;div class="icon-block small"&gt;
  &lt;svg&gt;...&lt;/svg&gt;
  &lt;p class="strong"&gt;This is Small&lt;/p&gt;
&lt;/div&gt;
&lt;p class="icon-block-content"&gt;The small class will produce smaller text and margin.&lt;/p&gt;</code></pre>

    <hr />

    <h3>Icon Block Within a Card</h3>
    <p>Cards can accept multiple containers with class <code>.icon-block</code>. Generally, we separate them with an <code>&lt;hr&gt;</code>.</p>

    <div class="card shadow example">
      <article class="icon-block">
        <svg viewBox="0 0 16 16" title="Information">
          <path d="M7,9.25 C7.41421356,9.25 7.75,9.58578644 7.75,10 C7.75,10.4142136 7.41421356,10.75 7,10.75 C6.58578644,10.75 6.25,10.4142136 6.25,10 C6.25,9.58578644 6.58578644,9.25 7,9.25 Z M7.5,3 L7.5,8 L6.5,8 L6.5,3 L7.5,3 Z M7,1 C10.3,1 13,3.7 13,7 C13,10.3 10.3,13 7,13 C3.7,13 1,10.3 1,7 C1,3.7 3.7,1 7,1 L7,1 Z M7,0 C3.15,0 0,3.15 0,7 C0,10.85 3.15,14 7,14 C10.85,14 14,10.85 14,7 C14,3.15 10.85,0 7,0 L7,0 Z" transform="matrix(1 0 0 -1 1 15)" />
        </svg>
        <div>
          <p class="strong">Card Title</p>
          <p>The Icon Block pattern can be nested inside layout styles such as <code>.card</code>. You can apply the <code>.icon-block</code> directly to the <code>&lt;article&gt;</code> element or <code>.card-content</code> class — or as a child of these containers.</p>
        </div>
      </article>

      <hr />

      <article class="icon-block">
        <svg viewBox="0 0 16 16" title="Information">
          <path d="M7,9.25 C7.41421356,9.25 7.75,9.58578644 7.75,10 C7.75,10.4142136 7.41421356,10.75 7,10.75 C6.58578644,10.75 6.25,10.4142136 6.25,10 C6.25,9.58578644 6.58578644,9.25 7,9.25 Z M7.5,3 L7.5,8 L6.5,8 L6.5,3 L7.5,3 Z M7,1 C10.3,1 13,3.7 13,7 C13,10.3 10.3,13 7,13 C3.7,13 1,10.3 1,7 C1,3.7 3.7,1 7,1 L7,1 Z M7,0 C3.15,0 0,3.15 0,7 C0,10.85 3.15,14 7,14 C10.85,14 14,10.85 14,7 C14,3.15 10.85,0 7,0 L7,0 Z" transform="matrix(1 0 0 -1 1 15)" />
        </svg>
        <p>This example shows how you can have multiple <code>.icon-block</code> containers and divide the card with an <code>&lt;hr&gt;</code>.</p>
      </article>
    </div>

    <strong>Markup</strong>
    <pre><code class="language-markup">&lt;div class="card shadow"&gt;
  &lt;article class="icon-block"&gt;
    &lt;svg&gt;...&lt;/svg&gt;
    &lt;div&gt;
      &lt;p class="strong"&gt;Default&lt;/p&gt;
      &lt;p&gt;Paragraphs and any other content under that title...&lt;/p&gt;
    &lt;/div&gt;
  &lt;/article&gt;

  &lt;hr&gt;

  &lt;article class="icon-block"&gt;
    &lt;svg&gt;...&lt;/svg&gt;
    &lt;p&gt;Multiple icon block patterns in one card.&lt;/p&gt;
  &lt;/article&gt;
&lt;/div&gt;</code></pre>

    <h3>Icon Block Within a Notice</h3>
    <p>Our Notices are designed to display a small amount of information. They work well with a single instance of <code>.icon-block</code>.</p>

    <div class="notice example">
      <div class="notice-content icon-block">
        <svg viewBox="0 0 16 16" title="Information">
          <path d="M7,9.25 C7.41421356,9.25 7.75,9.58578644 7.75,10 C7.75,10.4142136 7.41421356,10.75 7,10.75 C6.58578644,10.75 6.25,10.4142136 6.25,10 C6.25,9.58578644 6.58578644,9.25 7,9.25 Z M7.5,3 L7.5,8 L6.5,8 L6.5,3 L7.5,3 Z M7,1 C10.3,1 13,3.7 13,7 C13,10.3 10.3,13 7,13 C3.7,13 1,10.3 1,7 C1,3.7 3.7,1 7,1 L7,1 Z M7,0 C3.15,0 0,3.15 0,7 C0,10.85 3.15,14 7,14 C10.85,14 14,10.85 14,7 C14,3.15 10.85,0 7,0 L7,0 Z" transform="matrix(1 0 0 -1 1 15)" />
        </svg>
        <div>
          <p class="strong">Notice Title</p>
          <p>The Icon Block pattern can be nested inside layout styles such as <code>.notice</code>. You can apply the <code>.icon-block</code> directly to the <code>&lt;article&gt;</code> element or <code>.notice-content</code> class — or as a child of these containers.</p>
        </div>
      </div>
    </div>

    <strong>Markup</strong>
    <pre><code class="language-markup">&lt;div class="notice"&gt;
  &lt;div class="notice-content icon-block"&gt;
    &lt;svg&gt;...&lt;/svg&gt;
    &lt;div&gt;
      &lt;p class="strong"&gt;Notice Title&lt;/p&gt;
      &lt;p&gt;Paragraphs and any other content under that title...&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
  </article>
</template>


<style lang="scss" scoped>
  .example {
    margin-bottom: 1rem;
  }
</style>
