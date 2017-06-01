/**
 * Created by lupin on 17-5-21.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import order from './modules/order'
import shop from './modules/shop'
import shopCart from './modules/shopCart'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    shop,
    order,
    shopCart
  }
})
