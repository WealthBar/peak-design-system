<template>
  <article class="container">
    <section>
      <h1>Workflows</h1>

      <p>
        Cards in Peak have been designed to act as a wrapper with some padding, and not much else. Everything outside of the
        <code>&lt;div class="card-actions"&gt;</code> class, simply adheares to their usual style. Meaning it allows for 
        consistent styling behaviour at all time when using elements or classes.
      </p>
    </section>

    <h3>Workflow</h3>

    <div class="layout-focus workflow">
      <div class="banner light">
        <div class="banner-content">
          <h5>Test title</h5>
          <button type="button" class="flat" icon>close</button>
        </div>
      </div>

      <form class="workflow-form" v-on:submit.prevent>
        <transition :enter-active-class="enterClasses" :leave-active-class="leaveClasses" :duration="500">
          <div class="step" v-if="step === 1" :key="step">
            <div class="card">
              <h3>Step 1</h3>

              <h5>Finance Ipsum</h5>
              <p>
                Securities default
              </p>

              <div class="card-actions">
                <button type="submit" @click="next">Next</button>
              </div>
            </div>
          </div>

          <div class="step" v-if="step === 2" :key="step">
            <div class="card">
              <button type="button" class="flat icon before" @click="prev">
                <svg viewBox="0 0 32 32">
                  <polygon points="28,15 8.9,15 19.2,4.7 17.8,3.3 5.1,16 17.8,28.7 19.2,27.3 8.9,17 28,17"/>
                </svg>
                Back
              </button>

              <h3>Step 2</h3>

              <h5>Finance Ipsum</h5>
              <p>
                Securities default investment funds exchange market index value fall Fitch corporate 
                bonds treasury hedge fund. Term risk management gains taxpayer upswing fall receive expenses 
                volatile issuer rise. Term fiat 401k managed shares corporate bonds tax gains funds income maturities 
                downturn yield retirement. Bills district Fitch municipal bonds exchange bull. 
              </p>

              <div class="card-actions">
                <button type="submit" disabled>Submit</button>
              </div>
            </div>
          </div>
        </transition>
      </form>
    </div>

    <div class="code-sample">
      <pre>
        <code class="language-markup">&lt;div class="layout-focus workflow"&gt;
  &lt;div class="banner light"&gt;
    &lt;div class="banner-content"&gt;
      &lt;h5&gt;Test title&lt;/h5&gt;
      &lt;button type="button" class="flat" icon&gt;close&lt;/button&gt;
    &lt;/div&gt;
  &lt;/div&gt;

  &lt;form class="workflow-form" v-on:submit.prevent&gt;
    &lt;transition 
      :enter-active-class="enterClasses" 
      :leave-active-class="leaveClasses" 
      :duration="500"
    &gt;
      &lt;div class="step" v-if="step === 1" :key="step"&gt;
        &lt;div class="card"&gt;
          &lt;h3&gt;Step 1&lt;/h3&gt;

          &lt;h5&gt;Finance Ipsum&lt;/h5&gt;
          &lt;p&gt;
            Securities default
          &lt;/p&gt;

          &lt;div class="card-actions"&gt;
            &lt;button type="submit" @click="next"&gt;Next&lt;/button&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;

      &lt;div class="step" v-if="step === 2" :key="step"&gt;
        &lt;div class="card"&gt;
          &lt;button type="button" class="flat icon before" @click="prev"&gt;
            &lt;svg viewBox="0 0 32 32"&gt;
              &lt;polygon points="28,15 8.9,15 19.2,4.7 17.8,3.3 5.1,16 17.8,28.7 19.2,27.3 8.9,17 28,17"/&gt;
            &lt;/svg&gt;
            Back
          &lt;/button&gt;

          &lt;h3&gt;Step 2&lt;/h3&gt;

          &lt;h5&gt;Finance Ipsum&lt;/h5&gt;
          &lt;p&gt;
            Securities default investment funds exchange market index value fall Fitch corporate 
            bonds treasury hedge fund. Term risk management gains taxpayer upswing fall receive expenses 
            volatile issuer rise. Term fiat 401k managed shares corporate bonds tax gains funds income maturities 
            downturn yield retirement. Bills district Fitch municipal bonds exchange bull. 
          &lt;/p&gt;

          &lt;div class="card-actions"&gt;
            &lt;button type="submit" disabled&gt;Submit&lt;/button&gt;
          &lt;/div&gt;
        &lt;/div&gt;
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
      this.enterClasses = 'step-animated step-slide-fade-in-right';
      this.leaveClasses = 'step-animated step-slide-fade-out-right';
      this.step = 1;
    },

    async next(step) {
      this.enterClasses = 'step-animated step-slide-fade-in-left';
      this.leaveClasses = 'step-animated step-slide-fade-out-left';
      this.step = 2;
    },
  }
}
</script>
