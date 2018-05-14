<template>
  <div class="units-container">
    <slot name="label" />
    <slot class="unit-selector" name="content" />
  </div>
</template>

<script>
  export default {
    props: {
      units: {
        type: String,
      },
    },
  };

</script>

<style lang="scss">
  @import 'base/variables';

  .units-container {
    display: flex;
    align-items: center;
    > * { margin: 0 0.5rem 0 0; }
  }

  .unit-selector {
    display: flex;
    border: 1px solid $brand-lightest;
    border-radius: $spacing-tiny;
    padding: 0;

    > * {
      padding: $spacing-tiny $spacing-small;
      color: $brand;
      text-decoration: none;
      font-size: 16px;
      margin: 0;

      &.active {
        background-color: $brand;
        color: $white;
      }
    }
  }
  // .active.unit-selector {
  //   background-color: $brand;
  //   p { color: $white; }
  // }

</style>
