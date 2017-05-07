<template>
    <div>
        1111111111111111
    </div>
</template>

<script type="text/ecmascript-6">
  import {parseJson} from '@/common/js/util.js'
  export default {
    data: function () {
      return {
        orderDetail: null
      }
    },
    methods: {
      orderDetail_init: function () {
        this.$http.get('/api/orderDetailed').then((response) => {
          this.orderDetail = parseJson(response.body)
        })
      }
    },
    created: function () {
      this.orderDetail_init()
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss">
</style>
