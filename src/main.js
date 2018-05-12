import 'babel-polyfill';
import Vue from 'vue';

import router from '@/router';
import store from '@/store';

import App from '@/App.vue';

import ga from 'vue-ga';

import './registerServiceWorker';

Vue.config.productionTip = false;

ga(router, 'UA-113637016-1');

const registerAll = (context, prefix) => context.keys().forEach((p) => {
  const name = p.match(/\.\/(.*?)\.vue/)[1];
  Vue.component(prefix + name, context(p).default);
});

registerAll(require.context('@/components', false, /.*\.vue/), 'f');
registerAll(require.context('@/components_presentational', false, /.*\.vue/), 'fP');

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
