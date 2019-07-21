<template>
	<main id="app">
		<ul class="y-header">
		<i class="iconfont icon-fanhui" @click="back()"></i>
		<p>我的</p>
		<div class="db-box">
			<img src="../assets/mine-bg.png" class="mine"/>
			<img src="../assets/t1.jpg"  class="t1"/>
		</div>
		<ul class="db-box1">
			<p>我的订单</p>
			<li><img src="../assets/t2.jpg"/><p>电影</p></li>
			<li><img src="../assets/t3.jpg"/>商城</li>
			
		</ul>
		<ul class="db-box2">
			<li>在线观影 <img src="../assets/img/up.png" class="up"/></li>
			<li>优惠劵<img src="../assets/img/up.png" class="up1"/></li>
			<li>折扣卡<img src="../assets/img/up.png" class="up2"/></li>
		</ul>
		</ul>
   <Footer/>
  </main>
</template>
<script>
import "@/lib/iconfont/iconfont.css";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Footer
  },
  data(){
  	return{
  		msg:'我的订单'
  	}
  },
   methods: {
    back() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="scss"  scoped>
#app{
	background: #f4f4f4;
	width: 100%;
	height: 1000px;
	font-family: sans-serif;
}
.y-header {
background: #e54847;
  width: 100%;
  height: 3.125rem;
  font-size: 1.125rem;
  line-height: 3.125rem;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
}
.y-header p{
	text-align: center;
}
.iconfont {
    width: 1.375rem;
    height: 1.375rem;
    position: absolute;
    left: 10px;
    top: 0;
    font-size: 1.75rem;
  }
  .mine{
  width: 100%;
  height: 150px;
  }
 .t1{
 	display: block;
 	position: relative;
 	top: -130px;
 	height: 60px;
 	width: 66px;
 	margin: 0 auto;
 
 }
 .db-box1{
 margin-top: -60px;
 height: 150px;
 background: #fff;
 text-align: center;
 color: #000;
 
 }
 .db-box1 li{
	float: left;
	width: 50%;
	list-style: none;
	margin-top: -20px;
}
 .db-box1 li img{
 display: block;
 margin: 0 auto;
 }
 
 .db-box2{
 height: 150px;
 margin-top: 18px;
 background: #fff;
 color: #000;
 }
 .db-box2 li{
 width: 100%;
 border-bottom: 1px solid gainsboro;
 margin-left: 10px;
 }
 .up{
 position: absolute;
 top: 400px;
 right: 10px;
 transform: rotate(90deg);
 }
 .up1{
 position: absolute;
 top: 450px;
 right: 10px;
 transform: rotate(90deg);
 }
 .up2{
 position: absolute;
 top: 500px;
 right: 10px;
 transform: rotate(90deg);
 }
</style>
