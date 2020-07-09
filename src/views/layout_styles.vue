<template>
  <article class="container">
    <h1>Layout Styles</h1>

    <!-- CARD -->
    <section id="card">
      <h2>Card</h2>

      <h3>Usage Guidelines</h3>
      <p>The <code>.card</code> class can be applied to any block element to provide visual treatment. <code>.card</code> has no inner margin/padding — this is provided by internal containers and content.</p>
      <p>The card class can be combined with other style patterns to provide a complete structure for content. Some examples of these patterns are the <a href="/workflows#step">Workflow Step</a> pattern and several (upcoming) table styles.</p>
      <p>There are two variants of <code>.card</code>: a default and a variant with an added box-shadow. Generally, we use the default against a white background and the shadow variant against a light grey background.</p>

      <h3>Default</h3>
      <div class="card example">
        <p>Card in its simplest form. Margin is applied to the content. This basic card is often used against a white background.</p>
      </div>
      <pre><code class="language-markup">&lt;div class="card"&gt;
  &lt;p&gt;Card in its simplest form.&lt;/p&gt;
&lt;/div&gt;</code></pre>

      <hr>

      <h3>Box Shadow</h3>
      <div class="card shadow example">
        <p>Card with box shadow. Margin is applied to the content. This box-shdaow variant is generally used on a grey background.</p>
      </div>
      <pre><code class="language-markup">&lt;div class="card shadow"&gt;
  &lt;p&gt;Card with box shadow.&lt;/p&gt;
&lt;/div&gt;</code></pre>
    </section>
    <!-- CARD END -->

    <hr>

    <!-- NOTICE -->
    <section id="notice">
      <h2>Notice</h2>
      <p>Notice patterns are designed as an adaptable pattern for use in a variety of contexts from callouts to toast notifications. Adding a <code>notice</code> class to the containing element provides a default <code>$bg</code> coloured notice. Variants include <code>alt</code>, <code>light</code>, <code>alert</code>, and <code>neg</code>. For ease of building the <code>notice-content</code> class — as well as <code>&lt;header&gt;</code>, <code>&lt;article&gt;</code>, or <code>&lt;footer&gt;</code> elements inside the notice container will have a have side margins applied.</p>
      <h3>Default</h3>

      <div class="notice">
        <p class="notice-content">
          {{ noticeCopy }}
        </p>
      </div>

      <pre><code class="language-markup">&lt;div class="notice"&gt;
  &lt;p class="notice-content"&gt; … &lt;/p&gt;
&lt;/div&gt;</code></pre>

      <hr>

      <h3>Alternate</h3>

      <div class="notice alt">
        <article>
          <p>
            {{ noticeCopy }}
          </p>
        </article>
      </div>

      <pre><code class="language-markup">&lt;div class="notice alt"&gt;
  &lt;article&gt; … &lt;/article&gt;
&lt;/div&gt;</code></pre>

      <hr>

      <h3>Light</h3>

      <div class="notice light">
        <header>
          <h3>H3 Header</h3>
        </header>
        <footer>
          <p>
            {{ noticeCopy }}
          </p>
        </footer>
      </div>

      <pre><code class="language-markup">&lt;div class="notice light"&gt;
  &lt;header&gt; … &lt;/header&gt;
  &lt;footer&gt; … &lt;/footer&gt;
&lt;/div&gt;</code></pre>

      <hr>

      <h3>Alert</h3>

      <div class="notice alert">
        <article>
          <p>
            {{ noticeCopy }}
          </p>
          <ul class="bullet">
            <li>This is a list item.</li>
            <li>This is the second item in the list.</li>
            <ul class="bullet">
              <li>This is a nested list.</li>
              <li>Let's have one more item.</li>
            </ul>
          </ul>
        </article>
      </div>

      <pre><code class="language-markup">&lt;div class="notice alert"&gt;
  &lt;article&gt; … &lt;/article&gt;
&lt;/div&gt;</code></pre>


      <hr>

      <h3>Negative</h3>

      <div class="notice neg">
        <article>
          <p>
            {{ noticeCopy }}
          </p>
        </article>
      </div>

      <pre><code class="language-markup">&lt;div class="notice neg"&gt;
  &lt;article&gt; … &lt;/article&gt;
&lt;/div&gt;</code></pre>
    </section>
    <!-- NOTICE END -->
    <!-- MEDIA BOX START -->
    <section id="media-box">
      <h2>Media Box</h2>

      <p>A media box is a layout pattern used to display staff activities on various admin interfaces.</p>

      <p>The Peak implementation of <code>media-box</code> should enable the end developer to easily mark up a timeline showing multiple points of activity or multiple comments using <code>v-for</code> or something akin to it in future frameworks. As such, media-box should display itself in one of two variants, depending on what data it is given:</p>

      <ul>
        <li>Status variant - Show a basic version featuring a status update.</li>
        <li>Comment version - Render an additional block of text, typically the body of a comment.</li>
      </ul>

      <h3>Status Variant</h3>

      <div class="media-box">
        <section class="main">
          <div class="icon black">
            <svg viewBox="0 0 32 32">
              <polygon points="11,27.4 1.3,17.7 2.7,16.3 11,24.6 29.3,6.3 30.7,7.7" />
            </svg>
          </div>
          <div class="content">
            <p class="small"><strong>User</strong> approve the request.</p>
            <p class="subtle small">Jan 1 - 1:11pm</p>
          </div>
        </section>
      </div>

      <pre><code class="language-markup">&lt;div class="media-box"&gt;
  &lt;section class="main"&gt;
    &lt;div class="icon black"&gt;
      &lt;svg viewBox="0 0 32 32"&gt;
        &lt;polygon points="11,27.4 1.3,17.7 2.7,16.3 11,24.6 29.3,6.3 30.7,7.7" /&gt;
      &lt;/svg&gt;
    &lt;/div&gt;
    &lt;div class="content"&gt;
      &lt;p class="small"&gt;&lt;strong&gt;User&lt;/strong&gt; approve the request.&lt;/p&gt;
      &lt;p class="subtle small"&gt;Jan 1 - 1:11pm&lt;/p&gt;
    &lt;/div&gt;
  &lt;/section&gt;
&lt;/div&gt;</code></pre>

      <h3>Comment Variant</h3>

      <div class="media-box">
        <section class="main">
          <div class="icon comment">
            <p class="initial">U</p>
          </div>
          <div class="content">
            <p class="small"><strong>User</strong>&nbsp;left a comment.</p>
            <p class="subtle small">Jan 2 - 2:pm</p>
          </div>
        </section>
        <section class="body">
          <p class="small">This is a comment</p>
        </section>
      </div>

      <pre><code class="language-markup">&lt;div class="media-box"&gt;
  &lt;section class="main"&gt;
    &lt;div class="icon comment"&gt;
      &lt;p class="initial"&gt;U&lt;/p&gt;
    &lt;/div&gt;
    &lt;div class="content"&gt;
      &lt;p class="small"&gt;&lt;strong&gt;User&lt;/strong&gt;&nbsp;left a comment.&lt;/p&gt;
      &lt;p class="subtle small"&gt;Jan 2 - 2:pm&lt;/p&gt;
    &lt;/div&gt;
  &lt;/section&gt;
  &lt;section class="body"&gt;
    &lt;p class="small"&gt;This is a comment&lt;/p&gt;
  &lt;/section&gt;
&lt;/div&gt;</code></pre>
    </section>
    <!-- MEDIA BOX END -->
  </article>
</template>

<script>
export default {
  data() {
    return {
      noticeCopy: `
        Body type is optimized for web readability. For additional emphasis or de-emphasis, we have 4 style
        classes that can be applied as needed to our base paragraph style.
      `,
    };
  },
};
</script>

<style lang="scss" scoped>
  #card {
    .example {
      margin-bottom: 1.25rem;

      p {
        margin: 1rem 1.5rem;
      }
    }
  }

  .media-box {
  margin-bottom: 1rem;
  
  .main {
    display: flex;
    flex-direction: row;
    align-items: center;

    .icon {
      height: 2rem;
      width: 2rem;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;

      &.black {
        background-color: $black;
    
        svg {
          fill: $white;
        }
      }
    
      &.secondary {
        background-color: $secondary-50;
        
        svg {
          fill: $secondary-500;
        }
      }
    
      &.comment {
        background-color: $bg-50;
    
        p {
          margin: 0;
          font-size: 1rem;
          color: $primary-500;
        }
      }

      svg {
        height: 1rem;
        width: 1rem;
      }
    }

    .content {
      margin: 0 0 0 0.75rem;
    }
  }

  .body {
    margin: 1rem 0 0 2.75rem;
    border-left: 1px solid $neutral-100;
    padding-left: 1rem;

    p {
      white-space: pre-line;
      word-break: break-word;
    }
  }
  
  p {
    margin: 0;
  }
}

</style>
