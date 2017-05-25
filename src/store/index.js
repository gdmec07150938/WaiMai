/**
 * Created by lupin on 17-5-21.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import order from './modules/order'
import shop from './modules/shop'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    shop,
    order
  }
})
