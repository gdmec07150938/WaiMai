<template>
    <div class="orderDetail">
        <div class="orderDetail-wrapper">
            <div class="title">
                <h3 class="order-title">{{order.timeline_node.title}}</h3>
                <p class="order-desc">{{order.timeline_node.description}}</p>
            </div>
            <split></split>
            <div class="content">
                <div class="content-title">订单明细</div>
                <div class="content-content">
                    <div class="order-header border-1px">
                    <span class="seller-avatar">
                        <img :src="order.restaurant_image_url" width="28px" height="28px">
                    </span>
                        <h2 class="seller-name">{{order.restaurant_name}}</h2>
                        <i class="icon-keyboard_arrow_right"></i>
                    </div>
                    <ul class="food-list border-1px">
                        <li class="food" v-for="item in order.basket.group[0]">
                            <span class="name">{{item.name}}</span>
                            <span class="count">x{{item.quantity}}</span>
                            <span class="price">￥{{item.price}}</span>
                        </li>
                    </ul>
                    <div class="fee border-1px">
                        <div class="deliver_fee">
                            <span class="name">{{order.basket.deliver_fee.name}}</span>
                            <span class="price">￥{{order.basket.deliver_fee.price}}</span>
                        </div>
                        <div class="packing_fee" v-if="order.basket.packing_fee">
                            <span class="name">{{order.basket.packing_fee.name}}</span>
                            <span class="count">x{{order.basket.packing_fee.quantity}}</span>
                            <span class="price">￥{{order.basket.packing_fee.price}}</span>
                        </div>
                    </div>
                    <div class="total">
                        <span class="total-price">实付<i>￥{{order.total_amount}}</i></span>
                    </div>
                </div>
            </div>
            <split></split>
            <div class="other">
                <div class="content-title">其他信息</div>
                <div class="other-content">
                    <ul>
                        <li class="item">
                            <span class="name">订单号：<i class="forjustify"></i></span>
                            <span class="desc">{{orderDetail.id}}</span>
                        </li>
                        <li class="item">
                            <span class="name">支付方式：</span>
                            <span class="desc">{{orderDetail.pay_method}}</span>
                        </li>
                        <li class="item">
                            <span class="name">下单时间：</span>
                            <span class="desc">{{orderDetail.formatted_created_at}}</span>
                        </li>
                        <li class="item">
                            <span class="name">收货信息：</span>
                            <span class="desc">{{orderDetail.consignee}}  {{orderDetail.phone}}<br>{{orderDetail.address}}</br></span>
                        </li>
                        <li class="item">
                            <span class="name">配送时间：</span>
                            <span class="desc">{{orderDetail.deliver_time}}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
  import IScroll from 'iscroll'
  import {parseJson, isEmptyObject} from '@/common/js/util.js'
  import split from '@/components/split/split'
  const FROMPATH = '/OrderItem'
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
          this.$router.push('/OrderItem')
        }
      },
      init_scroll: function () {
        this.$nextTick(function () {
          if (!this.orderDetailScroll) {
            this.orderDetailScroll = new IScroll(this.$el, {mouseWheel: true})
          } else {
            this.orderDetailScroll.refresh()
          }
        })
      }
    },
    beforeRouteEnter: function (to, from, next) {
      if (from.path !== FROMPATH) {
        if (from.path === '/') {
          next(FROMPATH)
        }
        next(false)
      }
      next()
    },
    created: function () {
      this.orderDetail_init()
      this.check_data()
      this.init_scroll()
    },
    updated: function () {
      this.init_scroll()
    },
    components: {split}
  }
</script>
<style lang="scss" rel="stylesheet/scss">
    @import "../../../common/style/mixin";
    .orderDetail{
        position: absolute;
        top: 40px;
        bottom: 0px;
        width: 100%;
        overflow: hidden;
        background-color: white;
        z-index: 1;
        .orderDetail-wrapper{
            width: 100%;
            .title{
                height: 60px;
                padding: 0px 10px;
                margin: 10px 0px;
                .order-title{
                    text-align: left;
                    font-size: 24px;
                    line-height: 44px;
                }
                .order-desc{
                    line-height: 16px;
                    text-align: left;
                    font-size: 10px;
                }
            }
            .content{
                padding: 0px 10px;
                margin: 10px 0px 0px 0px;
                .content-title{
                    margin: 6px 0px;
                    text-align: left;
                    font-size: 18px;
                    color: rgba(7,17,27,0.4);
                }
                .content-content{
                    .order-header{
                        display: flex;
                        flex-wrap: nowrap;
                        justify-content: space-between;
                        align-items: center;
                        width: 100%;
                        height: 50px;

                        @include border-1px(rgba(7,17,27,0.1),dashed);
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
                        .seller-name{
                            display: inline-block;
                            font-size: 16px;
                            font-weight: 700;
                        }
                        .icon-keyboard_arrow_right{
                            font-size: 24px;
                            color: rgba(7,17,27,0.4);
                        }
                    }
                    .food-list{
                        @include border-1px(rgba(7,17,27,0.1),dashed);
                        .food{
                            height: 28px;
                            .name{
                                max-width: 75%;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                white-space: nowrap;
                                float: left;
                                line-height: 28px;
                                font-size: 12px;
                                text-align: left;
                            }
                            .count{
                                float: right;
                                line-height: 28px;
                                font-size: 12px;
                                color: #666;
                            }
                            .price{
                                float: right;
                                margin-right: 20px;
                                line-height: 28px;
                                font-size: 12px;
                                color: #666;
                            }
                        }
                    }
                    .fee{
                        @include border-1px(rgba(7,17,27,0.1),dashed);
                        .deliver_fee{
                            height: 28px;
                            font-size: 12px;
                            .name{
                                float: left;
                                line-height: 28px;
                            }
                            .price{
                                float: right;
                                line-height: 28px;
                                color: #666;
                            }

                        }
                        .packing_fee{
                            height: 28px;
                            font-size: 12px;
                            .name{
                                max-width: 75%;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                white-space: nowrap;
                                float: left;
                                line-height: 28px;
                                font-size: 12px;
                                text-align: left;
                            }
                            .price{
                                float: right;
                                margin-right: 20px;
                                line-height: 28px;
                                font-size: 12px;
                                color: #666;
                            }
                            .count{
                                float: right;
                                line-height: 28px;
                                font-size: 12px;
                                color: #666;
                            }
                        }
                    }
                    .total{
                        margin: 6px 0px;
                        height: 28px;
                        .total-price{
                            font-size: 12px;
                            i{
                                font-size: 18px;
                                font-weight: bold;
                                color: #ff3b06;
                            }
                            float: right;
                            line-height: 28px;
                            text-align: right;
                        }
                    }
                }
            }
            .other{
                padding: 0px 10px;
                margin: 10px 0px 0px 0px;
                font-size: 8px;
                .content-title{
                    margin: 6px 0px;
                    text-align: left;
                    font-size: 18px;
                    color: rgba(7,17,27,0.4);
                }
                .other-content{
                    .item{
                        display:block;
                        clear:both;
                        min-height: 28px;
                        .name{
                            display:inline-block;
                            float:left;
                            width:80px;
                            height:28px;
                            overflow: hidden;
                            line-height:28px;
                            font-size: 12px;
                            text-align:justify;
                            .forjustify{
                                display: inline-block;
                                width: 100%;
                            }
                        }
                        .desc{
                            display:inline-block;
                            float:left;
                            line-height:28px;
                            font-size: 12px;
                            text-align:left;
                        }
                    }
                }

            }
        }
    }

</style>
