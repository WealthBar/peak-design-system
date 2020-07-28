<template>
  <article class="container">
    <!-- DEFINE MODALS AT THE TOP OF THE FILE, AS A SIBLING TO THE PAGE CONTENT -->
    <modal :displayed="modalSimple" title="A Simple Modal" @close="closeModalSimple">
      <p slot="article">Hello World!</p>
      <button slot="footer" type="button" @click="closeModalSimple">OK</button>
    </modal>

    <modal :displayed="modalWithButtons" title="Modal Button Options" :show-exit="true" @close="closeModalWithButtons">
      <div slot="article">
        <p>This modal features the optional 'exit' button in the title bar. This button is not shown by default, but is activated by passing the prop <code>:showExit="true"</code>. The below buttons are marked up inside the <code>footer</code> slot. You can place whatever you like into the <code>footer</code> but in general our designs call for one affirmative and one negatory action.</p>
      </div>

      <div slot="footer">
        <button type="button" @click="closeModalWithButtons">Ok</button>
        <button type="button" class="subtle" @click="closeModalWithButtons">Cancel</button>
      </div>
    </modal>
    <!-- END MODALS -->

    <section id="modals">
      <h2>Modals</h2>
      <p>Modals focus the user’s attention on one task or piece of information via an overlay on top of the page. This pattern is typically used for single-step dialog boxes. Peak's modal styles work at both mobile and desktop screen sizes. As a design pattern, modals work best with a small amount of content.</p>

      <hr />

      <h3>A Simple Modal</h3>

      <h4>Markup</h4>
      <p>Using the modal component, a modal can be marked up very easily. The simplest Modal markup requires 3 things:</p>
      <ol>
        <li>Title, passed into the component using the <code>title</code> prop</li>
        <li>Content, marked up using the <code>article</code> slot</li>
        <li>Button(s), marked up using the <code>footer</code> slot</li>
      </ol>
      <pre><code class="language-markup">&lt;modal :displayed="modal" title="A Simple Modal" @close="closeModal"&gt;
  &lt;p slot="article"&gt;Hello World!&lt;/p&gt;
  &lt;button slot="footer" type="button" @click="closeModal"&gt;OK&lt;/button&gt;
&lt;/modal&gt;</code></pre>

      <h4>Behaviour</h4>
      <p>You'll also need to do a few thing to get the modal to behave correctly on your page:</p>

      <p class="strong">Declare a boolean to control whether the modal is being shown</p>
      <pre><code class="language-js">data() {
  return {
    modal: false,
  };
},</code></pre>

      <p class="strong">Create methods to open and close the modal</p>
      <pre><code class="language-js">methods: {
  openModal() { this.modal = true; },
  closeModal() { this.modal = false; },
},</code></pre>

      <button @click="openModalSimple" type="button" v-t>Open A Simple Modal</button>

      <hr />

      <h3>Buttons</h3>

      <p>In any user-facing production case, you'll want buttons on your modal. The modal component is intended to render buttons in two ways:</p>
      <ol>
        <li>The optional 'Exit' button in the Modal's title bar will appear if you pass the prop <code>:showExit="true"</code></li>
        <li>The <code>footer</code> slot, which generally is intended to contain an affirmative action and a negatory action.</li>
      </ol>
      <pre><code class="language-markup">&lt;modal :displayed="modal" title="Button Demo" :show-exit="true" @close="closeModal"&gt;
  &lt;div slot="article"&gt;
    &lt;p&gt;Hello World!&lt;/p&gt;
  &lt;/div&gt;

  &lt;div slot="footer"&gt;
    &lt;button type="button" @click="confirmAndCloseModal"&gt;Ok&lt;/button&gt;
    &lt;button type="button" class="subtle" @click="closeModal"&gt;Cancel&lt;/button&gt;
  &lt;/div&gt;
&lt;/modal&gt;</code></pre>
      <button @click="openModalWithButtons" type="button" v-t>Open Modal With Buttons</button>

      <hr />

      <h3>Markup</h3>

      <p>To help us understand the the HTML structure that Peak's styles work with, here's an example of browser-rendered markup resulting from the use of Peak's Modal component</p>

      <pre><code class="language-markup">&lt;div class="modal-overlay"&gt;&lt;/div&gt;
&lt;div class="modal-container"&gt;
  &lt;dialog tabindex="-1"&gt;
    &lt;header&gt;
      &lt;h4&gt;A Simple Modal&lt;/h4&gt;
    &lt;/header&gt;

    &lt;article&gt;
      &lt;p data-v-51636f00=""&gt;Hello World!&lt;/p&gt;
    &lt;/article&gt;

    &lt;footer&gt;
      &lt;button data-v-51636f00="" type="button"&gt;OK&lt;/button&gt;
    &lt;/footer&gt;
  &lt;/dialog&gt;
&lt;/div&gt;</code></pre>
    </section>
  </article>
</template>

<script>
import modal from '@/components/modal-overlay';

export default {
  components: { modal },
  data() {
    return {
      modalSimple: false,
      modalWithButtons: false,
    };
  },
  methods: {
    openModalSimple() { this.modalSimple = true; },
    closeModalSimple() { this.modalSimple = false; },

    openModalWithButtons() { this.modalWithButtons = true; },
    closeModalWithButtons() { this.modalWithButtons = false; },
  },
};
</script>

<style lang="scss" scoped>
  ul {
    list-style-type: '- ';
    margin-left: 1rem;
  }
</style>
