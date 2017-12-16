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
  props: ['products'],
};
</script>

<style lang="postcss" scoped>
  .product-list {
    margin: 0 -15px;
  }
  .product {
    display: inline-block;
    text-align: left;
    margin: 15px;
    width: 15%;
    vertical-align: top;
  }
</style>
