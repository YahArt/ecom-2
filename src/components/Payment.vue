<template>
  <div class="payment uk-container uk-container-expand">
    <h1>Please choose a payment option</h1>

    <div
      class="
        uk-child-width-1-3@m
        uk-grid-small
        uk-padding-small
        uk-grid-match
      "
      uk-grid
    >
      <PaymentCard
        @click.native="setActivePayment(payment)"
        v-for="payment in payments"
        v-bind:key="payment.title"
        v-bind:payment="payment"
      />
    </div>

    <button
      @click="navigateToConfirmation"
      id="confirmButton"
      class="
        uk-button
        uk-button-primary
        uk-button-large
        uk-margin-large-top
        uk-margin-large-bottom
      "
    >
      Confirm
    </button>
  </div>
</template>

<script>
import PaymentCard from './PaymentCard.vue';
import {
  setCurrentPayment,
  addOrder,
  clearCurrentInformation,
} from '../helpers/storageHelper.js';
export default {
  name: 'Payment',
  props: {},
  components: { PaymentCard },
  data() {
    return {
      payments: [
        {
          title: 'Paypal',
          isActive: false,
        },
        {
          title: 'Visa',
          isActive: false,
        },
        {
          title: 'Master Card',
          isActive: false,
        },
      ],

      currentPayment: '',
    };
  },
  methods: {
    navigateToConfirmation: function () {
      setCurrentPayment(this.currentPayment);
      addOrder();
      clearCurrentInformation();
      this.$router.push('/confirmation');
    },

    setActivePayment: function (activePayment) {
      this.payments.map((payment) => (payment.isActive = false));
      activePayment.isActive = true;
      this.currentPayment = activePayment.title;
    },
  },
};
</script>

<style scoped>
.payment {
  background-color: black;
}
.payment h1,
h3 {
  color: white;
}

#confirmButton {
  background-color: #ff1e00;
  color: white;
}
</style>
