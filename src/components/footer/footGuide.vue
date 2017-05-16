<template>
    <div class="footGuide">
        <div class="footGuide-wrapper">
            <foot-item v-for='item in footItemArray' :key="item.itemIndex" :link="item.link" :isActivity='item.isActivity' :index="item.itemIndex" v-on:ItemWasClick="currentIndex(arguments[0])">
                <i slot="icon" :class="item.src"></i>
                <p slot="label">{{item.label}}</p>
            </foot-item>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
  import footItem from './footItem.vue'
  export default {
    data: function () {
      return {
        footItemArray: [
          { itemIndex: 0, src: 'icon-home', label: '首页', link: '/', isActivity: true },
          { itemIndex: 1, src: 'icon-order', label: '订单', link: '/order', isActivity: false },
          { itemIndex: 2, src: 'icon-account', label: '我的', link: 'myZone', isActivity: false }
        ]
      }
    },
    components: {
      'foot-item': footItem
    },
    methods: {
      currentIndex: function (index) {
        this.footItemArray[index].isActivity = true
        for (let i = 0; i < this.footItemArray.length; i++) {
          if (i === index) { continue }
          this.footItemArray[i].isActivity = false
        }
      }
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
      z-index: 0;
      background-color: white;
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
