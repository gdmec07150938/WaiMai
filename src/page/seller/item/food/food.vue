<template>
    <div class="food" v-show="showFlag">
        <div></div>
    </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      food: {
        type: Object
      }
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss">
</style>
