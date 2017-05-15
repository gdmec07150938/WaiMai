<template>
  <div id="app">
    <router-view></router-view>
    <foot-guide></foot-guide>
  </div>
</template>

<script>
import orderList from '@/components/orderList/orderList.vue'
import footGuide from '@/components/footer/footGuide'
export default {
  name: 'app',
  components: { 'order-list': orderList, 'foot-guide': footGuide }
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
