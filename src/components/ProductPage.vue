<template>
  <div v-if="product" class="product">
    
    <div class="container">
      <div class="image-container">
        <img class="image" :src="product.image" alt="Image" />
      </div>
      <div class="text-content">
        <h2 class="name">{{product.name}}</h2>
        <p class="price">${{product.price.toLocaleString()}}</p>
        <div class="buy-container">
          <button @click="buyClick" class="buy-btn btn">Buy now</button>
          <button @click="wishClick" class="wish-btn btn">
            <img v-if="wish" src="../assets/img/product/love_fill.svg" alt="" class="wish-icon">
            <img v-else src="../assets/img/product/love.svg" alt="" class="wish-icon">
          </button>
        </div>
        <h4 class="params-title">Characteristics:</h4>
        <ul class="params">
          <li :key="param" class="param" v-for="(param, name) in product.params">
            <p class="param-name">{{name}}:</p>
            <p class="param-value">{{param}}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div v-else class="spinner">
    Loading product
  </div>
</template>

<script>
import { getOne, buy } from '../api/products';

export default {
  data() {
    return {
      product: undefined,
      wish: false,
    };
  },
  created() {
    getOne(this.$route.params.id)
      .then((res) => {
        this.product = res.data;
      })
      .catch(console.log); // eslint-disable-line
  },
  methods: {
    buyClick() {
      buy(this.product.id, 1).then(console.log); // eslint-disable-line
    },
    wishClick() {
      this.$data.wish = !this.$data.wish;
    },
  },
};
</script>

<style lang="postcss" scoped>
.name {
  margin-bottom: 20px;
  font-size: 22px;
  font-weight: 500;
}
.container {
  display: flex;
}
.image-container {
  width: 500px;
  height: 400px;
  position: relative;
  margin-right: 30px;
  overflow: hidden;
}
.image {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  min-width: 100%;
  min-height: 100%;
  max-height: 120%;
}
.price {
  // margin: 0 10px;
  font-size: 28px;
  font-weight: 700;
  color: #2b515d;
}
.wish-path {
  fill: #ed3223;
}
.params-title {
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 10px;
}
.params {
}
.param {
  font-size: 16px;
  display: flex;
  align-items: center;
  padding: 10px 5px;
  transition: 0.3s;
  &:last-child {
    margin-bottom: 0;
  }
  &:hover {
    background: #2b515d;
    color: #fff;
    transition: none;
  }
}
.param-name {
  width: 200px;
}
.param-value {
  font-weight: 500;
}
</style>
