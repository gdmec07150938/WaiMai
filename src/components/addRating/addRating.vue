<template>
    <div class="addRating">
        <div>
            <div>
                <span>
                    <img>
                </span>
                <span>
                    <h3>商家配送</h3>
                    <p>送达时间0000</p>
                </span>
            </div>
            <div>
                <span>配送服务</span>
                <rater></rater>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
  import rater from '@/components/rater/rater'
  import {isEmptyObject} from '@/common/js/util.js'
  export default {
    props: {},
    data: function () {
      return {
        order: this.GLOBAL.state.order
      }
    },
    methods: {
      check_data: function () {
        if (isEmptyObject(this.order)) {
          this.$router.push('/order')
        }
      }
    },
    components: {'rater': rater},
    created: function () {
      this.check_data()
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss">
</style>
