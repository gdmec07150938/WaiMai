<template>
    <div class="ratings">
        <div class="ratings-content">
            <div class="overview">
                <div class="overview-left">
                    <h1 class="score">{{seller.score}}</h1>
                    <div class="title">综合评分</div>
                    <div class="rank">高于周边商家{{seller.rankRate}}%</div>
                </div>
                <div class="overview-right">
                    <div class="score-wrapper">
                        <span class="title">服务态度</span>
                        <rater :value='seller.serviceScore' :disabled="true" class="star" :fontSize=12 ></rater>
                        <span class="score">{{seller.serviceScore}}</span>
                    </div>
                    <div class="score-wrapper">
                        <span class="title">服务态度</span>
                        <rater :value='seller.serviceScore' :disabled="true" class="star" :fontSize=12 ></rater>
                        <span class="score">{{seller.serviceScore}}</span>
                    </div>
                    <div class="delivery-wrapper">
                        <span class="title">送达时间</span>
                        <span class="delivery">{{seller.deliveryTime}}分钟</span>
                    </div>
                </div>
            </div>
            <split></split>
            <rating-select :ratings="ratings" :tagName="tagName" :selectType=2 :eventBus="eventBus"></rating-select>
            <div class="ratings-wrapper">
                <ul>
                    <li v-for="rating in raingsBackUp" class="rating-item"  v-show="showFlag(rating)">
                        <div class="avatar">
                            <img :src="rating.avatar" width="28px" height="28px">
                        </div>
                        <div class="content">
                            <h1 class="name">{{rating.username}}</h1>
                            <div class="star-wrapper">
                                <rater :value="rating.score" :disabled=true :fontSize=10 class="star"></rater>
                                <span class="delivery">{{rating.deliveryTime}}分钟送达</span>
                            </div>
                            <p class="text">{{rating.text}}</p>
                            <div class="recommend" v-show="rating.recommend && rating.recommend.length">
                                <i class="icon-thumb_up"></i>
                                <span v-for="item in rating.recommend" class="item">
                                    {{item}}
                                </span>
                            </div>
                            <div class="time">
                                {{rating.rateTime|formatDate}}
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import Vue from 'vue'
    import IScroll from 'iscroll'
    import split from '@/components/split/split'
    import ratingSelect from '../ratingSelect/ratingSelect'
    import {parseJson} from '@/common/js/util.js'
    import rater from '@/components/rater/rater'
    import {ApiUrl} from '@/api/api-list.js'
    export default {
      props: {
        seller: {
          type: Object
        }
      },
      data: function () {
        return {
          ratings: [],
          raingsBackUp: [],
          tagName: [2, 0, 1],
          eventBus: {},
          dataOnlyContent: true
        }
      },
      methods: {
        _initScroll: function () {
          this.ratingScroll = new IScroll(this.$el, {})
        },
        _initEventBus: function () {
          this.eventBus = new Vue()
          this.eventBus.$on('select', (rateType) => {
            this.raingsBackUp = this.ratings.filter(filterRateType)
            function filterRateType (rating) {
              if (rateType === 2) {
                return true
              }
              return rating.rateType === rateType
            }
          })
          this.eventBus.$on('toggleContent', (dataOnlyContent) => {
            this.dataOnlyContent = dataOnlyContent
          })
        },
        showFlag: function (rating) {
          if (!this.show) {
            this.show = true
          }
          if (rating.text && rating.text.trim().length > 0) {
            this.show = true
          } else if (this.dataOnlyContent) {
            this.show = false
          }
          //    console.log(this.show)
          return this.show
        }
      },
      computed: {
      },
      filters: {
        formatDate: function (value) {
          let date = new Date(value)
          return date.getFullYear() + '-' + date.getMonth() + '-' + date.getDay() + '-' + date.getHours() + ':' + date.getMinutes()
        }
      },
      components: {
        split, ratingSelect, rater
      },
      created: function () {
        this.$http.get(ApiUrl + 'ratings').then((res) => {
          this.ratings = parseJson(res.body)
          this.raingsBackUp = this.ratings
          this.$nextTick(() => {
            this._initScroll()
          })
        })
        this._initEventBus()
      }
    }
</script>
<style lang="scss" rel="stylesheet/scss">
    @import "../../../../common/style/mixin";
    .ratings{
        position: absolute;
        left: 0;
        top: 174px;
        bottom: 0;
        overflow: hidden;
        width: 100%;
        z-index: 10;
        background-color: #fff;
        .ratings-content{
            .overview{
                display: flex;
                padding: 18px 0;
                .overview-left{
                    flex: 1 0 137px;
                    width: 137px;
                    padding: 6px 0;
                    border-right:1px solid rgba(7, 17, 27, 0.1);
                    text-align: center;
                    @media only screen and (max-width: 320px) {
                        flex: 1 0 120px;
                        width: 120px
                    }
                    .score{
                        margin-bottom: 6px;
                        line-height: 28px;
                        font-size: 24px;
                        color: rgb(255,153,0);
                    }
                    .title{
                        margin-bottom: 8px;
                        line-height: 12px;
                        font-size: 12px;
                        color: rgb(7, 17, 27)
                    }
                    .rank{
                        line-height: 10px;
                        font-size: 10px;
                        color: rgb(147, 153, 159);
                    }
                }
                .overview-right{
                    flex-direction: column;
                    flex: auto;
                    padding: 6px 0 6px 24px;
                    @media only screen and (max-width: 320px) {
                        padding-left: 6px;
                    }
                    .score-wrapper{
                        display: flex;
                        flex-wrap: nowrap;
                        font-size: 0;
                        margin-bottom: 8px;
                        .title {

                            display: inline-block;
                            line-height: 18px;
                            vertical-align: top;
                            font-size: 12px;
                            color: rgb(7, 17, 27);
                        }
                        .star {

                            display: inline-block;
                            margin: 0 12px;
                            vertical-align: top
                        }
                        .score {
                            display: inline-block;
                            line-height: 18px;
                            vertical-align: top;
                            font-size: 12px;
                            color: rgb(255, 153, 0)
                        }
                    }
                    .delivery-wrapper{
                        font-size: 0;
                        .title {
                            line-height: 18px;
                            font-size: 12px;
                            color: rgb(7, 17, 27)
                        }
                        .delivery {
                            margin-left: 12px;
                            font-size: 12px;
                            color: rgb(147, 153, 159)
                        }
                    }
                }
            }
            .ratings-wrapper{
                padding: 0 18px;
                .rating-item{
                    display: flex;
                    padding: 18px 0;
                    @include  border-1px(rgba(7, 17, 27, 0.1));
                    .avatar{
                        flex: 0 0 28px;
                        width: 28px;
                        margin-right: 12px;
                        img{
                            border-radius: 50%;
                        }
                    }
                    .content{
                        position: relative;
                        flex: 1;
                        .name{
                            margin-bottom: 4px;
                            line-height: 12px;
                            font-size: 10px;
                            color: rgb(7, 17, 27);
                        }
                        .star-wrapper{
                            margin-bottom: 6px;
                            .star{
                                display: inline-block;
                                margin-right: 6px;
                                vertical-align: middle;
                            }
                            .delivery{
                                display: inline-block;
                                vertical-align: middle;
                                line-height: 12px;
                                font-size: 10px;
                                color: rgb(147, 153, 159);
                            }
                        }
                        .text {
                            margin-bottom: 8px;
                            line-height: 18px;
                            color: rgb(7, 17, 27);
                            font-size: 12px
                        }
                        .recommend{
                            line-height: 16px;
                            font-size: 0;
                            .icon-thumb_up, .item {
                                display: inline-block;
                                margin: 0 8px 4px 0;
                                font-size: 9px
                            }
                            .icon-thumb_up {
                                color: rgb(0, 160, 220);
                            }
                            .item{
                                padding: 0 6px;
                                border: 1px solid rgba(7, 17, 27, 0.1);
                                border-radius: 1px;
                                color: rgb(147, 153, 159);
                                background: #fff;
                            }
                        }
                        .time{
                            position: absolute;
                            top: 0;
                            right: 0;
                            line-height: 12px;
                            font-size: 10px;
                            color: rgb(147, 153, 159);

                        }
                    }
                }
            }
        }
    }
</style>
