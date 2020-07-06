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

    <hr>

    <!-- TABLE -->
    <section id="table">
      <h2>Table</h2>
      <p>Peak provides style for the <code>&lt;table&gt;</code> element</p>

      <h3>Default</h3>
      <p>Peak's table style is designed for flexibility. As such, it's not opinionated about layout but instead simply provides some visual treatment.</p>
      <p>Generally, our table designs call for a box-shadow style. To achieve this, use the optional <code>.shadow</code> class.</p>
      <table class='shadow example'>
        <thead>
          <tr>
            <th>Mountain</th>
            <th>Peak Elevation</th>
            <th>Avg. Grade</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Cypress</td>
            <td>897 m</td>
            <td>5.6%</td>
          </tr>
          <tr>
            <td>Grouse</td>
            <td>239 m (to end of pavement)</td>
            <td>5%</td>
          </tr>
          <tr>
            <td>Seymour</td>
            <td>987 m</td>
            <td>7%</td>
          </tr>
        </tbody>
      </table>
      <pre><code class="language-markup">&lt;table class='shadow'&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;th&gt;Mountain&lt;/th&gt;
      &lt;th&gt;Elevation&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;td&gt;Cypress&lt;/td&gt;
      &lt;td&gt;897 m&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td&gt;Grouse&lt;/td&gt;
      &lt;td&gt;239 m&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;</code></pre>

      <h3>Text Alignment</h3>
      <p>Peak has global <code>.center</code> and <code>.right</code> classes, use these to specify alternative text-alignment on a column.</p>
      <table class='shadow example'>
        <thead>
          <tr>
            <th class='center'>Liquid</th>
            <th class='right'>Price / Litre</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class='center'>Gasoline</td>
            <td class='right tab-numbers'>$1.33</td>
          </tr>
          <tr>
            <td class='center'>16 Year Aged Aberfeldy Single Malt Scotch Whisky</td>
            <td class='right tab-numbers'>$139.99</td>
          </tr>
          <tr>
            <td class='center'>Hewlett-Packard 61 Black Ink</td>
            <td class='right tab-numbers'>$6,998.75</td>
          </tr>
        </tbody>
      </table>
      <pre><code class="language-markup">&lt;tr&gt; // or th, that works too
  &lt;td class='center'&gt;Gas&lt;/td&gt;
  &lt;td class='right tab-numbers'&gt;$1.33&lt;/td&gt;
&lt;/tr&gt;</code></pre>

      <h3>Total Row</h3>
      <p>Use a <code>&lt;tfoot&gt;</code> to create nice bold 'total' or 'summary' rows.</p>
      <p>Peak has a global <code>.strong</code> class in case you just need single bold cell.</p>
      <table class='shadow example'>
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Can of Pabst Blue Ribbon</td>
            <td class='tab-numbers'>$3.25</td>
          </tr>
          <tr>
            <td>Fixed-Gear Bicycle</td>
            <td class='tab-numbers'>$200.00</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>Sense of Smug Satisfaction</td>
            <td class='tab-numbers'>Priceless</td>
          </tr>
        </tfoot>
      </table>
      <pre><code class="language-markup">&lt;tfoot&gt;
  &lt;tr&gt;
    &lt;td&gt;Smug Satisfaction&lt;/td&gt;
    &lt;td&gt;Priceless&lt;/td&gt;
  &lt;/tr&gt;
&lt;/tfoot&gt;</code></pre>

      <h3>Hyperlinked Rows</h3>
      <p>If you are putting links in a table, link the entire row and apply the class <code>.link-row</code> to get rows with larger padding and a more prominent hover colour. Also, apply the class <code>.link-row-target</code> to the string that best communicates the destination of the link.</p>
      <table class='shadow example'>
        <thead>
          <tr>
            <th>Language</th>
            <th>Paradigm</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          <tr class='link-row'>
            <td>JavaScript</td>
            <td>Functional</td>
            <td class='link-row-target'>ecma-international.org</td>
          </tr>
          <tr class='link-row'>
            <td>PostgreSQL</td>
            <td>Declarative</td>
            <td class='link-row-target'>postgresql.org</td>
          </tr>
          <tr class='link-row'>
            <td>Go</td>
            <td>Multi-paradigm</td>
            <td class='link-row-target'>golang.org</td>
          </tr>
        </tbody>
      </table>
      <pre><code class="language-markup">&lt;tr class='link-row' @click='handleLinkClick'&gt;
  &lt;td&gt;Go&lt;/td&gt;
  &lt;td class='link-row-target'&gt;golang.org&lt;/td&gt;
&lt;/tr&gt;</code></pre>

      <h3>Small Text</h3>
      <p>Tables can be given a smaller text-size in case they need to be more compact on the page. Simply add the class <code>.text-small</code></p>
      <table class='shadow text-small example'>
        <thead>
          <tr>
            <th>Text Variant</th>
            <th>Size in Rem</th>
            <th>Size in Pixels</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Default</td>
            <td>1rem</td>
            <td>16px</td>
          </tr>
          <tr>
            <td>Small</td>
            <td>0.875rem</td>
            <td>14px</td>
          </tr>
        </tbody>
      </table>
      <pre><code class="language-markup">&lt;table class='shadow text-small'&gt;
  // table content, just like the 'default' example
&lt;/table&gt;</code></pre>

    </section>
    <!-- TABLE END -->
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

  #table {
    .example {
      margin-bottom: 1rem;
    }
  }
</style>
