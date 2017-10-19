<template>
  <div class="product">
    <h2 class="name">{{product.name}}</h2>
    <div class="container">
      <img src="http://via.placeholder.com/500x400" alt="Image" class="image">
      <div class="text-content">
        <div class="buy-container">
          <p class="price">{{product.price}}</p>
          <button class="buy-btn">Buy now</button>
          <button class="wish-btn"><img class="wish-icon" src="../assets/img/header/wish.svg" alt="Wish" /></button>
        </div>
        <ul class="params">
          <li :key="param" class="param" v-for="(param, name) in product.params">{{name}}: {{param}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
  .container {
    display: flex;
  }
  .buy-container {
    display: flex;
  }
</style>
