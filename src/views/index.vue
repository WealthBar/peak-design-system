<template>
  <article>
    <section class="container">
      <h1>Welcome to Peak!</h1>
      <p>Peak has been desinged from the <code>&lt;html&gt;</code> up (down?) to be a scalable, modular, design system for use on any WealthBar web product. Peak's structure is broken down into three distict areas of funcionality:</p>
      <ul class="bullet">
        <li><strong>Base</strong><span> - Basic document setup, includes features usch as typography, colour, and element styling (<code>&lt;a&gt;</code>, <code>&lt;button&gt;</code>, <code>&lt;input&gt;</code>, etc).</span></li>
        <li><strong>Patterns</strong><span> - Commonly used patterns for variants, composition, and layout. These are often provided as classes to be appled to elements (eg: <code>&lt;a class="alt"&gt;</code>).</span></li>
        <li><strong>Components</strong><span> - Javascript based components (likely Vue or framework dependent) that expand base functionality and interactivity built for reuse. For now these components are located within our working repos — in the future would be served as NPM packages.</span></li>
      </ul>
      <h2 id="units">Units in Peak: use rem!</h2>
      <p>
        We use rems (Relative EMs) to ensure our typography stays scalable in a responsive web world. Peak's base unit of measure is
        <code>1rem</code> ==
        <code class="alt">16px</code>. Too put it another way
        <strong>2px is equal to 0.125rem</strong>, or
        <strong>1/8 of a rem</strong>. Ideally we want to adhire to this 1/8th rem scale as much as possible.
      </p>
      <p>Here's some additional notes to keep in mind:</p>
      <ul class="bullet">
        <li>
          Use
          <strong>1/4 rem increments</strong> (
          <code>0</code> -
          <code>0.25</code> -
          <code>0.5</code> -
          <code>0.75</code> -
          <code>1</code>) when possible.
        </li>
        <li>
          Always use rems for
          <code>padding</code> and
          <code>margin</code>.
        </li>
        <li>
          Opt for rems as sizing for
          <code>svg</code> &amp;
          <code>img</code> when possible.
        </li>
        <li>
          Use pixels for anything smaller then
          <code>0.125rem</code>. Eg:
          <code class="alt">1px</code> for hairline borders.
        </li>
      </ul>
      <table class="convert">
        <th colspan="9">
          <h4 class="no-margin">PX to REM conversion chart</h4>
        </th>
        <tr>
          <td>
            <code class="alt">px</code>
          </td>
          <td>
            <code class="alt">2</code>
          </td>
          <td>
            <code class="alt">4</code>
          </td>
          <td>
            <code class="alt">6</code>
          </td>
          <td>
            <code class="alt">8</code>
          </td>
          <td>
            <code class="alt">10</code>
          </td>
          <td>
            <code class="alt">12</code>
          </td>
          <td>
            <code class="alt">14</code>
          </td>
          <td>
            <code class="alt">16</code>
          </td>
        </tr>
        <tr>
          <td>
            <code>rem</code>
          </td>
          <td>
            <code>0.125</code>
          </td>
          <td>
            <code>0.25</code>
          </td>
          <td>
            <code>0.375</code>
          </td>
          <td>
            <code>0.5</code>
          </td>
          <td>
            <code>0.625</code>
          </td>
          <td>
            <code>0.75</code>
          </td>
          <td>
            <code>0.875</code>
          </td>
          <td>
            <code>1</code>
          </td>
        </tr>
      </table>
      <h3>Example</h3>
      <pre class="language-css"><code>.my-style {
      height: 4.5rem;
      width: 3.875rem;
      margin: 2.75rem 1.125rem;
      border: 1px solid black;
    }</code></pre>
    </section>
  </article>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
article {
  background-image: url('../assets/homepage-bkg.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  padding: 0 2rem;
}
section {
  margin: 2rem auto;
  background: rgba($neutral-0, 0.9);
  padding-bottom: 2rem;
  border: 1px solid $neutral-300;
  border-radius: 0.25rem;
  display: flex;
  flex-direction: column;
}

.convert {
  width: 100%;
  margin: 0 0 1rem;
  @media #{$screen-width-medium} {
    table-layout: fixed;
  }
  h4 {
    text-align: left;
  }
  td {
    text-align: center;
    padding: 0.125rem;
  }
  code {
    display: block;
    padding: 0.125rem;
  }
}
</style>
