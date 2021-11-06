<template>
  <div id="app">
    <Header />
    <ProductList />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import ProductList from './components/ProductList.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    ProductList,
  },
};
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
