<template>
  <main>
    <div id="app-view" :class="{'nav-open': navOpen}">
      <div class="side-menu">
        <div class="menu-header">
          <router-link to="/"><img class="wb-logo" src="~@/assets/logo.svg"></router-link>

          <div class="toggles">
            <label for="unit-toggle">Units</label>
            <button id="unit-toggle" class="toggle" @click="toggleUnit">
              <span v-for="unit in getUnits" :key="unit" :data-active="getSelectedUnit === unit">{{ unit }}</span>
            </button>

            <label for="screen-toggle">Screen Size</label>
            <button id="screen-toggle" class="toggle" @click="toggleScreen">
              <span v-for="screen in getScreens" :key="screen" :data-active="getSelectedScreen === screen">{{ screen }}</span>
            </button>
          </div>
          <hr>
        </div>

        <nav class="main-navigation">
          <ul>
            <li>
              <router-link to="typography">
                Typography
                <svg viewBox="0 0 32 32" class="reveal-subnav-icon" :class="{'active': $route.path === '/typography'}">
                  <polygon points="11,28 23,16 11,4" />
                </svg>
              </router-link>
            </li>
            <ul v-if="$route.path === '/typography'">
              <li class="secondary-link">
                <a href="#units">Units</a>
              </li>
              <li class="secondary-link">
                <a href="#headers">Headers Text</a>
              </li>
              <li class="secondary-link">
                <a href="#body">Body Text</a>
              </li>
              <li class="secondary-link">
                <a href="#lists">Lists</a>
              </li>
              <li class="secondary-link">
                <a href="#line-length">Line Length</a>
              </li>
              <li class="secondary-link">
                <a href="#font-stack">Font Stack</a>
              </li>
            </ul>
            <li><router-link to="colour">Colour</router-link></li>
            <li><router-link to="buttons">Links &amp; Buttons</router-link></li>
            <li>
              <router-link to="inputs">
                Form Elements
                <svg viewBox="0 0 32 32" class="reveal-subnav-icon" :class="{'active': $route.path === '/inputs'}">
                  <polygon points="11,28 23,16 11,4" />
                </svg>
              </router-link>
            </li>
            <ul v-if="$route.path === '/inputs'">
              <li class="secondary-link">
                <a href="#text">Text inputs</a>
              </li>
              <li class="secondary-link">
                <a href="#non-text">Non-text inputs</a>
              </li>
              <li class="secondary-link">
                <a href="#non-input">Non-input elements</a>
              </li>
              <li class="secondary-link">
                <a href="#spacing">Input spacing structure</a>
              </li>
            </ul>
            <li>
              <router-link to="input_patterns">
                Form Patterns
                <svg viewBox="0 0 32 32" class="reveal-subnav-icon" :class="{'active': $route.path === '/input_patterns'}">
                  <polygon points="11,28 23,16 11,4" />
                </svg>
              </router-link>
            </li>
            <ul v-if="$route.path === '/input_patterns'">
              <li class="secondary-link">
                <a href="#general">General Input Patterns</a>
              </li>
              <li class="secondary-link">
                <a href="#inline">Inline Button Patterns</a>
              </li>
              <li class="secondary-link">
                <a href="#check-radio">Checkbox &amp; Radio Patterns</a>
              </li>
              <li class="secondary-link">
                <a href="#layout">Input Layout Patterns</a>
              </li>
              <li class="secondary-link">
                <a href="#invalid">Invalid &amp; error states</a>
              </li>
            </ul>
            <li>
              <router-link to="svg">SVG Icons</router-link>
            </li>

            <li>
              <router-link to="/layout_structures">
                Layout Structures
                <svg viewBox="0 0 32 32" class="reveal-subnav-icon" :class="{'active': $route.path === '/layout_structures'}">
                  <polygon points="11,28 23,16 11,4" />
                </svg>
              </router-link>
            </li>
            <ul v-if="$route.path === '/layout_structures'">
              <li class="secondary-link">
                <a href="#container">Container</a>
              </li>
              <li class="secondary-link">
                <a href="#banner">Banner</a>
              </li>
            </ul>

            <li>
              <router-link to="/layout_styles">
                Layout Styling
                <svg viewBox="0 0 32 32" class="reveal-subnav-icon" :class="{'active': $route.path === '/layout_styles'}">
                  <polygon points="11,28 23,16 11,4" />
                </svg>
              </router-link>
            </li>
            <ul v-if="$route.path === '/layout_styles'">
              <li class="secondary-link">
                <a href="#card">Card</a>
              </li>
              <li class="secondary-link">
                <a href="#notice">Notice</a>
              </li>
              <li class="secondary-link">
                <a href="#post">Post</a>
              </li>
            </ul>

            <li>
              <router-link to="/workflows">
                Workflows
                <svg viewBox="0 0 32 32" class="reveal-subnav-icon" :class="{'active': $route.path === '/workflows'}">
                  <polygon points="11,28 23,16 11,4" />
                </svg>
              </router-link>
            </li>
            <ul v-if="$route.path === '/workflows'">
              <li class="secondary-link">
                <a href="#setup">Setup</a>
              </li>
              <li class="secondary-link">
                <a href="#step">Steps</a>
              </li>
              <li class="secondary-link">
                <a href="#animation">Animation</a>
              </li>
            </ul>
            <li>
              <router-link to="navigation">Navigation</router-link>
            </li>
          </ul>
        </nav>
      </div>
      <div class="page">
        <router-view />
      </div>
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
    ...mapGetters(['getSelectedUnit', 'getUnits', 'getSelectedScreen', 'getScreens']),

  },
  methods: {
    ...mapActions(['setScreen', 'setUnit']),
    toggleUnit() {
      this.setUnit(this.getSelectedUnit === 'px' ? 'rem' : 'px');
    },
    toggleScreen() {
      this.setScreen(this.getSelectedScreen === 'desktop' ? 'mobile' : 'desktop');
    },
    toggleNav() {
      this.navOpen = !this.navOpen;
    },
  },
};
</script>

<style lang="scss">
  @import '~@wealthbar/peak-style/scss/base/index';
  @import '~@wealthbar/peak-style/scss/patterns/index';
  @import 'peak-states';

  main {
    margin: auto;
  }

  #app-view {
    display: flex;

    &.nav-open {
      .side-menu { width: auto; }
    }
  }

  .side-menu {
    width: 0;
    flex: 0 0 auto;
    min-height: 100vh;
    // overflow: hidden;
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
      display: flex;
      align-items: center;

      .reveal-subnav-icon {
        width: .75rem;
        margin-left: .5rem;

        transition: transform 200ms;
        &.active {
          transform: rotate(90deg);
        }
      }

      &:hover, &:focus {
        background: $primary-50;
        color: $primary-500;
      }
    }
    .coming-soon { color: $pearl-300; }
    ul { list-style: none; }
  }

  .menu-header {
    a:hover,
    a:active,
    a:focus {
      background-color: transparent;
    }
    .toggles {padding: 0 1rem;}
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
