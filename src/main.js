// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import VueResource from 'vue-resource'
import '@/common/style/index.scss'
import {ORDER_STORE} from '@/common/js/store.js'
//  自定义全局变量
Vue.prototype.GLOBAL = ORDER_STORE
Vue.config.productionTip = false
Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
console.log(Vue)
