<template>
    <section class="shop-item" @click="onClickItem(shopItem)">
        <div class="shop-logo shop-left">
            <div class="logo-main-wrapper">
                <img :src="ImageUrl+shopItem.image_path" width="55px" height="55px" class="logo">
            </div>
        </div>
        <div class="shop-desc shop-right">
            <section class="seller">
                <i class="branch" v-show="shopItem.is_premium" style=""></i>
                <h3>{{shopItem.name}}</h3>
            </section>
            <section class="rating">
                <v-rater :value="shopItem.rating" :disabled="true" class="rater"></v-rater>
                <span class="rating-num">{{shopItem.rating}}</span>
                <span class="order-num">月售{{shopItem.recent_order_num}}单</span>
            </section>
            <section class="fee">
                <div class="moneylimit">
                    <span>{{shopItem.piecewise_agent_fee.rules[0].price}}起送</span>
                    <span>{{shopItem.piecewise_agent_fee.tips}}</span>
                    <span>{{shopItem.average_cost}}</span>
                </div>
                <div>
                    <span>{{shopItem.distance}}m</span>
                    <span>{{shopItem.order_lead_time}}分钟</span>
                </div>
            </section>
            <section class="activities"></section>
        </div>
    </section>
</template>

<script type="text/ecmascript-6">
  import {ImageUrl} from '@/api/api-list.js'
  import rater from '@/components/rater/rater.vue'
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
    },
    components: {'v-rater': rater}
  }
</script>
<style lang="scss" rel="stylesheet/scss">
    @import "../../../common/style/mixin";
    .shop-item {
        display: flex;
        justify-content: space-between;
        width: 100%;
        .shop-left{
            position: relative;
            padding: .4rem .266rem;
            .logo-main-wrapper{
                position: relative;
                height: 1.6rem;
                width: 1.6rem;
                .logo{
                    display: block;
                    height: 100%;
                    width: 100%;
                }
            }
        }
        .shop-right{
            display: flex;
            flex-direction: column;
            padding:.4rem .266667rem .4rem 0;
            .seller{
                display: block;
                margin-top: 10px;
                .branch{
                    display: inline-block;
                    width: 30px;
                    height: 20px;
                    background-size: 30px 20px;
                    $paht:'./brand';
                    @include bg-image($paht);
                    vertical-align: middle;
                }
                h3{
                    display: inline-block;
                    height: 20px;
                    font-size: .4rem;
                    font-weight: 700;
                    vertical-align: middle;
                    color:#333;
                }
            }
            .rating{
                font-size: .293333rem;
                color: #666;
                .rater{}
                .rating-num{}
                .order-num{}
            }
            .fee{
                font-size: .293333rem;
            }
            .activities{
                font-size: .293333rem;
            }
        }
    }
</style>
