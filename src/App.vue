<template>
  <div id="app">
    <Header />
  </div>
</template>

<script>
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    Header
  },
  async created() {
  // GET request using fetch with async/await
  const response = await fetch("https://api.npms.io/v2/search?q=vue");
  const data = await response.json();
  console.log(data.total);
}
}
</script>



<style>
#app {
  font-family: 'Saira', Helvetica, Arial, Lucida, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: black;
}
</style>
