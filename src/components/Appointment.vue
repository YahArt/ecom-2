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

                    <div class="uk-margin-large">
                      <qrcode-vue
                        :value="tailoredFitsUrl"
                        :size="qrCodeSize"
                      ></qrcode-vue>
                      <p>Continue your journey on our app</p>
                    </div>
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
import QrcodeVue from 'qrcode.vue';

export default {
  name: 'Appointment',
  props: {},
  components: { MglMap, QrcodeVue },
  data() {
    return {
      accessToken:
        'pk.eyJ1IjoieWFubmlja2h1dHRlciIsImEiOiJja3Z1cDF4Y3gzOTR5MnJvdWc0enYwbjhvIn0.WOrp9hFl3xzjcHCkyDSPMg',
      mapStyle: 'mapbox://styles/mapbox/dark-v10',
      center: [8.430536274638433, 47.299060688158654],
      zoom: 12,
      tailoredFitsUrl: 'https://tailored-fits.com',
      qrCodeSize: 150,
    };
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
  height: 550px;
}
</style>
