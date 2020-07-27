<template>
  <main>
    <header role="banner" class="banner flat">
      <div class="banner-content full">
        <div class="banner-masthead">
          <button type="button" class="subtle icon dark">
            <svg viewBox="0 0 32 32">
              <rect x="3" y="15" width="26" height="2" />
              <rect x="3" y="6" width="26" height="2" />
              <rect x="3" y="24" width="26" height="2" />
            </svg>
          </button>
          <router-link to="/">
            <img class="wb-logo" src="~@/assets/logo.svg" alt="WealthBar" />
          </router-link>
        </div>
      </div>
    </header>
    <div id="app-view" :class="{'nav-open': navOpen}">
      <div class="side-menu">
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
              <li><router-link to="/form-patterns/input">Input Layout</router-link></li>
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
            </ul>

            <li><router-link to="/workflows">Workflows</router-link></li>
            <li><router-link to="/tabs">Tab Navigation</router-link></li>
            <li><router-link to="/tables">Tables</router-link></li>
            <li><router-link to="/posts">Posts</router-link></li>
            <li><router-link to="/svg">SVG Icons</router-link></li>
          </ul>
        </nav>
      </div>
      <div class="page"><router-view /></div>
    </div>
  </main>
</template>

<script>
import { mapGetters, mapActions } from '@/lib/vue';

export default {
  data() {
    return {
      navOpen: true,
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
      this.navOpen = !this.navOpen;
    },
  },
};
</script>

<style lang="scss">
@import "~@wealthbar/peak-style/scss/base/index";
@import "~@wealthbar/peak-style/scss/patterns/index";
@import "peak-states";

main {
  margin: auto;
}

#app-view {
  display: flex;

  &.nav-open {
    .side-menu {
      width: auto;
    }
  }
}

.side-menu {
  width: 0;
  flex: 0 0 auto;
  min-height: 100vh;
  transition: all 0.3s ease-out;
  background-color: $neutral-50;
  border-right: 1px solid $neutral-100;
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

  :first-child {
    border-radius: 0.25rem 0 0 0.25rem;
  }
  :last-child {
    border-radius: 0 0.25rem 0.25rem 0;
  }
}

.main-navigation {
  list-style: none;
  width: 16rem;

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
  .coming-soon { color: $pearl-300; }
}

.menu-header {
  a:hover,
  a:active,
  a:focus {
    background-color: transparent;
  }
  .toggles {
    padding: 0 1rem;
  }
  .wb-logo {
    height: 1.6rem;
    width: 10rem;
    margin: 1rem 1rem 0;
  }
}

.wb-logo {
  height: 1.6rem;
  width: 10rem;
}

.page {
  display: flex;
  width: 100%;
}

#menu-toggle {
  position: absolute;
  top: 1rem;
  right: 1rem;
}

.coming-soon {
  color: $pearl-500;
}
</style>
