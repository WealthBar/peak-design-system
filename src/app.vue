<template>
  <body>
    <banner @menu="toggleMenu"></banner>
    <side-menu :opened="menuDisplay" @close="toggleMenu">
      <ul slot="content"  class="side-menu-content">
        <li><router-link @click.native="toggleMenu" to="/">Typography</router-link></li>
        <li><router-link @click.native="toggleMenu" to="/components/icons">icons</router-link></li>
        <li><router-link @click.native="toggleMenu" to="/components/modalexample">Modal</router-link></li>
        <li><router-link @click.native="toggleMenu" to="/components/contextmenuexample">Context Menu</router-link></li>
        <li><router-link @click.native="toggleMenu" to="/components/sidemenuexample">Side Menu</router-link></li>
        <li><router-link @click.native="toggleMenu" to="/components/toggleswitchexample">Toggle switch</router-link></li>
       <!-- <li><router-link :to="example.path">{{example.name}}</router-link></li>-->
      </ul>
    </side-menu>

    <router-view></router-view>
  </body>
</template>

<script>
import { banner, sideMenu } from '@/components';

export default {
  name: 'app',
  components: { banner, sideMenu },
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
