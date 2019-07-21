<template>
	<main class="y-header">
		<i class="iconfont icon-fanhui" @click="back()"></i>
		<p>猫眼电影</p>
		<ul class="crumbs">
			<li class="active">输入手机号码</li>
			<li>>&nbsp;&nbsp;输入验证</li>
			<li>>&nbsp;&nbsp;设置密码</li>
		</ul>
   <input id="username" class="input-weak" type="text" placeholder="请输入你的手机号码" name="email" value="" required="">
  <br/>
  <div class="btn-wrapper">
  <input class="term" type="checkbox" name="terms" checked="checked">
  <span class="xieyi"> 我已阅读并同意<a href="//i.meituan.com/about/terms">《美团网用户协议》</a></span>
  </div>
  <router-link to="/login"><button class="btn" type="submit">获取验证码</button></router-link> 
 <div class="copyright">
 <span class="copyright">© 猫眼电影 客服电话：<a data-evt="ft/hotline" href="tel:4006705335">400-670-5335</a></span>
</div>
	</main>
	
</template>

<script>
	export default {
  data(){
  	return {
		msg:''
	}
  },
   methods: {
    back() {
      this.$router.go(-1);
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
  
  .input-weak{
margin-top: 13px;
width: 90%;
height: 40px;
margin-left: 12px;
}
.btn{
	display: inline-block;
    margin: 0;
    text-align: center;
    height: 40px;
    width:96%;
    padding: 0 .32rem;
    border-radius: .06rem;
    color: #999;
    border: 0;
    background-color:#dcdcdc;
    font-size: 1.40rem;
    vertical-align: middle;
    line-height: .6rem;
    box-sizing: border-box;
    cursor: pointer;
    -webkit-user-select: none;
    margin-left: 10px;
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
  .crumbs{
  list-style: none;
    padding-left: 0;
    text-align: center;
    margin: 0;
  }
  ul li {
  list-style: none;
  float: left;
  width: 33.33%;
  height: 40px;
  color: black;
  text-align: center;
  }
ul li.active {
    color: #df2d2d;
}
.btn-wrapper{
    margin: .28rem .2rem;

}
.term{
	width: 16px;
	height: 16px;
	margin-left: 10px;
}
span{
color: black;
width: 80%;
margin-left: 20px;

}
.xieyi a{
	text-decoration: none;
	color: red;
	
}
</style>