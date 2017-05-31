<template>
    <div class="header">
        <div class="content-wrapper">
            <div class="avatar">
                <img v-if="seller.avatar" :src="seller.avatar" width="64" height="64">
            </div>
            <div class="content">
                <div class="title">
                    <span class="brand"></span>
                    <span class="name">{{seller.name}}</span>
                </div>
                <div class="description">
                    {{seller.description}}/{{seller.deliveryTime}}分钟送达
                </div>
                <div class="supports" v-if="seller.supports">
                    <span class="icon" :class="classMap[seller.supports[0].type]"></span>
                    <span class="text">{{seller.supports[0].description}}</span>
                </div>
            </div>
            <div v-if="seller.supports" class="support-count">
                <span class="count">{{seller.supports.length}}</span>
                <i class="icon-keyboard_arrow_right"></i>
            </div>
        </div>
        <div class="bulletin-wrapper">
            <span class="bulletin-title"></span><span class="bulletin-text">{{seller.bulletin}}</span>
            <i class="icon-keyboard_arrow_right"></i>
        </div>
        <div class="header-background" :style="{backgroundImage:'url('+seller.avatar+')'}"></div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
      props: ['seller'],
      data: function () {
        return {
          classMap: ['decrease', 'discount', 'guarantee', 'invoice', 'special']
        }
      }
    }
</script>

<style lang="scss" rel="stylesheet/scss">
    @import '../../../../common/style/mixin';
    .header{
        position: relative;
        background:rgba(7,17,27,0.3);
      .content-wrapper{
        position: relative;
        padding: 24px 12px 18px 24px ;
        font-size: 0;
        .avatar {
            vertical-align: top;
            display: inline-block;
            img{
                border-radius: 2px;
            }
        }
        .content{
            display: inline-block;
            margin-left: 16px;
            font-size: 14px;
            .title{
                margin: 2px 0px 8px 0px;
                .brand{
                    width: 30px;
                    height: 18px;
                    display: inline-block;
                    vertical-align: top;
                    background-size: 30px 18px;
                    background-repeat: no-repeat;
                    @include bg-image('./brand')
                }
                .name{
                    display: inline-block;
                    height: 18px;
                    vertical-align: top;
                    font-size: 16px;
                    font-weight: bold;
                    line-height: 18px;
                }
            }
            .description{
                margin-bottom: 10px;
                line-height: 12px;
                font-size:12px;
            }
            .supports{
                .icon{
                    display: inline-block;
                    vertical-align: top;
                    width: 12px;
                    height: 12px;
                    margin-right: 4px;
                    background-size: 12px 12px;
                    background-repeat: no-repeat;
                    &.decrease{@include bg-image('./decrease_1')}
                    &.discount{@include bg-image('./discount_1')}
                    &.guarantee{@include bg-image('./guarantee_1')}
                    &.invoice{@include bg-image('./invoice_1')}
                    &.special{@include bg-image('./special_1')}
                }
                .text{
                    line-height: 10px;
                    font-size: 10px;

                }
            }
        }
        .support-count{
            position: absolute;
            right: 12px;
            bottom: 14px;
            padding: 0 8px;
            height: 24px;
            line-height: 24px;
            border-radius: 14px;
            background-color: rgba(0,0,0,0.2);
            text-align: center;
            .count, .icon-keyboard_arrow_right {font-size: 10px;}
            .count{
                vertical-align: middle;
            }
            .icon-keyboard_arrow_right{
                vertical-align: middle;
                margin-left: 2px;
            }

        }
      }
      .bulletin-wrapper{
          position: relative;
          line-height: 28px;
          height: 28px;
          overflow:hidden;
          white-space:nowrap;
          text-overflow: ellipsis;
          padding: 0 22px 0 12px;
          background-color: rgba(7,17,27,0.2);
          .bulletin-title{
              display: inline-block;
              vertical-align: middle;
              width: 22px;
              height: 12px;
              @include  bg-image('./bulletin');
              background-size: 22px 12px;
              background-repeat: no-repeat;
          }
          .bulletin-text{
              margin: 0 4px;
              vertical-align: middle;
              font-size: 10px;
          }
          .icon-keyboard_arrow_right{
              position: absolute;
              right: 12px;
              top:8px;
              height: 12px;
              line-height: 12px;
              font-size: 10px;
          }

      }
      .header-background{
        position: absolute;
        left: 0;
        top:0;
        z-index: -1;
        width: 100%;
        height: 100%;
        filter:blur(10px)
      }
    }
</style>
