<template>
  <div>
    <div class="order uk-card uk-card-small uk-card-secondary">
      <div class="uk-card-header">
        <h3 class="uk-card-title">
          {{ order.product.title }}
        </h3>
      </div>

      <div class="uk-card-body">
        <div class="uk-margin-medium-top uk-margin-medium-bottom">
          <qrcode-vue
            :value="tailoredFitsUrl"
            :size="qrCodeSize"
          ></qrcode-vue>
        </div>
        <b>Status: Paid - We are looking forward to meeting you</b>

        <p>Location: {{ order.location }}</p>
        <p>Date: {{ order.date }}</p>
        <p>Time: {{ order.time }}</p>
      </div>

      <div class="uk-card-footer">
        <font-awesome-icon :icon="['fab', this.icon]" size="3x" />
      </div>
    </div>
  </div>
</template>

<script>
import QrcodeVue from 'qrcode.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
export default {
  name: 'Order',
  components: { QrcodeVue, FontAwesomeIcon },
  props: {
    order: {},
  },
  data() {
    return {
      tailoredFitsUrl: 'https://tailored-fits.com',
      qrCodeSize: 150,
      icon: '',
    };
  },
  created: function () {
    if (this.order.payment === 'Paypal') {
      this.icon = 'cc-paypal';
    } else if (this.order.payment === 'Master Card') {
      this.icon = 'cc-mastercard';
    } else if (this.order.payment === 'Visa') {
      this.icon = 'cc-visa';
    }
    return '';
  },
  methods: {},
};
</script>

<style scoped></style>
