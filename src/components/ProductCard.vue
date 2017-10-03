<template>
  <div>
    <img class="image" src="http://via.placeholder.com/250x200" alt="Laptop" />
    <div class="description">
      <h3 class="name">{{product.name}}</h3>
      <ul class="params">
        <li class="param">Great screen</li>
        <li class="param">15.6"</li>
        <li class="param">8GB RAM</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ['product'],
};
</script>


<style lang="postcss" scoped>
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
