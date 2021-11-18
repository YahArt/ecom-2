import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCcPaypal,
  faCcVisa,
  faCcMastercard,
} from '@fortawesome/free-brands-svg-icons';

library.add(faCcPaypal);
library.add(faCcVisa);
library.add(faCcMastercard);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
