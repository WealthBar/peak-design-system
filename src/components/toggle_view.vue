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
    margin-top: $spacing;
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
      padding: $spacing-tiny $spacing-small;
      color: $brand;
      font-size: 16px;
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
