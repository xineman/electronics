<template>
  <div id="app">
    <top-header></top-header>
    <top-menu></top-menu>
    <router-view></router-view>
    <ul>
      <li v-bind:key="user.lastname" v-for="user in users">
        {{user.firstname}} {{user.lastname}}
      </li>
    </ul>
    <input type="text" v-model="input_val">
  </div>
</template>

<script>
import TopHeader from './components/Header';
import TopMenu from './components/Menu';

export default {
  data() {
    return {
      users: [
        { firstname: 'Sebastian', lastname: 'Eschweiler' },
        { firstname: 'Bill', lastname: 'Smith' },
        { firstname: 'John', lastname: 'Porter' },
      ],
      input_val: '',
    };
  },
  name: 'app',
  components: {
    'top-header': TopHeader,
    'top-menu': TopMenu,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
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
  text-align: center;
  color: #2c3e50;
}
</style>
