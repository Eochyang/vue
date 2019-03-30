import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//配置全局资源
import './assets/css/style.css';
import './assets/css/bootstrap.css';
import './assets/js/jquery.min.js';

import router from './plugins/router.config';
import baseUrl from './config/config';
window.baseUrl = baseUrl.baseUrl.localhost;

import 'vue-swipe/dist/vue-swipe.css'
import { Swipe, SwipeItem } from 'vue-swipe';
Vue.component('swipe', Swipe);
Vue.component('swipe-item', SwipeItem);
import loading from './plugins/loading';
Vue.use(loading);

import store from './store';
import axios from './plugins/axios';

new Vue({
  router,store,
  render: h => h(App)
}).$mount('#app')
