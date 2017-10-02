<template>
  <nav class="navigation">
    <ul class="nav-block">
      <li class="nav-item link">Categories</li>
      <li class="nav-item"><router-link class="link" to="/sale">Sale!</router-link></li>
      <li class="nav-item"><router-link class="link" to="/new">New arrivals</router-link></li>
    </ul>
    <ul class="nav-block">
      <li class="nav-item"><router-link class="link" to="/delivery">Payments & Delivery</router-link></li>
      <li class="nav-item"><router-link class="link" to="/about">About</router-link></li>
      <li class="nav-item"><router-link class="link" to="/contact">Contact us</router-link></li>
    </ul>
  </nav>
</template>

<style lang="postcss" scoped>
  .navigation {
    display: flex;
    justify-content: space-between;
    padding: 10px 15px;
    background: #3A826C;
  }
  .nav-block {
    display: flex;
    list-style-type: none;
    margin: 0 -10px;
  }
  .nav-item {
    margin: 0 10px;
    text-decoration: none;
  }
  .link {
    text-decoration: none;
    color: #FFF;
    text-transform: uppercase;
  }
</style>
