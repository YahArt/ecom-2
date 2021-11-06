<template>
  <div
    class="
      uk-child-width-1-3@m
      uk-grid-small
      uk-grid-match
      uk-padding-small
    "
    uk-grid
  >
    <li v-bind:key="product.id" v-for="product in products">
      <Product v-bind:product="product" />
    </li>
  </div>
</template>

<script>
import Product from './Product.vue';

export default {
  name: 'ProductList',
  props: {},
  components: { Product },
  async created() {
    // GET request using fetch with async/await
    const response = await fetch(
      'https://api.npms.io/v2/search?q=vue',
    );
    const data = await response.json();
    console.log(data.total);
  },

  data() {
    return {
      products: [
        {
          id: 0,
          title: 'test',
          description: 'laksdjfalskjfaslkdfjslakjfd',
          image: 'http://placekitten.com/g/300/250',
        },
        {
          id: 1,
          title: 'test',
          description: 'laksdjfalskjfaslkdfjslakjfd',
          image: 'http://placekitten.com/g/300/250',
        },
        {
          id: 2,
          title: 'test',
          description: 'laksdjfalskjfaslkdfjslakjfd',
          image: 'http://placekitten.com/g/300/250',
        },
        {
          id: 3,
          title: 'test',
          description: 'laksdjfalskjfaslkdfjslakjfd',
          image: 'http://placekitten.com/g/300/250',
        },
      ],
    };
  },
};
</script>

<style scoped></style>
