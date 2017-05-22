/**
 * Created by lupin on 17-5-21.
 */
import * as types from '../mutation-types'
const state = {
  order: {}
}
const mutations = {
  [types.GET_ORDER] (state, value) {  //  取得订单列表
    state.order = value
  }
}
const actions = {

}