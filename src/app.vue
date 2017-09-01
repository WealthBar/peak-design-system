<template>
  <body>
    <banner @menu="toggleMenu"></banner>
    <side-menu :opened="menuDisplay" @close="toggleMenu">
      <ul slot="content"  class="side-menu-content">
        <li><router-link @click.native="toggleMenu" to="/">Typography</router-link></li>
        <li><router-link @click.native="toggleMenu" to="/components/icons">Icons</router-link></li>
        <li><router-link @click.native="toggleMenu" to="/components/loginexample">Login</router-link></li>
        <li><router-link @click.native="toggleMenu" to="/components/modalexample">Modal</router-link></li>
        <li><router-link @click.native="toggleMenu" to="/components/contextmenuexample">Context Menu</router-link></li>
        <li><router-link @click.native="toggleMenu" to="/components/sidemenuexample">Side Menu</router-link></li>
        <li><router-link @click.native="toggleMenu" to="/components/toggleswitchexample">Toggle switch</router-link></li>
       <!-- <li><router-link :to="example.path">{{example.name}}</router-link></li>-->
      </ul>
    </side-menu>
    <login v-if="isLoginDisplayed"></login>
    <router-view id="app" v-if="!isLoginDisplayed"></router-view>
  </body>
</template>

<script>
import { banner, login, sideMenu } from '@/components';
import { mapGetters } from '@/lib/vue';

export default {
  name: 'app',
  computed: {
    ...mapGetters(['isLoggedIn']),
    isLoginDisplayed() {
      return this.$route.meta.requiresAuth === true && this.isLoggedIn === false;
    },
  },
  components: { banner, login, sideMenu },
  data() {
    return {
      menuDisplay: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuDisplay = !this.menuDisplay;
    },
  },
};
</script>

<style lang="scss">
  @import 'style.scss';
</style>
