<template>
  <article class="container">
    <h1>SVG Icons</h1>

    <div v-for="svg in svg" class="svg-item" :key="svg.name">
      <header>
        <i v-html="svg.icon"></i>
        <h4 class="no-margin">{{svg.name}}</h4>
        <!-- <button type="button"><span>copy</span></button> -->
      </header>
      <pre><code>{{svg.icon}}</code></pre>
    </div>
  </article>
</template>
<script>
  import svg from './svg.data.js';
  export default {
    data() {
      return { svg };
    },
  };
</script>
<style lang="scss">
  // unscoped for easier copying from browser
  div.svg-item {
    border-bottom: 1px solid $neutral-100;
    header {
      margin: 1rem 0;
      display: flex;
      align-items: center;
    }
    svg {
      width: 2rem;
      height: 2rem;
      margin-right: 1rem;
    }
    pre { margin: 0 0 2rem; }
  }
</style>
