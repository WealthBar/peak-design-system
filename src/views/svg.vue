<template>
  <article class="container">
    <h1>SVG Icons</h1>

    <div v-for="svg in svgs" :id="svg.name" :key="svg.name" class="svg-item">
      <header>
        <i v-html="svg.icon"></i> <!-- eslint-disable-line -->
        <h4 class="no-margin">{{ svg.name }}</h4>
      </header>
      <pre><code class="language-svg">{{ svg.icon }}</code></pre>
    </div>
  </article>
</template>

<script>
import svgs from './svg.data';

export default {
  data() {
    return { svgs };
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
