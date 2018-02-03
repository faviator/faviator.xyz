import 'babel-polyfill';
import Vue from 'vue';

import router from '@/router';
import store from '@/store';

import App from '@/App.vue';

const registerAll = (context, prefix) => context.keys().forEach(p => {
  let name = p.match(/\.\/(.*?)\.vue/)[1];
  Vue.component(prefix + name, context(p).default);
});

registerAll(require.context('@/components', false, /.*\.vue/), 'f');
registerAll(require.context('@/components_presentational', false, /.*\.vue/), 'fP');
registerAll(require.context('@/partials', false, /.*\.vue/), 'partial');

new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App),
});
