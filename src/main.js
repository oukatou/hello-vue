// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './element'
import Axios from 'axios'
Vue.prototype.$axios = Axios
//Axios.defaults.baseURL='baidu'


Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
