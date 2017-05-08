<template>
    <div class="orderDetail">
        <div class="title">
            <h3 class="order-title">{{order.timeline_node.title}}</h3>
            <p class="order-desc">{{order.timeline_node.description}}</p>
        </div>
        <div class="content">
            <div class="content-title">订单明细</div>
            <div class="content-content">
                <div>
                    <h4>{{order.restaurant_name}}</h4>
                    <i></i>
                </div>
                <div class="food-list">
                    <div class="food" v-for="item in order.basket.group[0]">
                        <span class="name">{{item.name}}</span>
                        <span class="count">x{{item.quantity}}</span>
                        <span class="price">￥{{item.price}}</span>
                    </div>
                </div>
                <div class="deliver_fee">
                    <span>{{order.basket.deliver_fee.name}}</span>
                    <span>￥{{order.basket.deliver_fee.price}}</span>
                </div>
                <div class="packing_fee" v-if="order.basket.packing_fee">
                    <span>{{order.basket.packing_fee.name}}</span>
                    <span>{{order.basket.packing_fee.quantity}}</span>
                    <span>￥{{order.basket.packing_fee.price}}</span>
                </div>
                <div>
                    <span>实付{{order.total_amount}}</span>
                </div>
            </div>
        </div>
        <div class="other">
            <div class="content-title">订单明细</div>
            <div class="other-content">
                <ul>
                    <li>
                        <span class="name">订单号</span>
                        <span class="desc">{{orderDetail.id}}</span>
                    </li>
                    <li>
                        <span class="name">支付方式</span>
                        <span class="desc">{{orderDetail.pay_method}}</span>
                    </li>
                    <li>
                        <span class="name">下单时间</span>
                        <span class="desc">{{orderDetail.formatted_created_at}}</span>
                    </li>
                    <li>
                        <span class="name">收货信息:</span>
                        <span class="desc">{{orderDetail.consignee}}  {{orderDetail.phone}}<p>{{orderDetail.address}}</p></span>
                    </li>
                    <li>
                        <span class="name">配送时间</span>
                        <span class="desc">{{orderDetail.deliver_time}}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
  import {parseJson, isEmptyObject} from '@/common/js/util.js'
  export default {
    props: {
    },
    data: function () {
      return {
        order: this.GLOBAL.state.order,
        orderDetail: {}
      }
    },
    methods: {
      orderDetail_init: function () {
        this.$http.get('/api/orderDetailed').then((response) => {
          this.orderDetail = parseJson(response.body)
        })
      },
      check_data: function () {
        if (isEmptyObject(this.order)) {
          this.$router.push('/order')
        }
      }
    },
    created: function () {
      this.orderDetail_init()
      this.check_data()
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss">
    .orderDetail{
        .title{
            .order-title{}
            .order-desc{}
        }
        .content{}
    }
</style>
