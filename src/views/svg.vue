<template>
  <article class="container">
    <h1>SVG Icons</h1>

    <div v-for="svg in svgs" :id="svg.name" :key="svg.name" class="svg-item">
      <header>
        <i>{{ svg.icon }}</i>
        <h4 class="no-margin">{{ svg.name }}</h4>
        <!-- <button type="button"><span>copy</span></button> -->
      </header>
      <prism language="svg" :code="svg.icon" />
    </div>
  </article>
</template>
<script>
import prism from 'vue-prismjs';
import svgs from './svg.data';

export default {
  components: { prism },
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
