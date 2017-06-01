/**
 * Created by lupin on 17-6-1.
 */
import * as types from '../mutation-types'
const state = {
  selectFood: []
}
const getters = {}
const mutations = {
  [types.SET_SELECT_FOOD] (state, payload) {
    state.selectFood = payload
  }
}
const actions = {}

export default {
  state,
  getters,
  actions,
  mutations
}
