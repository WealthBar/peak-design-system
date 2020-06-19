<template>
  <article class="container">
    <section>
      <h1>Banners</h1>

      <p>
        Banners are made up of the main .banner class, and can be extended with different variants.
      </p>

      <ol>
        <li>flat</li>
        <li>modal-page-banner</li>
      </ol>
    </section>

    <section>
      <h3>Banner</h3>

      <div class="banner">
        <div class="banner-content">
          <h5 class="banner-title">Test title</h5>

          <div class="banner-actions">
            <button type="button" class="flat action" icon>close</button>
          </div>
        </div>
      </div>

      <div class="code-sample">
        <pre>
          <code class="language-markup">&lt;div class="banner"&gt;
  &lt;div class="banner-content"&gt;
    &lt;h5 class="banner-title"&gt;Test title&lt;/h5&gt;

    &lt;div class="banner-actions"&gt;
      &lt;button type="button" class="flat" icon&gt;close&lt;/button&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code>
        </pre>
      </div>
    </section>

    <section>
      <h3>Modal Page Banner</h3>

      <div class="banner modal-page-banner">
        <div class="banner-content">
          <h5 class="banner-title">Test title</h5>

          <div class="banner-actions">
            <button type="button" class="flat action" icon>close</button>
          </div>
        </div>
      </div>

      <div class="code-sample">
        <pre>
          <code class="language-markup">&lt;div class="banner modal-page-banner"&gt;
  &lt;div class="banner-content"&gt;
    &lt;h5 class="banner-title"&gt;Test title&lt;/h5&gt;

    &lt;div class="banner-actions"&gt;
      &lt;button type="button" class="flat" icon&gt;close&lt;/button&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code>
        </pre>
      </div>
    </section>
  </article>
</template>

<script>
export default { };
</script>
