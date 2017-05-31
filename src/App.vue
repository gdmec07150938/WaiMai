<template>
  <div id="app">
    <router-view name="header"></router-view>
    <router-view></router-view>
    <foot-guide></foot-guide>
  </div>
</template>

<script>
import footGuide from '@/components/footer/footGuide'
export default {
  name: 'app',
  components: { 'foot-guide': footGuide }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
