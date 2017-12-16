<template>
  <div class="popular">
    <h1>Popular recently</h1>
    <product-list :products='products'></product-list>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ProductList from './ProductList';

export default {
  components: {
    'product-list': ProductList,
  },
  computed: mapState([
    'products',
  ]),
  created() {
    this.$store.dispatch('getProducts');
  },
};
</script>
