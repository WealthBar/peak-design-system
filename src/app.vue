<template>
  <div id="app-view">
    <div class="side-menu">
      <div class="logo">
        <router-link to="/"><img class="wb-logo" src="~@//assets/logo.svg"></router-link>
      </div>
      <input v-model="search" placeholder="Search">
      <toggle-view>
        <p slot="label">Units</p>
        <ul slot="content" class="unit-selector">
          <li v-for="unit in units" @click="selected = unit.id, toggleUnits(unit.id)" :key="unit.id" :class="{'active': selected === unit.id}">{{unit.id}}</li>
        </ul>
      </toggle-view>
      <nav class="main-navigation">
      <h3>Visuals</h3>
        <ul>
          <li @click="navVisible"><router-link to="/typography">Typography</router-link></li>
          <ul v-if="toggleNav">
            <li class="secondary-link"><a href="#headers">Headers</a></li>
            <li class="secondary-link"><a href="#paragraphs">Paragraphs</a></li>
            <li class="secondary-link"><a href="#links">Links</a></li>
            <li class="secondary-link"><a href="#lists">Lists</a></li>
            <li class="secondary-link"><a href="#line">Line Length</a></li>
            <li class="secondary-link"><a href="#stack">Font Stack</a></li>
            <li class="secondary-link"><a href="#measurements">Measurements</a></li>
          </ul>
          <li><router-link to="">Colour</router-link></li>
        </ul>
        <h3>Components</h3>
        <ul>
          <li><router-link to="">Buttons</router-link></li>
          <li><router-link to="">Inputs</router-link></li>
        </ul>
      </nav>
    </div>
    <div class="pages">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import toggleView from './components/toggle_view';

  export default {
    data() {
      return {
        toggleNav: false,
        units: [
          { id: 'rem' },
          { id: 'px' },
        ],
        selected: 'px',
        search: '',
      };
    },
    methods: {
      navVisible() {
        this.toggleNav = !this.toggleNav;
      },
      // toggleUnits(unit) {
      //   // console.log(unit);
      // },
    },
    components: { toggleView },
  };
</script>

<style lang="scss">
  @import 'style.scss';

  main {
    margin: auto;
  }

  #app-view {
    display: flex;
    min-height: 100vw;
  }

  .side-menu {
    padding: $spacing-med $spacing-large;
    flex: 0 0 20vw;
    width: 17.5rem;
    background-color: $verylightgrey;
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

  .wb-logo {
    height: 1.6rem;
    width: 10rem;
  }

  .secondary-link {
    padding-left: $spacing;
  }

  .pages {
    flex: 1;
    height: 100%;
    margin: $spacing-med $spacing-large;
  }

</style>
