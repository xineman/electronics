<template>
  <div v-if="product" class="product">
    
    <div class="container">
      <div class="image-container">
        <img class="image" :src="product.image" alt="Image" />
      </div>
      <div class="text-content">
        <h2 class="name">{{product.name}}</h2>
        <div class="buy-container">
          <p class="price">$ {{product.price.toLocaleString()}}</p>
          <button @click="buyClick" class="buy-btn btn">Buy now</button>
          <button class="wish-btn btn">
            <svg class="wish-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 249.3 249.3" style="enable-background:new 0 0 249.3 249.3;" xml:space="preserve" width="512px" height="512px">
              <path class="wish-path" d="M249.183,88.644c-0.94-17.571-8.379-34.07-20.947-46.458c-12.756-12.574-29.414-19.499-46.904-19.499  c-26.191,0-44.735,20.23-54.697,31.099c-0.567,0.618-1.176,1.282-1.771,1.924c-0.319-0.362-0.636-0.723-0.938-1.067  C114.82,44.27,95.87,22.687,67.972,22.687c-17.49,0-34.147,6.925-46.903,19.499C8.5,54.574,1.061,71.073,0.121,88.644  c-0.934,17.467,3.507,32.624,14.396,49.146c9.759,14.811,35.173,38.228,53.97,53.78c19.32,15.986,44.767,35.042,56.272,35.042  c11.686,0,37.043-19.016,56.256-34.968c18.651-15.485,43.925-38.883,53.775-53.86C242.119,126.64,250.379,110.983,249.183,88.644z   M222.258,129.542c-7.157,10.885-27.331,30.995-50.201,50.044c-27.269,22.714-43.414,31.666-47.286,32.022  c-3.866-0.403-20.051-9.445-47.453-32.201c-23.004-19.104-43.208-39.146-50.276-49.871c-9.011-13.672-12.694-26.036-11.943-40.092  c1.527-28.539,25.246-51.758,52.872-51.758c21.107,0,36.443,17.468,44.683,26.851c4.844,5.518,7.513,8.557,11.999,8.557  c4.631,0,7.618-3.259,13.04-9.174c8.994-9.813,24.047-26.234,43.639-26.234c27.627,0,51.345,23.219,52.873,51.758  C234.965,103.659,231.392,115.652,222.258,129.542z" fill="#FFFFFF"/>
            </svg>
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
      buy(this.product.id, 1)
        .then(console.log) // eslint-disable-line
    },
  },
};
</script>


<style lang="postcss" scoped>
  .name {
    margin-bottom: 10px;
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
    margin-right: 10px;
    overflow: hidden;
  }
  .image {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    min-width: 100%;
    min-height: 120%;
    max-width: 120%;
  }
  .buy-container {
    display: flex;
    align-items: center;
    margin: 20px -10px;
  }
  .price {
    margin: 0 10px;
    font-size: 28px;
    font-weight: 700;
    color: #2B515D;
  }
  .btn {
    height: 40px;
    padding: 5px 10px;
    margin: 0 10px;
    border: none;
    cursor: pointer;
  }
  .buy-btn {
    text-transform: uppercase;
    font-size: 16px;
    font-weight: 700;
    transition: .3s;
    border: 2px solid #ED3223;
    background: #FFF;
    color: #ED3223;
    &:hover {
      background: #ED3223;
      color: #FFF;
    }
  }
  .wish-btn {
    background: transparent;
    padding: 0;
  }
  .wish-icon {
    height: 30px;
    width: 30px;
  }
  .wish-path {
    fill: #ED3223;
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
    transition: .3s;
    &:last-child {
      margin-bottom: 0;
    }
    &:hover {
      background: #2B515D;
      color: #FFF;
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
