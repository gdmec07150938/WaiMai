<template>
    <div class="home">
        <div class="shop-list">
            <shop-item v-for="(item,index) in shopList" key="index" :shopItem="item"></shop-item>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
  import {isEmptyObject} from '@/common/js/util.js'
  import shopItem from './item/shopItem.vue'
  import IScroll from 'iscroll'
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
      },
      scroll_init: function () {
        this.$nextTick(function () {
          if (!this.homeScroll) {
            this.homeScroll = new IScroll(this.$el, {mouseWheel: true, click: true})
          } else {
            this.homeScroll.refresh()
          }
        })
      }
    },
    created: function () {
      this.shop_init()
    },
    mounted: function () {
      this.scroll_init()
    },
    updated: function () {
      this.scroll_init()
    },
    components: {'shop-item': shopItem}
  }
</script>
<style lang="scss" rel="stylesheet/scss">
    .home{
        position: absolute;
        top: 0;
        left: 0;
        bottom: 48px;
        overflow: hidden;
        width: 100%;
        .shop-list{
        }
    }
</style>
