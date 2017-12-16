import Vue from 'vue';
import VueNotifications from 'vue-notifications';
import Noty from 'noty';// https://github.com/needim/noty
import 'noty/lib/noty.css';
import Vuex from 'vuex';
import App from './App';
import router from './router';
import {
  signIn,
  signUp,
  getAll,
  cart,
  wish,
  getOne,
} from './api';

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
    products: [],
    user: {
      isAuthenticated: false,
      cart: [],
      wishList: [],
    },
  },
  mutations: {
    setAuthenticated({ user }, isAuthenticated) {
      user.isAuthenticated = isAuthenticated;
    },
    setProducts(state, products) {
      state.products = products;
    },
    addProduct(state, product) {
      state.products = [...state.products.filter(p => p.id !== product.id), product];
    },
    addToWish({ user }, id) {
      user.wishList.push(id);
    },
    removeFromWish({ user }, id) {
      user.wishList = user.wishList.filter(p => p !== id);
    },
    addToCart({ user }, id) {
      user.cart.push(id);
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
    getProducts({ commit }) {
      getAll()
        .then(({ data }) => {
          commit('setProducts', data);
        });
    },
    getProduct({ commit }, { id }) {
      getOne(id)
        .then(({ data }) => {
          commit('addProduct', data);
        });
    },
    buyProduct({ commit }, { id, count }) {
      cart(id, count)
        .then(() => commit('addToCart', id));
    },
    wishProduct({ commit }, { id }) {
      wish(id)
        .then(({ data: { status } }) => {
          const action = status ? 'addToWish' : 'removeFromWish';
          commit(action, id);
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
