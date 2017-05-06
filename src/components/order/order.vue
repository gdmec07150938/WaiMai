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
    .order{
        .order-header{
            width: 100%;
            height: 50px;
            text-align: center;
            .seller-avatar{
                display: inline-block;
                width: 50px;
                height: 50px;
                vertical-align: middle;
            }
            .seller-name{
                display: inline-block;
                font-size: 18px;
                vertical-align: middle;
            }
            .icon-keyboard_arrow_right{
                vertical-align: middle;
            }
            .order-status{
                display: inline-block;
                vertical-align: middle;
            }
        }
        .order-content{
            .order-list{
                .name{}
                .count{}
            }
            .desc{
                .total-amount{}
            }
        }
    }
</style>

