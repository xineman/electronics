<template>
  <ul class="product-list">
    <li class="product" v-bind:key="product.name" v-for="product in products">
      <product-card :product="product"></product-card>
    </li>
  </ul>
</template>

<script>
import ProductCard from './ProductCard';

export default {
  components: {
    'product-card': ProductCard,
  },
  data() {
    return {
      products: [
        {
          name: 'Laptop 1',
        },
        {
          name: 'Laptop 2',
        },
      ],
    };
  },
};
</script>

<style lang="postcss" scoped>
  .product-list {
    margin: 0 -10px;
  }
  .product {
    display: inline-block;
    text-align: left;
    margin: 10px;
  }
</style>
