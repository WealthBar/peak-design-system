<template>
  <article class="container">
    <h1>Layout Styles — Icon Content Pattern</h1>
    <p>Icon Content is a common pattern used to lay out information within a card or notice. It uses iconography to give emphasis and hierarchy to a specific piece of content.</p>

    <hr />

    <h3>Icon Content Within a Card</h3>
    <p>Cards can accept multiple containers with class <code>icon-content</code>. Generally, we separate them with an <code>&lt;hr&gt;</code>.</p>

    <div class="card shadow example">
      <div class="icon-content">
        <svg viewBox="0 0 16 16" title="Information">
          <path d="M7,9.25 C7.41421356,9.25 7.75,9.58578644 7.75,10 C7.75,10.4142136 7.41421356,10.75 7,10.75 C6.58578644,10.75 6.25,10.4142136 6.25,10 C6.25,9.58578644 6.58578644,9.25 7,9.25 Z M7.5,3 L7.5,8 L6.5,8 L6.5,3 L7.5,3 Z M7,1 C10.3,1 13,3.7 13,7 C13,10.3 10.3,13 7,13 C3.7,13 1,10.3 1,7 C1,3.7 3.7,1 7,1 L7,1 Z M7,0 C3.15,0 0,3.15 0,7 C0,10.85 3.15,14 7,14 C10.85,14 14,10.85 14,7 C14,3.15 10.85,0 7,0 L7,0 Z" transform="matrix(1 0 0 -1 1 15)" />
        </svg>
        <p class="strong">Default</p>
        <p>The Icon Content pattern allows for an SVG Icon to be used like a bullet on a card's title. Paragraphs and any other content under that title become indented to match the indent of the title text.</p>
        <p>In responsive mobile, body indenting is removed.</p>
      </div>

      <hr />

      <div class="icon-content">
        <svg viewBox="0 0 16 16" title="Information">
          <path d="M7,9.25 C7.41421356,9.25 7.75,9.58578644 7.75,10 C7.75,10.4142136 7.41421356,10.75 7,10.75 C6.58578644,10.75 6.25,10.4142136 6.25,10 C6.25,9.58578644 6.58578644,9.25 7,9.25 Z M7.5,3 L7.5,8 L6.5,8 L6.5,3 L7.5,3 Z M7,1 C10.3,1 13,3.7 13,7 C13,10.3 10.3,13 7,13 C3.7,13 1,10.3 1,7 C1,3.7 3.7,1 7,1 L7,1 Z M7,0 C3.15,0 0,3.15 0,7 C0,10.85 3.15,14 7,14 C10.85,14 14,10.85 14,7 C14,3.15 10.85,0 7,0 L7,0 Z" transform="matrix(1 0 0 -1 1 15)" />
        </svg>
        <p>The Icon Content pattern can also be applied directly to body copy without a title.</p>
      </div>
    </div>

    <pre><code class="language-markup">&lt;div class="card shadow"&gt;
  &lt;div class="icon-content"&gt;
    &lt;svg&gt;...&lt;/svg&gt;
    &lt;p class="strong"&gt;Default&lt;/p&gt;
    &lt;p&gt;Paragraphs and any other content under that title...&lt;/p&gt;
  &lt;/div&gt;

  &lt;hr&gt;

  &lt;div class="icon-content"&gt;
    &lt;svg&gt;...&lt;/svg&gt;
    &lt;p&gt;The Icon Content pattern can also be applied directly to body copy without a title.&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>

    <h3>Variants</h3>

    <div class="card shadow example">
      <div class="icon-content small">
        <svg viewBox="0 0 16 16" title="Information">
          <path d="M7,9.25 C7.41421356,9.25 7.75,9.58578644 7.75,10 C7.75,10.4142136 7.41421356,10.75 7,10.75 C6.58578644,10.75 6.25,10.4142136 6.25,10 C6.25,9.58578644 6.58578644,9.25 7,9.25 Z M7.5,3 L7.5,8 L6.5,8 L6.5,3 L7.5,3 Z M7,1 C10.3,1 13,3.7 13,7 C13,10.3 10.3,13 7,13 C3.7,13 1,10.3 1,7 C1,3.7 3.7,1 7,1 L7,1 Z M7,0 C3.15,0 0,3.15 0,7 C0,10.85 3.15,14 7,14 C10.85,14 14,10.85 14,7 C14,3.15 10.85,0 7,0 L7,0 Z" transform="matrix(1 0 0 -1 1 15)" />
        </svg>
        <p class="strong">Small</p>
        <p>Use the class <code class="small">.small</code> to get a smaller 0.875rem (14px) font size and tighter leading.</p>
      </div>

      <hr />

      <div class="icon-content large-margin">
        <svg viewBox="0 0 16 16" title="Information">
          <path d="M7,9.25 C7.41421356,9.25 7.75,9.58578644 7.75,10 C7.75,10.4142136 7.41421356,10.75 7,10.75 C6.58578644,10.75 6.25,10.4142136 6.25,10 C6.25,9.58578644 6.58578644,9.25 7,9.25 Z M7.5,3 L7.5,8 L6.5,8 L6.5,3 L7.5,3 Z M7,1 C10.3,1 13,3.7 13,7 C13,10.3 10.3,13 7,13 C3.7,13 1,10.3 1,7 C1,3.7 3.7,1 7,1 L7,1 Z M7,0 C3.15,0 0,3.15 0,7 C0,10.85 3.15,14 7,14 C10.85,14 14,10.85 14,7 C14,3.15 10.85,0 7,0 L7,0 Z" transform="matrix(1 0 0 -1 1 15)" />
        </svg>
        <p class="strong">Large Margin</p>
        <p>Use the class <code>.large-margin</code> to get a larger 1.5rem (24px) margin around content at desktop sizes.</p>
      </div>

      <hr />

      <div class="icon-content no-indent">
        <svg viewBox="0 0 16 16" title="Information">
          <path d="M7,9.25 C7.41421356,9.25 7.75,9.58578644 7.75,10 C7.75,10.4142136 7.41421356,10.75 7,10.75 C6.58578644,10.75 6.25,10.4142136 6.25,10 C6.25,9.58578644 6.58578644,9.25 7,9.25 Z M7.5,3 L7.5,8 L6.5,8 L6.5,3 L7.5,3 Z M7,1 C10.3,1 13,3.7 13,7 C13,10.3 10.3,13 7,13 C3.7,13 1,10.3 1,7 C1,3.7 3.7,1 7,1 L7,1 Z M7,0 C3.15,0 0,3.15 0,7 C0,10.85 3.15,14 7,14 C10.85,14 14,10.85 14,7 C14,3.15 10.85,0 7,0 L7,0 Z" transform="matrix(1 0 0 -1 1 15)" />
        </svg>
        <p class="strong">No Indent</p>
        <p>Use the class <code>.no-indent</code> to remove indenting from content. Note this this happens by default on mobile sizes.</p>
      </div>
    </div>

    <pre><code class="language-markup">&lt;div class="card shadow"&gt;
  &lt;div class="icon-content small"&gt;
    &lt;svg&gt;...&lt;/svg&gt;
    &lt;p class="strong"&gt;Small&lt;/p&gt;
    &lt;p&gt;A smaller 0.875rem (14px) font size and tighter leading.&lt;/p&gt;
  &lt;/div&gt;

  &lt;hr&gt;

  &lt;div class="icon-content large-margin"&gt;
    &lt;svg&gt;...&lt;/svg&gt;
    &lt;p class="strong"&gt;Large Margin&lt;/p&gt;
    &lt;p&gt;A larger 1.5rem (24px) margin around content at desktop sizes.&lt;/p&gt;
  &lt;/div&gt;

  &lt;hr&gt;

  &lt;div class="icon-content no-indent"&gt;
    &lt;svg&gt;...&lt;/svg&gt;
    &lt;p class="strong"&gt;No Indent&lt;/p&gt;
    &lt;p&gt;Remove indenting from content.&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>

    <hr />

    <h3>Icon Content Within a Notice</h3>
    <p>Our Notices are designed to display a small amount of information. They work well with a single instance of <code>icon-content</code>.</p>

    <div class="notice">
      <div class="icon-content">
        <svg viewBox="0 0 16 16" title="Information">
          <path d="M7,9.25 C7.41421356,9.25 7.75,9.58578644 7.75,10 C7.75,10.4142136 7.41421356,10.75 7,10.75 C6.58578644,10.75 6.25,10.4142136 6.25,10 C6.25,9.58578644 6.58578644,9.25 7,9.25 Z M7.5,3 L7.5,8 L6.5,8 L6.5,3 L7.5,3 Z M7,1 C10.3,1 13,3.7 13,7 C13,10.3 10.3,13 7,13 C3.7,13 1,10.3 1,7 C1,3.7 3.7,1 7,1 L7,1 Z M7,0 C3.15,0 0,3.15 0,7 C0,10.85 3.15,14 7,14 C10.85,14 14,10.85 14,7 C14,3.15 10.85,0 7,0 L7,0 Z" transform="matrix(1 0 0 -1 1 15)" />
        </svg>
        <p class="strong">Default</p>
        <p>The Icon Content pattern allows for an SVG Icon to be used like a bullet on a notice's title. Paragraphs and any other content under that title become indented to match the indent of the title text.</p>
        <p>In responsive mobile, body indenting is removed.</p>
      </div>
    </div>

    <div class="notice">
      <div class="icon-content">
        <svg viewBox="0 0 16 16" title="Information">
          <path d="M7,9.25 C7.41421356,9.25 7.75,9.58578644 7.75,10 C7.75,10.4142136 7.41421356,10.75 7,10.75 C6.58578644,10.75 6.25,10.4142136 6.25,10 C6.25,9.58578644 6.58578644,9.25 7,9.25 Z M7.5,3 L7.5,8 L6.5,8 L6.5,3 L7.5,3 Z M7,1 C10.3,1 13,3.7 13,7 C13,10.3 10.3,13 7,13 C3.7,13 1,10.3 1,7 C1,3.7 3.7,1 7,1 L7,1 Z M7,0 C3.15,0 0,3.15 0,7 C0,10.85 3.15,14 7,14 C10.85,14 14,10.85 14,7 C14,3.15 10.85,0 7,0 L7,0 Z" transform="matrix(1 0 0 -1 1 15)" />
        </svg>
        <p>The Icon Content pattern can also be applied directly to body copy without a title.</p>
      </div>
    </div>

    <pre><code class="language-markup">&lt;div class="notice"&gt;
  &lt;div class="icon-content"&gt;
    &lt;svg&gt;...&lt;/svg&gt;
    &lt;p class="strong"&gt;Default&lt;/p&gt;
    &lt;p&gt;Paragraphs and any other content under that title...&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;div class="notice"&gt;
  &lt;div class="icon-content"&gt;
    &lt;svg&gt;...&lt;/svg&gt;
    &lt;p class="span"&gt;The Icon Content pattern can also be applied directly to body copy without a title.&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>

    <h3>Variants</h3>

    <div class="notice">
      <div class="icon-content small">
        <svg viewBox="0 0 16 16" title="Information">
          <path d="M7,9.25 C7.41421356,9.25 7.75,9.58578644 7.75,10 C7.75,10.4142136 7.41421356,10.75 7,10.75 C6.58578644,10.75 6.25,10.4142136 6.25,10 C6.25,9.58578644 6.58578644,9.25 7,9.25 Z M7.5,3 L7.5,8 L6.5,8 L6.5,3 L7.5,3 Z M7,1 C10.3,1 13,3.7 13,7 C13,10.3 10.3,13 7,13 C3.7,13 1,10.3 1,7 C1,3.7 3.7,1 7,1 L7,1 Z M7,0 C3.15,0 0,3.15 0,7 C0,10.85 3.15,14 7,14 C10.85,14 14,10.85 14,7 C14,3.15 10.85,0 7,0 L7,0 Z" transform="matrix(1 0 0 -1 1 15)" />
        </svg>
        <p class="strong">Small</p>
        <p>Use the class <code class="small">.small</code> to get a smaller 0.875rem (14px) font size and tighter leading.</p>
      </div>
    </div>

    <div class="notice">
      <div class="icon-content large-margin">
        <svg viewBox="0 0 16 16" title="Information">
          <path d="M7,9.25 C7.41421356,9.25 7.75,9.58578644 7.75,10 C7.75,10.4142136 7.41421356,10.75 7,10.75 C6.58578644,10.75 6.25,10.4142136 6.25,10 C6.25,9.58578644 6.58578644,9.25 7,9.25 Z M7.5,3 L7.5,8 L6.5,8 L6.5,3 L7.5,3 Z M7,1 C10.3,1 13,3.7 13,7 C13,10.3 10.3,13 7,13 C3.7,13 1,10.3 1,7 C1,3.7 3.7,1 7,1 L7,1 Z M7,0 C3.15,0 0,3.15 0,7 C0,10.85 3.15,14 7,14 C10.85,14 14,10.85 14,7 C14,3.15 10.85,0 7,0 L7,0 Z" transform="matrix(1 0 0 -1 1 15)" />
        </svg>
        <p class="strong">Large Margin</p>
        <p>Use the class <code>.large-margin</code> to get a larger 1.5rem (24px) margin around content at desktop sizes.</p>
      </div>
    </div>

    <div class="notice">
      <div class="icon-content no-indent">
        <svg viewBox="0 0 16 16" title="Information">
          <path d="M7,9.25 C7.41421356,9.25 7.75,9.58578644 7.75,10 C7.75,10.4142136 7.41421356,10.75 7,10.75 C6.58578644,10.75 6.25,10.4142136 6.25,10 C6.25,9.58578644 6.58578644,9.25 7,9.25 Z M7.5,3 L7.5,8 L6.5,8 L6.5,3 L7.5,3 Z M7,1 C10.3,1 13,3.7 13,7 C13,10.3 10.3,13 7,13 C3.7,13 1,10.3 1,7 C1,3.7 3.7,1 7,1 L7,1 Z M7,0 C3.15,0 0,3.15 0,7 C0,10.85 3.15,14 7,14 C10.85,14 14,10.85 14,7 C14,3.15 10.85,0 7,0 L7,0 Z" transform="matrix(1 0 0 -1 1 15)" />
        </svg>
        <p class="strong">No Indent</p>
        <p>Use the class <code>.no-indent</code> to remove indenting from content. Note this this happens by default on mobile sizes.</p>
      </div>
    </div>

    <pre><code class="language-markup">&lt;div class="notice"&gt;
  &lt;div class="-content small"&gt;
    &lt;svg&gt;...&lt;/svg&gt;
    &lt;p class="strong"&gt;Small&lt;/p&gt;
    &lt;p&gt;A smaller 0.875rem (14px) font size and tighter leading.&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;div class="notice"&gt;
  &lt;div class="icon-content large-margin"&gt;
    &lt;svg&gt;...&lt;/svg&gt;
    &lt;p class="strong"&gt;Large Margin&lt;/p&gt;
    &lt;p&gt;A larger 1.5rem (24px) margin around content at desktop sizes.&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;div class="notice"&gt;
  &lt;div class="icon-content no-indent"&gt;
    &lt;svg&gt;...&lt;/svg&gt;
    &lt;p class="strong"&gt;No Indent&lt;/p&gt;
    &lt;p&gt;Remove indenting from content.&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
  </article>
</template>

<style lang="scss" scoped>
  .example {
    margin-bottom: 1rem;
  }
</style>
