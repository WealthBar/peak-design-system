<template>
  <main>
    <header role="banner" class="banner flat">
      <div class="banner-content full">
        <div class="banner-masthead">
          <button type="button" class="subtle icon dark" @click="toggleNav()">
            <svg viewBox="0 0 32 32">
              <rect x="3" y="15" width="26" height="2" />
              <rect x="3" y="6" width="26" height="2" />
              <rect x="3" y="24" width="26" height="2" />
            </svg>
          </button>
          <router-link to="/" class="logo">
            <img class="wb-logo" src="~@/assets/logo.svg" alt="WealthBar Peak Design System Home" />
          </router-link>
        </div>
      </div>
    </header>
    <div id="app-view" :class="{'nav-closed': navClosed}">
      <nav class="main-navigation">
        <ul>
          <li>
            <router-link to="/typography">
              Typography
              <svg viewBox="0 0 32 32" class="chevron" :class="{'active': $route.path.split('/')[1] === 'typography'}">
                <polygon points="11,28 23,16 11,4" />
              </svg>
            </router-link>
          </li>
          <ul v-if="$route.path.split('/')[1] === 'typography'" class="secondary-nav">
            <li><router-link to="/typography/headers">Headers</router-link></li>
            <li><router-link to="/typography/body">Body Text</router-link></li>
            <li><router-link to="/typography/lists">Lists</router-link></li>
            <li><router-link to="/typography/font-stack">Font Stack</router-link></li>
          </ul>
          <li><router-link to="/colour">Colour</router-link></li>
          <li><router-link to="/buttons">Links &amp; Buttons</router-link></li>

          <li>
            <router-link to="/forms">
              Forms
              <svg viewBox="0 0 32 32" class="chevron" :class="{'active': $route.path.split('/')[1] === 'forms'}">
                <polygon points="11,28 23,16 11,4" />
              </svg>
            </router-link>
          </li>
          <ul v-if="$route.path.split('/')[1] === 'forms'" class="secondary-nav">
            <li><router-link to="/forms/input">Text Type Inputs</router-link></li>
            <li><router-link to="/forms/non-text-input">Non-Text Inputs</router-link></li>
            <li><router-link to="/forms/non-input">Other Form Elements</router-link></li>
          </ul>

          <li>
            <router-link to="/form-patterns">
              Form Patterns
              <svg viewBox="0 0 32 32" class="chevron" :class="{'active': $route.path.split('/')[1] === 'form-patterns'}">
                <polygon points="11,28 23,16 11,4" />
              </svg>
            </router-link>
          </li>
          <ul v-if="$route.path.split('/')[1] === 'form-patterns'" class="secondary-nav">
            <li><router-link to="/form-patterns/input">Input Options</router-link></li>
            <li><router-link to="/form-patterns/inline-button">Inline Button</router-link></li>
            <li><router-link to="/form-patterns/checkbox-radio">Checkbox &amp; Radio</router-link></li>
            <li><router-link to="/form-patterns/layout-patterns">Layout Patterns</router-link></li>
            <li><router-link to="/form-patterns/invalid-errors">Invalid &amp; Errors</router-link></li>
          </ul>

          <li>
            <router-link to="/structure">
              Layout Structures
              <svg viewBox="0 0 32 32" class="chevron" :class="{'active': $route.path.split('/').includes('structure')}">
                <polygon points="11,28 23,16 11,4" />
              </svg>
            </router-link>
          </li>
          <ul v-if="$route.path.split('/')[1] === 'structure'" class="secondary-nav">
            <li><router-link to="/structure/containers">Containers</router-link></li>
            <li><router-link to="/structure/banners">Banners</router-link></li>
          </ul>

          <li>
            <router-link to="/layout">
              Layout Styles
              <svg viewBox="0 0 32 32" class="chevron" :class="{'active': $route.path.split('/')[1] === 'layout'}">
                <polygon points="11,28 23,16 11,4" />
              </svg>
            </router-link>
          </li>
          <ul v-if="$route.path.split('/')[1] === 'layout'" class="secondary-nav">
            <li><router-link to="/layout/card">Card</router-link></li>
            <li><router-link to="/layout/notice">Notice</router-link></li>
            <li><router-link to="/layout/icon-content">Icon Content</router-link></li>
            <li><router-link to="/layout/card-list">Card List</router-link></li>
          </ul>

          <li><router-link to="/modals">Modals</router-link></li>
          <li><router-link to="/workflows">Workflows</router-link></li>
          <li><router-link to="/tabs">Tab Navigation</router-link></li>
          <li><router-link to="/tables">Tables</router-link></li>
          <li><router-link to="/posts">Posts</router-link></li>
          <li><router-link to="/svg">SVG Icons</router-link></li>
        </ul>
      </nav>
      <div class="page"><router-view /></div>
    </div>
  </main>
</template>

<script>
import { mapGetters, mapActions } from '@/lib/vue';

export default {
  data() {
    return {
      navClosed: false,
    };
  },
  computed: {
    ...mapGetters([
      'getSelectedUnit',
      'getUnits',
      'getSelectedScreen',
      'getScreens',
    ]),
  },
  methods: {
    ...mapActions(['setScreen', 'setUnit']),
    toggleUnit() {
      this.setUnit(this.getSelectedUnit === 'px' ? 'rem' : 'px');
    },
    toggleScreen() {
      this.setScreen(
        this.getSelectedScreen === 'desktop' ? 'mobile' : 'desktop',
      );
    },
    toggleNav() {
      this.navClosed = !this.navClosed;
    },
  },
};
</script>

<style lang="scss">
@import "~@wealthbar/peak-style/scss/base/index";
@import "~@wealthbar/peak-style/scss/patterns/index";
@import "peak-states";


#app-view {
  display: flex;
  &.nav-closed {
    .main-navigation {
        left: -18rem;
        width: 0rem;
    }
  }
}

.logo {
  display: flex;
  img {
    height: 1.6rem;
    width: 10rem;
    margin: 0 0.5rem;
  }
}

.main-navigation {
  min-height: 100vh;
  transition: all 0.3s ease-out;
  background-color: $neutral-50;
  border-right: 1px solid $neutral-100;
  list-style: none;
  left: 0rem;
  width: 18rem;

  a {
    text-decoration: none;
    color: $pearl-900;
    padding: 0.5rem 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .chevron {
      width: .75rem;
      margin-left: .5rem;
      transition: transform 200ms;
      &.active { transform: rotate(90deg); }
    }

    &:hover, &:focus, &.router-link-active {
      background: $primary-50;
      color: $primary-500;
    }
  }
  .secondary-nav {
    border-top: 1px solid $neutral-300;
    border-bottom: 1px solid $neutral-300;
    a { padding-left: 2rem }
  }
}

.page {
  display: flex;
  flex: 1 1 100%;
}
</style>
