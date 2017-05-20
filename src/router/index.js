import Vue from 'vue'
import Router from 'vue-router'
import Order from '@/page/order/Order'
import OrderDetailed from '@/page/order/next/OrderDetailed'
import AddRating from '@/page/addRating/AddRating'
import Account from '@/page/account/Account'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Order',
      name: 'Order',
      component: Order
    },
    {
      path: '/OrderDetailed',
      component: OrderDetailed
    },
    {
      path: '/AddRating',
      name: 'AddRating',
      component: AddRating
    },
    {
      path: '/Account',
      name: 'Account',
      component: Account
    }
  ]
})

