<template>
  <div class="back_box">
    <div class="back_arrow" @click="back_one">
      <svg>
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-left.6f6409e"></use>
      </svg>
    </div>
    <h3>{{ title }}</h3>
  </div>
</template>
<script>
export default {
  name: 'actionbar',
  props: ['title'],
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
    font-weight:b0ld;
  }
.back_arrow{
    width:10px;
    height:10px;
    position:absolute;
    left:0;
    top:0;
  }
.back_arrow svg{
      width:30px;
      height:30px;
      position:absolute;
      left:50%;
      top:50%;
    }
</style>
