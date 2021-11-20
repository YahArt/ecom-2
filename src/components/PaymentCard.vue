<template>
  <div
    class="uk-card uk-card-large uk-card-secondary payment-card"
    v-bind:class="{ active: payment.isActive }"
  >
    <div class="uk-card-header">
      <h3>{{ payment.title }}</h3>
    </div>
    <div class="uk-card-body">
      <font-awesome-icon :icon="['fab', this.icon]" size="9x" />
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
export default {
  name: 'PaymentCard',
  components: { FontAwesomeIcon },
  props: {
    payment: {},
  },
  data() {
    return {
      icon: 'cc-paypal',
    };
  },

  created: function () {
    if (this.payment.title === 'Paypal') {
      this.icon = 'cc-paypal';
    } else if (this.payment.title === 'Master Card') {
      this.icon = 'cc-mastercard';
    } else if (this.payment.title === 'Visa') {
      this.icon = 'cc-visa';
    }
    return '';
  },
  methods: {},
};
</script>

<style scoped>
.payment-card {
  border: unset;
  cursor: pointer;
}

.payment-card.active {
  border: 1px solid #ff1e00;
}
</style>
