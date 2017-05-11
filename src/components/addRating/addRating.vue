<template>
    <div class="addRating">
        <div class="header">
            <div class="seller">
                <span class="seller-icon">
                    <img :src="order.restaurant_image_url" width="35px" height="35px">
                </span>
                <span class="name">
                    商家名
                </span>
            </div>
            <div class="title">为商家服务打分</div>
            <div class="start">
                <rater :fontSize="40"></rater>
            </div>
        </div>
        <div class="rating-food">
            <div class="text rating-food-item border-1px">
                请选择想推荐或吐槽的商品（选填）
            </div>
            <div class="rating-food-item food-list" v-for="item in foodList">
                <span class="food-name">{{item.name}}</span>
                <span class="food-thumb">
                    <i class="icon-thumb_up"></i>
                    <i class="icon-thumb_down"></i>
                </span>
            </div>
        </div>
        <div class="seller-delivery">
            <span class="title">配送服务</span>
            <span class="start-warpper">
                <rater :fontSize="25"></rater>
            </span>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
  import rater from '@/components/rater/rater'
  import {isEmptyObject} from '@/common/js/util.js'
  export default {
    props: {},
    data: function () {
      return {
        order: this.GLOBAL.state.order,
        foodList: this.GLOBAL.state.order.basket.group[0]
      }
    },
    methods: {
      check_data: function () {
        if (isEmptyObject(this.order)) {
          this.$router.push('/order')
        }
      }
    },
    components: {'rater': rater},
    created: function () {
      this.check_data()
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss">
    @import "../../common/style/mixin";
    .addRating{
        margin: 0 15px;
        .header{
            display: block;
            width: 100%;
            height: 150px;
            margin-top: 12px;
            .seller{
                display: block;
                margin-bottom: 14px;
                .seller-icon{
                    display: inline-block;
                    vertical-align: middle;
                    margin-right: 10px;
                    img{}
                }
                .name{
                    height: 26px;
                    line-height: 26px;
                    display: inline-block;
                    font-size: 14px;
                    vertical-align: middle;
                }
            }
            .title{
                display: block;
                height: 20px;
                margin-bottom: 14px;
                line-height: 20px;
                font-size: 12px;
                color: rgba(136,136,136,100);
            }
            .start{
                height: 40px;
            }
        }
        .rating-food{
            .rating-food-item{
                height: 40px;
                line-height: 40px;
                text-align: left;
            }
            .text{
                font-size: 12px;
                color: rgba(136,136,136,100);
                @include border-1px(rgba(204,204,204,100))
            }
            .food-list{
                font-size: 13px;
                color: #505050;
                clear: both;
                .food-thumb{
                    display: inline-block;
                    float: right;
                    i{
                        height: 14px;
                        width: 14px;
                        margin-left: 10px;
                        color: rgba(153,153,153,100);
                    }
                }

            }
        }
        .seller-delivery{
            height: 40px;
            line-height: 40px;
            vertical-align: middle;
            text-align: left;
            .title{
                display: inline-block;
                vertical-align: middle;
                font-size: 14px;
            }
            .start-warpper{
                display: inline-block;
                height: 25px;
                line-height: 25px;
                vertical-align: middle;
            }
        }
    }

</style>
