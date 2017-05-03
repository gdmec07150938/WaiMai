<template>
    <div class="orderList">
      <ul>
        <li v-for="item in orderList">
          <v-order :order='item'></v-order>
        </li>
      </ul>
    </div>
</template>

<script type="text/ecmascript-6">
  import {parseJson} from '@/common/js/util.js'
  import order from '@/components/order/order'
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
      }
    },
    created: function () {
      this.order_init()
    },
    components: {'v-order': order}
  }
</script>
<style lang="" rel="">
</style>

