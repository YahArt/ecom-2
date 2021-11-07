<template>
  <div
    class="uk-child-width-1-3@m uk-grid-small uk-padding-small"
    uk-grid
  >
    <li v-bind:key="product.id" v-for="product in products">
      <Product v-bind:product="product" />
    </li>
  </div>
</template>

<script>
import Product from './Product.vue';
import { getProducts } from '../helpers/api.js';

export default {
  name: 'ProductList',
  props: {},
  data: function () {
    return {
      products: [],
    };
  },
  components: { Product },
  async created() {
    this.products = await getProducts();
  },
};
</script>

<style scoped></style>
