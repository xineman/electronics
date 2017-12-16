<template>
  <router-link class="container" to="/product/3">
    <div class="image-wrapper">
      <img class="image" :src="product.image" alt="Laptop" />
    </div>
    <div class="description">
      <h3 class="name">{{product.name}}</h3>
      <p class="price">$ {{product.price}}</p>
      <div class="buy-container">
        <button @click="buyClick" class="buy-btn btn">Buy now</button>
        <button @click="wishClick" class="wish-btn btn">
          <img v-if="wish" src="../assets/img/product/love_fill.svg" alt="" class="wish-icon">
          <img v-else src="../assets/img/product/love.svg" alt="" class="wish-icon">
        </button>
      </div>
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
.container {
  text-decoration: none;
  color: #171717;
  display: block;
  border: 1px solid #2b515d;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-radius: 5px;
  overflow: hidden;
  transition: 0.25s;
  height: 450px;
  overflow: hidden;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 50px;
    background: linear-gradient(to bottom, transparent, #fff);
    z-index: 20;
  }
  &:hover {
    box-shadow: 0px 0px 20px -5px #2b515d;
  }
}
.image-wrapper {
  width: 100%;
  height: 200px;
  position: relative;
  overflow: hidden;
}
.image {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  min-width: 100%;
  min-height: 100%;
  max-width: 120%;
  display: block;
}
.description {
  padding: 10px;
}
.name {
  font-weight: 500;
  font-size: 16px;
  margin-bottom: 5px;
}
.price {
  font-size: 18px;
  font-weight: 500;
  color: #ed3223;
  margin: 5px 0;
}
.params {
  list-style-type: none;
}
.param {
  font-size: 14px;
}
</style>
