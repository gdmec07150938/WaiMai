<template>
    <div class="home">
        Home
    </div>
</template>

<script type="text/ecmascript-6">
  import {isEmptyObject} from '@/common/js/util.js'
  export default {
    data: function () {
      return {
        shopList: {}
      }
    },
    methods: {
      shop_init: function () {
        if (isEmptyObject(this.shopList) && isEmptyObject(this.$store.state.shop.shopList)) {
          this.$store.dispatch('shop/GET_SHOP_LIST').then(() => {
            this.shopList = this.$store.state.shop.shopList
          })
        } else if (isEmptyObject(this.shopList) && !isEmptyObject(this.$store.state.shop.shopList)) {
          this.shopList = this.$store.state.shop.shopList
        }
      }
    },
    created: function () {
      this.shop_init()
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss">
</style>
