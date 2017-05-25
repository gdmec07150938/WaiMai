/**
 * Created by lupin on 17-5-25.
 */
/**
 * Created by lupin on 17-5-21.
 */
import * as types from '../mutation-types'
import shopAPI from '@/api/shop.js'
const state = {
  shopList: {}
}
const getters = {}
const mutations = {
  [types.SET_SHOP_LIST] (state, payload) {
    state.shopList = payload
  }
}
const actions = {
  [types.GET_SHOP_LIST] ({state, commit, rootState}) {  //  取得订单列表
    return new Promise((resolve, reject) => {
      shopAPI.getShopList((shopList) => {
        commit(types.SET_SHOP_LIST, shopList)
        resolve()
      })
    })
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
