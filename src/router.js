import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: require('@/pages/Home.vue').default },
]

export default new VueRouter({
  routes,
  mode: 'history',
});
