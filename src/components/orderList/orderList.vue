<template>
    <div class="orderList">
      <ul>
        <li v-for="item in orderList">
          <order :order='item'></order>
        </li>
      </ul>
      
    </div>
</template>

<script type="text/ecmascript-6">
  import {parseJson} from '@/common/js/util.js'
  import order from '@/components/order/order'
  export default {
    data: function () {
      return {
        orderList: null
      }
    },
    methods: {
      order_init: function () {

      }
    },
    created: function () {
      this.$http.get('/api/orderList').then((response) => {
        this.orderList = parseJson(response.body)
      })
    },
    components: [order]
  }
</script>
<style lang="" rel="">
</style>

