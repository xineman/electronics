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
  name: 'hello',
  data() {
    return {
      msg: 'This motherfucking shit works!',
    };
  },
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>
