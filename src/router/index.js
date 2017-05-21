import Vue from 'vue'
import Router from 'vue-router'
import Order from '@/page/order/Order'
import OrderDetailed from '@/page/order/next/OrderDetailed'
import AddRating from '@/page/addRating/AddRating'
import Account from '@/page/account/Account'
import ActionBar from '@/components/header/ActionBar'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Home',
      name: 'Home',
      components: {default: null, header: ActionBar},
      props: {header: {title: '首页'}}
    },
    {
      path: '/Order',
      name: 'Order',
      components: {default: Order, header: ActionBar},
      props: {header: {title: '订单'}}
    },
    {
      path: '/OrderDetailed',
      components: {default: OrderDetailed, header: ActionBar},
      props: {header: {title: '订单详情', show: true}}
    },
    {
      path: '/AddRating',
      name: 'AddRating',
      components: {default: AddRating, header: ActionBar},
      props: {header: {title: '添加评价', show: true}}
    },
    {
      path: '/Account',
      name: 'Account',
      components: {default: Account, header: ActionBar},
      props: {header: {title: '我的', show: false}}
    }
  ]
})

