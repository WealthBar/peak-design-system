<template>
  <section class="clients">
    <h3>Client List</h3>

    <ul>
      <li v-for="client in allClients" :key="client.id">
        <router-link :to="'/clients/' + client.id">
          {{client.name}} <{{client.email}}> ({{client.id}})
        </router-link>
      </li>
    </ul>

    <h4>Add New Client</h4>
    <form @submit="submit($event)">
      <input type="text" placeholder="name" v-model="name">
      <input type="email" placeholder="Email" v-model="email">
      <button type="submit">Add Client</button>
    </form>
    <router-view></router-view>
  </section>
</template>

<script>
/* eslint-disable */
import { mapGetters, mapActions } from '@/lib/vue';

export default {
  head: {
    title: 'Client List | WealthBar',
  },

  route: {
    meta: { requiresAuth: true },
  },

  beforeMount() {
    this.fetchClients();
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
    ...mapActions(['fetchClients', 'addClient']),

    async submit(event) {
      event.preventDefault();
      await this.addClient({ name: this.name, email: this.email });
      this.name = '';
      this.email = '';
    },
  },
};
</script>

<style scoped>

</style>
