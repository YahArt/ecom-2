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
      <div>
        <div
          class="uk-card uk-card-large uk-card-secondary payment-card"
        >
          <div class="uk-card-header">
            <h3>Paypal</h3>
          </div>
          <div class="uk-card-body">
            <font-awesome-icon
              :icon="['fab', 'cc-paypal']"
              size="9x"
            />
          </div>
        </div>
      </div>
      <div>
        <div
          class="uk-card uk-card-large uk-card-secondary payment-card"
        >
          <div class="uk-card-header">
            <h3>Visa</h3>
          </div>
          <div class="uk-card-body">
            <font-awesome-icon :icon="['fab', 'cc-visa']" size="9x" />
          </div>
        </div>
      </div>
      <div>
        <div
          class="uk-card uk-card-large uk-card-secondary payment-card"
        >
          <div class="uk-card-header">
            <h3>Master Card</h3>
          </div>
          <div class="uk-card-body">
            <font-awesome-icon
              :icon="['fab', 'cc-mastercard']"
              size="9x"
            />
          </div>
        </div>
      </div>
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
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
  name: 'Payment',
  props: {},
  components: { FontAwesomeIcon },
  data() {
    return {};
  },
  methods: {
    navigateToConfirmation: function () {
      this.$router.push('/confirmation');
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

.payment-card:hover {
  border: 1px solid #ff1e00;
}

#confirmButton {
  background-color: #ff1e00;
  color: white;
}
</style>
