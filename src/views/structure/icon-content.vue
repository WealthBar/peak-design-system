<template>
  <article class="container">
    <h1>Layout Structures — Icon Content Pattern</h1>
    <p>Icon Content is a common structural pattern used to display an icon and paired content. It uses iconography to give emphasis and hierarchy to a specific piece of content. this stucture can be combined with a layout style such as <router-link to="/layout/card">Card</router-link> or <router-link to="/layout/notice">Notice</router-link>.</p>

    <hr />

    <h3>Icon Content</h3>
    <p>Cards can accept multiple containers with class <code>icon-content</code>. Generally, we separate them with an <code>&lt;hr&gt;</code>.</p>

    <!-- <div class="card shadow example"> -->
    <article class="icon-content">
      <svg viewBox="0 0 16 16" title="Information">
        <path d="M7,9.25 C7.41421356,9.25 7.75,9.58578644 7.75,10 C7.75,10.4142136 7.41421356,10.75 7,10.75 C6.58578644,10.75 6.25,10.4142136 6.25,10 C6.25,9.58578644 6.58578644,9.25 7,9.25 Z M7.5,3 L7.5,8 L6.5,8 L6.5,3 L7.5,3 Z M7,1 C10.3,1 13,3.7 13,7 C13,10.3 10.3,13 7,13 C3.7,13 1,10.3 1,7 C1,3.7 3.7,1 7,1 L7,1 Z M7,0 C3.15,0 0,3.15 0,7 C0,10.85 3.15,14 7,14 C10.85,14 14,10.85 14,7 C14,3.15 10.85,0 7,0 L7,0 Z" transform="matrix(1 0 0 -1 1 15)" />
      </svg>
      <div>
        <p class="strong">Strong Title</p>
        <p>The Icon Content pattern contains an <em>image</em> (<code>&lt;svg&gt;</code> or <code>&lt;img&gt;</code>) and a <em>content block</em> (<code>&lt;div&gt;</code>, <code>&lt;p&gt;,</code>, etc) For text. This format allows for an icon to be used like a bullet. Any nested content in the <em>content block</em> will be margined to align with the icon</p>
      </div>
    </article>

    <hr />

    <article class="icon-content">
      <svg viewBox="0 0 16 16" title="Information">
        <path d="M7,9.25 C7.41421356,9.25 7.75,9.58578644 7.75,10 C7.75,10.4142136 7.41421356,10.75 7,10.75 C6.58578644,10.75 6.25,10.4142136 6.25,10 C6.25,9.58578644 6.58578644,9.25 7,9.25 Z M7.5,3 L7.5,8 L6.5,8 L6.5,3 L7.5,3 Z M7,1 C10.3,1 13,3.7 13,7 C13,10.3 10.3,13 7,13 C3.7,13 1,10.3 1,7 C1,3.7 3.7,1 7,1 L7,1 Z M7,0 C3.15,0 0,3.15 0,7 C0,10.85 3.15,14 7,14 C10.85,14 14,10.85 14,7 C14,3.15 10.85,0 7,0 L7,0 Z" transform="matrix(1 0 0 -1 1 15)" />
      </svg>
      <p>The Icon Content pattern can also be applied directly to body copy without a title.</p>
    </article>
    <!-- </div> -->

    <pre><code class="language-markup">&lt;div class="card shadow"&gt;
  &lt;article class="icon-content"&gt;
    &lt;svg&gt;...&lt;/svg&gt;
    &lt;p class="strong"&gt;Default&lt;/p&gt;
    &lt;p&gt;Paragraphs and any other content under that title...&lt;/p&gt;
  &lt;/article&gt;

  &lt;hr&gt;

  &lt;article class="icon-content"&gt;
    &lt;svg&gt;...&lt;/svg&gt;
    &lt;p&gt;The Icon Content pattern can also be applied directly to body copy without a title.&lt;/p&gt;
  &lt;/div&gt;
&lt;/article&gt;</code></pre>

    <h3>Variants and Patterns</h3>



    <!-- <div class="card shadow example"> -->
      <article>
        <div class="icon-content">
          <svg viewBox="0 0 16 16" title="Information">
            <path d="M7,9.25 C7.41421356,9.25 7.75,9.58578644 7.75,10 C7.75,10.4142136 7.41421356,10.75 7,10.75 C6.58578644,10.75 6.25,10.4142136 6.25,10 C6.25,9.58578644 6.58578644,9.25 7,9.25 Z M7.5,3 L7.5,8 L6.5,8 L6.5,3 L7.5,3 Z M7,1 C10.3,1 13,3.7 13,7 C13,10.3 10.3,13 7,13 C3.7,13 1,10.3 1,7 C1,3.7 3.7,1 7,1 L7,1 Z M7,0 C3.15,0 0,3.15 0,7 C0,10.85 3.15,14 7,14 C10.85,14 14,10.85 14,7 C14,3.15 10.85,0 7,0 L7,0 Z" transform="matrix(1 0 0 -1 1 15)" />
          </svg>
          <p class="strong">Icon Content Block</p>
        </div>

        <p class="icon-content-block">Use <code>.icon-content-block</code> as a sibling (in the same parent) container to <code>.icon-content</code> to get a left-margin that aligns with the icon content.</p>
        <p class="icon-content-block">Margining is removed from the <code>.icon-content-block</code> mobile views and text will appear directly below the icon.</p>
      </article>
      <hr />
      <article>
        <div class="icon-content small">
          <svg viewBox="0 0 16 16" title="Information">
            <path d="M7,9.25 C7.41421356,9.25 7.75,9.58578644 7.75,10 C7.75,10.4142136 7.41421356,10.75 7,10.75 C6.58578644,10.75 6.25,10.4142136 6.25,10 C6.25,9.58578644 6.58578644,9.25 7,9.25 Z M7.5,3 L7.5,8 L6.5,8 L6.5,3 L7.5,3 Z M7,1 C10.3,1 13,3.7 13,7 C13,10.3 10.3,13 7,13 C3.7,13 1,10.3 1,7 C1,3.7 3.7,1 7,1 L7,1 Z M7,0 C3.15,0 0,3.15 0,7 C0,10.85 3.15,14 7,14 C10.85,14 14,10.85 14,7 C14,3.15 10.85,0 7,0 L7,0 Z" transform="matrix(1 0 0 -1 1 15)" />
          </svg>
          <p class="strong">Small</p>
        </div>

        <p class="icon-content-block">Use the class <code class="small">.small</code> to get a smaller 0.875rem (14px) font size and smaller bottom margin after <code>.icon-content</code>. This also works in conjunction with <code>.icon-content-block</code> as is that case in this example.</p>
      </article>
      <!-- <hr /> -->

      <!-- <article>
        <div class="icon-content">
          <svg viewBox="0 0 16 16" title="Information">
            <path d="M7,9.25 C7.41421356,9.25 7.75,9.58578644 7.75,10 C7.75,10.4142136 7.41421356,10.75 7,10.75 C6.58578644,10.75 6.25,10.4142136 6.25,10 C6.25,9.58578644 6.58578644,9.25 7,9.25 Z M7.5,3 L7.5,8 L6.5,8 L6.5,3 L7.5,3 Z M7,1 C10.3,1 13,3.7 13,7 C13,10.3 10.3,13 7,13 C3.7,13 1,10.3 1,7 C1,3.7 3.7,1 7,1 L7,1 Z M7,0 C3.15,0 0,3.15 0,7 C0,10.85 3.15,14 7,14 C10.85,14 14,10.85 14,7 C14,3.15 10.85,0 7,0 L7,0 Z" transform="matrix(1 0 0 -1 1 15)" />
          </svg>
          <p class="strong">Large Margin</p>
        </div>

        <p class="icon-content-block">Use the class <code>.large-margin</code> to get a larger 1.5rem (24px) margin around content at desktop sizes.</p>
      </article>
      <hr />

      <article>
        <div class="icon-content">
          <svg viewBox="0 0 16 16" title="Information">
            <path d="M7,9.25 C7.41421356,9.25 7.75,9.58578644 7.75,10 C7.75,10.4142136 7.41421356,10.75 7,10.75 C6.58578644,10.75 6.25,10.4142136 6.25,10 C6.25,9.58578644 6.58578644,9.25 7,9.25 Z M7.5,3 L7.5,8 L6.5,8 L6.5,3 L7.5,3 Z M7,1 C10.3,1 13,3.7 13,7 C13,10.3 10.3,13 7,13 C3.7,13 1,10.3 1,7 C1,3.7 3.7,1 7,1 L7,1 Z M7,0 C3.15,0 0,3.15 0,7 C0,10.85 3.15,14 7,14 C10.85,14 14,10.85 14,7 C14,3.15 10.85,0 7,0 L7,0 Z" transform="matrix(1 0 0 -1 1 15)" />
          </svg>
          <p class="strong">Standard</p>
        </div>
      </article> -->
    <!-- </div> -->

    <pre><code class="language-markup">&lt;div class="card shadow"&gt;
  &lt;article class="icon-content small"&gt;
    &lt;svg&gt;...&lt;/svg&gt;
    &lt;p class="strong"&gt;Small&lt;/p&gt;
    &lt;p&gt;A smaller 0.875rem (14px) font size and tighter leading.&lt;/p&gt;
  &lt;/article&gt;

  &lt;hr&gt;

  &lt;article class="icon-content large-margin"&gt;
    &lt;svg&gt;...&lt;/svg&gt;
    &lt;p class="strong"&gt;Large Margin&lt;/p&gt;
    &lt;p&gt;A larger 1.5rem (24px) margin around content at desktop sizes.&lt;/p&gt;
  &lt;/article&gt;

  &lt;hr&gt;

  &lt;article class="icon-content no-indent"&gt;
    &lt;svg&gt;...&lt;/svg&gt;
    &lt;p class="strong"&gt;No Indent&lt;/p&gt;
    &lt;p&gt;Remove indenting from content.&lt;/p&gt;
  &lt;/article&gt;
&lt;/div&gt;</code></pre>

    <hr />

    <h3>Icon Content Within a Card</h3>
    <p>Cards can accept multiple containers with class <code>.icon-content</code>. Generally, we separate them with an <code>&lt;hr&gt;</code>.</p>

    <div class="card shadow example">
      <article class="icon-content">
        <svg viewBox="0 0 16 16" title="Information">
          <path d="M7,9.25 C7.41421356,9.25 7.75,9.58578644 7.75,10 C7.75,10.4142136 7.41421356,10.75 7,10.75 C6.58578644,10.75 6.25,10.4142136 6.25,10 C6.25,9.58578644 6.58578644,9.25 7,9.25 Z M7.5,3 L7.5,8 L6.5,8 L6.5,3 L7.5,3 Z M7,1 C10.3,1 13,3.7 13,7 C13,10.3 10.3,13 7,13 C3.7,13 1,10.3 1,7 C1,3.7 3.7,1 7,1 L7,1 Z M7,0 C3.15,0 0,3.15 0,7 C0,10.85 3.15,14 7,14 C10.85,14 14,10.85 14,7 C14,3.15 10.85,0 7,0 L7,0 Z" transform="matrix(1 0 0 -1 1 15)" />
        </svg>
        <div>
          <p class="strong">Card Title</p>
          <p>The Icon Content pattern can be nested inside layout styles such as <code>.card</code>. You can apply the <code>.icon-content</code> directly to the <code>&lt;article&gt;</code> element or <code>.card-content</code> class — or as a child of these containers.</p>
        </div>
      </article>

      <hr />

      <article class="icon-content">
        <svg viewBox="0 0 16 16" title="Information">
          <path d="M7,9.25 C7.41421356,9.25 7.75,9.58578644 7.75,10 C7.75,10.4142136 7.41421356,10.75 7,10.75 C6.58578644,10.75 6.25,10.4142136 6.25,10 C6.25,9.58578644 6.58578644,9.25 7,9.25 Z M7.5,3 L7.5,8 L6.5,8 L6.5,3 L7.5,3 Z M7,1 C10.3,1 13,3.7 13,7 C13,10.3 10.3,13 7,13 C3.7,13 1,10.3 1,7 C1,3.7 3.7,1 7,1 L7,1 Z M7,0 C3.15,0 0,3.15 0,7 C0,10.85 3.15,14 7,14 C10.85,14 14,10.85 14,7 C14,3.15 10.85,0 7,0 L7,0 Z" transform="matrix(1 0 0 -1 1 15)" />
        </svg>
        <p>This example shows how you can have multiple <code>.icon-content</code> containers and divide the card with an <code>&lt;hr&gt;</code>.</p>
      </article>
    </div>

    <pre><code class="language-markup">&lt;div class="card shadow"&gt;
  &lt;article class="icon-content"&gt;
    &lt;svg&gt;...&lt;/svg&gt;
    &lt;p class="strong"&gt;Default&lt;/p&gt;
    &lt;p&gt;Paragraphs and any other content under that title...&lt;/p&gt;
  &lt;/article&gt;

  &lt;hr&gt;

  &lt;article class="icon-content"&gt;
    &lt;svg&gt;...&lt;/svg&gt;
    &lt;p&gt;The Icon Content pattern can also be applied directly to body copy without a title.&lt;/p&gt;
  &lt;/div&gt;
&lt;/article&gt;</code></pre>

    <h3>Icon Content Within a Notice</h3>
    <p>Our Notices are designed to display a small amount of information. They work well with a single instance of <code>.icon-content</code>.</p>

    <div class="notice example">
      <article class="icon-content">
        <svg viewBox="0 0 16 16" title="Information">
          <path d="M7,9.25 C7.41421356,9.25 7.75,9.58578644 7.75,10 C7.75,10.4142136 7.41421356,10.75 7,10.75 C6.58578644,10.75 6.25,10.4142136 6.25,10 C6.25,9.58578644 6.58578644,9.25 7,9.25 Z M7.5,3 L7.5,8 L6.5,8 L6.5,3 L7.5,3 Z M7,1 C10.3,1 13,3.7 13,7 C13,10.3 10.3,13 7,13 C3.7,13 1,10.3 1,7 C1,3.7 3.7,1 7,1 L7,1 Z M7,0 C3.15,0 0,3.15 0,7 C0,10.85 3.15,14 7,14 C10.85,14 14,10.85 14,7 C14,3.15 10.85,0 7,0 L7,0 Z" transform="matrix(1 0 0 -1 1 15)" />
        </svg>
        <div>
          <p class="strong">Notice Title</p>
          <p>The Icon Content pattern can be nested inside layout styles such as <code>.notice</code>. You can apply the <code>.icon-content</code> directly to the <code>&lt;article&gt;</code> element or <code>.card-content</code> class — or as a child of these containers.</p>
        </div>
      </article>
    </div>

    <pre><code class="language-markup">&lt;div class="notice"&gt;
  &lt;article class="icon-content"&gt;
    &lt;svg&gt;...&lt;/svg&gt;
    &lt;p class="strong"&gt;Default&lt;/p&gt;
    &lt;p&gt;Paragraphs and any other content under that title...&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;div class="notice"&gt;
  &lt;article class="icon-content"&gt;
    &lt;svg&gt;...&lt;/svg&gt;
    &lt;p class="span"&gt;The Icon Content pattern can also be applied directly to body copy without a title.&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>

    <!-- <h3>Variants</h3>

    <div class="notice">
      <article class="icon-content small">
        <svg viewBox="0 0 16 16" title="Information">
          <path d="M7,9.25 C7.41421356,9.25 7.75,9.58578644 7.75,10 C7.75,10.4142136 7.41421356,10.75 7,10.75 C6.58578644,10.75 6.25,10.4142136 6.25,10 C6.25,9.58578644 6.58578644,9.25 7,9.25 Z M7.5,3 L7.5,8 L6.5,8 L6.5,3 L7.5,3 Z M7,1 C10.3,1 13,3.7 13,7 C13,10.3 10.3,13 7,13 C3.7,13 1,10.3 1,7 C1,3.7 3.7,1 7,1 L7,1 Z M7,0 C3.15,0 0,3.15 0,7 C0,10.85 3.15,14 7,14 C10.85,14 14,10.85 14,7 C14,3.15 10.85,0 7,0 L7,0 Z" transform="matrix(1 0 0 -1 1 15)" />
        </svg>
        <p class="strong">Small</p>
        <p>Use the class <code class="small">.small</code> to get a smaller 0.875rem (14px) font size and tighter leading.</p>
      </article>
    </div>

    <div class="notice">
      <article class="icon-content large-margin">
        <svg viewBox="0 0 16 16" title="Information">
          <path d="M7,9.25 C7.41421356,9.25 7.75,9.58578644 7.75,10 C7.75,10.4142136 7.41421356,10.75 7,10.75 C6.58578644,10.75 6.25,10.4142136 6.25,10 C6.25,9.58578644 6.58578644,9.25 7,9.25 Z M7.5,3 L7.5,8 L6.5,8 L6.5,3 L7.5,3 Z M7,1 C10.3,1 13,3.7 13,7 C13,10.3 10.3,13 7,13 C3.7,13 1,10.3 1,7 C1,3.7 3.7,1 7,1 L7,1 Z M7,0 C3.15,0 0,3.15 0,7 C0,10.85 3.15,14 7,14 C10.85,14 14,10.85 14,7 C14,3.15 10.85,0 7,0 L7,0 Z" transform="matrix(1 0 0 -1 1 15)" />
        </svg>
        <p class="strong">Large Margin</p>
        <p>Use the class <code>.large-margin</code> to get a larger 1.5rem (24px) margin around content at desktop sizes.</p>
      </article>
    </div>

    <div class="notice">
      <article class="icon-content no-indent">
        <svg viewBox="0 0 16 16" title="Information">
          <path d="M7,9.25 C7.41421356,9.25 7.75,9.58578644 7.75,10 C7.75,10.4142136 7.41421356,10.75 7,10.75 C6.58578644,10.75 6.25,10.4142136 6.25,10 C6.25,9.58578644 6.58578644,9.25 7,9.25 Z M7.5,3 L7.5,8 L6.5,8 L6.5,3 L7.5,3 Z M7,1 C10.3,1 13,3.7 13,7 C13,10.3 10.3,13 7,13 C3.7,13 1,10.3 1,7 C1,3.7 3.7,1 7,1 L7,1 Z M7,0 C3.15,0 0,3.15 0,7 C0,10.85 3.15,14 7,14 C10.85,14 14,10.85 14,7 C14,3.15 10.85,0 7,0 L7,0 Z" transform="matrix(1 0 0 -1 1 15)" />
        </svg>
        <p class="strong">No Indent</p>
        <p>Use the class <code>.no-indent</code> to remove indenting from content. Note this this happens by default on mobile sizes.</p>
      </article>
    </div>

    <pre><code class="language-markup">&lt;div class="notice"&gt;
  &lt;article class="icon-content small"&gt;
    &lt;svg&gt;...&lt;/svg&gt;
    &lt;p class="strong"&gt;Small&lt;/p&gt;
    &lt;p&gt;A smaller 0.875rem (14px) font size and tighter leading.&lt;/p&gt;
  &lt;/article&gt;
&lt;/div&gt;

&lt;div class="notice"&gt;
  &lt;article class="icon-content large-margin"&gt;
    &lt;svg&gt;...&lt;/svg&gt;
    &lt;p class="strong"&gt;Large Margin&lt;/p&gt;
    &lt;p&gt;A larger 1.5rem (24px) margin around content at desktop sizes.&lt;/p&gt;
  &lt;/article&gt;
&lt;/div&gt;

&lt;div class="notice"&gt;
  &lt;article class="icon-content no-indent"&gt;
    &lt;svg&gt;...&lt;/svg&gt;
    &lt;p class="strong"&gt;No Indent&lt;/p&gt;
    &lt;p&gt;Remove indenting from content.&lt;/p&gt;
  &lt;/article&gt;
&lt;/div&gt;</code></pre> -->
  </article>
</template>


<style lang="scss" scoped>
  .example {
    margin-bottom: 1rem;
  }
</style>
