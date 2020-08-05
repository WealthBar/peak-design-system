<template>
  <article class="container">
    <h1>Layout Styles — Icon Content Pattern</h1>
    <p>Icon Content is a common pattern used to lay out information within a card or notice. It uses iconography to give emphasis and hierarchy to a specific piece of content.</p>

    <hr />

    <h3>Icon Content Within a Card</h3>
    <p>Cards can accept multiple containers with class <code>icon-pattern-container</code>, which will provide a bottom border to serparate themselves from their siblings.</p>

    <div class="card shadow example">
      <div class="icon-pattern-container">
        <p class="icon-pattern-heading">
          <svg viewBox="0 0 16 16" title="Information">
            <path d="M7,9.25 C7.41421356,9.25 7.75,9.58578644 7.75,10 C7.75,10.4142136 7.41421356,10.75 7,10.75 C6.58578644,10.75 6.25,10.4142136 6.25,10 C6.25,9.58578644 6.58578644,9.25 7,9.25 Z M7.5,3 L7.5,8 L6.5,8 L6.5,3 L7.5,3 Z M7,1 C10.3,1 13,3.7 13,7 C13,10.3 10.3,13 7,13 C3.7,13 1,10.3 1,7 C1,3.7 3.7,1 7,1 L7,1 Z M7,0 C3.15,0 0,3.15 0,7 C0,10.85 3.15,14 7,14 C10.85,14 14,10.85 14,7 C14,3.15 10.85,0 7,0 L7,0 Z" transform="matrix(1 0 0 -1 1 15)"/>
            </svg>
          <strong>Default</strong>
          <!-- TODO: right now this HAS to be a strong in a p -->
          <!-- How can we make this less opinionated? -->
        </p>
        <p>The Icon Content Patterns allow for an SVG Icon to be used like a bullet on a heading. Paragraphs and any other content under that heading become indented to match the indent of the heading text.</p>
        <p>In responsive mobile, left padding collapses.</p>
      </div>

      <div class="icon-pattern-container">
        <p class="icon-pattern-heading">
          <svg viewBox="0 0 16 16" title="Information">
            <path d="M7,9.25 C7.41421356,9.25 7.75,9.58578644 7.75,10 C7.75,10.4142136 7.41421356,10.75 7,10.75 C6.58578644,10.75 6.25,10.4142136 6.25,10 C6.25,9.58578644 6.58578644,9.25 7,9.25 Z M7.5,3 L7.5,8 L6.5,8 L6.5,3 L7.5,3 Z M7,1 C10.3,1 13,3.7 13,7 C13,10.3 10.3,13 7,13 C3.7,13 1,10.3 1,7 C1,3.7 3.7,1 7,1 L7,1 Z M7,0 C3.15,0 0,3.15 0,7 C0,10.85 3.15,14 7,14 C10.85,14 14,10.85 14,7 C14,3.15 10.85,0 7,0 L7,0 Z" transform="matrix(1 0 0 -1 1 15)"/>
            </svg>
          <span>The Icon Content pattern can also apply to a single-line span or paragraph.</span>
        </p>
      </div>

      <div class="icon-pattern-container small small-leading small-margin">
        <p class="icon-pattern-heading">
          <svg viewBox="0 0 16 16" title="Information">
            <path d="M7,9.25 C7.41421356,9.25 7.75,9.58578644 7.75,10 C7.75,10.4142136 7.41421356,10.75 7,10.75 C6.58578644,10.75 6.25,10.4142136 6.25,10 C6.25,9.58578644 6.58578644,9.25 7,9.25 Z M7.5,3 L7.5,8 L6.5,8 L6.5,3 L7.5,3 Z M7,1 C10.3,1 13,3.7 13,7 C13,10.3 10.3,13 7,13 C3.7,13 1,10.3 1,7 C1,3.7 3.7,1 7,1 L7,1 Z M7,0 C3.15,0 0,3.15 0,7 C0,10.85 3.15,14 7,14 C10.85,14 14,10.85 14,7 C14,3.15 10.85,0 7,0 L7,0 Z" transform="matrix(1 0 0 -1 1 15)"/>
            </svg>
          <strong>Variants</strong>
        </p>
        <p>Use the class <code class="small">.small</code> to get a smaller alternative 0.875rem (14px) font size.</p>
        <p>Use the class <code class="small">.small-leading</code> to get a smaller alternative 0.5rem (8px) leading.</p>
        <p>Use the class <code>.small-margin</code> to reduce the left mergin, like on mobile styles.</p>
      </div>
    </div>

    <hr />

    <h3>Icon Content Within a Notice</h3>
    <p>Our Notices are designed to display a small amount of information. They work well with a single instance of <code>icon-pattern-container</code>.</p>

    <div class="notice">
      <div class="icon-pattern-container">
        <p class="icon-pattern-heading">
          <svg viewBox="0 0 16 16" title="Information">
            <path d="M7,9.25 C7.41421356,9.25 7.75,9.58578644 7.75,10 C7.75,10.4142136 7.41421356,10.75 7,10.75 C6.58578644,10.75 6.25,10.4142136 6.25,10 C6.25,9.58578644 6.58578644,9.25 7,9.25 Z M7.5,3 L7.5,8 L6.5,8 L6.5,3 L7.5,3 Z M7,1 C10.3,1 13,3.7 13,7 C13,10.3 10.3,13 7,13 C3.7,13 1,10.3 1,7 C1,3.7 3.7,1 7,1 L7,1 Z M7,0 C3.15,0 0,3.15 0,7 C0,10.85 3.15,14 7,14 C10.85,14 14,10.85 14,7 C14,3.15 10.85,0 7,0 L7,0 Z" transform="matrix(1 0 0 -1 1 15)"/>
            </svg>
          <strong>Default</strong>
        </p>
        <p>The Icon Content Patterns allow for an SVG Icon to be used like a bullet on a heading. Paragraphs and any other content under that heading become indented to match the indent of the heading text.</p>
        <p>In responsive mobile, left padding collapses.</p>
      </div>
    </div>

    <div class="notice">
      <div class="icon-pattern-container">
        <p class="icon-pattern-heading">
          <svg viewBox="0 0 16 16" title="Information">
            <path d="M7,9.25 C7.41421356,9.25 7.75,9.58578644 7.75,10 C7.75,10.4142136 7.41421356,10.75 7,10.75 C6.58578644,10.75 6.25,10.4142136 6.25,10 C6.25,9.58578644 6.58578644,9.25 7,9.25 Z M7.5,3 L7.5,8 L6.5,8 L6.5,3 L7.5,3 Z M7,1 C10.3,1 13,3.7 13,7 C13,10.3 10.3,13 7,13 C3.7,13 1,10.3 1,7 C1,3.7 3.7,1 7,1 L7,1 Z M7,0 C3.15,0 0,3.15 0,7 C0,10.85 3.15,14 7,14 C10.85,14 14,10.85 14,7 C14,3.15 10.85,0 7,0 L7,0 Z" transform="matrix(1 0 0 -1 1 15)"/>
            </svg>
          <span>The Icon Content pattern can also apply to a single-line span or paragraph.</span>
        </p>
      </div>
    </div>

    <div class="notice">
      <div class="icon-pattern-container small small-leading small-margin">
        <p class="icon-pattern-heading">
          <svg viewBox="0 0 16 16" title="Information">
            <path d="M7,9.25 C7.41421356,9.25 7.75,9.58578644 7.75,10 C7.75,10.4142136 7.41421356,10.75 7,10.75 C6.58578644,10.75 6.25,10.4142136 6.25,10 C6.25,9.58578644 6.58578644,9.25 7,9.25 Z M7.5,3 L7.5,8 L6.5,8 L6.5,3 L7.5,3 Z M7,1 C10.3,1 13,3.7 13,7 C13,10.3 10.3,13 7,13 C3.7,13 1,10.3 1,7 C1,3.7 3.7,1 7,1 L7,1 Z M7,0 C3.15,0 0,3.15 0,7 C0,10.85 3.15,14 7,14 C10.85,14 14,10.85 14,7 C14,3.15 10.85,0 7,0 L7,0 Z" transform="matrix(1 0 0 -1 1 15)"/>
            </svg>
          <strong>Variants</strong>
        </p>
        <p>Use the class <code class="small">.small</code> to get a smaller alternative 0.875rem (14px) font size.</p>
        <p>Use the class <code class="small">.small-leading</code> to get a smaller alternative 0.5rem (8px) leading.</p>
        <p>Use the class <code>.small-margin</code> to reduce the left mergin, like on mobile styles.</p>
      </div>
    </div>
  </article>
</template>


<style lang="scss" scoped>
  code.small {
    font-size: 0.875rem;
  }
</style>