import Vue from 'vue';
import Vuex from 'vuex';
import App from './App';
import router from './router';
import { signIn, signUp } from './api/user';

Vue.config.productionTip = false;
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    isAuthenticated: false,
  },
  mutations: {
    setAuthenticated(state, isAuthenticated) {
      state.isAuthenticated = isAuthenticated;
    },
  },
  actions: {
    signIn({ commit }, data) {
      signIn(data)
        .then(res => localStorage.setItem('jwt', res.data)) // eslint-disable-line
      commit('setAuthenticated', true);
    },
    signUp({ commit }, data) {
      signUp(data)
        .then(res => localStorage.setItem('jwt', res.data)) // eslint-disable-line
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
