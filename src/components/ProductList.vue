<template>
  <div>
    <Overlay v-show="productsLoading" />
    <div
      class="
        uk-child-width-1-3@m
        uk-grid-small
        uk-padding-small
        uk-grid-match
      "
      uk-grid
    >
      <Product
        v-for="product in products"
        v-bind:key="product.id"
        v-bind:product="product"
      />
    </div>
  </div>
</template>

<script>
import Product from './Product.vue';
import Overlay from './Overlay.vue';
import { getProducts } from '../helpers/api.js';

export default {
  name: 'ProductList',
  props: {},
  data: function () {
    return {
      products: [],
      productsLoading: true,
    };
  },
  components: { Product, Overlay },
  async created() {
    this.products = await getProducts();
    this.productsLoading = false;
  },
};
</script>

<style scoped></style>
