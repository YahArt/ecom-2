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
    path: '/detail',
    name: 'ProductDetail',
    component: () => import('../components/ProductDetail.vue'),
  },
  {
    path: '/appointment',
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
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../components/Profile.vue'),
  },
];

const router = new VueRouter({
  base: '/ecom-2/',
  routes,
});

export default router;
