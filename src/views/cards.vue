<template>
  <article class="container">
    <section>
      <h1>Cards</h1>
      <p>
        Cards in peak are simply a visual wrapper, made to respect all other styles which used cards on one way or another.
      </p>
    </section>

    <section id="card">
      <h3>Card</h3>

      <div class="card">
        <h3>
          Simple card
        </h3>

        <p>
          Card in its simplets form. All margin is applied by the html element inside
        </p>

        <button type="button">
          Action
        </button>
      </div>

      <div class="code-sample">
        <pre>
          <code class="language-markup">&lt;div class="card"&gt;
  ...
&lt;/div&gt;</code>
        </pre>
      </div>
    </section>

    <section id="card-step">
      <h3>Step Card example</h3>

      <div class="card step">
        <header>
          <h3>Card with step style applied</h3>
        </header>

        <article>
          <p>
            Card style, with the step content addition. Card style is applied, however
            the step styling make the needed content, and visual changes.
          </p>
        </article>

        <footer>
          <button type="button">
            Action
          </button>
        </footer>
      </div>

      <div class="code-sample">
        <pre>
          <code class="language-markup">&lt;div class="step card"&gt;
  &lt;header&gt;
    ...
  &lt;/header&gt;

  &lt;article&gt;
    ...
  &lt;/article&gt;

  &lt;footer&gt;
    ...
  &lt;/footer&gt;
&lt;/div&gt;</code>
        </pre>
      </div>
    </section>
  </article>
</template>

<script>
export default { };
</script>
