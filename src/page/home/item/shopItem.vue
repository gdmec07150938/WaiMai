<template>
    <div class="shop-item" @click="onClickItem(shopItem)">
        <div class="shop-logo shop-left">
            <img :src="ImageUrl+shopItem.image_path" width="55px" height="55px" class="logo">
        </div>
        <div class="shop-desc shop-right">
            <div class="seller-name"><i v-show="shopItem.is_premium">***</i>{{shopItem.name}}</div>
            <div class="rating"></div>
            <div class="fee"></div>
            <div class="activities"></div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
  import {ImageUrl} from '@/api/api-list.js'
  export default {
    data: function () {
      return {
        ImageUrl
      }
    },
    props: {
      shopItem: {type: Object, required: true}
    },
    methods: {
      onClickItem: function (shopItem) {}
    },
    mounted: function () {
      console.log(ImageUrl)
    },
    updated: function () {
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss">
    .shop-item {
        display: block;
        width: 100%;
        height: 125px;
        clear: left;
        .shop-left{
            float: left;
            width: 75px;
            height: 100%;
            .logo{
                margin: 10px 0px 0px 10px;
            }
        }
        .shop-right{
            display: flex;
            margin-left: 75px;
            height: 100%;
            flex-direction: column;
            & > div {
                height: 20px;
            }
        }
    }
</style>
