<template>
  <div class="myzone_index">
    <ActionBar title="我的"></ActionBar>
    <div class="myzone_content">
      <div class="myzone_info clear">
        <img src="./slider-pic11.jpeg" alt="">
        <div class="myzone_uid">
          <h3>admin</h3>
          <p>183*****935</p>
        </div>
      </div>
    </div>
    <!-- 3分 -->
    <div class="three_lan">
      <a class="three_lan_">
        <p class="big_colorful">
          <span class="index-2FmrF_0" style="color: rgb(255, 153, 0);">0.00</span><span class="index-2V-Hh_0">元</span>
        </p>
        <p class="index-3S6cZ_0">余额</p>
      </a>
      <a class="three_lan_" style="border-left: 1px solid #ddd;border-right: 1px solid #ddd;">
        <p class="big_colorful">
          <span class="index-2FmrF_0" style="color: rgb(255, 95, 62);">3</span><span class="index-2V-Hh_0">个</span>
        </p>
        <p class="index-3S6cZ_0">优惠</p>
      </a>
      <a class="three_lan_">
        <p class="big_colorful">
          <span class="index-2FmrF_0" style="color: rgb(106, 194, 11);">6250</span><span class="index-2V-Hh_0">分</span>
        </p>
        <p class="index-3S6cZ_0">积分</p>
      </a>
    </div>
    <div class="some_bar">
      <svg class="v-md">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#order.070ae2a"></use>
      </svg>
      <span class="v-md">我的订单</span>
    </div>
    <div class="some_bar">
      <svg class="v-md">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#shop"></use>
      </svg>
      <span class="v-md">积分商城</span>
    </div>
    <div class="some_bar">
      <svg class="v-md">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#eleme"></use>
      </svg>
      <span class="v-md">饿了么会员卡</span>
    </div>

    <div class="some_bar ">
      <svg class="v-md">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#discover.5811137"></use>
      </svg>
      <span class="v-md">服务中心</span>
    </div>
    <div class="some_bar">
      <svg class="v-md">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#index.18edf5a"></use>
      </svg>
      <span class="v-md">下载饿了么APP</span>
    </div>
  </div>
</template>
<script>
import ActionBar from '../actionBar/ActionBar'
export default {
  name: 'myzone',
  data () {
    return {
    }
  },
  methods: {
  },
  components: {
    'ActionBar': ActionBar
  }
}
</script>
<style scoped>
.myzone_content{
  height:100px;
  margin-top:40px;
  padding: 20px 20px;
  box-sizing:border-box;
  background:#0097ff;
}
.myzone_content img{
    width:50px;
    height:50px;
    border-radius:50%;
    float: left;
}
.myzone_content .myzone_uid{
    float: left;
    margin-left:20px;
    color:#fff;
}
.myzone_content .myzone_uid h3{
      font-size:20px;
      font-weight: bold;

}
.myzone_content .myzone_uid p{
      font-size:16px;
}
.three_lan{
  display: table;
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #ddd;
  background-color: #fff;

}
.three_lan .three_lan_{
    display: table-cell;
    width: 33.3333%;
    vertical-align: middle;
    text-align: center;
}
.three_lan .three_lan_  big_colorful{
      line-height:20px;
}
.three_lan .three_lan_ .index-2FmrF_0 {
        padding: 10px 0 0;
        font-size: 20px;
        line-height: 16px;
        font-weight: 700;
}
.three_lan .three_lan_ .index-2V-Hh_0 {
        font-size: 16px;
        line-height: 16px;
}
.three_lan .three_lan_ .index-3S6cZ_0 {
        font-size: 16px;
        line-height: 16px;
        font-weight: 500;
        color: #666;
}
.some_bar{
  width: 100%;
  height: 30px;
  padding:30px;
  box-sizing: border-box;
  background:#fff;
  font-size:18px;
  border-top:1px solid #dedede;
}
.some_bar svg{
    width: 20px;
    height: 20px;
}
.some_bar span{
    margin-left:20px;
}
</style>
