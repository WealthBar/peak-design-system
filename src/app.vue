<template>
  <main>
    <div id="app-view" :class="{'nav-open': navOpen}">
      <div class="side-menu">
        <div class="logo">
          <router-link to="/"><img class="wb-logo" src="~@/assets/logo.svg"></router-link>
        </div>
        <div class="units-contianer">
          <label slot="label" class="label-inline">Units</label>
          <div class="unit-selector" slot="content">
            <a class="button outline"  v-for="unit in getUnits" @click="setUnit(unit)" :key="unit" :class="{'active': getSelectedUnit === unit}">{{unit}}</a>
          </div>
        </div>
        <nav class="main-navigation">
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
            <li><router-link to="buttons">Buttons</router-link></li>
            <li ><router-link class="coming-soon" to="">Inputs (Coming soon!)</router-link></li>
          </ul>
        </nav>
      </div>
      <div class="page">
        <!-- <button id="menu-toggle" type="button" class="outline" @click="toggleNav()">Menu</button> -->
        <router-view></router-view>
      </div>

    </div>
      <back-to-top visibleOffset="800">
      <svgicon name="arrow-up" height="1.25rem" width="1.25rem" color="#fff" alt="Arrow Icon"></svgicon>
    </back-to-top>
  </main>
</template>

<script>
  import '@/lib/icons/arrow-up';
  import '@/lib/icons/search';
  import { mapActions, mapGetters } from '@/lib/vue';
  import BackToTop from './components/back_to_top';


  export default {
    data() {
      return {
        navOpen: true,
      };
    },
    computed: {
      ...mapGetters(['getSelectedUnit', 'getUnits']),
    },
    methods: {
      ...mapActions(['setUnit']),
      toggleUnits(unit) {
        this.selected = unit;
      },
      toggleNav() {
        this.navOpen = !this.navOpen;
      },
    },
    components: { BackToTop },
  };
</script>

<style lang="scss">
  @import 'style.scss';

  main {
    margin: auto;
  }

  #app-view {
    display: flex;

    &.nav-open {
      .side-menu { width: auto; }
      // .page { transform: translateX(17.5rem); }
    }
  }

  .side-menu {
    // position: absolute;
    // top: 0;
    // left: 0;
    width: 0;
    flex: 0 0 auto;
    min-height: 100vh;
    overflow: hidden;
    transition: all 0.3s ease-out;
    background-color: $pearl-50;
    border-right: 1px solid $pearl-100;
  }

  .units-contianer {
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;
  }

  .unit-selector {
    display: flex;

    *:not(:last-child) {
      border-radius: 0;
      border-right: none;
    }

    :first-child { border-radius: 0.25rem 0 0 0.25rem; }
    :last-child { border-radius: 0 0.25rem 0.25rem 0; }
  }

  .main-navigation {
    list-style: none;

    a {
      text-decoration: none;
      color: $pearl-900;
      padding: 0.5rem 1rem;
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
    padding: 1rem;
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

  .page { flex: 1 1 auto; }

  #menu-toggle {
    position: absolute;
    top: 1rem;
    right: 1rem;
  }

  .coming-soon {
    color: $pearl-500;
  }

</style>
