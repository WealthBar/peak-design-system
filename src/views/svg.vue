<template>
  <article class="container">
    <h1>SVG Icons</h1>

    <div v-for="svg in svg" :key="svg.name" class="svg-item" :id="svg.name">
      <header>
        <i v-html="svg.icon"></i>
        <h4 class="no-margin">{{svg.name}}</h4>
        <!-- <button type="button"><span>copy</span></button> -->
      </header>
      <prism language="svg" :code="svg.icon"></prism>
    </div>
  </article>
</template>
<script>
  import svg from './svg.data.js';
  import prism from 'vue-prismjs';

  export default {
    components: { prism, svg },
    data() {
      return { svg };
    },
  };
</script>
<style lang="scss" scoped>
  div.svg-item {
    border-bottom: 1px solid $neutral-100;
    header {
      margin: 1rem 0;
      display: flex;
      align-items: center;
    }
    i {
      width: 2rem;
      height: 2rem;
      margin-right: 1rem;
    }
    pre { margin: 0 0 2rem; }
  }
</style>
