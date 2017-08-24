<template>
  <section class="example">
    <h1>Switch</h1>
    <form>
      <label for="id">ID</label>
      <input type="text" id="id" v-model="idData" placeholder="ID" />
      <label for="label">Label</label>
      <input type="text" id="label" v-model="labelData" placeholder="Label" />
      <label for="wide">Is Wide</label>
      <input type="checkbox" id="wide" v-model="isWideData" />
    </form>

    <toggle-switch :id="idData" :label="labelData" :isWide="isWideData" @checked="addEvent('checked')" @unchecked="addEvent('unchecked')" />
    <div class="received-events" v-html="receivedEventsData"></div>
  </section>
</template>

<script>
import { toggleSwitch } from '@/components';

export default {
  data() {
    return {
      idData: 'switch-id',
      labelData: 'Switch Label',
      isWideData: false,
      receivedEventsData: '',
    };
  },
  methods: {
    addEvent(eventType) {
      this.receivedEventsData += `<div>${eventType}</div>`;
    },
  },
  components: { 'toggle-switch': toggleSwitch },
};
</script>

<style lang="scss" scoped>
  @import 'base/variables';

  .received-events {
    margin-top: $baseline-height;
    padding: $baseline-height / 2 $baseline-height;
    border: 1px solid $black;
    width: fit-content;

    &:empty {
      display: none;
    }
  }
</style>