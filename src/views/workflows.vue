<template>
  <article class="container">
    <h1>Workflows</h1>

    <section id="setup">
      <h3>Page setup</h3>

      <p>
        Workflows are forms broken into a multi-step process. The workflow visual is made
        up of multiple Peak styles, and tied together with the workflow styles and animations.
      </p>

      <h4>Page Setup:</h4>
      <ol>
        <li>
          <code>.workflow-page</code>
          <span> - page wrapper class for workflows.</span>
        </li>
        <li>
          <code>.banner</code>
          <span> - standard header banner class for workflows.</span>
        </li>
      </ol>

      <h4>Workflow Setup:</h4>
      <ol>
        <li>
          <code>.workflow</code>
          <span> - workflow container class (usually on a <code>&lt;form&gt;</code> element.)</span>
        </li>
        <li>
          <code>.step</code>
          <span> - workflow step container, each "page" in a flow is a step.</span>
        </li>
        <li>
          <code>.card.modal-view</code>
          <span> - visual treatment and wrapper nested in each <code>.step</code>.</span>
        </li>
      </ol>
    </section>

    <hr />

    <section id="step">
      <h3>Steps</h3>
      <p>Steps are made for multi-step forms(forms with more than 1 page). The card styling will disappear at the mobile breakpoint, and the step will fill the screen. Step class <strong>must</strong> be nested in <code>workflow</code> class for the style and transitions to work.</p>

      <p>The step can consists of the following html elements to add desired padding and structure: <code>&lt;header&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;footer&gt;</code>, or any container element with the <code>card-content</code> class.</p>
      <form class="workflow">
        <div class="step">
          <div class="card modal-view">
            <header>
              <h3>Some title</h3>
            </header>

            <article>
              <p>Term fiat 401k managed shares corporate bonds tax gains funds income maturities downturn yield retirement. Bills district Fitch municipal bonds exchange bull.</p>
            </article>

            <footer>
              <button type="button">Next</button>
            </footer>
          </div>
        </div>
      </form>

      <strong>Markup</strong>
      <div class="code-sample">
        <pre><code class="language-markup">&lt;form class="workflow"&gt;
  &lt;div class="step"&gt;
    &lt;div class="card"&gt;
      &lt;header&gt;
        &lt;h3&gt;Header&lt;/h3&gt;
      &lt;/header&gt;

      &lt;article&gt;
        &lt;p&gt;Body&lt;/p&gt;
      &lt;/article&gt;

      &lt;footer&gt;
        &lt;button type="submit"&gt;Okay&lt;/button&gt;
      &lt;/footer&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/form&gt;</code></pre>
      </div>
    </section>

    <hr />

    <section id="animation">
      <h3>Animation</h3>

      <p>The workflow styles tie the above together styles, and add animations styles to create the slide on navigation.</p>

      <p>
        <strong>Transition to next step:</strong>
        <br />
        current step: <code>'slide-out-left'</code>
        <br />
        incoming step: <code>'slide-in-right'</code>
      </p>

      <p>
        <strong>Transition to previous step:</strong>
        <br />
        current step: <code>'slide-out-right'</code>
        <br />
        incoming step: <code>'slide-in-left'</code>
      </p>

      <div class="workflow-page" id="composition">
        <div class="banner">
          <div class="banner-content">
            <h5 class="banner-title">Test title</h5>
            <button type="button" class="flat dark banner-action" icon>Close</button>
          </div>
        </div>

        <form class="workflow" @:submit.prevent>
          <transition :enter-active-class="enterClasses" :leave-active-class="leaveClasses">
            <div class="step" v-if="step === 1" :key="step">
              <div class="card modal-view">
                <header>
                  <h3>Step 1</h3>
                </header>
                <article>
                  <h5>Finance Ipsum</h5>
                  <p>Securities default</p>
                </article>
                <footer class="footer-next">
                  <button type="submit" @click.prevent="next(2)">
                    <span>Next</span>&nbsp;
                    <svg viewBox="0 0 32 32">
                      <polygon points="14.2,3.3 12.8,4.7 23.1,15 4,15 4,17 23.1,17 12.8,27.3 14.2,28.7 26.9,16" />
                    </svg>
                  </button>
                </footer>
              </div>
            </div>

            <div class="step" v-if="step === 2" :key="step">
              <div class="card modal-view">
                <header>
                  <button type="button" class="flat icon before" @click="prev(1)">
                    <svg viewBox="0 0 32 32">
                      <polygon points="28,15 8.9,15 19.2,4.7 17.8,3.3 5.1,16 17.8,28.7 19.2,27.3 8.9,17 28,17" />
                    </svg>
                    Back
                  </button>
                  <h3 class>Step 2</h3>
                </header>
                <article>
                  <h5>Finance Ipsum</h5>
                </article>
                <footer class="footer-next">
                  <button type="submit" disabled>Submit</button>
                </footer>
              </div>
            </div>
          </transition>
        </form>
      </div>

      <strong>Markup</strong>
      <pre><code class="language-markup">&lt;form class="workflow"&gt;
  &lt;transition :enter-active-class="enterClasses" :leave-active-class="leaveClasses"&gt;
    &lt;div class="step"&gt;
      &lt;div class="card"&gt;
        &hellip;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/transition&gt;
&lt;form&gt;
</code></pre>

      <strong>Script</strong>
      <pre><code class="language-js">prev() {
  this.enterClasses = 'slide-in-right';
  this.leaveClasses = 'slide-out-right';
  &hellip;
},

next() {
  this.enterClasses = 'slide-in-left';
  this.leaveClasses = 'slide-out-left';
  &hellip;
},</code></pre>
    </section>
  </article>
</template>

<script>
export default {
  data() {
    return {
      step: 1,
      enterClasses: null,
      leaveClasses: null,
    };
  },

  methods: {
    async prev(step) {
      this.enterClasses = 'slide-in-right';
      this.leaveClasses = 'slide-out-right';
      this.step = step;
    },

    async next(step) {
      this.enterClasses = 'slide-in-left';
      this.leaveClasses = 'slide-out-left';
      this.step = step;
    },
  },
};
</script>

<style lang="scss" scoped>
.workflow-page {
  min-height: auto;
  height: 24rem;
  border: 1px solid $black;
  border-radius: 0.25rem;
  margin-bottom: 1rem;
}
</style>
