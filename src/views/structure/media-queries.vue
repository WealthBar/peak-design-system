<template>
  <article class="container">
    <header>
      <h1>Layout Structures — Media Queries</h1>
    </header>
    <section>
      <p>Media queries are used to ensure consisent behaviour for UI across various screen sizes.</p>
      <p>As a general rule all UI is built using the <strong>Mobile First</strong> philosophy - meaning the default size is mobile and changes to the design and layout are made as the browser window embiggins. This gives us the benefit of ensuring that the layout remains consistent across the largest gamut of window sizes possible and dosen't actively target any specific screen resolution.</p>
      <p>Peak Media Queries co-relate to the pre-defined width size variables that effect <router-link to="/structure/containers">Containers</router-link>, <router-link to="/layout/card">Cards</router-link> and various other block element with the system. <router-link to="/layout/card">Cards</router-link> and <router-link to="/modals">Modals</router-link> even use the predefined media queries to ensure proper formatting.</p>
    </section>
    <section>
      <header><h3>Peak Media Query Variables</h3></header>
      <pre><code class="language-scss">$screen-width-small: 'screen and (min-width: 32rem)';
$screen-width-medium: 'screen and (min-width: 48rem)';
$screen-width-large: 'screen and (min-width: 64rem)';
$screen-width-xlarge: 'screen and (min-width: 80rem)';

$screen-max-small: 'screen and (max-width: 47.999rem)'; // use sparingly - used only to detect small screens</code></pre>
    </section>
    <header><h3>Basic Example</h3></header>
    <section class="example">
      <div class="card shadow mq-example">
        <article>
          <p>This text will be <strong>Secondary Colour</strong> on small screens and <strong>Neg Colour</strong> on large screens. The box will change colour at every break point — try resizing the browser window!</p>
        </article>
      </div>
    </section>
    <div class="code-sample">
      <strong>Markup</strong>
      <pre><code class="language-scss">.mq-example {
  color: $black;
  @media #{$screen-width-small} {color: $secondary; }
  @media #{$screen-width-medium} { color: $tertiary; }
  @media #{$screen-width-large} {color: $pos; }
  @media #{$screen-width-xlarge} { color: $neg; }
  }
}</code></pre>
    </div>
  </article>
</template>

<script>
import 'prismjs/components/prism-scss';

export default { };
</script>

<style lang="scss" scoped>
  .card { margin-bottom: 1rem; }
  .mq-example {
    color: $black;
    @media #{$screen-width-small} {
      color: $secondary-500;
      border-color: $secondary-500;
      background-color: $secondary-50;
    }
    @media #{$screen-width-medium} {
      color: $tertiary-300;
      border-color: $tertiary-300;
      background-color: $tertiary-50;
    }
    @media #{$screen-width-large} {
      color: $pos;
      border-color: $pos;
      background-color: $pos-50;
    }
    @media #{$screen-width-xlarge} {
      color: $neg;
      border-color: $neg;
      background-color: $neg-50;
    }
  }
</style>
