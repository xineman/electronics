import Vue from 'vue';
import Router from 'vue-router';
import Popular from '@/components/Popular';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Popular',
      component: Popular,
    },
  ],
});
