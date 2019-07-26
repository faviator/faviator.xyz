import 'babel-polyfill';
import Vue from 'vue';

import router from '/router';
import store from '/store';

import App from '/App.vue';

import ga from 'vue-ga';

ga(router, 'UA-113637016-1');

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
