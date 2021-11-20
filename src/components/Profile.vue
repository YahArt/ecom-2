<template>
  <div class="profile uk-container uk-container-expand">
    <h1>Your Orders</h1>

    <div>
      <Overlay v-show="ordersLoading" />
      <div
        v-show="noOrders"
        class="margin-large-top margin-large-bottom"
      >
        <h3>Looks like you do not have any paid orders</h3>
        <button
          @click="navigateToHome"
          id="discoverButton"
          class="
            uk-button
            uk-button-primary
            uk-button-large
            uk-margin-large-top
            uk-margin-large-bottom
          "
        >
          Discover our Products
        </button>
      </div>

      <div
        class="
          uk-child-width-1-3@m
          uk-grid-small
          uk-padding-small
          uk-grid-match
        "
        uk-grid
      >
        <Order
          v-for="order in orders"
          v-bind:key="order.id"
          v-bind:order="order"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Order from './Order.vue';
import Overlay from './Overlay.vue';
import { getOrders } from '../helpers/storageHelper.js';
import { getProductsByIds } from '../helpers/api.js';
export default {
  name: 'Profile',
  props: {},
  components: { Order, Overlay },
  data() {
    return {
      ordersLoading: true,
      orders: [],
    };
  },
  methods: {
    navigateToHome: function () {
      this.$router.push(`/`);
    },
  },
  computed: {
    noOrders: function () {
      return this.orders.length === 0;
    },
  },
  created: async function () {
    const allOrders = getOrders();
    const productIds = allOrders.map((order) => order.productId);
    const products = await getProductsByIds(productIds);
    allOrders.forEach((order, index) => {
      const productForOrder = products[index];
      order.product = productForOrder;
    });
    this.orders = [...allOrders];
    this.ordersLoading = false;
  },
};
</script>

<style scoped>
.profile {
  background-color: black;
}
.profile h1,
h2,
h3 {
  color: white;
}

#discoverButton {
  background-color: #ff1e00;
  color: white;
}
</style>
