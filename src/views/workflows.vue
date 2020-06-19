<template>
  <article class="container">
    <section>
      <h1>Workflows</h1>

      <h3>Setup</h3>

      <p>
        Workflows are forms broken into a multi-step process. The workflow visual is made
        up of multiple Peak styles, and tied together with the workflow styles and animations.
      </p>

      <ol>
        <li>
          <strong>Layouts:</strong>
          .modal-page
        </li>
        <li>
          <strong>Banners:</strong>
          .modal-page-banner
        </li>
        <li><strong>Steps Cards</strong></li>
      </ol>

      <p>
        The workflow styles tie the above together styles together, and add animations styles to create the slide on navigation.
      </p>

       <ol>
        <li>
          .workflow
        </li>
        <li>
          .workflow-form
        </li>
      </ol>

      <p>
        <strong>LEFT:</strong>
        <br />
        'slide-fade-in-right'
        <br />
        'slide-fade-out-right';
      </p>

      <p>
        <strong>RIGHT:</strong>
        <br />
        'slide-fade-in-left'
        <br />
        'slide-fade-out-left'
      </p>

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
},</code>
        </pre>
      </div>
    </section>


    <div class="modal-page workflow">
      <div class="banner modal-page-banner">
        <div class="banner-content">
          <h5 class="title">Test title</h5>
          <button type="button" class="flat action" icon>Close</button>
        </div>
      </div>

      <form class="workflow-form" v-on:submit.prevent>
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
              <button type="submit" @click="next">Next</button>
            </footer>
          </div>

          <div class="step card" v-if="step === 2" :key="step">
            <header>
              <button type="button" class="flat icon before" @click="prev">
                <svg viewBox="0 0 32 32">
                  <polygon points="28,15 8.9,15 19.2,4.7 17.8,3.3 5.1,16 17.8,28.7 19.2,27.3 8.9,17 28,17"/>
                </svg>
                Back
              </button>

              <h3 class>Step 2</h3>
            </header>

            <article>
                <h5>Finance Ipsum</h5>

              <div class="card">
                <article>
                  <p>
                    This is some stuff inside
                  </p>

                  <div class="inline-input full">
                    <div>
                      <label for="inline-pattern-one">First name</label>
                      <input id="inline-pattern-one" type="text" name="inline-pattern-two">
                    </div>

                    <div>
                      <label for="inline-pattern-two">Last name</label>
                      <input id="inline-pattern-two" type="text" name="inline-pattern-two">
                    </div>
                  </div>
                </article>
              </div>
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
        <code class="language-markup">&lt;div class="modal-page workflow"&gt;
  &lt;div class="modal-page-banner"&gt;
    &lt;div class="banner-content"&gt;
      &lt;h5 class="title"&gt;Test title&lt;/h5&gt;
      &lt;button type="button" class="flat action" icon&gt;close&lt;/button&gt;
    &lt;/div&gt;
  &lt;/div&gt;

  &lt;form class="workflow-form" v-on:submit.prevent&gt;
    &lt;transition 
      :enter-active-class="enterClasses" 
      :leave-active-class="leaveClasses" 
    &gt;
      &lt;div class="step card" v-if="step === 1" :key="step"&gt;
        &lt;header&gt;
          &lt;h3&gt;Step 1&lt;/h3&gt;
        &lt;/header&gt;

        &lt;article&gt;
          &lt;h5&gt;Finance Ipsum&lt;/h5&gt;
          &lt;p&gt;
            Securities default
          &lt;/p&gt;
        &lt;/article&gt;

        &lt;footer&gt;
          &lt;button type="submit" @click="next"&gt;Next&lt;/button&gt;
        &lt;/footer&gt;
      &lt;/div&gt;

      &lt;div class="step card" v-if="step === 2" :key="step"&gt;
        &lt;header&gt;
          &lt;button type="button" class="flat icon before" @click="prev"&gt;
            &lt;svg viewBox="0 0 32 32"&gt;
              &lt;polygon points="28,15 8.9,15 19.2,4.7 17.8,3.3 5.1,16 17.8,28.7 19.2,27.3 8.9,17 28,17"/&gt;
            &lt;/svg&gt;
            Back
          &lt;/button&gt;

          &lt;h3&gt;Step 2&lt;/h3&gt;
        &lt;/header&gt;

        &lt;article&gt;
          &lt;h5&gt;Finance Ipsum&lt;/h5&gt;
          &lt;p&gt;
            Securities default investment funds exchange market index value fall Fitch corporate 
            bonds treasury hedge fund. Term risk management gains taxpayer upswing fall receive expenses 
            volatile issuer rise. Term fiat 401k managed shares corporate bonds tax gains funds income maturities 
            downturn yield retirement. Bills district Fitch municipal bonds exchange bull. 
          &lt;/p&gt;
        &lt;/article&gt;

        &lt;footer&gt;
          &lt;button type="submit" disabled&gt;Submit&lt;/button&gt;
        &lt;/footer&gt;
      &lt;/div&gt;
    &lt;/transition&gt;
  &lt;/form&gt;
&lt;/div&gt;</code>
      </pre>
    </div>

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
