<template>
  <router-link class="product" to="/product">
    <img class="image" src="http://via.placeholder.com/250x200" alt="Laptop" />
    <div class="description">
      <h3 class="name">{{product.name}}</h3>
      <p class="price">{{product.price}}</p>
      <ul class="params">
        <li :key="param" class="param" v-for="(param, name) in product.params">{{name}}: {{param}}</li>
      </ul>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ['product'],
};
</script>


<style lang="postcss" scoped>
  .product {
    text-decoration: none;
  }
  .image {
    display: block;
  }
  .description {
    padding: 10px;
  }
  .name {
    font-weight: 700;
    font-size: 16px;
    margin-bottom: 5px;
  }
  .params {
    list-style-type: none;
  }
  .param {
    font-size: 14px;
  }
</style>
