<template>
    <div class="rating-select">
        <ul class="rating-type">
            <li v-for="rateType in tagName" class="block" :class="{'select-block':dataSelectType === rateType}" @click="select(rateType)">
                <span>{{getTagNameByRate(rateType)}}</span>
                <span class="count" v-if="rateType != TAG.ALL.rateType">{{getRatingsCount(rateType).length}}</span>
                <span class="count" v-else>{{ratings.length}}</span>
            </li>
        </ul>
        <div class="switch" :class="{on:dataOnlyContent}" @click="toggleContent">
            <span class="icon-check_circle" ></span>
            <span class="text">只看有内容的评价</span>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    eventBus: {
      type: Object,
      required: true
    },
    ratings: {    //  评价内容
      type: Array,
      default: function () {
        return []
      }
    },
    selectType: {   // 默认被选标签
      type: Number,
      default: function () {
        return this.TAG.ALL.rateType
      }
    },
    onlyContent: {//  只看有内容的
      type: Boolean,
      default: function () {
        return true
      }
    },
    tagName: {    //  标签名
      type: Array,
      default: function () {
        return [0]
      }
    }
  },
  created: function () {
    console.log(this.selectType)
  },
  data: function () {
    return {
      TAG: {
        ALL: {rateType: 2, tagName: '全部'},
        POSITIVE: {rateType: 0, tagName: '好评'},
        NEGATIVE: {rateType: 1, tagName: '差评'}
      },
      dataSelectType: this.selectType,
      dataOnlyContent: this.onlyContent
    }
  },
  methods: {
    getTagNameByRate: function (rateType) {
      for (let json in this.TAG) {
        if (this.TAG[json].rateType === rateType) {
          return this.TAG[json].tagName
        }
      }
      return this.TAG.ALL.tagName
    },
    getRatingsCount: function (rateType) {
      return this.ratings.filter((rating) => {
        return rating.rateType === rateType
      })
    },
    select: function (rateType) {
      this.dataSelectType = rateType
      this.eventBus.$emit('select', this.dataSelectType)
      console.log('select emit')
    },
    toggleContent: function () {
      this.dataOnlyContent = !this.dataOnlyContent
      this.eventBus.$emit('toggleContent', this.dataOnlyContent)
    }
  },
  computed: {

  }
}
</script>
<style lang="scss" rel="stylesheet/scss">
    @import '../../../../common/style/mixin';
    .rating-select{
        margin:0px 18px;
        .rating-type{
            padding:18px 0;
            @include  border-1px(rgba(7,17,27,0.1));
            font-size: 0;
            .block{
                width: 50px;
                font-size: 12px;
                line-height: 16px;
                display:inline-block;
                padding: 8px 12px;
                margin-right: 8px;
                border-radius: 1px;
                background-color: rgba(0,160,220,0.2);
                .count{
                    margin-left: 2px;
                    font-size: 8px;
                }
            }
            .select-block{
                background-color: rgb(0,160,220);
                color: #fff;
            }
        }
        .switch{
            padding: 12px 18px;
            line-height: 24px;
            font-size: 12px;
            color: rgb(147,153,159);
            @include  border-1px(rgba(7,17,27,0.1));
            font-size: 0;
            &.on{
                .icon-check_circle{color: rgb(0,160,220);}
            }
            .icon-check_circle{
                display: inline-block;
                vertical-align: top;
                margin-right: 4px;
                font-size: 24px;
            }
            .text{
                font-size: 12px;
            }
        }
    }
</style>
