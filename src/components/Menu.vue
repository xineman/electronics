<template>
  <nav class="navigation">
    <ul class="nav-block">
      <li class="nav-item link">Categories</li>
      <li class="nav-item"><router-link class="link" to="/sale">Sale!</router-link></li>
      <li class="nav-item"><router-link class="link" to="/new">New arrivals</router-link></li>
      <li>
        <select v-model="count" @change="countChange">
          <option>all</option>
          <option>30</option>
          <option>40</option>
        </select>
      </li>
      <li>
        <select v-model="sort" @change="sortChange">
          <option>asc</option>
          <option>desc</option>
        </select>
      </li>
    </ul>
    <ul class="nav-block">
      <li class="nav-item"><router-link class="link" to="/delivery">Payments & Delivery</router-link></li>
      <li class="nav-item"><router-link class="link" to="/about">About</router-link></li>
      <li class="nav-item"><router-link class="link" to="/contact">Contact us</router-link></li>
    </ul>
  </nav>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      count: 'all',
      sort: 'asc',
    };
  },
  methods: {
    countChange(e) {
      // console.log(e.target.value); // eslint-disable-line
      this.$store.dispatch('setCount', {
        count: e.target.value,
      });
    },
    sortChange(e) {
      this.$store.dispatch('setSort', {
        sort: e.target.value,
      });
    },
  },
  computed: mapState({
    product(state) {
      return state.products.find(p => p.id == this.id); // eslint-disable-line
    },
    wish({ user }) {
      return user.wishList.find(p => p == this.id); // eslint-disable-line
    },
  }),
};
</script>


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
