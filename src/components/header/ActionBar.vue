<template>
  <div class="back_box">
    <div class="back_arrow" @click="back_one">
    <img src="./fanhui.png" alt="" v-show="show">
    </div>
    <h3>{{ title }}</h3>
  </div>
</template>
<script>
export default {
  name: 'actionbar',
  props: ['title', 'show'],
  data () {
    return {
    }
  },
  methods: {
    back_one () {
      this.$router.go(-1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.back_box{
  height:40px;
  line-height:40px;
  position:fixed;
  background:#0096ff;
  top:0;
  left:0;
  right:0;
  z-index: 999;
}
.back_box h3{
    color:#fff;
    display:block;
    font-size:18px;
    text-align:center;
    font-weight:bold;
  }
.back_arrow{
    width:10px;
    height:20px;
    position:absolute;
    left:0;
    top:0;
  }
.back_arrow img{
      width:20px;
      height:20px;
      position:absolute;
      left:50%;
      top:50%;
    }
</style>
