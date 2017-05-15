<template>
    <div class="footGuide">
        <div class="footGuide-wrapper">
            <foot-item link="/" :isActivity='true' :index="1110" v-on:ItemWasClick="currentIndex(arguments[0])">
                <img  slot="icon" src="./e.svg"></img>
                <p slot="label">首页</p>
            </foot-item>
            <foot-item v-for='item in footItemArray' :key="item.itemIndex" :link="item.link" :isActivity='item.isActivity' :index="item.itemIndex" v-on:ItemWasClick="currentIndex(arguments[0])">
                <img  slot="icon" :src="item.src"></img>
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
          { itemIndex: 1, src: './e.svg', label: '首页', link: '/', isActivity: true },
          { itemIndex: 2, src: './order.svg', label: '订单', link: '/order', isActivity: false },
          { itemIndex: 3, src: './account.svg', label: '首页', link: 'myZone', isActivity: false }
        ]
      }
    },
    components: {
      'foot-item': footItem
    },
    methods: {
      currentIndex: function (index) {
        console.log(index)
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
