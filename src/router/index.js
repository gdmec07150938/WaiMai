import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/home/Home'
import Order from '@/page/order/Order'
import Account from '@/page/account/Account'
import Seller from '@/page/seller/Seller'
import AddRating from '@/page/addRating/AddRating'
import OrderDetailed from '@/page/order/next/OrderDetailed'
import ActionBar from '@/components/header/ActionBar'
import Goods from '@/page/seller/item/goods/goods'
import Ratings from '@/page/seller/item/ratings/ratings'
import SellerDesc from '@/page/seller/item/sellerDesc/sellerDesc'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      components: {default: Home}
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
      props: { default: (route) => ({ orderItem: route.query.orderItem }), header: {title: '订单详情', show: true} }
    },
    {
      path: '/AddRating',
      name: 'AddRating',
      components: {default: AddRating, header: ActionBar},
      props: {default: (route) => ({ orderItem: route.query.orderItem }), header: {title: '添加评价', show: true}}
    },
    {
      path: '/Account',
      name: 'Account',
      components: {default: Account, header: ActionBar},
      props: {header: {title: '我的', show: false}}
    },
    {
      path: '/Seller',
      name: 'Seller',
      components: {default: Seller},
      props: {},
      children: [
        { path: 'goods', component: Goods },
        { path: 'ratings', component: Ratings },
        { path: 'sellerDesc', component: SellerDesc }
      ]
    }
  ]
})

