<template>
    <div class="shopcart">
        <div class="content">
            <div class="content-left" @click="toggleList">
                <div class="logo-wrapper">
                    <div class="logo" :class="{highlight: totalCount > 0}">
                        <i class="icon-shopping_cart" :class="{highlight: totalCount > 0}"></i>
                    </div>
                    <div class="num" v-show="totalCount > 0">{{totalCount}}</div>
                </div>
                <div class="price" :class="{highlight: totalPrice > 0}">￥{{totalPrice}}元</div>
                <div class="desc">配送费￥{{deliveryPrice}}元</div>
            </div>
            <div class="content-right">
                <div class="pay" :class="payClass">
                    {{payDesc}}
                </div>
            </div>
        </div>
        
        <transition name="slide-fade" v-on:enter="shopcartScroll_init">
            <div class="shopcart-list" v-show="listShow">
                <div class="list-header">
                    <h1 class="title">购物车</h1>
                    <span class="empty" @click="empty">清空</span>
                </div>
                <div class="list-content" ref="shopcartScroll">
                    <ul>
                        <li class='food' v-for="food in selectFood">
                            <span class="food-name">{{food.name}}</span>
                            <div class="price">
                                <span>￥{{food.price*food.count}}</span>
                            </div>
                            <div class="cartcontrol-wrapper">
                                <cartcontrol :food="food"></cartcontrol>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </transition>
        <transition name="shopcart-mask">
            <div class="shopcart-mask" v-show="listShow"></div>
        </transition>
    </div>
</template>

<script type="text/ecmascript-6">
    import cartcontrol from '../cartcontrol/cartcontrol'
    import IScroll from 'iscroll'
    export default {
      props: {
        selectFood: {
          type: Array,
          default: function () {
            return [{
              price: 4,
              count: 2  //  count来自cartcontrol
            }, {
              price: 12.5,
              count: 1
            }]
          }
        },
        deliveryPrice: {
          type: Number,
          default: 0
        },
        minPrice: {
          type: Number,
          default: 0
        }
      },
      data: function () {
        return {
          fold: true //  折叠
        }
      },
      computed: {
        totalPrice: function () {
          let total = 0
          this.selectFood.forEach((food) => {
            total += food.price * food.count
          })
          return total
        },
        totalCount: function () {
          let count = 0
          this.selectFood.forEach((food) => {
            count += food.count
          })
          return count
        },
        payDesc: function () {
          if (this.totalPrice === 0) {
            return '￥' + this.minPrice + '起送'
          } else if (this.totalPrice < this.minPrice) {
            let diff = this.minPrice - this.totalPrice
            return '还需' + diff + '起送'
          } else {
            return '去结算'
          }
        },
        payClass: function () {
          if (this.totalPrice < this.minPrice) {
            return 'no-enough'
          } else {
            return 'enough'
          }
        },
        listShow: function () {
          if (!this.totalCount) {
            this.fold = true // true表示折叠
            return false
          }
          this.shopcartScroll_init()
          return !this.fold
        }
      },
      methods: {
        toggleList: function () {
          console.log('toggleList')
          if (!this.totalCount) {
            return
          }
          this.fold = !this.fold
        },
        empty: function () {
          this.selectFood.forEach((food) => {
            food.count = 0
          })
        },
        shopcartScroll_init: function () {
          if (!this.shopcartScroll) {
            this.$nextTick(() => {
              console.log(this.$refs.shopcartScroll)
              this.shopcartScroll = new IScroll(this.$refs.shopcartScroll, {click: true})
            })
          } else {
            this.shopcartScroll.refresh()
          }
        }
      },
      components: {cartcontrol}
    }
</script>
<style lang="scss" rel="stylesheet/scss">
    @import '../../../../common/style/mixin';
    .shopcart{
        position: fixed;
        left: 0;
        bottom: 0;
        z-index: 50;
        width: 100%;
        height: 48px;
        .content{
            display: flex;
            background-color: #141d27;
            .content-left{
                flex: auto;
                font-size: 0px;
                .logo-wrapper{
                    display: inline-block;
                    position: relative;
                    top: -10px;
                    margin: 0 12px;
                    padding: 6px;
                    width: 56px;
                    height: 56px;
                    box-sizing: border-box;
                    vertical-align: top;
                    border-radius: 50%;
                    background-color: #141d27;
                    .logo{
                        width: 100%;
                        height: 100%;
                        border-radius: 50%;
                        background-color: #2b343c;
                        text-align: center;
                        &.highlight{
                            background-color: rgb(0,160,200);
                        }
                        .icon-shopping_cart{
                            font-size: 24px;
                            color: #80858a;
                            line-height: 44px;
                            &.highlight{
                                color:#fff;
                            }
                        }
                    }
                    .num{
                        position: absolute;
                        top: 0;
                        right: 0;
                        width: 24px;
                        height: 16px;
                        line-height: 16px;
                        text-align: center;
                        border-radius: 16px;
                        font-size: 9px;
                        font-weight: 700;
                        color: #fff;
                        background-color: rgb(240,20,20);
                        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4);
                    }
                }
                .price{
                    display: inline-block;
                    vertical-align: top;
                    margin-top: 12px;
                    line-height: 24px;
                    padding-right: 12px;
                    box-sizing: border-box;
                    border-right: solid 1px rgba(255,255,255,0.1);
                    font-size: 16px;
                    font-weight: 700;
                    color:rgba(255,255,255,0.4);
                    &.highlight{
                        color:#fff;
                    }
                }
                .desc{
                    display: inline-block;
                    line-height: 24px;
                    margin: 12px 0 0 12px;
                    font-size: 10px;
                    color: rgba(255,255,255,0.4);
                }
            }
            .content-right{
                flex: 0 0 105px;
                width: 105px;
                .pay{
                    height: 48px;
                    line-height: 48px;
                    text-align: center;
                    font-size: 12px;
                    color: rgba(255,255,255,0.4);
                    font-weight: 700;
                    &.no-enough {
                        background-color: #2b333b;
                    }
                    &.enough{
                        background-color: #00b43c;
                        color: #fff;
                    }
                }
            }
        }
        .shopcart-list{
            position: absolute;
            left: 0;
            bottom:46px;
            z-index: -1;
            width: 100%;
            /* 可以设置不同的进入和离开动画 */
            /* 设置持续时间和动画函数 */
            &.slide-fade-enter, &.slide-fade-leave-active {
                opacity: 1;
                transform:translate(0,100%);
            }
            &.slide-fade-enter-active {
                transition: all 1s;
            }
            &.slide-fade-leave-active {
                transition: all 1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
            }
            .list-header{
                height: 40px;
                line-height: 40px;
                padding: 0 18px;
                background-color: #f3f5f7;
                border-bottom: 1px solid rgba(7,17,27,0.1);
                .title{
                    float: left;
                    font-size: 14px;
                    color: rgb(7,17,27);
                }
                .empty{
                    float:right;
                    font-size: 12px;
                    color: rgb(0,160,220);
                }
            }
            .list-content{
                padding: 0 18px;
                max-height: 217px;
                overflow: hidden;
                background-color: #fff;
                .food{
                    position: relative;
                    padding: 12px 0;
                    box-sizing: border-box;
                    @include  border-1px(rgba(7,17,27,0.1))
                    .food-name{
                        line-height: 24px;
                        font-size: 14px;
                        color: rgb(7,17,27);
                    }
                    .price{
                        position: absolute;
                        right: 90px;
                        bottom: 12px;
                        line-height: 24px;
                        font-size: 14px;
                        font-weight: 700;
                        color: rgb(240,20,20);
                    }
                    .cartcontrol-wrapper{
                        position: absolute;
                        right: 0;
                        bottom: 6px;

                    }
                }
            }
        }
        .shopcart-mask{
            position: fixed;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            z-index: -2;
            backdrop-filter:blur(10px);
            background-color: rgba(7,17,27,0.4);
            &.shopcart-mask-enter, &.shopcart-mask-leave{
                opacity: 1;
                background-color: rgba(7,17,27,0);
            }
            &.shopcart-mask-enter-active, &.shopcart-mask-leave-active{
                transition: all 1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
            }
        }
    }
</style>
