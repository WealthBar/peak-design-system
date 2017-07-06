<template>
  <section class="clients">
    <h3>Client List</h3>
    <ul>
      <li v-for="client in allClients" :key="client.email">{{client.name}} <{{client.email}}></li>
    </ul>

    <h4>Add New Client</h4>
    <form @submit="submit($event)">
      <input type="text" placeholder="name" v-model="name">
      <input type="email" placeholder="Email" v-model="email">
      <button type="submit">Add Client</button>
    </form>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Clients',
  path: '/clients',
  meta: { requiresAuth: true },

  beforeMount() {
    this.$store.dispatch('fetchClients');
  },

  computed: {
    ...mapGetters(['allClients']),
  },

  data() {
    return {
      email: '',
      name: '',
    };
  },

  methods: {
    async submit(event) {
      event.preventDefault();
      await this.$store.dispatch('addClient', { name: this.name, email: this.email });
      this.name = '';
      this.email = '';
    },
  },
};
</script>

<style scoped>

</style>
