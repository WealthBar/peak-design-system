<template>
  <div class="units-container">
    <slot name="label" />
    <slot class="unit-selector" name="content" />
  </div>
</template>

<script>
  export default {
    props: {
      views: {
        type: Array,
        default: () => [],
      },
      units: {
        type: Array,
        default: () => [],
      },
    },
    methods: {
      // close() {
      //   this.$emit('close');
      // },
    },
  };

</script>

<style lang="scss" scoped>
  @import 'base/variables';

  .units-container {
    margin: $spacing-small 0;
    display: flex;
    align-items: center;

    p {
      margin-right: $spacing-small;
    }
  }

  .unit-selector {
    display: flex;
    border: 1px solid $brand-lightest;
    border-radius: $spacing-tiny;
    padding: 0;

    li {
      padding: 0 $spacing-tiny;
      color: $brand;
      font-size: 14px;
      margin: 0;
    }
  }

  li.active {
    background-color: $brand;
    color: $white;
  }

  .active.unit-selector {
    background-color: $brand;

    p { color: $white; }
  }

</style>
