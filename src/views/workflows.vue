<template>
  <article class="container">
    <h1>Workflows</h1>

    <section id="setup">
      <h3>Setup</h3>

      <p>
        Workflows are forms broken into a multi-step process. The workflow visual is made
        up of multiple Peak styles, and tied together with the workflow styles and animations.
      </p>

      <ol>
        <li>
          <strong>Layouts:</strong>
          <code>
            .modal-page
          </code>
        </li>
        <li>
          <strong>Banners:</strong>
          <code>
            .modal-page-banner
          </code>
        </li>
        <li>
          <strong>Steps Cards</strong>
          <code>
            .step .card
          </code>
        </li>
      </ol>
    </section>

    <hr>

    <section id="annimation">
      <h3>Animations</h3>

      <p>
        The workflow styles tie the above together styles, and add animations styles to create the slide on navigation.
      </p>

      <ol>
        <li>
          <code>
            .workflow
          </code>
        </li>
        <li>
          <code>
            .workflow-form
          </code>
        </li>
      </ol>

      <p>
        <strong>LEFT:</strong>
        <br>
        <code>
          'slide-fade-in-right'
        </code>
        <br>
        <code>
          'slide-fade-out-right';
        </code>
      </p>

      <p>
        <strong>RIGHT:</strong>
        <br>
        <code>
          'slide-fade-in-left'
        </code>
        <br>
        <code>
          'slide-fade-out-left'
        </code>
      </p>
    </section>

    <hr>

    <section id="step">
      <h3>Steps</h3>
      <p>
        Steps are made for multi step forms(forms with more than 1 page). The card styling will disappear at the mobile breakpoint,
        and the step will fill the screen.
      </p>

      <p>
        The step consists of the following html elements:
        <code>header</code>,
        <code>article</code>,
        <code>footer</code>
      </p>
    
      <div class="card step">
        <header>
          <h3>Some title</h3>
        </header>

        <article>
          <p>
            Term fiat 401k managed shares corporate bonds tax gains funds income maturities downturn yield
            retirement. Bills district Fitch municipal bonds exchange bull.
          </p>
        </article>

        <footer>
          <button type="button">Next</button>
        </footer>
      </div>

      <div class="code-sample">
        <pre>
          <code class="language-markup">&lt;div class="step card"&gt;
  &lt;header&gt;
    &lt;h3&gt;Header&lt;/h3&gt;
  &lt;/header&gt;

  &lt;article&gt;
    &lt;p&gt;Body&lt;/p&gt;
  &lt;/article&gt;

  &lt;footer&gt;
    &lt;button type="submit"&gt;Okay&lt;/button&gt;
  &lt;/footer&gt;
&lt;/div&gt;</code></pre>
      </div>
    </section>

    <hr>

    <section id="composition">
      <h3>Composition</h3>

      <div class="modal-page workflow" id="composition">
        <div class="banner modal-page-banner">
          <div class="banner-content">
            <h5 class="title">Test title</h5>
            <button type="button" class="flat action" icon>Close</button>
          </div>
        </div>

        <form class="workflow-form" @:submit.prevent>
          <transition :enter-active-class="enterClasses" :leave-active-class="leaveClasses">
            <div class="step card" v-if="step === 1" :key="step">
              <header>
                <h3>Step 1</h3>
              </header>

              <article>
                <h5>Finance Ipsum</h5>

                <p>
                  Securities default
                </p>
              </article>

              <footer>
                <button type="submit" @click.prevent="next">Next</button>
              </footer>
            </div>

            <div class="step card" v-if="step === 2" :key="step">
              <header>
                <button type="button" class="flat icon before" @click="prev">
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

              <footer>
                <button type="submit" disabled>Submit</button>
              </footer>
            </div>
          </transition>
        </form>
      </div>

      <div class="code-sample">
        <pre>
          <code class="language-markup">### TEMPLATE ###

  &lt;form class="workflow-form"&gt;
  &lt;transition :enter-active-class="enterClasses" :leave-active-class="leaveClasses"&gt;
    &lt;div class="step card"&gt;
      ...
    &lt;/div&gt;
  &lt;/transition&gt;
  &lt;form&gt;

  ### VUE COMPONENT ###

  prev(step) {
  this.enterClasses = 'slide-fade-in-right';
  this.leaveClasses = 'slide-fade-out-right';
  },

  next(step) {
  this.enterClasses = 'slide-fade-in-left';
  this.leaveClasses = 'slide-fade-out-left';
  },</code></pre>
      </div>
    </section>
  </article>
</template>

<script>
export default {
  data() {
    return {
      step: 1
    }
  },

  methods: {
    async prev(step) {
      this.enterClasses = 'step-slide-fade-in-right';
      this.leaveClasses = 'step-slide-fade-out-right';
      this.step = 1;
    },

    async next(step) {
      this.enterClasses = 'step-slide-fade-in-left';
      this.leaveClasses = 'step-slide-fade-out-left';
      this.step = 2;
    },
  }
}
</script>

<style lang="scss">
  .workflow {
    min-height: 600px;
  }
</style>
