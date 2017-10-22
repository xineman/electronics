<template>
  <header class="header">
    <router-link class="logo-container" to="/">
      <img class="logo" src="../assets/img/header/geek.svg" alt="" />
      <p class="logo-text">Geek shop</p>
    </router-link>
    <form class="search-form">
      <input v-model="query" class="search-input" type="text" placeholder="Search for something..."/>
      <button class="search-button"><img class="search-icon" src="../assets/img/header/search_bold.svg" alt="Search"></button>
      <ul v-if="query !== ''" class="dropdown">
        <li :key="result" v-for="result in results" class="dropdown-item">
          {{result}}
        </li>
      </ul>
    </form>
    <nav class="account">
      <div v-if="!isAuthenticated" class="nav-link-group">
        <div class="nav-link-container">
          <a @click="signInPopup = true" class="nav-link">Sign in</a>
        </div>
        <div class="nav-link-container">
          <a @click="signUpPopup = true" class="nav-link">Sign up</a>
        </div>
      </div>

      <div v-else class="nav-link-group">
        <div class="nav-link-container">
          <a @click="showDropdown = !showDropdown" class="nav-link nav-link_img">
            <img class="link-img" src="../assets/img/header/profile.svg" alt="Profile" />
          </a>
          <ul v-if="showDropdown" class="profile-dropdown">
            <li class="profile-dropdown-item"><a class="menu-link" @click="openProfile">View profile</a></li>
            <li class="profile-dropdown-item"><a class="menu-link" @click="logout">Logout</a></li>
          </ul>
        </div>
      </div>

      <div class="nav-link-container">
        <router-link class="nav-link nav-link_img" to="/cart">
          <img class="link-img" src="../assets/img/header/cart.svg" alt="Cart" />
        </router-link>
      </div>
      <div class="nav-link-container">
        <router-link class="nav-link nav-link_img" to="/wishes">
          <img class="link-img" src="../assets/img/header/wish.svg" alt="Wishes" />
        </router-link>
      </div>
    </nav>
    <transition name="fade">
      <popup v-on:close="signInPopup = false" v-if="signInPopup">
        <sign-in></sign-in>
      </popup>
    </transition>
    <transition name="fade">
      <popup v-on:close="signUpPopup = false" v-if="signUpPopup">
        <sign-up></sign-up>
      </popup>
    </transition>
  </header>
</template>

<script>
import axios from 'axios';
import { mapState, mapMutations } from 'vuex';
import Popup from './Popup';
import SignIn from './SignIn';
import SignUp from './SignUp';

export default {
  data() {
    return {
      name: 'top-header2',
      query: '',
      results: [],
      signInPopup: false,
      signUpPopup: false,
      showDropdown: false,
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
    logout() {
      this.showDropdown = false;
      this.setAuthenticated(false);
      localStorage.removeItem('jwt');
    },
    openProfile() {
      this.showDropdown = false;
      this.$router.push('/profile');
    },
    ...mapMutations([
      'setAuthenticated',
    ]),
  },
  computed: mapState({
    isAuthenticated: 'isAuthenticated',
  }),
  components: {
    'sign-in': SignIn,
    'sign-up': SignUp,
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
    display: block;
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
    margin-left: 10px;
    margin-right: 10px;
    padding-bottom: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .nav-link {
    font-size: 14px;
    font-weight: 500;
    color: #FFF;
    text-decoration: none;
    position: relative;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    &:not(.nav-link_img)::after {
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

  .nav-link-group {
    display: flex;
    align-items: center;
    margin-right: 10px;
    padding-right: 10px;
    border-right: 1px solid #FFF;
    position: relative;
  }

  .link-img {
    height: 24px;
    display: block;
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

  .profile-dropdown {
    position: absolute;
    right: 0;
    width: 150px;
    padding: 5px;
    top: calc(100% + 10px);
    background: #FFF;
    list-style-type: none;
    box-shadow: 0 2px 20px 0px #2B515D;
  }
  .profile-dropdown-item {
    padding: 5px;
    text-transform: none;

  }
  .menu-link {
    cursor: pointer;
    text-decoration: none;
    color: #2B515D;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .25s;
  }

  .fade-enter, .fade-leave-to {
    opacity: .1;
  }
</style>
