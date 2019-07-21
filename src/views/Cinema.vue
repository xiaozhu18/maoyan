<template>
  <div id="app">
 		<main class="t-header">
		<i class="iconfont icon-fanhui" @click="back()"></i>
		影院</main>
		<div class="cirty">
      <p class="cirty-name" @click="toCirtys" >广州<span class="drop"></span></p>
     <mt-search v-model.trim="value" autofocus placeholder="搜电影、搜影院"></mt-search>
     </div>
     <div class="nav-wrap">
     <mt-navbar v-model="selected" @click="change">
			  <mt-tab-item id="1">全城<span class="drop"></span></mt-tab-item>
			  <mt-tab-item id="2">品牌<span class="drop"></span></mt-tab-item>
			  <mt-tab-item id="3">特色<span class="drop"></span></mt-tab-item>
			</mt-navbar>
			
			<!-- tab-container -->
			<mt-tab-container v-model="selected">
			  <mt-tab-container-item id="1">
			    <dl class="dll">
			    	<dt class="active">全部(239)</dt>
			    	<dd>白云区(47)</dd>
			    	<dd>番禺区(40)</dd>
			    	<dd>天河区(38)</dd>
			    	<dd>增城区(21)</dd>
			    	<dd>海珠区</dd>
			    	<dd>荔湾区</dd>
			    </dl>
			  </mt-tab-container-item>
			  <mt-tab-container-item id="2">
			    <mt-cell v-for="n in 4" :title="'测试 ' + n" />
			  </mt-tab-container-item>
			  <mt-tab-container-item id="3">
			    <mt-cell v-for="n in 6" :title="'选项 ' + n" />
			  </mt-tab-container-item>
			</mt-tab-container>
			<div class="db-box">
     			<div class="title">
     				<p class="cont">万达影城（萝岗万达广场店）
     					<span class="cont1">16<span>元起</span></span></p>
     					<p class="cont2">黄埔区科丰路89号萝岗万达广场娱乐楼四层<span>700m</span></p>
     			</div>
     			<div class="label-block">                          
    					<span class="endorse">改签</span> 
    					<span class="snack">小吃</span>                  
              <span class="vipTag">折扣卡</span>                                                   
              <span class="hallType">4K厅</span>               
              <span class="hallType">巨幕厅</span>
        </div>
        <div class="discount-label-text"><img src="../assets/card.png"/><span>限时¥41促销开卡，首单更优惠</span></div>
     </div>
      <div class="db-box">
     			<div class="title">
     				<p class="cont"><router-link to="/CinemaDetail">中影DY影城(萝岗店)</router-link>
     					<span class="cont1">29<span>元起</span></span></p>
     					<p class="cont2">黄浦区开创大道1934号<span>100m</span></p>
     			</div>
     			<div class="label-block">
              <span class="allowRefund">退</span>                           
    					<span class="endorse">改签</span>
    					 
        </div>
     </div>
     
     <div class="db-box">
     			<div class="title">
     				<p class="cont">烽禾影城（科学城店）
     					<span class="cont1">30<span>元起</span></span></p>
     					<p class="cont2">黄埔区科学城科学大道193号高德汇购物中心5层<span>900m</span></p>
     			</div>
     			<div class="label-block">                           
    					<span class="endorse">改签</span>
    					<span class="vipTag">折扣卡</span>
    					<span class="hallType">DTS:X 临境音厅</span>
        </div>
        <div class="discount-label-text"><img src="../assets/card.png"/><span>开卡特惠，首单2张最高立减6元</span></div>
     </div>
     <div class="db-box">
     			<div class="title">
     				<p class="cont">左岸国际影城（萝岗店）
     					<span class="cont1">29<span>元起</span></span></p>
     					<p class="cont2">黄浦区开创大道1934号<span>100m</span></p>
     			</div>
     			<div class="label-block">
              <span class="allowRefund">退</span>                           
    					<span class="endorse">改签</span>
    					<span class="snack">小吃</span>                  
              <span class="vipTag">折扣卡</span>                                                   
              <span class="hallType">4K厅</span>               
              <span class="hallType">巨幕厅</span>
        </div>
        <div class="discount-label-text"><img src="../assets/card.png"/><span>限时¥6.9促销开卡，首单更优惠</span></div>
     </div>
     <div class="db-box">
     			<div class="title">
     				<p class="cont">佳影国际影城（萝岗香雪店）
     					<span class="cont1">28.9<span>元起</span></span></p>
     					<p class="cont2">黄埔区锐丰中心5号楼三层（地铁6号线香雪站F出口）<span>4.1km</span></p>
     			</div>
     			<div class="label-block">
              <span class="allowRefund">退</span>                           
    					<span class="endorse">改签</span>
    					<span class="snack">小吃</span>                  
              <span class="vipTag">折扣卡</span>
              <span class="hallType">杜比全景声厅</span>
              <span class="hallType">IMAX厅</span>               
              <span class="hallType">儿童厅</span>
        </div>
        <div class="discount-label-text"><img src="../assets/card.png"/><span>开卡特惠，首单最高立减30元！</span></div>
     </div>
     <div class="db-box">
     			<div class="title">
     				<p class="cont"><router-link to="/CinemaDetail">中数华昇巨幕影城（萝岗店）</router-link>
     					<span class="cont1">29<span>元起</span></span></p>
     					<p class="cont2">黄埔区飞晟二街6号301房（地铁6号线香雪站E出口）<span>6.4km</span></p>
     			</div>
     			<div class="label-block">
     					<span class="snack">小吃</span>                  
              <span class="vipTag">折扣卡</span>
              <span class="hallType">CGS中国巨幕厅</span>
               <span class="hallType">杜比全景声厅</span>
        </div>
        <div class="discount-label-text"><img src="../assets/card.png"/><span>限时¥27促销开卡，首单更优惠</span></div>
     </div>
     <div class="db-box">
     			<div class="title">
     				<p class="cont">万达影城（天河万科广场店）
     					<span class="cont1">34.9<span>元起</span></span></p>
     					<p class="cont2">天河区华观路1932号天河万科广场4层<span>5.7km</span></p>
     			</div>
     			<div class="label-block">                          
    					<span class="endorse">改签</span>
    					<span class="hallType">IMAX厅</span> 
    					
                
        </div>
     </div>
     <div class="db-box">
     			<div class="title">
     				<p class="cont">大地影院（奥体高德美居店）
     					<span class="cont1">28.9<span>元起</span></span></p>
     					<p class="cont2">天河区奥体南路12号高德美居家居馆3楼（近天河百货）<span>6.4km</span></p>
     			</div>
     			<div class="label-block">
              <span class="snack">小吃</span>                  
              <span class="vipTag">折扣卡</span>    
        </div>
        <div class="discount-label-text"><img src="../assets/card.png"/><span>限时¥13.9促销开卡，首单更优惠</span></div>
     </div>
     </div>
    
    <Footer/>
  </div>
</template>
<script>
import { Toast } from 'mint-ui';
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Footer
  },
  data(){
  	return{
  		value:'',
  		num:1,
			selected:"1",
			active:"tab-container2"
  	
  	}
  
  },
   methods: {
    back() {
      this.$router.go(-1);
    },
    toCirtys(){
      this.$router.push({name:'Cirtys'})
    },
    change(){
				Toast('提示信息')
				this.num++;
				if(this.num>3)this.num=1
				this.active="tab-container"+this.num
			}
    
  }
};
</script>
<style lang="scss"  scoped>
#app{
	/*width: 100%;
	height:2000px;
	background: #f4f4f4;
	list-style: none;*/
	cursor: pointer;
}
.t-header {
	background: #e54847;
  width: 100%;
  height: 3.125rem;
  font-size: 1.125rem;
  text-align: center;
  line-height: 3.125rem;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
}
.iconfont {
    width: 1.375rem;
    height: 1.375rem;
    position: absolute;
    left: 10px;
    top: 0;
    font-size: 1.75rem;
  }
.cirty{
		display: flex;
    position: absolute;
    top: 3.125rem;
    flex: 1;
    width: 100%;
     height: 2.9375rem;
    text-align: center;
    padding-left: 0.9375rem;
    background-color: #F5F5F5;
}
.cirty-name{
	margin-top: 12px;
}
.mint-search {
  height: 3.9375rem;
  position: absolute;
  right: 0;
  top: 0;
  width: 80%;
  }
 .nav-wrap{
 position: absolute;
 top:6.125rem;
 height: 40px;
 width: 100%;
 background-color: #fff;
 }
 .nav-wrap ul li{
 	list-style: none;
 	width: 33.3%;
 	text-align: center;
 	float: left;
 	line-height: 40px;
 }
 .drop{
    display: inline-block;
    position: absolute;
    top: 18px;
    width: 0;
    height: 0;
    margin-left: 4px;
    border: 4px solid transparent;
    border-top-color: #b0b0b0;
 }
 .mint-navbar .mint-tab-item.is-selected[data-v-b24fb5aa] {
    border-bottom: #fff;
    color: red;
    margin-bottom: -3px;
}
.content{
position: absolute;
top: 150px;
width: 100%;
height: 125px;
background-color: aqua;
}
.mint-navbar .mint-tab-item.is-selected {
	border-bottom: #fff;
    color: red;
    margin-bottom: -3px;
}
.mint-tab-container-item {
    -ms-flex-negative: 0;
    flex-shrink: 0;
    width: 100%;
   
}
.mint-navbar {
    background-color: #fff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    text-align: center;
    border-bottom: 0.5px solid ghostwhite;
}
.dll{
	 display: none;
}  
.db-box{
	width: 100%;
	height: 110px;
	background: #fff;
	 border-bottom: 1px solid gainsboro;
} 
.title{
	height: 66px;
	width: 100%;
	background: #fff;
	padding-top:10px ;
	
}
.cont{
	text-decoration: none;
	line-height: 23px;
  font-size: 16px;
  color: #000;
  margin-left: 10px;
}
.cont a{
    text-decoration: none;
    color: #000000;
}

.cont1{
	color: red;
	font-size: 18px;
}
.cont1 span{
	font-size: 11px;
    color: #f03d37;
}
.cont2{
	margin-left: 10px;
	font-size: 13px;
	color: #666;
}
.cont2 span{
	float: right;
	 font-size: 13px;
    color: #666;
}
 .label-block {
   height: 17px;
   width: 100%;
   margin-top: -20px;

} 
.label-block span{
	font-size: .6rem;
}
.allowRefund{
	margin-left: 10px;
	color: #589daf;
  border: 1px solid #589daf;
}
.endorse{
	margin-left: 10px;
	color: #589daf;
  border: 1px solid #589daf;
}
.snack{
	margin-left: 10px;
	color: #f90;
  border: 1px solid #f90;
}
.vipTag{
	
	color: #f90;
  border: 1px solid #f90;
  margin-left: 10px;
}
.hallType{
	color: #589daf;
  border: 1px solid #589daf;
  margin-left: 10px;
}
.discount-label-text{
	height: 21px;
	width: 100%;
	background: #fff;
	margin-left: 10px;
	padding-top: 5px;
}
.discount-label-text span{
  font-size: 11px;
  color: #999;
  padding-left: 5px;
} 
.discount-label-text img{
	width: 15px;
	height: 14px;
	position: relative;
	top: 2px;
}
</style>
