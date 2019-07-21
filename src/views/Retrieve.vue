<template>
<main>
<mt-header fixed title="找回登录密码"></mt-header>
<div class="current">
	<div class="step-1-title">请填写你要找回密码的美团账号</div>
	<input type="text" class="user-input" value="" placeholder="手机号/用户名/邮箱" maxlength="32">
	<br />
	<button class="next-step-btn" disabled="">下一步</button>
</div>
</main>
</template>

<script>
</script>

<style lang="scss" scoped>
.mint-header {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background-color:#06C1AE;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: #fff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    font-size: 14px;
    height: 40px;
    line-height: 1;
    padding: 0 10px;
    position: relative;
    text-align: center;
    white-space: nowrap;
}
.current{
width: 100%;
margin-top: 50px;
margin-left: 8px;
}
.step-1-title{
    font-family: PingFangSC-Regular, Hiragino Sans GB, sans-serif;
}
.user-input{
	margin-top: 12px;
    width: 100%;
   	height: 2.3rem;
    font-size: .4rem;
}
.next-step-btn{
	font-size: .4rem;
    background: #06C1AE;
    border-radius: .08rem;
    text-align: center;
    color: #fff;
    height: 2.3rem;
    line-height: 1rem;
    width: 100%;
    display: inline-block;
    margin-top: 12px;
    border: .01rem solid #e5e5e5;
    background-color: #e5e5e5;
    color: #999;
}
</style>