<template>
  <div>
    <div class="product uk-card uk-card-medium uk-card-secondary">
      <div class="uk-card-media-top">
        <img :src="product.image" alt="Product Image" />
      </div>
      <div class="uk-card-body">
        <h3 class="uk-card-title">
          {{ product.title }}
        </h3>
        <p>{{ product.description }}</p>

        <b>Choose your custom color</b>
        <div class="uk-margin-medium-top">
          <verte picker="square" model="rgb" v-model="color"></verte>
        </div>
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
import {
  setCurrentProductId,
  setCurrentColor,
} from '../helpers/storageHelper.js';
import 'verte/dist/verte.css';
import Verte from 'verte';

export default {
  name: 'Product',
  props: {
    product: {},
  },
  data: function () {
    return {
      color: '',
    };
  },
  components: { Verte },
  methods: {
    navigateToDetail: function () {
      setCurrentColor(this.color);
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

.verte__guide {
  height: 40px;
  width: 40px;
}
</style>
