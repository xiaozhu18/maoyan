<template>
	<main class="y-header">
		<i class="iconfont icon-fanhui" @click="back()"></i>
		<p>猫眼电影</p>
	
		<mt-navbar v-model="selected" id="mint-tab-item-label">
		  <mt-tab-item id="1"><span>美团账号登录</span></mt-tab-item>
		  <mt-tab-item id="2"><span>手机验证登录</span></mt-tab-item>
		</mt-navbar>
<!-- tab-container -->
<mt-tab-container v-model="selected">
  <mt-tab-container-item id="1">
   <input class="input-weak" type="text" placeholder="账户名/手机号/Email"  value="" required="" v-model="txt">
   <br/>
   <input class="input-weak" type="password" placeholder="请输入您的密码"  required="">
   <br />
 <button class="btn" type="submit" @click="change()">登录</button> 
 <ul class="subline">
<li><router-link to="register"><a href="#">立即注册</a></router-link></li>
 <li><router-link to="/retrieve"><a href="#">找回密码</a></router-link></li>
 </ul>
 <div class="copyright">
 <span class="copyright">© 猫眼电影 客服电话：<a data-evt="ft/hotline" href="tel:4006705335">400-670-5335</a></span>
</div>
  </mt-tab-container-item>
  <mt-tab-container-item id="2">
    <input  class="input-weak1" type="text" placeholder="请输入手机号" value="" required="" v-model="txt">
   <button class="btn01" >获取验证码</button>
   <br />
   <input  class="input-weak" type="text" placeholder="请输入短信验证码"  required="">
   <br/>
  <button class="btn" type="submit" @click="change()">登录</button>
 <ul class="subline">
 <li><router-link to="/register"><a href="#">立即注册</a></router-link></li>
 <li><router-link to="/retrieve"><a href="#">找回密码</a></router-link></li>
 </ul>
 <div class="copyright">
 <span class="copyright">© 猫眼电影 客服电话：<a data-evt="ft/hotline" href="tel:4006705335">400-670-5335</a></span>
</div>
  </mt-tab-container-item>
</mt-tab-container>
		
	</main>
	
		
</template>

<script>
import { Toast } from 'mint-ui';
export default {
  data(){
  	return {
		num:1,
		selected:"1",
		active:"tab-container1",
		txt:''
		
	}
  },
   methods: {
    back() {
      this.$router.go(-1);
    },
  change(){
	Toast('提示信息')
	this.num++;
	if(this.num>2)this.num=1
	this.active="tab-container"+this.num
},
	change(){
		if(this.txt==""){
    		alert("输入不能为空");
    	}else{			  
    		this.$router.push({name:'Mine'});
    	}
    }
	}
};
</script>

<style lang="scss" scoped>
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
  #mint-tab-item-label{
 	color: #333;
 	border-bottom: 1px solid gainsboro;
  }
 #mint-tab-item-label span{
    color: inherit;
    font-size: 20px;
    line-height: 1;
}
.mint-navbar .mint-tab-item.is-selected {
    border-bottom: 3px solid red;
    color: red;
    margin-bottom: -3px;
}
.input-weak{
margin-top: 7px;
width: 100%;
height: 40px;

}
.btn{
	display: inline-block;
    margin: 0;
    text-align: center;
    height: 40px;
    width:100%;
    padding: 0 .32rem;
    border-radius: .06rem;
    color: #fff;
    border: 0;
    background-color: #df2d2d;
    font-size: .28rem;
    vertical-align: middle;
    line-height: .6rem;
    box-sizing: border-box;
    cursor: pointer;
    -webkit-user-select: none;
    border-radius: .06rem;
}
.subline li{
	float: left;
	width: 50%;
	text-align: center;
	height: .94rem;
    line-height: .94rem;
    font-size: .4rem;
   
    list-style: none;
}
.subline li a{
	text-decoration: none;
	 color: red;
}
.copyright {
	margin-top: 30px;
	font-size: .28em;
    line-height: 1;
    color: #333;
    text-align: center;
}
.copyright a{
	color:red ;
}
.input-weak1{
margin-top: 6px;
width: 73%;
height: 40px;
}
.btn01{
	height: 40px;
	margin-left: 5px;
}
</style>