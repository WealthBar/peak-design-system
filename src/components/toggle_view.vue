<template>
  <div class="units-container">
    <slot name="label"/>
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
    border: 1px solid $jade-300;
    border-radius: 0.25rem;
    padding: 0;

    a {
      padding: 0.25rem 0.5rem;
      color: $jade-300;
      text-decoration: none;
      font-size: 16px;
      margin: 0;

      &.active {
        background-color: $jade-300;
        color: $white;
      }
    }
  }

</style>
