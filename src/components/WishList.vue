<template>
  <div class="popular">
    <h1>Wish list</h1>
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
  computed: mapState({
    products: state => state.products.filter(p => state.user.wishList.includes(p.id)),
  }),
  created() {
    this.$store.dispatch('getProducts');
  },
};
</script>
