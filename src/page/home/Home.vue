<template>
    <div class="home">
        <div class="home-wrapper">
            <swipe class="my-swipe" :prevent="true" :noDragWhenSingle="false" :auto="30000">
                <swipe-item class="slide1"></swipe-item>
                <swipe-item class="slide2"></swipe-item>
                <swipe-item class="slide3"></swipe-item>
            </swipe>
            <div class="shop-list">
                <h2 class="shop-title border-1px">推荐商家</h2>
                <shop-item v-for="(item,index) in shopList" key="index" :shopItem="item"></shop-item>
            </div>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
  import '@/common/style/vue-swipe.css'
  import { VueSwipe } from '@/common/js/vue-swipe.js'
  import {isEmptyObject} from '@/common/js/util.js'
  import shopItem from './item/shopItem.vue'
  import IScroll from 'iscroll'
  export default {
    data: function () {
      return {
        shopList: {},
        homeScroll: null
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
    components: {
      'shop-item': shopItem,
      'swipe': VueSwipe.Swipe,
      'swipe-item': VueSwipe.SwipeItem
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss">
    @import "../../common/style/mixin";
    .home{
        position: absolute;
        top: 0;
        left: 0;
        bottom: 48px;
        overflow: hidden;
        width: 100%;
        .shop-list{
            .shop-title{
                @include border-1px(#eee);
                display: block;
                width: 100%;

                margin-top: .266667rem;
                padding-left: .4rem;
                line-height: .906667rem;
                font-weight: 600;
                font-size: .4rem;
                text-align: left;

            }
        }
        .my-swipe{
            height: 200px;
            color: #fff;
            font-size: 30px;
            text-align: center;
            .slide1 {
                background-color: #0089dc;
                color: #fff;
            }

            .slide2 {
                background-color: #ffd705;
                color: #000;
            }

            .slide3 {
                background-color: #ff2d4b;
                color: #fff;
            }
        }
    }
</style>
