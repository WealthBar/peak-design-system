<template>
  <article class="container">
    <h1>Colour</h1>
    <p>WealthBar’s fresh colour palette fits our light, anti-institution personality without being too young or too loud. Colour also plays an important functional role. When properly used, colour can highlight, de-emphasize, contrast, or add emotion to our communication and UI.</p>

    <h2>Palette</h2>

    <hr>

    <h3>Colour Weight</h3>
    <p>In an effort to bulletproof our system of colours, we use weights from 50 to 900, similar to font weights. Weight is defined by the contrast ratio of the colour against white, allowing us to convey relevant weights across our entire colour palette. This means <code>$pos-50</code> and <code>$neg-50</code> should be pretty close in weight, even if they’re on opposite ends of the colour spectrum.</p>
    <li><router-link to="./">WealthBar</router-link></li>
    <li><router-link to="assante">Assante Connect</router-link></li>
    <router-view></router-view>
  </article>
</template>
<script>
import wealthbar from './colour/index.vue'
import assante from './colour/assante.vue'

// const router = new VueRouter({
//   routes: [
//     { path: '/', component: User }
//   ]
// })

export default {
  // routes: [
  //   { path: '/colour', component: wealthbar  },
  //   { path: '/colour/assante', component: assante },
  // ]
};

</script>
