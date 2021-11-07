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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../components/ProductDetail.vue'),
  },
];

const router = new VueRouter({
  base: '/ecom-2/',
  routes,
});

export default router;
