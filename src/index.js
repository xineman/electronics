import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import App from './App';
import router from './router';

Vue.config.productionTip = false;
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    isAuthenticated: 0,
  },
  mutations: {
    setAuthenticated(state, isAuthenticated) {
      state.isAuthenticated = isAuthenticated;
    },
  },
  actions: {
    signIn({ commit }, { username, password }) {
      console.log(username); // eslint-disable-line
      axios.post('/api/user/login', {
        username,
        password,
      })
        .then(res => console.log(res.data)) // eslint-disable-line
      commit('setAuthenticated', true);
    },
  },
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App },
});
