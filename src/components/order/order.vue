<template>
    <div class="order">
        <div class="order-header">
            <span class="seller-avatar">
                <img :src="order.restaurant_image_url" width="50px" height="50px">
            </span>
            <h2 class="seller-name">{{order.restaurant_name}}</h2>
            <i class="icon-keyboard_arrow_right"></i>
            <span class="order-status">{{order.status_bar.title}}</span>
        </div>
        <div class="order-content">
            <div v-for="item in orderGroup" class="order-list">
                <span class="name">{{item.name}}</span>
                <span class="count">x {{item.quantity}}</span>
            </div>
            <div class="desc">
                共{{order.total_quantity}}件商品<i class="total-amount">￥{{order.total_amount}}</i>
            </div>
        </div>
        <div class="order-footer">
            <button>再来一单</button>
            <button>去评价</button>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'Order',
    data: function () {
      return {
        foodCount: 3
      }
    },
    props: {
      order: {
        type: Object,
        required: true
      }
    },
    computed: {
      orderGroup: function () {
        return this.order.basket.group[0].slice(0, this.foodCount)
      }
    },
    methods: {
    },
    created: function () {
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss">
    @import "../../common/style/mixin";
    .order{
        padding: 0 10px;
        .order-header{
            display: flex;
            flex-wrap: nowrap;
            align-items: center;

            width: 100%;
            height: 50px;
            text-align: center;
            @include border-1px(rgba(7,17,27,0.1));
            .seller-avatar{
                flex: 1 0;
                display: inline-block;
                width: 50px;
                height: 50px;
                margin:0 10px;
                .img{
                    border-radius: 50%;
                }
            }
            .seller-name{
                display: inline-block;
                margin-right: 10px;
                font-size: 18px;
                font-weight: 700;
            }
            .icon-keyboard_arrow_right{
                font-size: 24px;
                color: rgba(7,17,27,0.4);
            }
            .order-status{
                font-size: 10px;
                color: rgba(7,17,27,0.4);
            }
        }
        .order-content{

            width: 100%;
            .order-list{
                height: 28px;
                .name{
                    float: left;
                    line-height: 28px;
                    font-size: 10px;

                }
                .count{
                    float: right;
                    line-height: 28px;
                    font-size: 10px;
                    color: #666;
                }
            }
            .desc{
                float: right;
                .total-amount{}
            }
        }
        .order-footer{
            text-align: right;
            button{
                font-size: 12px;
                color: #3190e8;
                border: solid 1px #3190e8;
                background-color: #fff;
            }
        }
    }
</style>

