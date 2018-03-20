<template>
  <div id="app-view">
    <div class="side-menu">
      <div class="logo">
        <router-link to="/"><img class="wb-logo" src="~@//assets/logo.svg"></router-link>
      </div>
      <input v-model="search" placeholder="Search">
      <div class="units-container">
        <p>Units</p>
        <ul class="unit-selector" >
          <li v-for="unit in units" :key="unit.id" v-bind:class="{ active: unit.id === selected}" @click="selected = unit.id, toggleUnits(unit.id)">{{unit.id}}</li>
        </ul>
      </div>
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
      toggleUnits(unit) {
        console.log(unit);
      },
    },
  };
</script>

<style lang="scss">
  @import 'style.scss';

  main {
    margin: auto;
  }

  #app-view {
    display: flex;
    height: 100%;
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
    padding: $spacing-small;
    margin-bottom: $spacing-med;
  }

  .wb-logo {
    height: 1.6rem;
    width: 100%;
  }

  .units-container {
    margin: $spacing-small 0;
    display: flex;
    align-items: center;

    p {
      margin-right: $spacing-small;
    }
  }

  .unit-selector {
    display: flex;
    border: 1px solid $brand-lightest;
    border-radius: $spacing-tiny;
    padding: 0;

    li {
      padding: 0 $spacing-tiny;
      color: $brand;
      font-size: 14px;
    }
  }

  li.active {
    background-color: $brand;
    color: $white;
  }

  .active.unit-selector {
    background-color: $brand;
    p { color: $white; }
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
