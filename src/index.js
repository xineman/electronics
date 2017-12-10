import Vue from 'vue';
import VueNotifications from 'vue-notifications';
import Noty from 'noty';// https://github.com/needim/noty
import 'noty/lib/noty.css';
import Vuex from 'vuex';
import App from './App';
import router from './router';
import { signIn, signUp } from './api/user';

function toast({
  message, type, timeout,
}) {
  if (type === VueNotifications.types.warn) type = 'warning'; // eslint-disable-line
  return new Noty({
    text: message, timeout, type, layout: 'bottomRight', theme: 'metroui',
  }).show();
}

const options = {
  success: toast,
  error: toast,
  info: toast,
  warn: toast,
};

Vue.use(VueNotifications, options);

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
    signIn({ commit }, credentials) {
      return signIn(credentials)
        .then(({ data }) => {
          localStorage.setItem('jwt', data.token);
          commit('setAuthenticated', true);
        });
    },
    signUp({ commit }, credentials) {
      signUp(credentials)
        .then(({ data }) => {
          localStorage.setItem('jwt', data.token);
          commit('setAuthenticated', true);
        });
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
