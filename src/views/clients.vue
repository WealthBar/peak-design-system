<template>
    <main class="clients">
      <ul>
        <li v-for="client in allClients" :key="client.id">
          <router-link :to="'/clients/' + client.id">
            {{client.firstName}} {{client.lastName}} <{{client.email}}> ({{client.id}})
          </router-link>
        </li>
      </ul>

      <button class="add-client-button" @click="openModal()">
        <svgicon name="add-user" height="1.25rem" width="1.25rem" alt="Add Client"></svgicon>
      </button>

      <modal :title="modalTitle" :displayed="modalDisplay" @close="closeModal">

        <form slot="body">
          <label for="firstName">First Name</label>
          <input type="text" id="firstName" v-model="firstName">
          <label for="lastName">Last Name</label>
          <input type="text" id="lastName" v-model="lastName">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email">
        </form>
        <button slot="footer" @click="submit($event)" >Add Client</button>

      </modal>

      <router-view></router-view>

    </main>
</template>

<script>
  /* eslint-disable */
  import { mapGetters, mapActions } from '@/lib/vue';
  import { banner, modal } from '@/components';
  import '@/lib/icons/add-user';

  export default {
    head: {
      title: 'WealthBar Advisors',
    },

    components: { banner, modal },

    route: {
      meta: { requiresAuth: true },
    },

    computed: {
      ...mapGetters(['allClients']),
    },

    methods: {
      ...mapActions(['fetchClients', 'addClient']),

      async submit(event) {
        event.preventDefault();
        await this.addClient({ firstName: this.firstName, lastName: this.lastName, email: this.email });
        this.modalDisplay = false;
        this.firstName = '';
        this.lastName = '';
        this.email = '';
      },
      openModal() {
        this.modalDisplay = true;
      },
      closeModal() {
        this.modalDisplay = false;
      },
    },

    beforeMount() {
      this.fetchClients();
    },

    data() {
      return {
        email: '',
        firstName: '',
        lastName: '',
        modalDisplay: false,
        modalTitle: 'Add Client',
      };
    },
  };
</script>

<style>

</style>

