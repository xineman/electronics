import Vue from 'vue';
import Router from 'vue-router';
import Popular from '@/components/Popular';
import ProductPage from '@/components/ProductPage';
import WishList from '@/components/WishList';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Popular',
      component: Popular,
    },
    {
      path: '/product/:id',
      name: 'Product',
      component: ProductPage,
    },
    {
      path: '/wishes',
      name: 'WishList',
      component: WishList,
    },
  ],
});
