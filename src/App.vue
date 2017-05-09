<template>
  <div id="app">
    <div style="height: 40px;position:absolute;top: 0px">这是头部</div>
    <router-view></router-view>
    <div style="height: 40px;position: absolute;bottom: 0px">这是底部</div>
  </div>
</template>

<script>
import orderList from '@/components/orderList/orderList.vue'
export default {
  name: 'app',
  components: {'order-list': orderList}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
