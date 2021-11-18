import Vue from 'vue';
import VueRouter from 'vue-router';
import ProductList from '../components/ProductList.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'ProductList',
    component: ProductList,
  },
  {
    path: '/detail/:productId',
    name: 'ProductDetail',
    component: () => import('../components/ProductDetail.vue'),
  },
  {
    path: '/appointment/:productId',
    name: 'Appointment',
    component: () => import('../components/Appointment.vue'),
  },
  {
    path: '/payment',
    name: 'Payment',
    component: () => import('../components/Payment.vue'),
  },
  {
    path: '/confirmation',
    name: 'Confirmation',
    component: () => import('../components/Confirmation.vue'),
  },
];

const router = new VueRouter({
  base: '/ecom-2/',
  routes,
});

export default router;
