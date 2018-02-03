import Vue from 'vue';

import router from '@/router';
import store from '@/store';


new Vue({
  router,
  store,
  el: '#app',
  render: h => h({ name:'App', template: `<router-view></router-view>` })
})
