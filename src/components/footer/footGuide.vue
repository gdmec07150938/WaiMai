<template>
    <div class="footGuide">
        <div class="footGuide-wrapper">
            <foot-item>
                <i class="icon-arrow_lift icon-class" slot="icon"></i>
                <p slot="label">首页</p>
            </foot-item>
            <foot-item>
                <i class="icon-arrow_lift" slot="icon"></i>
                <p slot="label">首页</p>
            </foot-item>
            <foot-item>
                <i class="icon-arrow_lift" slot="icon"></i>
                <p slot="label">首页</p>
            </foot-item>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
  import footItem from './footItem.vue'
  export default {
    components: {
      'foot-item': footItem
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss">
  .footGuide{
      position: absolute;
      bottom: 0px;
      left: 0px;
      width: 100%;
      height: 48px;
      .footGuide-wrapper{
          display: flex;
          height: 48px;
          justify-content: space-around;
          align-items: center;
          flex-wrap: nowrap;
          margin: 0 auto;
      }
  }
</style>
