<template>
  <section class="example">
    <h1>Modal</h1>
    <form>
      <label for="modal-title">Header</label>
      <input type="text" id="modal-title" v-model="title"></input>
      <label for="modal-action">Header Action</label>
      <input type="text" id="header-action" v-model="headerAction"></input>
      <label for="modal-body">Body</label>
      <textarea class="large" id="modal-body" v-model="bodyData"></textarea>
      <label for="modal-footer">Footer</label>
      <input type="text" id="modal-footer" v-model="footerData"></input>
      <button @click="toggle" type="button">Launch Modal!</button>
    </form>

    <!-- modal constructor -->
    <modal :title="title" :displayed="displayedData" @close="close" >
      <!-- slotted action for the header -->
      <a slot="header-action" href="#">{{ headerAction }}</a> 

      <!-- either create content and assign a slot OR -->
      <form slot="body" v-if="!bodyData">
        <label>First Name</label>
        <input type="text" value="Aaron">
        <label>Last Name</label>
        <input type="text" value="Ailey">
        <label>Email</label>
        <input type="text" value="aaron.ailey@gmail.com">
        <label>Phone</label>
        <input type="text" value="778-888-8888">
        <label>Fee</label>
        <input type="text" value="0.45%">
        <p>The client will be notified of any changes you make on their profile.</p>
      </form>

      <!-- OR bind data into a sloted template -->
      <template slot="body" v-if="bodyData">
        <p v-html="bodyData"></p>
      </template>

      <!-- OR both -->
      <template slot="footer">
        <span v-html="footerData"></span><button @click="close">Confirm</button>
      </template>
        

    </modal>
    <!-- end modal -->
    
  </section>
</template>

<script>
import { modal } from '@/components';

const defaultBodyData =
  'This data is bound in via <code>template</code>, it can be any valid HTML. If you <strong>delete</strong> the contents of the "Body" the modal form hard coded on this page will appear!';

export default {
  data() {
    return {
      displayedData: false,
      title: 'Aaron Ailey',
      headerAction: 'Invite Client',
      bodyData: defaultBodyData,
      footerData: '<button>Secondary</button>',
    };
  },
  methods: {
    toggle() {
      this.displayedData = !this.displayedData;
    },
    close() {
      this.displayedData = false;
    },
  },
  components: { modal },
};
</script>