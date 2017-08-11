<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>There's Nothing Here</h2>
    <a href="/">Return Home</a>
  </div>
</template>

<script>
export default {
  route: {
    path: '*',
  },

  head: {
    title: 404,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
