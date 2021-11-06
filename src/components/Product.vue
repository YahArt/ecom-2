<template>
  <div>
    <div class="uk-card uk-card-small uk-card-secondary">
      <div class="uk-card-header">
        <h3 class="uk-card-title">{{ product.title }}</h3>
      </div>
      <div class="uk-card-body">
        <p>{{ product.description }}</p>
        <img :src="product.image" alt="Product Image" />
      </div>
      <div class="uk-card-footer">
        <button
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
export default {
  name: 'Product',
  props: {
    product: {},
  },
};
</script>

<style scoped>
#discoverButton {
  background-color: #ff1e00;
  color: white;
}
</style>
