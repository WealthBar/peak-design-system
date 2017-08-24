<template>
  <section class="client" v-if="client">
    <h3>Selected Client</h3>
    <div><span class="client-first-name">{{client.firstName}}</span> <span class="client-last-name">{{client.lastName}}</span> <span class="client-email"><{{client.email}}></span></div>
  </section>
</template>

<script>
import { mapGetterMethods } from '@/lib/vue';

export default {
  head() {
    if (!this.client) return;
    return {
      title: `${this.client.firstName} ${this.client.lastName} | WealthBar`,
    };
  },

  route: {
    meta: { requiresAuth: true },
  },

  computed: {
    client() {
      return this.getClient(this.id);
    },

    id() {
      return this.$route.params.id;
    },
  },

  methods: {
    ...mapGetterMethods(['getClient']),
  },
};
</script>

<style scoped>
</style>
