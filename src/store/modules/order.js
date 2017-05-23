/**
 * Created by lupin on 17-5-21.
 */
import * as types from '../mutation-types'
import orderAPI from '@/api/order.js'
const state = {
  order: {}
}
const getters = {}
const mutations = {
  [types.SET_ORDER] (state, payload) {
    state.order = payload
  }
}
const actions = {
  [types.GET_ORDER] ({state, commit, rootState}) {  //  取得订单列表
    console.log('wo 执行了')
    orderAPI.getOrder((orderList) => {
      commit(types.SET_ORDER, orderList)
    })
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
