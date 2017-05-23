/**
 * Created by lupin on 17-5-21.
 */
import {ORDER_LIST} from './api-list'
import Vue from 'vue'
import {parseJson} from '@/common/js/util.js'
export default {
  getOrder () {
    Vue.http.get(ORDER_LIST).then((response) => {
      return parseJson(response.body)
    })
  },
  buyProducts (products, cb, errorCb) {
  }
}
