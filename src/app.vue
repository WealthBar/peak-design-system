<template>
  <div id="app-view">
    <div class="side-menu">
      <div class="logo">
        <router-link to="/"><img class="wb-logo" src="~@/assets/logo.svg"></router-link>
      </div>
      <toggle-view>
        <label slot="label" class="label-inline">Units</label>
        <div slot="content" class="unit-selector">
          <a v-for="unit in getUnits" @click="setUnit(unit)" :key="unit" :class="{'active': getSelectedUnit === unit}">{{unit}}</a>
        </div>
      </toggle-view>
      <nav class="main-navigation">
      <h5>Visuals</h5>
        <ul>
          <li><router-link to="typography">Typography</router-link></li>
          <ul v-if="$route.path === '/typography'">
            <li class="secondary-link"><a href="#headers">Headers Text</a></li>
            <li class="secondary-link"><a href="#body">Body Text</a></li>
            <li class="secondary-link coming-soon"><a href="#links">Links (Coming soon!)</a></li>
            <li class="secondary-link"><a href="#lists">Lists</a></li>
            <li class="secondary-link"><a href="#line-length">Line Length</a></li>
            <li class="secondary-link"><a href="#font-stack">Font Stack</a></li>
            <li class="secondary-link"><a href="#measurements">Measurements</a></li>
          </ul>
          <li><router-link to="colour">Colour</router-link></li>
        </ul>
        <h5>Components</h5>
        <ul>
          <li><router-link to="buttons">Buttons</router-link></li>
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

<style lang="scss">
  @import 'style.scss';

  main {
    margin: auto;
  }

  #app-view {
    display: flex;
    min-height: 100vh;
  }

  .side-menu {
    padding: 0.75rem;
    min-width: 17.5rem;
    background-color: $pearl-50;
    border-right: 1px solid $pearl-100;
  }

  .unit-selector { list-style: none; }

  .main-navigation {
    list-style: none;

    a {
      text-decoration: none;
      color: $pearl-900;
      padding: 0.5rem;
      margin: 0.125rem 0;
      display: block;

      &:hover, &:focus {
        background: $jade-50;
        color: $jade-500;
      }
    }
    .coming-soon { color: $pearl-300; }
    ul { list-style: none; }
  }

  .logo {
    padding: 0.25rem 0;
    margin-bottom: 0.5rem;

    a:hover,
    a:active,
    a:focus {
      background-color: transparent;
    }
  }

  .wb-logo {
    height: 1.6rem;
    width: 10rem;
  }

  .pages { flex: 1 1 100%; }

  .coming-soon {
    color: $pearl-500;
  }

</style>
