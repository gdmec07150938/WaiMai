<template>
    <div>
        <div class="goods">
            <div class="menu-wrapper" ref="menuScroll">
                <ul>
                    <li v-for="(item, index) in goods" class="menu-item" :class="{'current':currentIndex === index}"
                        @click="SelectMeun(index)">
                <span class="text border-1px">
                    <span v-show="item.type > 0" class="icon" :class="classMap[item.type]"></span>{{item.name}}</span>
                    </li>
                </ul>
            </div>
            <div class="foods-wrapper" ref="foodsScroll">
                <ul>
                    <li v-for="item in goods" class="food-list food-list-hook">
                        <h1 class="title">{{item.name}}</h1>
                        <ul>
                            <li v-for="food in item.foods" class="food-item border-1px">
                                <div class="icon">
                                    <img :src="food.icon" width="57px" height="57">
                                </div>
                                <div class="content">
                                    <h2 class="name">{{food.name}}</h2>
                                    <p class="desc">{{food.description}}</p>
                                    <div class="extra">
                                        <span class="count">月售{{food.sellCount}}份</span>
                                        <span>好评率{{food.rating}}%</span>
                                    </div>
                                    <div class="price">
                                        <span class="now">￥{{food.price}}</span>
                                        <span v-show="food.oldPrice" class="old">￥{{food.oldPrice}}</span>
                                    </div>
                                    <div class="cartcontrol-wrapper">
                                        <cartcontrol :food="food"></cartcontrol>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        <shop-cart :delivery-price="seller.deliveryPrice" :min-price="seller.minPrice"
                   :select-food="selectFood">
        </shop-cart>
    </div>
</template>

<script type="text/ecmascript-6">
    import IScroll from 'iscroll'
    import ShopCart from '../shopcart/shopcart'
    import {parseJson} from '@/common/js/util.js'
    import cartcontrol from '../cartcontrol/cartcontrol'
    import {ApiUrl} from '@/api/api-list.js'
    export default {
      props: ['seller'],
      data: function () {
        return {
          goods: {},
          listHeight: [],
          scrollY: 0
        }
      },
      computed: {
        currentIndex: function () {
          for (let i = 0; i < this.listHeight.length; i++) {
            let heightStart = this.listHeight[i]
            let heightEnd = this.listHeight[i + 1]
            if (!heightEnd || (this.scrollY >= heightStart && this.scrollY < heightEnd)) {
              return i
            }
          }
          return 0
        },
        selectFood: function () {
          let foods = []
          for (let i = 0; i < this.goods.length; i++) {
            let foodList = this.goods[i].foods
            for (let k = 0; k < foodList.length; k++) {
              console.log(foodList[k])
              if (foodList[k].count > 0) {
                foods.push(foodList[k])
              }
            }
          }
          this.$store.commit('shopCart/SET_SELECT_FOOD', foods)
          return foods
        }
      },
      methods: {
        SelectMeun: function (index) {
          console.log(index)
          let foodList = this.$refs.foodsScroll.getElementsByClassName('food-list-hook')
          let el = foodList[index]
          this.myScroll2.scrollToElement(el, 300)
        },
        _calculateHeight: function () {
          let foodList = this.$refs.foodsScroll.getElementsByClassName('food-list-hook')
          let height = 0
          this.listHeight.push(height)
          for (let i = 0; i < foodList.length; i++) {
            height += foodList[i].clientHeight
            this.listHeight.push(height)
          }
        },
        _initScroll: function () {
          this.myScroll = new IScroll(this.$refs.menuScroll, {click: true})
          this.myScroll2 = new IScroll(this.$refs.foodsScroll, {
            probeType: 3, mouseWheel: true, click: true
          })
          this.myScroll2.on('scroll', () => {
            this._updatePosition(this.myScroll2)
          })
          this.myScroll2.on('scrollEnd', () => {
            this._updatePosition(this.myScroll2)
          })
        },
        _updatePosition (IScroll) {
          this.scrollY = Math.abs(IScroll.y >> 0)
        }
      },
      created: function () {
        this.classMap = ['decrease', 'discount', 'guarantee', 'invoice', 'special']
        this.$http.get(ApiUrl + 'goods/').then((res) => {
          this.goods = parseJson(res.body)
          this.$nextTick(function () {
            this._initScroll()
            this._calculateHeight()
          })
        })
      },
      components: {ShopCart, cartcontrol}
    }

</script>
<style rel="stylesheet/scss" lang="scss">
    @import '../../../../common/style/mixin';
    .goods{
        display: flex;
        width: 100%;
        position: absolute;
        top: 174px;
        bottom: 48px;
        overflow:hidden;
        //  z-index: 10;
        .menu-wrapper{
            flex: 0 0 80px;
            width: 80px;
            background-color: #f3f5f7;
            .menu-item{
                display: table;
                width: 56px;
                height: 54px;
                line-height: 14px;
                padding: 0 12px;
                &.current{
                    position: relative;
                    z-index: 10;
                    font-weight: 700;
                    margin-top: -1px;
                    background-color:#fff;
                    .text {
                        @include  border-none()
                    }
                }
                .icon{
                    display: inline-block;
                    vertical-align: top;
                    width: 12px;
                    height: 12px;
                    margin-right: 2px;
                    background-size: 12px 12px;
                    background-repeat: no-repeat;
                    &.decrease{@include  bg-image('../header/decrease_1')}
                    &.discount{@include  bg-image('../header/discount_1')}
                    &.guarantee{@include  bg-image('../header/guarantee_1')}
                    &.invoice{@include  bg-image('../header/invoice_1')}
                    &.special{@include  bg-image('../header/special_1')}
                }
                .text{
                    display: table-cell;
                    width: 56px;
                    vertical-align: middle;
                    font-size:12px;
                    @include  border-1px(rgba(7,17,27,0.1));
                }
            }
        }
        .foods-wrapper{
            flex:auto;
            .title{
               padding-left: 14px;
               height: 26px;
               line-height: 26px;
               border-left: 2px solid #d9dde1;
               font-size:12px;
               color: rgb(147,153,159);
               background-color: #f3f5f7;
            }
            .food-item{
                display: flex;
                margin: 18px;
                padding-bottom: 18px;
                @include  border-1px(rgba(7,17,27,0.1));
                &:last-child {
                    @include  border-none();
                    margin-bottom: 0;
                }
                .icon{
                    flex: 0 0 57px;
                    margin-right: 10px ;
                }
                .content{
                    flex: auto;
                    .name{
                        margin: 2px 0px 8px 0px;
                        height: 14px;
                        line-height: 14px;
                        font-size: 14px;
                        color: rgb(7,17,27);
                    }
                    .desc{
                        margin-bottom: 8px;
                        line-height: 10px;
                        font-size: 10px;
                        color:rgb(147,153,159);
                    }
                    .extra{
                        line-height: 10px;
                        font-size: 10px;
                        color:rgb(147,153,159);
                        .count{
                            margin-right: 12px;
                        }
                    }
                    .price {
                        font-weight: 700;
                        line-height: 24px;
                        .now{
                            margin-right: 8px;
                            font-size: 14px;
                            color: rgb(240,20,20);
                        }
                        .old{
                            text-decoration: underline;
                            font-size: 10px;
                            color:rgb(147,153,159);
                        }
                    }
                    .cartcontrol-wrapper{
                        position:absolute;
                        right: 0;
                        bottom:12px;
                    }
                }
            }
        }

    }
</style>
