<template>
    <div class="orderList">
      <ul class="orderList-wrapper">
        <li v-for="item in orderList">
          <v-order :order='item'></v-order>
        </li>
      </ul>
    </div>
</template>
<script type="text/ecmascript-6">
  import IScroll from 'iscroll'
  import {parseJson} from '@/common/js/util.js'
  import OrderItem from '@/page/order/item/OrderItem'
  import ActionBar from '@/components/header/ActionBar'
  export default {
    name: 'OrderList',
    data: function () {
      return {
        orderList: null
      }
    },
    methods: {
      order_init: function () {
        this.$http.get('/api/orderList').then((response) => {
          this.orderList = parseJson(response.body)
        })
      },
      scroll_init: function () {
        this.$nextTick(function () {
          if (!this.orderScroll) {
            this.orderScroll = new IScroll(this.$el, {mouseWheel: true, click: true})
          } else {
            this.orderScroll.refresh()
          }
        })
      }
    },
    created: function () {
      this.order_init()
      this.scroll_init()
    },
    mounted: function () {
    },
    updated: function () {
      this.scroll_init()
    },
    components: {'v-order': OrderItem, 'ActionBar': ActionBar}
  }
</script>
<style lang="scss" rel="stylesheet/scss">
    .orderList{
        position: absolute;
        top: 40px;
        bottom: 48px;
        overflow: hidden;
        width: 100%;
        .orderList-wrapper{}
    }

</style>

