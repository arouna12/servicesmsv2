import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "normalize.css";
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import axios from 'axios'

import VueAnalytics from 'vue-analytics';
Vue.config.productionTip = false
//and then use it in main.js
Vue.use(VueAnalytics, {
  id: 'UA-210356560-1',
  router
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


