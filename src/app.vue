<template>
  <div id="app-view">
    <div class="side-menu">
      <div class="logo">
        <router-link to="/"><img class="wb-logo" src="~@/assets/logo.svg"></router-link>
      </div>
      <toggle-view>
        <p slot="label">Units</p>
        <ul slot="content" class="unit-selector">
          <li v-for="unit in getUnits" @click="setUnit(unit)" :key="unit" :class="{'active': getSelectedUnit === unit}">{{unit}}</li>
        </ul>
      </toggle-view>
      <nav class="main-navigation">
      <h5>Visuals</h5>
        <ul>
          <li><router-link to="typography">Typography</router-link></li>
          <ul v-if="$route.path === '/typography'">
            <li class="secondary-link"><a href="#headers">Headers</a></li>
            <li class="secondary-link"><a href="#paragraphs">Paragraphs</a></li>
            <li class="secondary-link coming-soon"><a href="#links">Links (Coming soon!)</a></li>
            <li class="secondary-link"><a href="#lists">Lists</a></li>
            <li class="secondary-link"><a href="#line-length">Line Length</a></li>
            <li class="secondary-link"><a href="#font-stack">Font Stack</a></li>
            <li class="secondary-link"><a href="#measurements">Measurements</a></li>
          </ul>
          <li><router-link class="coming-soon" to="">Colour (Coming soon!)</router-link></li>
        </ul>
        <h5>Components</h5>
        <ul>
          <li><router-link class="coming-soon" to="">Buttons (Coming soon!)</router-link></li>
          <li ><router-link class="coming-soon" to="">Inputs (Coming soon!)</router-link></li>
        </ul>
      </nav>
    </div>
    <div class="pages">
      <router-view></router-view>
    </div>
    <back-to-top visibleOffset="800">
      <svgicon name="arrow-up" height="1.25rem" width="1.25rem" color="#fff" alt="Arrow Icon"></svgicon>
    </back-to-top>
  </div>
</template>

<script>
  import '@/lib/icons/arrow-up';
  import '@/lib/icons/search';
  import { mapActions, mapGetters } from '@/lib/vue';
  import toggleView from './components/toggle_view';
  import BackToTop from './components/back_to_top';


  export default {
    updated() {
      if (this.$route.name === 'root') {
        this.toggleNav = false;
      }
    },
    computed: {
      ...mapGetters(['getSelectedUnit', 'getUnits']),
    },
    methods: {
      ...mapActions(['setUnit']),
      toggleUnits(unit) {
        this.selected = unit;
      },
    },
    components: { toggleView, BackToTop },
  };
</script>

<style lang="scss" scoped>
  @import 'style.scss';

  main {
    margin: auto;
  }

  #app-view {
    display: flex;
  }

  .side-menu {
    padding: $spacing-med $spacing-large;
    min-width: 17.5rem;
    max-width: 17.5rem;
    position: fixed;
    height: 100%;
    background-color: $pearl-50;
    left: 0;
    top: 0;
    overflow: hidden;
    pointer-events: auto;
    border-right: 1px solid $pearl-100;
    box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.1);
    opacity: 0.75;
  }

  .logo {
    padding: $spacing-small 0;
    margin-bottom: $spacing-med;
  }

  .logo > a:hover,
  a:active,
  a:focus {
    background-color: transparent;
  }

  .wb-logo {
    height: 1.6rem;
    width: 10rem;
  }

  .secondary-link {
    padding-left: $spacing;
  }

  .pages {
    flex: 1;
    width: 100%;
    margin-left: 17.5rem;
  }

  .coming-soon {
    color: $pearl-500;
  }

</style>
