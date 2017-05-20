<template>
    <div class="foot-item" @click="onItemClick">
        <i class="icon-class" :class="{activity:isActivity}">
            <slot name='icon'></slot>
        </i>
        <i class="label-class" :class="{activity:isActivity}">
            <slot name="label">label</slot>
        </i>
    </div>
</template>

<script type="text/ecmascript-6">
  /**
   * item接受 linkto isActivity  label icon
   */
  export default {
    props: {
      isActivity: {
        type: Boolean,
        required: true
      },
      link: {
        type: String,
        required: true
      },
      index: {
        type: Number,
        required: true
      }
    },
    methods: {
      onItemClick: function () {
        this.$emit('ItemWasClick', this.index)
        this.$router.push(this.link)
      }
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss">
    .foot-item{
        display: inline-block;
        width: 40px;
        height: 40px;
        padding: 4px;
        flex: 0 0 40px;
        text-align: center;
        .icon-class{
            display: block;
            overflow: hidden;
            width: 20px;
            height: 20px;
            font-size: 20px;
            text-align: center;
            margin: 0 auto;
            margin-bottom: 4px;
            & > * {
                width: 20px;
                height: 20px;
                color: rgb(146, 146, 146);
                box-sizing: border-box;
            }
            &.activity > *{
                color: rgb(0, 151, 255);
            }
        }
        .label-class{
            display: block;
            overflow: hidden;
            width: 100%;
            height: 14px;
            line-height: 14px;
            font-size: 10px;
            font-weight: 200;
            & > * {
                font-size: 10px;
            }
            &.activity > *{
                color: rgb(0, 151, 255);
            }
        }
    }
</style>
