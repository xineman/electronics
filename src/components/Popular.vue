<template>
  <div class="popular">
    <h1>Popular recently</h1>
    <product-list :products='products'></product-list>
  </div>
</template>

<script>
import ProductList from './ProductList';
import { getAll as getProductsApi } from '../api/products';

export default {
  name: 'hello',
  data() {
    return {
      msg: 'This motherfucking shit works!',
      products: [],
    };
  },
  components: {
    'product-list': ProductList,
  },
  created() {
    getProductsApi()
      .then((res) => {
        this.products = res.data;
      });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>
