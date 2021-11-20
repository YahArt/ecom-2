<template>
  <div>
    <div class="product uk-card uk-card-large uk-card-secondary">
      <div class="uk-card-media-top">
        <img :src="product.image" alt="Product Image" />
      </div>
      <div class="uk-card-body">
        <h3 class="uk-card-title">
          {{ product.title }}
        </h3>
        <p>{{ product.description }}</p>
      </div>

      <div class="uk-card-footer">
        <button
          @click="navigateToDetail"
          id="discoverButton"
          class="uk-button uk-button-primary uk-button-large"
        >
          Discover
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { setCurrentProductId } from '../helpers/storageHelper.js';

export default {
  name: 'Product',
  props: {
    product: {},
  },
  methods: {
    navigateToDetail: function () {
      setCurrentProductId(this.product.id);
      this.$router.push(`/detail`);
    },
  },
};
</script>

<style scoped>
#discoverButton {
  background-color: #ff1e00;
  color: white;
}
</style>
