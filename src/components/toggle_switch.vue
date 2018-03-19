<template>
  <span class="container" :class="{ wide: isWide }">
    <label class="text-label" v-if="label" :for="id">{{label}}</label>
    <input :id="id" type="checkbox" @change="change">
    <label :for="id"></label>
  </span>
</template>

<script>
  export default {
    props: {
      id: {
        type: String,
        default: null,
      },
      label: {
        type: String,
        default: null,
      },
      isWide: {
        type: Boolean,
        default: false,
      },
    },

    methods: {
      change(event) {
        if (event.target.checked) {
          this.$emit('checked');
        } else {
          this.$emit('unchecked');
        }
      },
    },
  };

</script>

<style lang="scss" scoped>
  @import 'base/variables';

  .container {
    display: flex;
    align-items: center;

    .text-label {
      color: $black;
      margin-right: $baseline-height;
    }
  }

  .container.wide {
    justify-content: space-between;
  }

  label {
    margin: 0;
    padding: 0;
  }

  input {
    position: absolute;
    margin-left: -99999999px;
  }

  input:focus + label {
    background-color: $brand-lighter;
    box-shadow: 0 0 0 1px $brand;
  }

  input:focus + label::after {
    box-shadow: 0 0 0 1px $brand;
    border-radius: 20px;
  }

  input + label {
    display: inline-block;
    position: relative;
    cursor: pointer;
    padding: $baseline-height * 0.1;
    width: $baseline-height * 3;
    height: $baseline-height * 1.5;
    border-radius: $baseline-height * 1.5;
  }

  input + label::before,
  input + label::after {
    box-sizing: border-box;
    display: block;
    position: absolute;
    top: $baseline-height * 0.01;
    left: 0;
    bottom: $baseline-height * 0.01;
    content: "";
  }

  input + label::before {
    right: $baseline-height * 0.01;
    border: $baseline-height * 0.01 solid $grey;
    border-radius: $baseline-height * 1.5;
    transition: all 0.4s;
  }

  input + label::after {
    width: $baseline-height * 1.5;
    border: $baseline-height * 0.01 solid $grey;
    border-radius: 100%;
    transition: all 0.4s;
  }

  input:checked + label::before {
    background-color: rgba($brand-med, 0.3);
    border: none;
  }

  input:checked + label::after {
    margin-left: $baseline-height * 1.5;
    border: none;
    background-color: $brand-med;
  }

  @media #{$sw-medium} {
    input + label {
      width: $baseline-height * 2;
      height: $baseline-height;
      border-radius: $baseline-height;
    }

    input + label::before {
      border-radius: $baseline-height;
    }

    input + label::after {
      width: $baseline-height;
    }

    input:checked + label::after {
      margin-left: $baseline-height * 0.95;
    }
  }
</style>
