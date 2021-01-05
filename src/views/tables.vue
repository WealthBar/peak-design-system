<template>
  <article class="container">
    <h1>Tables</h1>
    <p>The basic <code>&lt;table&gt;</code> defaults to unstyled.</p>
    <ul class="bullet">
      <li><strong><a href="#card-table">Card Table</a></strong> – <code>&lt;table class="card"&gt;</code> — general purpose user facing table.</li>
      <li><strong><a href="#data-table">Data Table</a></strong> – <code>&lt;table class="data-table"&gt;</code> – table for staff facing UI designed for larger data sets.</li>
      <li><strong><a href="#data-list">Data List</a></strong> – <code>&lt;dl class="data-list"&gt;</code> — definition list for staff facing UI designed for key-value pairings.</li>
    </ul>
    <hr />
    <section id="card-table">
      <h2>Card Table</h2>
      <p>Peak's <code>table.card</code> style is designed for flexibility. As such, it's not opinionated about layout but instead simply provides some visual treatment.</p>
      <p>Generally, our table designs call for a box-shadow style. To achieve this, use the card's optional <code>.shadow</code> class.</p>
      <table class="card shadow example">
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
      <pre><code class="language-markup">&lt;table class='card shadow'&gt;
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
      <table class="card shadow example">
        <thead>
          <tr>
            <th class="center">Liquid</th>
            <th class="right">Price / Litre</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="center">Gasoline</td>
            <td class="right tab-numbers">$1.33</td>
          </tr>
          <tr>
            <td class="center">16 Year Aged Aberfeldy Single Malt Scotch Whisky</td>
            <td class="right tab-numbers">$139.99</td>
          </tr>
          <tr>
            <td class="center">Hewlett-Packard 61 Black Ink</td>
            <td class="right tab-numbers">$6,998.75</td>
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
      <table class="card shadow example">
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Can of Pabst Blue Ribbon</td>
            <td class="tab-numbers">$3.25</td>
          </tr>
          <tr>
            <td>Fixed-Gear Bicycle</td>
            <td class="tab-numbers">$200.00</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>Sense of Smug Satisfaction</td>
            <td class="tab-numbers">Priceless</td>
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
      <p>To link an entire row, simply use an <code>&lt;a&gt;</code> with <code>role='row'</code> instead of a <code>&lt;tr&gt;</code>. This 'link row' will be given larger padding and a more prominent hover colour. To complete the effect, apply the class <code>.link-row-target</code> to the string that best communicates the destination of the link.</p>
      <table class="card shadow example">
        <thead>
          <tr>
            <th>Language</th>
            <th>Paradigm</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          <a role="row" href="http://www.ecma-international.org" target="_blank">
            <td>JavaScript</td>
            <td>Functional</td>
            <td class="link-row-target">ecma-international.org</td>
          </a>
          <a role="row" href="https://www.postgresql.org" target="_blank">
            <td>PostgreSQL</td>
            <td>Declarative</td>
            <td class="link-row-target">postgresql.org</td>
          </a>
          <a role="row" href="https://golang.org" target="_blank">
            <td>Go</td>
            <td>Multi-paradigm</td>
            <td class="link-row-target">golang.org</td>
          </a>
        </tbody>
      </table>
      <pre><code class="language-markup">&lt;a role='row' href='golang.org'&gt;
  &lt;td&gt;Go&lt;/td&gt;
  &lt;td class='link-row-target'&gt;golang.org&lt;/td&gt;
&lt;/a&gt;</code></pre>

      <h3>Small Text</h3>
      <p>Tables can be given a smaller text-size in case they need to be more compact on the page. Simply add the class <code>.small</code>.</p>
      <table class="card shadow small example">
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
      <pre><code class="language-markup">&lt;table class='card shadow small'&gt;
  // table content, just like the 'default' example
&lt;/table&gt;</code></pre>

      <h3>Large Row Padding</h3>
      <p>For more information-dense and/or click-able rows, a thicker top &amp; bottom cell padding may be necessary. Simply add the class <code>.pad</code>.</p>
      <table class="card shadow pad example">
        <thead>
          <tr>
            <th>Padding Variant</th>
            <th>Size in Rem</th>
            <th>Size in Pixels</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Default</td>
            <td>0.5rem</td>
            <td>8px</td>
          </tr>
          <tr>
            <td>Large</td>
            <td>0.75rem</td>
            <td>12px</td>
          </tr>
        </tbody>
      </table>
      <pre><code class="language-markup">&lt;table class='card shadow pad'&gt;
  // table content, just like the 'default' example
&lt;/table&gt;</code></pre>
    </section>
    <hr />
    <section id="data-table">
      <h2>Data Table</h2>
    </section>
    <hr />
    <section id="data-list">
      <h2>Data list</h2>
    </section>
  </article>
</template>

<style lang="scss" scoped>
  #table {
    .example {
      margin-bottom: 1rem;
    }
  }
</style>
