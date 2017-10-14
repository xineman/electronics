<template>
  <div class="popular">
    <h1>Popular recently</h1>
    <product-list :products='products'></product-list>
  </div>
</template>

<script>
import axios from 'axios';
import ProductList from './ProductList';

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
    axios.get('/api/products')
      .then((res) => {
        this.products = res.data;
      });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>
