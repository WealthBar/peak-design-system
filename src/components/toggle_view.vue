<template>
  <div>
    <slot name="label" />
    <slot name="content" />
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

<style lang="scss" scoped>

  div {
    display: flex;
    align-items: center;
    // > * { margin: 0 0.5rem 0 0; }
  }

  .combined-button {
    display: flex;

    // border-radius: 0.25rem;
    // padding: 0;
    :first-child {
      border-radius: 0;
    }
    // a {
    //   padding: 0.25rem 0.5rem;
    //   color: $jade-300;
    //   text-decoration: none;
    //   font-size: 16px;
    //   margin: 0;

    //   &.active {
    //     background-color: $jade-300;
    //     color: $white;
    //   }
    // }
  }

</style>
