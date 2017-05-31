<template>
  <div id="seller">
    <v-header :seller="seller"></v-header>
    <div class="tab border-1px">
      <span class="tab-item">
        <router-link to="/Seller/goods">商品</router-link>
      </span>
      <span class="tab-item">
        <router-link to="/Seller/ratings">评价</router-link>
      </span>
      <span class="tab-item">
        <router-link to="/Seller/sellerDesc">商家</router-link>
      </span>
    </div>
    <keep-alive>
      <router-view :seller="seller"></router-view>
    </keep-alive>
  </div>
</template>

<script>
import header from './item/header/header.vue'
import {parseJson, parentUrl} from '@/common/js/util.js'

export default {
  name: 'seller',
  components: {'v-header': header},
  created: function () {
    this.$http.get('/api/seller').then((res) => {
      let json = res.body
      this.seller = Object.assign({}, this.seller, parseJson(json))
    })
  },
  mounted: function () {
    this.$router.push({path: '/Seller/goods'})
  },
  data: function () {
    return {
      seller: {
        id: (function () {
          let queryParam = parentUrl()
          return queryParam.id
        })()
      }
    }
  }
}
</script>
<style lang="scss" rel="stylesheet/scss">
  @import "../../common/style/mixin";
  .seller{
    background-color: #fff;
  }
  .tab {
    display: flex;
    align-items: center;
    width: 100%;
    height: 40px;
    @include border-1px(rgba(7, 17, 27, 0.1))
  }
  .tab-item{
    flex: 1;
    line-height: 40px;
    display: inline-block;
    text-align: center;
  }
  .router-link-active{
    color:rgb(240,20,20);
  }
</style>
