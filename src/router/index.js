import Vue from 'vue'
import Router from 'vue-router'
import OrderList from '@/components/orderList/orderList'
import OrderDetailed from '@/components/order/children/orderDetailed'
import addRating from '@/components/addRating/addRating'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/order',
      name: 'OrderList',
      component: OrderList
    },
    {
      path: '/orderDetailed',
      component: OrderDetailed
    },
    {
      path: '/addRating',
      name: 'addRating',
      component: addRating
    }
  ]
})

