<template>
    <div class="order">
        <div class="order-header">
            <span class="seller-avatar">
                <img :src="order.restaurant_image_url" width="100px" height="100px">
            </span>
            <span class="seller-name">{{order.restaurant_name}}</span>
            <i></i>
            <span>{{order.status_bar.title}}</span>
        </div>
        <div class="order-content">

        </div>
        <div class="order-button">

        </div>
    </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'Order',
    data: function () {
      return {
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
    created: function () {
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss">

</style>

