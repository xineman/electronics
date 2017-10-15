<template>
  <header class="header">
    <router-link class="logo-container" to="/">
      <img class="logo" src="../assets/img/geek.svg" alt="" />
      <p class="logo-text">Geek shop</p>
    </router-link>
    <form class="search-form">
      <input v-model="query" class="search-input" type="text" placeholder="Search for something..."/>
      <button class="search-button"><img class="search-icon" src="../assets/img/search_bold.svg" alt="Search"></button>
      <ul v-if="query !== ''" class="dropdown">
        <li :key="result" v-for="result in results" class="dropdown-item">
          {{result}}
        </li>
      </ul>
    </form>
    <nav class="account">
      <div class="nav-link-container">
        <a @click="signInPopup = true" class="nav-link">Sign in</a>
      </div>
      <div class="nav-link-container">
        <a class="nav-link">Sign up</a>
      </div>
    </nav>
    <transition name="fade">
      <popup v-on:close="signInPopup = false" v-if="signInPopup">
        <sign-in></sign-in>
      </popup>
    </transition>
  </header>
</template>

<script>
import axios from 'axios';
import Popup from './Popup';
import SignIn from './SignIn';

export default {
  data() {
    return {
      name: 'top-header2',
      query: '',
      results: [],
      signInPopup: false,
      signUpPopup: false,
    };
  },
  watch: {
    query(newQuery) {
      // this.answer = 'Waiting for you to stop typing...'
      this.getResults(newQuery);
    },
  },
  methods: {
    getResults(query) {
      // this.answer = 'Thinking...'
      axios.get('/api/search', {
        params: {
          input: query,
        },
      })
        .then((response) => {
          this.results = response.data;
        });
    },
  },
  components: {
    'sign-in': SignIn,
    popup: Popup,
  },
};
</script>

<style lang="postcss" scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-transform: uppercase;
    padding: 10px 15px;
    background-color: #2B515D;
    color: #FFF;
  }
  .logo-container {
    display: flex;
    align-items: center;
    height: 50px;
    text-decoration: none;
  }
  .logo {
    height: 100%;
    margin-right: 10px;
  }
  .logo-text {
    font-size: 14px;
    font-weight: 500;
    color: #FFF;
  }
  .search-form {
    position: relative;
    height: 40px;
    flex-grow: 1;
    margin: 0 40px;
  }
  .search-input {
    width: 100%;
    height: 100%;
    padding-left: 10px;
    padding-right: 35px;
    border: none;
    border-bottom: 1px solid #FFF;
    background: transparent;
    color: #FFF;
    &::placeholder {
      color: #FAFAFA;
    }
    &:focus {
      outline: none;
    }
  }
  .search-button {
    position: absolute;
    right: 5px;
    margin: auto 0;
    top: 0;
    bottom: 0;
    width: 20px;
    background: transparent;
    border: none;
    cursor: pointer;
    &:focus {
      outline: none;
    }
  }
  .search-icon {
    width: 100%;
  }
  .account {
    margin: 0 -10px;
    position: relative;
    display: flex;
  }
  .nav-link-container {
    overflow: hidden;
    margin: 0 10px;
    padding-bottom: 2px;
  }
  .nav-link {
    font-size: 14px;
    font-weight: 500;
    color: #FFF;
    text-decoration: none;
    position: relative;
    cursor: pointer;
    &::after {
      position: absolute;
      content: '';
      width: 100%;
      height: 1px;
      background: #FFF;
      transition: .2s;
      right: 100%;
      top: 100%;
    }
    &:hover {
      &::after {
        right: 0;
      }
    }
  }
  .dropdown {
    position: absolute;
    left: 0;
    right: 0;
    padding: 5px;
    top: 100%;
    background: #f0f0f0;
    list-style-type: none;
  }
  .dropdown-item {
    padding: 5px;
    text-transform: none;
    color: #2B515D;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .25s;
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: .1;
  }
</style>
