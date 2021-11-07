<template>
  <div class="product-detail uk-section uk-section-default">
    <div class="uk-container">
      <div class="uk-grid-match uk-child-width-1-3@m" uk-grid>
        <div>
          <img :src="product.image" alt="Product Image" />
        </div>
        <div>
          <h3>
            {{ product.title }}
          </h3>
          <p>{{ product.description }}</p>

          <h3>Key Features</h3>
          <ul class="uk-list uk-list-circle">
            <li>Test</li>
            <li>Test</li>
            <li>Test</li>
            <li>Test</li>
          </ul>
        </div>
        <div>
          <h3>What our Users say</h3>
          <div class="uk-card uk-card-secondary uk-card-small">
            <div class="uk-card-header">
              <h3 class="uk-card-title">Big Boy 95</h3>
            </div>
            <div class="uk-card-body">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Omnis consectetur veritatis deserunt quaerat ea
                corporis impedit, maiores mollitia aut. Deleniti,
                soluta amet. Praesentium voluptas amet a atque
                voluptatibus doloremque odio.
              </p>
            </div>
            <div class="uk-card-footer">
              <p>
                <time datetime="2016-04-01T19:00"
                  >April 01, 2016</time
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="uk-container uk-margin-large">
      <h3>Interested?</h3>
      <p>Book an appointment with our experts</p>
      <button
        id="appointmentButton"
        class="
          uk-button uk-button-primary uk-button-large uk-margin-medium
        "
      >
        Book Appointment
      </button>
    </div>
  </div>
</template>

<script>
// import { getProductById } from '../helpers/api.js';
export default {
  name: 'ProductDetail',
  data: function () {
    return {
      product: {
        id: 'asdf',
        title: 'Running Insole',
        description:
          'The bespoke insole matched to your footprint ensures you always retain the perfect physique in your running shoe.',
        image:
          'https://images.ctfassets.net/9eeicl4ji0wj/5XTKAbK2vFU1uIhBEEEfpI/ddfb7188e79e2a1504721ed53962082e/running-insole-320px-1.png',
      },
    };
  },
  computed: {
    productId() {
      return this.$route.params.productId;
    },
  },
  async created() {
    // this.product = await getProductById(this.productId);
  },
};
</script>

<style scoped>
.product-detail {
  background-color: black;
}
.product-detail h1,
h3 {
  color: white;
}

#appointmentButton {
  background-color: #ff1e00;
  color: white;
}
</style>
