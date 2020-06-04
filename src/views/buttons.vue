<template>
  <article class="container">
    <h1>Links &amp; Buttons</h1>
    <section>
      <h3>Usage Guidelines</h3>
      <h4>Choosing Colour</h4>
      <table>
        <thead>
          <th>Colour</th>
          <th>When to choose this colour</th>
        </thead>
        <tr>
          <td>Primary</td>
          <td>
            <p>The most commonly chosen colour</p>
            <p>The default colour choice</p>
          </td>
        </tr>
        <tr>
          <td>Alternate</td>
          <td>
            <p>If the Primary colour cannot be chosen because of visual clashes</p>
            <p>If there is already a Primary button present</p>
          </td>
        </tr>
        <tr>
          <td>Alert</td>
          <td>
            <p>If actions are suggested, or for warnings</p>
          </td>
        </tr>
        <tr>
          <td>Negative</td>
          <td>
            <p>If actions are destructive, such as deleting an invite or removing a photo</p>
            <p>For important CTAs on marketing collateral</p>
          </td>
        </tr>
        <tr>
          <td>Positive</td>
          <td>
            <p>An additive action in direct contrast with destructive actions</p>
          </td>
        </tr>
      </table>
      <h4>Choosing Style</h4>
      <table>
        <thead>
          <th>Style</th>
          <th>When to choose this style</th>
        </thead>
        <tr>
          <td>Primary</td>
          <td>
            <p>For primary actions; the most important, common, and/or encouraged action</p>
            <p>Only use 1 primary button per screen</p>
          </td>
        </tr>
        <tr>
          <td>Outline</td>
          <td>
            <p>For mandatory, but secondary actions</p>
            <p>For actions that aren’t common and/or encouraged, but required</p>
            <p>For example, if there are two options, Agree and Disagree and the former is the expected answer, then Agree would use Primary and Disagree would use Outline</p>
          </td>
        </tr>
        <tr>
          <td>Subtle</td>
          <td>
            <p>For optional actions</p>
            <p>For example, if there are two buttons, <code>Send</code> and <code>Edit</code> for a message and editing it is optional, then <code>Send</code> would use Primary and <code>Edit</code> would use Subtle. If <code>Edit</code> was a mandatory action, then it would use the Outline style instead</p>
          </td>
        </tr>
        <tr>
          <td>Flat</td>
          <td>
            <p>When using a button doesn’t work</p>
            <p>When the screen already has a Primary and Outline button</p>
            <p>Often used for navigation</p>
          </td>
        </tr>
        <tr>
          <td>Unstyled</td>
          <td>
            <p>For button actions that should look like text links</p>
          </td>
        </tr>
      </table>
    </section>
    <section>
      <h3>Links</h3>
      <div class="attributes">
        <strong>Example</strong>
        <div class="example">
          <a href="">Link</a>
          <button>Unstyled Button</button>
          <span class="link">Class Link</span>
        </div>
        <div class="code-sample">
          <strong>Markup</strong>
          <pre><code class="language-markup">&lt;a href=""&gt;Link&lt;/a&gt;
&lt;button&gt;Unstyled Button&lt;/button&gt;
&lt;span class="link"&gt;Class Link&lt;/span&gt;</code></pre>
        </div>
      </div>
      <hr>
    </section>
    <section>
      <h3>Link Variants</h3>
      <div class="attributes">
        <strong>Example</strong>
        <div class="example">
          <a href="">Link</a>
          <a href="" class="alt">Alt Link</a>
          <a href="" class="alert">Alert Link</a>
          <a href="" class="neg">Neg Link</a>
          <a href="" class="pos">Pos Link</a>
          <a href="" class="light">Light Link</a>
          <a href="" class="dark">Dark Link</a>
          <a href="" class="href-plain">No Underline</a>
          <a href="" class="small">Small Link</a>
          <a href="" class="large">Large Link</a>
        </div>
        <div class="code-sample">
          <strong>Markup</strong>
          <pre><code class="language-markup">&lt;a href=""&gt;Link&lt;/a&gt;
&lt;a href="" class="alt"&gt;Alt Link&lt;/a&gt;
&lt;a href="" class="alert"&gt;Alert Link&lt;/a&gt;
&lt;a href="" class="neg"&gt;Neg Link&lt;/a&gt;
&lt;a href="" class="pos"&gt;Pos Link&lt;/a&gt;
&lt;a href="" class="light"&gt;Invert Link&lt;/a&gt;
&lt;a href="" class="dark"&gt;Dark Link&lt;/a&gt;
&lt;a href="" class="href-plain"&gt;No Underline&lt;/a&gt;
&lt;a href="" class="small"&gt;Small Link&lt;/a&gt;
&lt;a href="" class="large"&gt;Large Link&lt;/a&gt;</code></pre>
        </div>
      </div>
      <hr>
    </section>
    <section>
      <h3>Buttons</h3>
      <div class="attributes">
        <strong>Example</strong>
        <div class="example">
          <a href="" class="button">Link</a>
          <span class="button">Span</span>
          <button class="button">Class Button</button>
          <button type="button">Type Button</button>
          <button type="reset">Reset Button</button>
          <button type="submit">Submit Button</button>
        </div>
        <div class="code-sample">
          <strong>Markup</strong>
          <pre><code class="language-markup">&lt;a href="" class="button"&gt;Link&lt;/a&gt;
&lt;span class="button"&gt;Link&lt;/span&gt;
&lt;button class="button"&gt;Class Button&lt;/button&gt;
&lt;button type="button"&gt;Type Button&lt;/button&gt;
&lt;button type="reset"&gt;Reset Button&lt;/button&gt;
&lt;button type="button"&gt;Submit Button&lt;/button&gt;</code></pre>
        </div>
      </div>
      <hr>
    </section>
    <section id="primary">
      <h3>Primary Buttons</h3>
      <div class="attributes">
        <strong>Example</strong>
        <div class="example">
          <button>Unstyled</button>
          <button type="button">Fill</button>
          <button type="button" class="outline">Outline</button>
          <button type="button" class="flat">Flat</button>
          <button type="button" class="subtle">Subtle</button>
        </div>
        <div class="code-sample">
          <strong>Markup</strong>
          <pre><code class="language-markup">&lt;button&gt;Unstyled&lt;/button&gt;
&lt;button type="button"&gt;Fill&lt;/button&gt;
&lt;button type="button" class="outline"&gt;Outline&lt;/button&gt;
&lt;button type="button" class="flat"&gt;Flat&lt;/button&gt;
&lt;button type="button" class="subtle"&gt;Subtle&lt;/button&gt;</code></pre>
        </div>
      </div>
      <hr>
    </section>

    <section id="alternate">
      <h3>Alternate Buttons</h3>
      <div class="attributes">
        <strong>Example</strong>
        <div class="example">
          <button class="alt">Unstyled</button>
          <button type="button" class="alt">Fill</button>
          <button type="button" class="outline alt">Outline</button>
          <button type="button" class="flat alt">Flat</button>
          <button type="button" class="subtle alt">Subtle</button>
        </div>
        <div class="code-sample">
          <strong>Markup</strong>
          <pre><code class="language-markup">&lt;button class="alt"&gt;Unstyled&lt;/button&gt;
&lt;button type="button" class="alt"&gt;Fill&lt;/button&gt;
&lt;button type="button" class="outline alt"&gt;Outline&lt;/button&gt;
&lt;button type="button" class="flat alt"&gt;Flat&lt;/button&gt;
&lt;button type="button" class="subtle alt"&gt;Subtle&lt;/button&gt;</code></pre>
        </div>
      </div>
      <hr>
    </section>

    <section id="alert">
      <h3>Alert Buttons</h3>
      <div class="attributes">
        <strong>Example</strong>
        <div class="example">
          <button class="alert">Unstyled</button>
          <button type="button" class="alert">Fill</button>
          <button type="button" class="outline alert">Outline</button>
          <button type="button" class="flat alert">Flat</button>
          <button type="button" class="subtle alert">Subtle</button>
        </div>
        <div class="code-sample">
          <strong>Markup</strong>
          <pre><code class="language-markup">&lt;button class="alert"&gt;Unstyled&lt;/button&gt;
&lt;button type="button" class="alert"&gt;Fill&lt;/button&gt;
&lt;button type="button" class="outline alert"&gt;Outline&lt;/button&gt;
&lt;button type="button" class="flat alert"&gt;Flat&lt;/button&gt;
&lt;button type="button" class="subtle alert"&gt;Subtle&lt;/button&gt;</code></pre>
        </div>
      </div>
      <hr>
    </section>

    <section id="negative">
      <h3>Negative Buttons</h3>
      <div class="attributes">
        <strong>Example</strong>
        <div class="example">
          <button class="neg">Unstyled</button>
          <button type="button" class="neg">Fill</button>
          <button type="button" class="outline neg">Outline</button>
          <button type="button" class="flat neg">Flat</button>
          <button type="button" class="subtle neg">Subtle</button>
        </div>
        <div class="code-sample">
          <strong>Markup</strong>
          <pre><code class="language-markup">&lt;button class="neg"&gt;Unstyled&lt;/button&gt;
&lt;button type="button" class="neg"&gt;Fill&lt;/button&gt;
&lt;button type="button" class="outline neg"&gt;Outline&lt;/button&gt;
&lt;button type="button" class="flat neg"&gt;Flat&lt;/button&gt;
&lt;button type="button" class="subtle neg"&gt;Subtle&lt;/button&gt;</code></pre>
        </div>
      </div>
      <hr>
    </section>

    <section id="positive">
      <h3>Positive Buttons</h3>
      <div class="attributes">
        <strong>Example</strong>
        <div class="example">
          <button class="pos">Unstyled</button>
          <button type="button" class="pos">Fill</button>
          <button type="button" class="outline pos">Outline</button>
          <button type="button" class="flat pos">Flat</button>
          <button type="button" class="subtle pos">Subtle</button>
        </div>
        <div class="code-sample">
          <strong>Markup</strong>
          <pre><code class="language-markup">&lt;button class="pos"&gt;Unstyled&lt;/button&gt;
&lt;button type="button" class="pos"&gt;Fill&lt;/button&gt;
&lt;button type="button" class="outline pos"&gt;Outline&lt;/button&gt;
&lt;button type="button" class="flat pos"&gt;Flat&lt;/button&gt;
&lt;button type="button" class="subtle pos"&gt;Subtle&lt;/button&gt;</code></pre>
        </div>
      </div>
      <hr>
    </section>

    <section id="dark">
      <h3>Dark Buttons</h3>
      <div class="attributes">
        <strong>Example</strong>
        <div class="example">
          <button class="dark">Unstyled</button>
          <button type="button" class="dark">Fill</button>
          <button type="button" class="outline dark">Outline</button>
          <button type="button" class="flat dark">Flat</button>
          <button type="button" class="subtle dark">Subtle</button>
        </div>
        <div class="code-sample">
          <strong>Markup</strong>
          <pre><code class="language-markup">&lt;button class="dark"&gt;Unstyled&lt;/button&gt;
&lt;button type="button" class="dark"&gt;Fill&lt;/button&gt;
&lt;button type="button" class="outline dark"&gt;Outline&lt;/button&gt;
&lt;button type="button" class="flat dark"&gt;Flat&lt;/button&gt;
&lt;button type="button" class="subtle dark"&gt;Subtle&lt;/button&gt;</code></pre>
        </div>
      </div>
      <hr>
    </section>

    <section id="light">
      <h3>Light Buttons</h3>
      <div class="attributes">
        <strong>Example</strong>
        <div class="example dark">
          <button class="light">Unstyled</button>
          <button type="button" class="light">Fill</button>
          <button type="button" class="outline light">Outline</button>
          <button type="button" class="flat light">Flat</button>
          <button type="button" class="subtle light">Subtle</button>
        </div>
        <div class="code-sample">
          <strong>Markup</strong>
          <pre><code class="language-markup">&lt;button class="light"&gt;Unstyled&lt;/button&gt;
&lt;button type="button" class="light"&gt;Fill&lt;/button&gt;
&lt;button type="button" class="outline light"&gt;Outline&lt;/button&gt;
&lt;button type="button" class="flat light"&gt;Flat&lt;/button&gt;
&lt;button type="button" class="subtle light"&gt;Subtle&lt;/button&gt;</code></pre>
        </div>
      </div>
      <hr>
    </section>

    <section id="icon">
      <h3>Icon Buttons</h3>
      <div class="attributes">
        <h4>Default</h4>
        <strong>Example</strong>
        <div class="example">
          <button class="icon">
            <svg viewBox="0 0 32 32">
              <polygon points="28,15 8.9,15 19.2,4.7 17.8,3.3 5.1,16 17.8,28.7 19.2,27.3 8.9,17 28,17"/>
            </svg>
          </button>
          <button type="button" class="icon">
            <svg viewBox="0 0 32 32">
              <polygon points="28,15 8.9,15 19.2,4.7 17.8,3.3 5.1,16 17.8,28.7 19.2,27.3 8.9,17 28,17"/>
            </svg>
          </button>
          <button type="button" class="outline icon">
            <svg viewBox="0 0 32 32">
              <polygon points="28,15 8.9,15 19.2,4.7 17.8,3.3 5.1,16 17.8,28.7 19.2,27.3 8.9,17 28,17"/>
            </svg>
          </button>
          <button type="button" class="flat icon">
            <svg viewBox="0 0 32 32">
              <polygon points="28,15 8.9,15 19.2,4.7 17.8,3.3 5.1,16 17.8,28.7 19.2,27.3 8.9,17 28,17"/>
            </svg>
          </button>
          <button type="button" class="subtle icon">
            <svg viewBox="0 0 32 32">
              <polygon points="28,15 8.9,15 19.2,4.7 17.8,3.3 5.1,16 17.8,28.7 19.2,27.3 8.9,17 28,17"/>
            </svg>
          </button>
        </div>
        <div class="code-sample">
          <strong>Markup</strong>
          <pre><code class="language-markup">&lt;button class="icon"&gt;Unstyled&lt;svg&gt;&hellip;&lt;svg&gt;&lt;/button&gt;
&lt;button type="button" class="icon"&gt;Fill&lt;svg&gt;&hellip;&lt;svg&gt;&lt;/button&gt;
&lt;button type="button" class="icon outline"&gt;Outline&lt;svg&gt;&hellip;&lt;svg&gt;&lt;/button&gt;
&lt;button type="button" class="icon flat"&gt;Flat&lt;svg&gt;&hellip;&lt;svg&gt;&lt;/button&gt;
&lt;button type="button" class="icon subtle"&gt;Subtle&lt;svg&gt;&hellip;&lt;svg&gt;&lt;/button&gt;</code></pre>
        </div>
        <hr>
        <h4>Circle</h4>
        <strong>Example</strong>
        <div class="example">
          <button class="icon circle">
            <svg viewBox="0 0 32 32">
              <polygon points="28,15 8.9,15 19.2,4.7 17.8,3.3 5.1,16 17.8,28.7 19.2,27.3 8.9,17 28,17"/>
            </svg>
          </button>
          <button type="button" class="icon circle">
            <svg viewBox="0 0 32 32">
              <polygon points="28,15 8.9,15 19.2,4.7 17.8,3.3 5.1,16 17.8,28.7 19.2,27.3 8.9,17 28,17"/>
            </svg>
          </button>
          <button type="button" class="outline icon circle">
            <svg viewBox="0 0 32 32">
              <polygon points="28,15 8.9,15 19.2,4.7 17.8,3.3 5.1,16 17.8,28.7 19.2,27.3 8.9,17 28,17"/>
            </svg>
          </button>
          <button type="button" class="flat icon circle">
            <svg viewBox="0 0 32 32">
              <polygon points="28,15 8.9,15 19.2,4.7 17.8,3.3 5.1,16 17.8,28.7 19.2,27.3 8.9,17 28,17"/>
            </svg>
          </button>
          <button type="button" class="subtle icon circle">
            <svg viewBox="0 0 32 32">
              <polygon points="28,15 8.9,15 19.2,4.7 17.8,3.3 5.1,16 17.8,28.7 19.2,27.3 8.9,17 28,17"/>
            </svg>
          </button>
        </div>
        <div class="code-sample">
          <strong>Markup</strong>
          <pre><code class="language-markup">&lt;button class="icon circle"&gt;Unstyled&lt;svg&gt;&hellip;&lt;svg&gt;&lt;/button&gt;
&lt;button type="button" class="icon circle"&gt;Fill&lt;svg&gt;&hellip;&lt;svg&gt;&lt;/button&gt;
&lt;button type="button" class="icon outline circle"&gt;Outline&lt;svg&gt;&hellip;&lt;svg&gt;&lt;/button&gt;
&lt;button type="button" class="icon flat circle"&gt;Flat&lt;svg&gt;&hellip;&lt;svg&gt;&lt;/button&gt;
&lt;button type="button" class="icon subtle circle"&gt;Subtle&lt;svg&gt;&hellip;&lt;svg&gt;&lt;/button&gt;</code></pre>
        </div>
        <hr>
        <h4>Icon After</h4>
        <strong>Example</strong>
        <div class="example">
          <button class="icon after">
            Unstyled
            <svg viewBox="0 0 32 32">
              <polygon points="14.2,3.3 12.8,4.7 23.1,15 4,15 4,17 23.1,17 12.8,27.3 14.2,28.7 26.9,16"/>
            </svg>
          </button>
          <button type="button" class="icon after">
            Fill
            <svg viewBox="0 0 32 32">
              <polygon points="14.2,3.3 12.8,4.7 23.1,15 4,15 4,17 23.1,17 12.8,27.3 14.2,28.7 26.9,16"/>
            </svg>
          </button>
          <button type="button" class="outline icon after">
            Outline
            <svg viewBox="0 0 32 32">
              <polygon points="14.2,3.3 12.8,4.7 23.1,15 4,15 4,17 23.1,17 12.8,27.3 14.2,28.7 26.9,16"/>
            </svg>
          </button>
          <button type="button" class="flat icon after">
            Flat
            <svg viewBox="0 0 32 32">
              <polygon points="14.2,3.3 12.8,4.7 23.1,15 4,15 4,17 23.1,17 12.8,27.3 14.2,28.7 26.9,16"/>
            </svg>
          </button>
          <button type="button" class="subtle icon after">
            Subtle
            <svg viewBox="0 0 32 32">
              <polygon points="14.2,3.3 12.8,4.7 23.1,15 4,15 4,17 23.1,17 12.8,27.3 14.2,28.7 26.9,16"/>
            </svg>
          </button>
        </div>
        <div class="code-sample">
          <strong>Markup</strong>
          <pre><code class="language-markup">&lt;button class="icon after"&gt;Unstyled&lt;svg&gt;&hellip;&lt;svg&gt;&lt;/button&gt;
&lt;button type="button" class="icon after"&gt;Fill&lt;svg&gt;&hellip;&lt;svg&gt;&lt;/button&gt;
&lt;button type="button" class="outline icon after"&gt;Outline&lt;svg&gt;&hellip;&lt;svg&gt;&lt;/button&gt;
&lt;button type="button" class="flat icon after"&gt;Flat&lt;svg&gt;&hellip;&lt;svg&gt;&lt;/button&gt;
&lt;button type="button" class="subtle icon after"&gt;Subtle&lt;svg&gt;&hellip;&lt;svg&gt;&lt;/button&gt;</code></pre>
        </div>
        <hr>
        <h4>Icon Before</h4>
        <strong>Example</strong>
        <div class="example">
          <button class="icon before">
            <svg viewBox="0 0 32 32">
              <polygon points="28,15 8.9,15 19.2,4.7 17.8,3.3 5.1,16 17.8,28.7 19.2,27.3 8.9,17 28,17"/>
            </svg>
            Unstyled
          </button>
          <button type="button" class="icon before">
            <svg viewBox="0 0 32 32">
              <polygon points="28,15 8.9,15 19.2,4.7 17.8,3.3 5.1,16 17.8,28.7 19.2,27.3 8.9,17 28,17"/>
            </svg>
            Fill
          </button>
          <button type="button" class="outline icon before">
            <svg viewBox="0 0 32 32">
              <polygon points="28,15 8.9,15 19.2,4.7 17.8,3.3 5.1,16 17.8,28.7 19.2,27.3 8.9,17 28,17"/>
            </svg>
            Outline
          </button>
          <button type="button" class="flat icon before">
            <svg viewBox="0 0 32 32">
              <polygon points="28,15 8.9,15 19.2,4.7 17.8,3.3 5.1,16 17.8,28.7 19.2,27.3 8.9,17 28,17"/>
            </svg>
            Flat
          </button>
          <button type="button" class="subtle icon before">
            <svg viewBox="0 0 32 32">
              <polygon points="28,15 8.9,15 19.2,4.7 17.8,3.3 5.1,16 17.8,28.7 19.2,27.3 8.9,17 28,17"/>
            </svg>
            Subtle
          </button>
        </div>
        <div class="code-sample">
          <strong>Markup</strong>
          <pre><code class="language-markup">&lt;button class="icon before"&gt;Unstyled&lt;svg&gt;&hellip;&lt;svg&gt;&lt;/button&gt;
&lt;button type="button" class="icon before"&gt;Fill&lt;svg&gt;&hellip;&lt;svg&gt;&lt;/button&gt;
&lt;button type="button" class="outline icon before"&gt;Outline&lt;svg&gt;&hellip;&lt;svg&gt;&lt;/button&gt;
&lt;button type="button" class="flat icon before"&gt;Flat&lt;svg&gt;&hellip;&lt;svg&gt;&lt;/button&gt;
&lt;button type="button" class="subtle icon before"&gt;Subtle&lt;svg&gt;&hellip;&lt;svg&gt;&lt;/button&gt;</code></pre>
        </div>
      </div>
      <hr>
    </section>
    <section id="large">
      <h3>Large Buttons</h3>
      <div class="attributes">
        <strong>Example</strong>
        <div class="example">
          <button class="large">Unstyled</button>
          <button type="button" class="large icon after">Fill</button>
          <button type="button" class="outline large">Outline</button>
          <button type="button" class="flat large">Flat</button>
          <button type="button" class="subtle large">Subtle</button>
          <button type="button" class="large icon after">Fill
            <svg viewBox="0 0 32 32">
              <polygon points="14.2,3.3 12.8,4.7 23.1,15 4,15 4,17 23.1,17 12.8,27.3 14.2,28.7 26.9,16"/>
            </svg>
          </button>
          <button type="button" class="large icon">
            <svg viewBox="0 0 32 32">
              <polygon points="14.2,3.3 12.8,4.7 23.1,15 4,15 4,17 23.1,17 12.8,27.3 14.2,28.7 26.9,16"/>
            </svg>
          </button>
          <button type="button" class="large icon circle">
            <svg viewBox="0 0 32 32">
              <polygon points="14.2,3.3 12.8,4.7 23.1,15 4,15 4,17 23.1,17 12.8,27.3 14.2,28.7 26.9,16"/>
            </svg>
          </button>
        </div>
        <div class="code-sample">
          <strong>Markup</strong>
          <pre><code class="language-markup">&lt;button class="large"&gt;Unstyled&lt;/button&gt;
&lt;button type="button" class="large"&gt;Fill&lt;/button&gt;
&lt;button type="button" class="outline large"&gt;Outline&lt;/button&gt;
&lt;button type="button" class="flat large"&gt;Flat&lt;/button&gt;
&lt;button type="button" class="subtle large"&gt;Subtle&lt;/button&gt;</code></pre>
        </div>
      </div>
      <hr>
    </section>
    <section id="small">
      <h3>Small Buttons</h3>
      <div class="attributes">
        <strong>Example</strong>
        <div class="example">
          <button class="small">Unstyled</button>
          <button type="button" class="small">Fill</button>
          <button type="button" class="outline small">Outline</button>
          <button type="button" class="flat small">Flat</button>
          <button type="button" class="subtle small">Subtle</button>
          <button type="button" class="small icon after">Fill
            <svg viewBox="0 0 32 32">
              <polygon points="14.2,3.3 12.8,4.7 23.1,15 4,15 4,17 23.1,17 12.8,27.3 14.2,28.7 26.9,16"/>
            </svg>
          </button>
          <button type="button" class="small icon">
            <svg viewBox="0 0 32 32">
              <polygon points="14.2,3.3 12.8,4.7 23.1,15 4,15 4,17 23.1,17 12.8,27.3 14.2,28.7 26.9,16"/>
            </svg>
          </button>
          <button type="button" class="small icon circle">
            <svg viewBox="0 0 32 32">
              <polygon points="14.2,3.3 12.8,4.7 23.1,15 4,15 4,17 23.1,17 12.8,27.3 14.2,28.7 26.9,16"/>
            </svg>
          </button>
        </div>
        <div class="code-sample">
          <strong>Markup</strong>
          <pre><code class="language-markup">&lt;button class="small"&gt;Unstyled&lt;/button&gt;
&lt;button type="button" class="small"&gt;Fill&lt;/button&gt;
&lt;button type="button" class="outline small"&gt;Outline&lt;/button&gt;
&lt;button type="button" class="flat small"&gt;Flat&lt;/button&gt;
&lt;button type="button" class="subtle small"&gt;Subtle&lt;/button&gt;</code></pre>
        </div>
      </div>
      <hr>
    </section>

    <section id="wide">
      <h3>Full Width Buttons</h3>
      <div class="attributes">
        <strong>Example</strong>
        <div class="example">
          <button type="button" class="full">Fill</button>
          <button type="button" class="outline full">Outline</button>
          <button type="button" class="subtle full">Subtle</button>
          <button type="button" class="full icon after">Fill
            <svg viewBox="0 0 32 32">
              <polygon points="14.2,3.3 12.8,4.7 23.1,15 4,15 4,17 23.1,17 12.8,27.3 14.2,28.7 26.9,16"/>
            </svg>
          </button>
        </div>
        <div class="code-sample">
          <strong>Markup</strong>
          <pre><code class="language-markup">&lt;button type="button" class="full"&gt;Fill&lt;/button&gt;
&lt;button type="button" class="outline full"&gt;Outline&lt;/button&gt;
&lt;button type="button" class="flat full"&gt;Flat&lt;/button&gt;
&lt;button type="button" class="subtle full"&gt;Subtle&lt;/button&gt;</code></pre>
        </div>
      </div>
      <hr>
    </section>

    <section id="disabled">
      <h3>Disabled Buttons</h3>
      <div class="attributes">
        <strong>Example</strong>
        <div class="example">
          <button disabled>Unstyled</button>
          <button type="button" disabled>Fill</button>
          <button type="button" class="outline" disabled>Outline</button>
          <button type="button" class="flat" disabled>Flat</button>
          <button type="button" class="subtle" disabled>Subtle</button>
        </div>
        <div class="code-sample">
          <strong>Markup</strong>
          <pre><code class="language-markup">&lt;button disabled&gt;Unstyled&lt;/button&gt;
&lt;button type="button" disabled&gt;Fill&lt;/button&gt;
&lt;button type="button" class="outline" disabled&gt;Outline&lt;/button&gt;
&lt;button type="button" class="flat" disabled&gt;Flat&lt;/button&gt;
&lt;button type="button" class="subtle" disabled&gt;Subtle&lt;/button&gt;</code></pre>
        </div>
      </div>
      <hr>
    </section>
  </article>
</template>
<script>
  import prism from 'vue-prismjs';
  export default {
    components: { prism }
  }
</script>
<style lang="scss" scoped>

  .example {
    padding: 1rem;
    margin-bottom: 1rem;
    background: $neutral-50;
    border: 1px solid $neutral-300;
    border-radius: 0.25rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: auto;
    > * { margin-bottom: 1rem; }
    @media #{$screen-width-large} {
      flex-direction: row;
      display: flex;
      justify-content: space-around;
      align-items: flex-start;
      > * { margin: 0; }
      &.start { justify-content: flex-start; }
    }
    &.dark { background: $neutral-900; }
  }

  .code-sample { margin-bottom: 1rem; }
  table{
    width: 100%;
    border: 1px solid $neutral-300;
  }
  th{
    background: $neutral-50;
    text-align: left;
    border: 1px solid $neutral-300;
    padding: 0.5rem;
    font-weight: bold;
  }
  td{
    text-align: left;
    border: 1px solid $neutral-300;
    padding: 0.5rem;
    &:first-child { width: 20%; }
    p{
      margin-bottom: 0.25rem;
    }
  }

  #wide button:nth-child(n+2) {
    @media #{$screen-width-large} {
      margin-left: 1rem;
    }
  }

</style>
