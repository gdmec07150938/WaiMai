/**
 * Created by lupin on 17-5-21.
 */
import * as types from '../mutation-types'
import orderAPI from '@/api/order.js'
const state = {
  orderList: {},
  orderItem: {}
}
const getters = {}
const mutations = {
  [types.SET_ORDER] (state, payload) {
    state.orderList = payload
  },
  [types.SET_ORDER_ITEM] (state, playload) {
    state.orderItem = playload
  }
}
const actions = {
  [types.GET_ORDER] ({state, commit, rootState}) {  //  取得订单列表
    return new Promise((resolve, reject) => {
      orderAPI.getOrder((orderList) => {
        commit(types.SET_ORDER, orderList)
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
