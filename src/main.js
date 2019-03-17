// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './element'
import qa from './assets/js/qa'
Vue.prototype.qa = qa(['api/v2/movie/top250','https://translate.yandex.net/api/v1.5/tr.json/translate'])


Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
