<template>
    <div class="order">
        <div class="order-header">
            <span class="seller-avatar">
                <img src="" width="100px" height="100px">
            </span>
            <span class="seller-name">{{}}</span>
            <i></i>
            <span>状态</span>
        </div>
        <div class="order-content">

        </div>
        <div class="order-button">

        </div>
    </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data: function () {
      return {
        order: {}
      }
    },
    props: {
      order: {
        type: Object,
        required: true
      }
    },
    methods: {
    },
    created: {
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss">

</style>

