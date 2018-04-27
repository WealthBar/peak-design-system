<template>
  <div id="app-view">
    <div class="side-menu">
      <div class="logo">
        <router-link to="/"><img class="wb-logo" src="~@/assets/logo.svg"></router-link>
      </div>
      <div class="placeholder-container">
        <span class="placeholder">
          <svgicon name="search" alt="search" height="1.5rem" width="1.5rem" />
          <span class="placeholder-label">{{ placeholder }}</span>
        </span>
        <input type="search" name="search" v-model="search">
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
          <li @click="navVisible"><router-link to="typography">Typography</router-link></li>
          <ul v-if="toggleNav">
            <li class="secondary-link"><a href="#headers">Headers</a></li>
            <li class="secondary-link"><a href="#paragraphs">Paragraphs</a></li>
            <li class="secondary-link"><a href="#links">Links</a></li>
            <li class="secondary-link"><a href="#lists">Lists</a></li>
            <li class="secondary-link"><a href="#line-length">Line Length</a></li>
            <li class="secondary-link"><a href="#font-stack">Font Stack</a></li>
            <li class="secondary-link"><a href="#measurements">Measurements</a></li>
          </ul>
          <li><router-link to="">Colour</router-link></li>
        </ul>
        <h5>Components</h5>
        <ul>
          <li><router-link to="">Buttons</router-link></li>
          <li><router-link to="">Inputs</router-link></li>
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
    data() {
      return {
        toggleNav: false,
        placeholder: 'Search',
        search: '',
      };
    },
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

      navVisible() {
        this.toggleNav = !this.toggleNav;
      },
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

  .placeholder-container {
    position: relative;

    .placeholder {
      position: absolute;
      z-index: 2;
      top: 0.9rem;
      color: #777;

      .placeholder-label {
        font-size: 14px;
      }
    }

    .svg-icon {
      padding-left: 0.5rem;
      text-align: center;
      line-height: 30px;
      border-radius: 50px;
    }
  }

  .side-menu {
    padding: $spacing-med $spacing-large;
    flex: 0 0 20vw;
    min-width: 17.5rem;
    max-width: 17.5rem;
    background-color: $lightgrey;
    left: 0;
    top: 0;
    overflow: hidden;
    pointer-events: auto;
    border-right: 1px solid $grey;
  }

  .logo {
    padding: $spacing-small 0;
    margin-bottom: $spacing-med;
  }

  .logo > a:hover,
  a:active {
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
  }

</style>
