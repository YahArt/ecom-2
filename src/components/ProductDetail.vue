<template>
  <div>
    <Overlay v-show="productDetailsLoading" />
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
          </div>
          <div>
            <h3>Key Features</h3>
            <ul class="uk-list uk-list-circle uk-list-collapse">
              <li
                v-for="feature in product.keyFeatures"
                :key="feature"
              >
                {{ feature }}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="uk-container uk-margin-medium">
        <h3>What our Users say</h3>
        <div
          class="
            uk-child-width-1-3@m
            uk-grid-small
            uk-padding-small
            uk-grid-match
          "
          uk-grid
        >
          <div
            v-for="comment in product.comments"
            :key="comment.id"
            class="uk-card uk-card-secondary uk-card-small"
          >
            <div class="uk-card-header">
              <h3 class="uk-card-title">{{ comment.user }}</h3>
            </div>
            <div class="uk-card-body">
              <p>
                {{ comment.message }}
              </p>
            </div>
            <div class="uk-card-footer">
              <p>
                <time :datetime="comment.date">{{
                  comment.date
                }}</time>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="uk-container uk-margin-medium">
        <h3>Interested?</h3>
        <p>Book an appointment with our experts</p>
        <button
          v-on:click="navigateToAppointment"
          id="appointmentButton"
          class="
            uk-button
            uk-button-primary
            uk-button-large
            uk-margin-large
          "
        >
          Book Appointment
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { getProductById } from '../helpers/api.js';
import Overlay from './Overlay.vue';

export default {
  name: 'ProductDetail',
  components: { Overlay },
  data: function () {
    return {
      product: {},
      productDetailsLoading: true,
    };
  },
  computed: {
    productId() {
      return this.$route.params.productId;
    },
  },
  methods: {
    navigateToAppointment: function () {
      this.$router.push(`/appointment/${this.product.id}`);
    },
  },
  async created() {
    this.product = await getProductById(this.productId);
    this.productDetailsLoading = false;
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
