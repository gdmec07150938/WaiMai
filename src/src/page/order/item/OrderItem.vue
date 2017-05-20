<template>
    <div class="order border-1px">
        <div class="order-header border-1px">
            <span class="seller-avatar">
                <img :src="order.restaurant_image_url" width="32px" height="32px">
            </span>
            <div class="center">
                <h2 class="seller-name ">{{order.restaurant_name}}</h2>
                <i class="icon-keyboard_arrow_right"></i>
            </div>
            <span class="order-status">{{order.status_bar.title}}</span>
        </div>

        <div class="order-content" @click="showDetailed(order)">
            <div v-for="item in orderGroup" class="order-list">
                <span class="name">{{item.name}}</span>
                <span class="count">x {{item.quantity}}</span>
            </div>
            <i v-show="order.total_quantity >= foodCount" class="more">...</i>
            <div class="desc">
                共{{order.total_quantity}}件商品<i class="total-amount">￥{{order.total_amount}}</i>
            </div>
        </div>
        <div class="order-footer">
            <button>再来一单</button>
            <button @click="addRating(order)">去评价</button>
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
      showDetailed: function (order) {
        console.log(this)
        this.GLOBAL.setOrderAction(order)
        this.$router.push('/orderDetailed')
      },
      addRating: function (order) {
        this.GLOBAL.setOrderAction(order)
        this.$router.push('/addRating')
      }
    },
    created: function () {
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss">
    @import "../../../common/style/mixin";
    .order{
        min-width: 300px;
        @include border-1px(rgba(7,17,27,0.1));
        padding-bottom: 16px;
        .order-header{
            display: flex;
            flex-wrap: nowrap;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            height: 50px;

            @include border-1px(rgba(7,17,27,0.1));
            .seller-avatar{
                flex:0 1;
                display: inline-block;
                line-height: 50px;
                margin:0 10px;
                img{
                    display: inline-block;
                    text-align: center;
                    vertical-align: middle;
                    border-radius: 50%;
                }
            }
            .center{
                display: inline-block;
                white-space: nowrap;
                .seller-name{
                    display: inline-block;
                    font-size: 16px;
                    font-weight: 700;
                    vertical-align: middle;
                }
                .icon-keyboard_arrow_right{
                    display: inline-block;
                    font-size: 24px;
                    color: rgba(7,17,27,0.4);
                    vertical-align: middle;
                }
            }
            .order-status{
                margin-right: 10px;
                font-size: 12px;
                color: rgba(7,17,27,0.4);
            }
        }
        .order-content{
            width: 100%;
            clear: both;
            .order-list{
                height: 28px;
                .name{
                    max-width: 75%;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    float: left;
                    margin-left: 10px;
                    line-height: 28px;
                    font-size: 13px;
                    text-align: left;
                }
                .count{
                    float: right;
                    line-height: 28px;
                    margin-right: 10px;
                    font-size: 10px;
                    color: #666;
                }
            }
            .more{
                display:block;
                margin-right: 10px;
                line-height: 28px;
                font-size: 10px;
                font-weight: bold;
                text-align: right;
            }
            .desc{
                margin-right: 10px;
                height: 28px;
                line-height:28px;
                font-size: 12px;
                text-align: right;
                .total-amount{
                    font-size: 16px;
                    font-weight: bold;
                }
            }
        }
        .order-footer{
            margin: 8px 10px 0px 0px;
            text-align: right;
            button{
                height: 32px;
                font-size: 12px;
                color: #3190e8;
                border: solid 1px #3190e8;
                background-color: #fff;
            }
        }
    }
</style>

