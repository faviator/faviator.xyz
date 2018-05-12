import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

/* eslint-disable import/no-dynamic-require */
const requireView = name => require(`@/views/${name}.vue`).default;

export default new Router({
  routes: [
    { path: '/', component: requireView('Home') },
    { path: '/playground', component: requireView('Playground') },
  ],
  mode: 'history',
});
