<template>
  <article class="components-page">
    <nav>
      <ul>
        <li><router-link to="/">Login</router-link></li>
        <li><router-link to="/components/typography">Typography</router-link></li>
        <li><router-link to="/components/modalexample">Modal</router-link></li>
        <li><router-link to="/components/contextmenuexample">Context Menu</router-link></li>
        <li><router-link to="/components/sidemenuexample">Side Menu</router-link></li>
        <li><router-link to="/components/toggleswitchexample">Toggle switch</router-link></li>
       <!-- <li><router-link :to="example.path">{{example.name}}</router-link></li>-->
      </ul>
    </nav>
    <router-view></router-view>
  </article>
</template>
