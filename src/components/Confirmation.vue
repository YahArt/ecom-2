<template>
  <div class="confirmation uk-container uk-container-expand">
    <h1>Thank You Very much</h1>

    <h2>
      We are looking forward to meet you in person in our store.
    </h2>
    <h3>
      Please bring along this QR Code or even better import it right
      into our App.
    </h3>

    <div class="uk-margin-large-top uk-margin-large-bottom">
      <qrcode-vue
        :value="tailoredFitsUrl"
        :size="qrCodeSize"
      ></qrcode-vue>
      <p>Have this code ready at your appointment</p>
    </div>

    <button
      @click="navigateToHome"
      id="homeButton"
      class="
        uk-button
        uk-button-primary
        uk-button-large
        uk-margin-large-bottom
      "
    >
      Back to Home
    </button>
  </div>
</template>

<script>
import QrcodeVue from 'qrcode.vue';
export default {
  name: 'Confirmation',
  props: {},
  components: { QrcodeVue },
  data() {
    return {
      tailoredFitsUrl: 'https://tailored-fits.com',
      qrCodeSize: 150,
    };
  },
  methods: {
    navigateToHome: function () {
      this.$router.push('/');
    },
  },
};
</script>

<style scoped>
.confirmation {
  background-color: black;
}
.confirmation h1,
h2,
h3 {
  color: white;
}

#homeButton {
  background-color: #ff1e00;
  color: white;
}
</style>
