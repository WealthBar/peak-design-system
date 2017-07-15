<template>
  <section class="client" v-if="client">
    <h3>Selected Client</h3>
    <div><span class="client-name">{{client.name}}</span> <span class="client-email"><{{client.email}}></span></div>
  </section>
</template>

<script>
import { mapGetterMethods } from '@/store';

export default {
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
