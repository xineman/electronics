<template>
  <div id="app">
    <top-header></top-header>
    <top-menu></top-menu>
    <main class="main">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import TopHeader from './components/Header';
import TopMenu from './components/Menu';
// import axios from 'axios';

export default {
  data() {
    return {
    };
  },
  name: 'app',
  components: {
    'top-header': TopHeader,
    'top-menu': TopMenu,
  },
  created() {
    this.checkAuth();
  },
  methods: {
    checkAuth() {
      const jwt = localStorage.getItem('jwt');
      if (jwt) {
        this.setAuthenticated(true);
      }
    },
    ...mapMutations([
      'setAuthenticated',
    ]),
  },
};
</script>

<style lang="postcss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  color: #171717;
}
.main {
  padding: 10px 30px;
}
.popup {
  position: fixed;
  z-index: 100;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(130, 130, 130, .8);
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: none;
}
.popup-wrapper {
  max-width: 100%;
  max-height: 100%;
  background: #FFF;
  padding: 15px;
  box-shadow: 0 2px 20px 0px #2B515D;
  color: #191919;
  position: relative;
  animation: slidedown .3s;
}
.btn {
  height: 40px;
  padding: 5px 10px;
  margin: 0 10px;
  border: none;
  cursor: pointer;
  &:focus {
    outline: none;
  }
}
.buy-btn {
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 700;
  transition: 0.3s;
  border: 2px solid #ed3223;
  border-radius: 7px;
  background: #fff;
  color: #ed3223;
  &:hover {
    background: #ed3223;
    color: #fff;
  }
}
.buy-container {
  display: flex;
  align-items: center;
  margin: 20px -10px;
}
.wish-btn {
  background: transparent;
  padding: 0;
}
.wish-icon {
  height: 30px;
  width: 30px;
}

@keyframes slidedown {
  from {
    top: -50vh;
  }
  to {
    top: 0;
  }
}
/* roboto-300 - cyrillic_latin */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 300;
  src: local('Roboto Light'), local('Roboto-Light'),
       url('./assets/fonts/roboto-v16-cyrillic_latin-300.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('./assets/fonts/roboto-v16-cyrillic_latin-300.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* roboto-regular - cyrillic_latin */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: local('Roboto'), local('Roboto-Regular'),
       url('./assets/fonts/roboto-v16-cyrillic_latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('./assets/fonts/roboto-v16-cyrillic_latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* roboto-500 - cyrillic_latin */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  src: local('Roboto Medium'), local('Roboto-Medium'),
       url('./assets/fonts/roboto-v16-cyrillic_latin-500.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('./assets/fonts/roboto-v16-cyrillic_latin-500.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* roboto-700 - cyrillic_latin */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  src: local('Roboto Bold'), local('Roboto-Bold'),
       url('./assets/fonts/roboto-v16-cyrillic_latin-700.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('./assets/fonts/roboto-v16-cyrillic_latin-700.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
#app {
  font-family: 'Roboto', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
