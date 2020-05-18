import { createRouter, createWebHistory } from 'vue-router';

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: () => import(/* webpackChunkName: "Home" */ '@/pages/Home.vue') },
    { path: '/playground', component: () => import(/* webpackChunkName: "Playground" */ '@/pages/Playground.vue') },
  ],
});
