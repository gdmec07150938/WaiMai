<template>
    <div class="addRating">
        <div class="addRating-wrapper">
            <div class="header">
                <div class="seller">
                <span class="seller-icon">
                    <img :src="order.restaurant_image_url" width="35px" height="35px">
                </span>
                    <span class="name">
                    {{order.restaurant_name}}
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
                <div class="rating-food-item food-list" v-for="(item, index) in foodList">
                    <span class="food-name">{{item.name}}</span>
                    <span class="food-thumb">
                        <i class="icon-thumb_up" @click="save_thumb(index, 'thumb_up')" :class="{active: thumb[index].thumb_up}"></i>
                        <i class="icon-thumb_down" @click="save_thumb(index, 'thumb_down')" :class="{active: thumb[index].thumb_down}"></i>
                    </span>
                </div>
            </div>
            <div class="seller-delivery">
                <span class="title">配送服务</span>
                <span class="start-warpper">
                <rater :fontSize="25"></rater>
            </span>
            </div>
            <div class="text">
            <textarea placeholder="你的评价将匿名发送给商家" rows="4" cols="30" maxlength="50">
            </textarea>
            </div>
        </div>
        <button class="submit-rating">提交评价</button>
    </div>
</template>

<script type="text/ecmascript-6">
  import IScroll from 'iscroll'
  import rater from '@/components/rater/rater'
  import {isEmptyObject} from '@/common/js/util.js'
  const FROMPATH = '/OrderItem'
  export default {
    props: {},
    data: function () {
      return {
        order: this.GLOBAL.state.order,
        foodList: this.GLOBAL.state.order.basket.group[0],
        thumb: [{
          foodID: 0,
          thumb_up: false,
          thumb_down: false
        }]
      }
    },
    methods: {
      check_data: function () {
        if (isEmptyObject(this.order)) {
          this.$router.push('/OrderItem')
        }
      },
      scroll_init: function () {
        this.$nextTick(function () {
          if (!this.addRatingScroll) {
            this.addRatingScroll = new IScroll(this.$el, {mouseWheel: true, click: true})
          } else {
            this.addRatingScroll.refresh()
          }
        })
      },
      init_thumb: function () {
        for (let i = 0; i < this.foodList.length; i++) {
          let json = {
            foodID: 0,
            thumb_up: false,
            thumb_down: false
          }
          this.thumb[i] = json
          this.thumb[i].foodID = i
        }
        this.thumb = Object.assign({}, this.thumb)
      },
      save_thumb: function (index, sign) {
        switch (sign) {
          case 'thumb_up': this.thumb[index].thumb_up = !this.thumb[index].thumb_up
            if (this.thumb[index].thumb_up === true) {
              this.thumb[index].thumb_down = false
            }
            break
          case 'thumb_down': this.thumb[index].thumb_down = !this.thumb[index].thumb_down
            if (this.thumb[index].thumb_down === true) {
              this.thumb[index].thumb_up = false
            }
            break
          default: console.log(sign)
        }
      }
    },
    components: {'rater': rater},
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
      this.init_thumb()
      this.check_data()
      this.scroll_init()
    },
    updated: function () {
      this.scroll_init()
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss">
    @import "../../common/style/mixin";
    .addRating{
        position: absolute;
        top: 44px;
        bottom: 0px;
        left: 0px;
        width: 100%;
        overflow: hidden;
        z-index: 1;
        background-color: white;
        .addRating-wrapper{
            min-width: 300px;
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
                    .food-name{
                        max-width:80%;
                        overflow: hidden;
                        display: inline-block;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        font-size: 13px;
                    }
                    .food-thumb{
                        display: inline-block;
                        float: right;
                        i{
                            height: 18px;
                            width: 18px;
                            margin-left: 10px;
                            font-size: 18px;
                            color: rgba(153,153,153,100);
                            vertical-align: middle;
                        }
                        .icon-thumb_up{
                            &.active{
                                color: #3190e8;
                            }
                        }
                        .icon-thumb_down{
                            &.active{
                                color: #3190e8;
                            }
                        }
                    }

                }
            }
            .seller-delivery{
                display: flex;
                justify-content: space-between;
                align-items: center;
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
            .text{
                min-height: 60px;
                max-height: 120px;
                overflow: hidden;
                textarea{
                    width: 100%;
                    border: none;
                    resize: none;
                    font-size: 12px;
                    line-height: 20px;
                }
            }
        }
        .submit-rating{
            position: absolute;
            bottom: 0px;
            left: 0px;
            width: 100%;
            height: 48px;
            font-size: 14px;
            color: #fff;
            background-color: #3190e8;
            border: none;
        }
    }

</style>
