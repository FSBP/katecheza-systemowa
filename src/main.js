import Vue from 'vue';
import App from './App.vue';
import router from './router.js';
import store from './store.js';
import DatePipe from "./core/pipes/DatePipe";

Vue.config.productionTip = false;

export const bus = new Vue();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
