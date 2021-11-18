<template>
  <div>
    <div class="appointment uk-section uk-section-default">
      <div class="uk-container">
        <div class="uk-grid-match uk-child-width-1-2@m" uk-grid>
          <div>
            <div class="map-container">
              <MglMap
                container="map"
                :center.sync="center"
                :accessToken="accessToken"
                :mapStyle="mapStyle"
                :zoom="zoom"
              />
            </div>
          </div>
          <div>
            <form>
              <fieldset class="uk-fieldset">
                <legend class="uk-legend">Book an Appointment</legend>

                <div class="uk-margin">
                  <input
                    class="uk-input"
                    type="text"
                    placeholder="Uhrzeit"
                  />

                  <div class="uk-margin">
                    <input
                      class="uk-input"
                      type="text"
                      placeholder="Datum"
                    />
                    <div class="uk-margin">
                      <input
                        class="uk-input"
                        type="text"
                        placeholder="Ort"
                      />
                    </div>

                    <button
                      @click="navigateToPayment"
                      id="paymentButton"
                      class="
                        uk-button
                        uk-button-primary
                        uk-button-large
                        uk-margin-large-top
                      "
                    >
                      Continue to Payment
                    </button>
                  </div>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { MglMap } from 'vue-mapbox';

export default {
  name: 'Appointment',
  props: {},
  components: { MglMap },
  data() {
    return {
      accessToken:
        'pk.eyJ1IjoieWFubmlja2h1dHRlciIsImEiOiJja3Z1cDF4Y3gzOTR5MnJvdWc0enYwbjhvIn0.WOrp9hFl3xzjcHCkyDSPMg',
      mapStyle: 'mapbox://styles/mapbox/dark-v10',
      center: [8.430536274638433, 47.299060688158654],
      zoom: 12,
    };
  },
  methods: {
    navigateToPayment: function () {
      this.$router.push(`/payment`);
    },
  },
};
</script>

<style scoped>
.appointment {
  background-color: black;
}
.appointment h1,
h3,
.uk-legend {
  color: white;
}

.uk-input {
  background-color: black;
}

.map-container {
  height: 650px;
}

#paymentButton {
  background-color: #ff1e00;
  color: white;
}
</style>
