/**
 * Created by lupin on 17-5-25.
 */
import {SHOP_LIST} from './api-list'
import Vue from 'vue'
import {parseJson} from '@/common/js/util.js'
export default {
  getShopList (success, error) {
    Vue.http.get(SHOP_LIST).then((response) => {
      success(parseJson(response.body))
    }, (reject) => {
      console.log('出错了')
    })
  }
}
