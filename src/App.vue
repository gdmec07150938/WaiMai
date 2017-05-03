<template>
  <div id="app">
    <order-list></order-list>
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
  margin-top: 60px;
}
</style>
