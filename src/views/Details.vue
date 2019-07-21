<template>
	<main id="box">
		<ul class="y-header">
		<i class="iconfont icon-fanhui" @click="back()"></i>
		<p>扫毒2天地对决</p>
		</ul>
	<div class="movie-filter">
		<div class=".movie-container ">
			<div class="movie-cover">
				<img src="http://p0.meituan.net/128.180/movie/8d3efdc44af04c3254fc9e4ad5334ae32660685.jpg" class="pic1"/>
				<ul class="star-full">
				<p>扫毒2天地对决<br/>The White Storm 2</p>
				<li><img src="../assets/star-full.png" class="pic2"/></li>
				<li><img src="../assets/star-full.png" class="pic2"/></li>
				<li><img src="../assets/star-full.png" class="pic2"/></li>
				<li><img src="../assets/star-full.png" class="pic2"/></li>
				<li><img src="../assets/star-half.png" class="pic2"/>9.0</li><br />
				<span>(42.8万人评分)</span>
				<p>剧情,动作,悬疑,犯罪<br/>中国香港,中国大陆<br/>2019-07-05大陆上映</p>
				</ul>
			</div>
		</div>
	</div>
	<ul class="db-box">
	<button class="btn" >特惠购票</button>
	<p>{{msg}}</p>
	<img src="../assets/img/down.png" @click="change" />
	</ul>
	<ul class="section-seperate">
		<div class="movie-celebrities">
		<li><router-link to="/Self"><img src="../assets/img/p1.jpg" alt="" /></router-link><a href="#">邱礼涛</a><p>导演</p></li>
		<li><router-link to="/Self"><img src="../assets/img/p2.jpg" alt="" /></router-link><a href="#">刘德华</a><p>余顺天</p></li>
		<li><router-link to="/Self"><img src="../assets/img/p3.jpg" alt="" /></router-link><a href="#">古天乐</a><p>地藏</p></li>
		<li><router-link to="/Self"><img src="../assets/img/p4.jpg" alt="" /></router-link><a href="#">苗侨伟</a><p>林政风</p></li>
		<li><router-link to="/Self"><img src="../assets/img/p5.jpg" alt="" /></router-link><a href="#">林嘉欣</a><p>邹文风</p></li>
		</div>
		<p class="seperate">全体演员的名单 <img src="../assets/t4.jpg"/></p>
		<div class="db-box1">
		<h3>媒体库</h3>
		<ul>
			<li><img src="../assets/img/p7.jpg" alt=""/></li>
			<li><img src="../assets/img/p8.jpg" alt=""/></li>
			<li><img src="../assets/img/p9.jpg" alt=""/></li>
			<p>视频&nbsp;&nbsp;&nbsp;&nbsp;16  <img src="../assets/t4.jpg"/>剧照&nbsp;&nbsp;&nbsp;&nbsp;195  <img src="../assets/t4.jpg"/></p>
		</ul>
		
		</div>
	<div class="db-box2">
		<p style="line-height: 40px;margin-left: 20px;">正版周边 <span style="float: right;">全部<img src="../assets/t4.jpg"/></span></p>
		<div class="box02">
			<p><img src="../assets/img/p26.jpg" class="p26"/></p>
		</div>
		
	</div>
	<ul class="db-box3">
			<p class="panel-title3">资讯</p>
			<li>
				<img src="../assets/img/p25.jpg" class="p25"/>
				<div class="panel-title4">
					<span >《扫毒2》曝刘德华古天乐马<br/>场对峙片段，8亿票房成暑期<br/>爆款</span>
					<img src="../assets/img/down.png" class="pic4"/>
				</div>
			</li>
		
		</ul>
	<div class="db-box4">
		<ul>
			<li><span>2</span><p>昨日票房排行</p></li>
			<li><span>43251</span><p>首周票房（万）</p></li>
			<li><span>99629</span><p>累计票房（万）</p></li>
			<img src="../assets/t4.jpg"/>
		</ul>
	</div>
	<div class="db-box5">
		<span class="taolun">讨论</span>
		<p>精选</p>
		<img src="../assets/img/p11.jpg" class="p11" />
		<p class="cont">剑气纵横 <br/>给这部作品打了10分</p>
		<span class="conts">全程高能预警，不拖泥带水的剧情，加上激烈的枪战！让人荷尔蒙爆棚，最后驶入地铁镜头将全片推向高潮，嗨到爆！燃到爆！远离毒品，从我做起，感谢华哥、古校长给我们带来的正能量！给你们点100个赞👍</span>
		<div class="times">
			<p >07-08 <img src="../assets/img/p12.jpg"  class="p12"/></p>
		</div>
		
		
	</div>
	<ul class="db-box6">
	<button class="btn" >下载猫眼电影，查看更多电影信息</button>
	<p>© 猫眼电影 客服电话: <a href="#">1010-5335</a></p>
	</ul>
	</ul>
	
	
	
	
	</main>
</template>

<script>
export default {
  data(){
  	return {
		msg:'毒品市场维持四分天下的格局已久，但自从地藏（古天乐 饰）与墨西哥大毒枭跨境合作扩展势力，再加上一连串黑吃黑的动作，毒界变得风声鹤唳。另一方面，因儿时亲眼目睹父亲被毒品所毁而嫉毒如仇的慈善家兼金融巨子余顺天（刘德华 饰），正悬赏一亿歼灭香港最大毒贩，此举在社会上引起轩然大波。警员林正风（苗侨伟 饰）本致力搜证拘捕地藏，毒贩却因巨额悬赏导致人身安全受威胁，他在执行保护毒贩的任务时深感无奈，但又被余顺天的出价所诱惑，陷入黑白正邪的心理挣扎。原来，余顺天和地藏有不可告人的同门关系，一场天地对决一触即发。',
		list:[
			{
			pic:'../assets/img/p11.jpg',
			name:'剑气纵横<br/>给这部作品打了10分',
			cont:'全程高能预警，不拖泥带水的剧情，加上激烈的枪战！让人荷尔蒙爆棚，最后驶入地铁镜头将全片推向高潮，嗨到爆！燃到爆！远离毒品，从我做起，感谢华哥、古校长给我们带来的正能量！给你们点100个赞👍'
			}
		]
  	}
  },
   methods: {
    back() {
      this.$router.go(-1);
    },
    change(){
    
    }
  }
};
</script>

<style lang="scss" scoped>
#box{
	width: 100%;
	height: 1890px;
	background: #f4f4f4;
	list-style: none;
	cursor: pointer;

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
  .movie-filter{
  	position: absolute;
  	top:40px;
  	background-color: #40454d;
    width: 100%;
    height: 183px;
  }
  .movie-container {
    z-index: 1;
    position: relative;
    top: 80px;
}
.movie-cover {
  height: 150px;
  padding-left:20px;
  padding-top: 20px;
  z-index: 2;
}
.star-full{
	position: absolute;
	top:20px;
	left: 150px;
	color: #fff;
	list-style: none;
	font-size: 15px;

}
.star-full li{
	float: left;
	color: #ffc600;
}
.pic1  {
    width: 109px;
    height: 150px;
}
.pic2{
	width: 18px;
	height: 18px;
}
.btn{
	width: 100%;
	height: 40px;
	background-color: #e54847;
	color: #fff;
	border-radius: 100px;
	cursor: pointer;
	
	
}
.db-box{
	position: absolute;
	top:240px;
	background-color: #fff;

}
.db-box p{
	padding-top:10px ;
	height: 60px;
	overflow:scroll;
}
.db-box img{
	display: block;
	margin: 0 auto;
}
.section-seperate{
width: 100%;
height: 207px;
background-color: #fff;
position: absolute;
top:400px;
}
.movie-celebrities{
width: 100%;
height: 162px;
border-bottom: 1px solid gainsboro;

}
.movie-celebrities li {
 list-style: none;
 float: left;
 width: 20%;
 height: 136px;
  margin-top: 10px;
}
.movie-celebrities li img{
display: block;
 width: 65px;
 height: 90px;
 margin: 0 auto;
}
.movie-celebrities li a{
text-decoration: none;
display: block;
font-size: 16px;
overflow: hidden;
color: #000000;
text-align: center;
}
 .movie-celebrities li p{
   color: #999;
   font-size: 12px;
   text-align: center;
 }
 .seperate{
 line-height: 40px;
 margin-left: 10px;
 }
 .seperate img{
 position: absolute;
right: 10px; 
top: 175px;
 }
 
 .db-box1{
 width: 100%;
 height: 162px;
 background: #fff;
 margin-top: 20px;
 }
 .db-box1 li {
  width: 33.3%;
  height: 76px;
  float: left;
  list-style: none;
 }
  .db-box1 li img{
  width: 120px;
  height: 70px;
  }
  .db-box1 p {
  line-height: 65px;
  }
  .db-box2{
 width: 100%;
 height: 162px;
 background: #fff;
 margin-top: 20px;
 }
 .box02{
 	height: 100px;
 	width: 100%;
 	background: #fff;
 }
 .box02 img{
 	height: 100px;
 	width: 100px;
 	margin-left: 20px;
    margin-top: 20px;
 }
 .db-box3{
 	width: 100%;
 	height: 138px;
 	background: #fff;
 	margin-top: 20px;
 }
 .panel-title3{
 	padding: 0;
    margin: 0;
    width: 100%;
    height: 47px;
    line-height: 50px;
    font-size: .9rem;
    color: #333;
    font-weight: 400;
    margin-left: 20px;
 }
 .p25{
 	width: 30%;
 	height: 70px;
 	margin-top: 2px;
 	margin-left: 20px;
 }
 .panel-title4 span{
 	position: relative;
 	top: -80px;
 	left: 140px;
 	line-height: 30px;
 }
 .pic4{
 	transform: rotate(270deg);
 	float: right;
 	margin-top: -100px;
 }
 .db-box4{
 width: 100%;
 height: 88px;
 background: #fff;
 margin-top: 20px;
 }
 .db-box4 ul li {
  list-style: none;
  width: 26%;
  float: left;
  text-align: center;
  line-height: 45px;
  font-size: 12px;
 }
 .db-box4 ul img{
 
 position: relative;
    top: 30px;
    right: -50px;
 }
 .db-box4 ul span{
 height: .7rem;
    color: #e54847;
    font-size: 1.5rem;
    font-weight: lighter;
    font-family: Helvetica;
    margin: .1rem 0 .08rem;
 }
 .db-box4 ul p{
 color: #999;
    font-size: .22rem;
    margin: .08rem 0 .1rem;
 }
  .db-box5{
 width: 100%;
 height: 500px;
 background: #fff;
 margin-top: 20px;
 }
 .db-box5 .taolun{
 display: block;
 height: 40px;
 border-bottom: 1px solid gainsboro;
 line-height: 40px;
 width: 100%;
 margin-left: 20px;
 }
  .db-box5 p{
  display: block;
  margin-left: 20px;
  }
  .p11{
  	display: block;
  	margin-top: 10px;
  	margin-left: 20px;
  	height: 34px;
  	width: 34px;
  }
  .cont{
  position: relative;
  top: -40px;
  left: 40px;
  }
  .conts{
  display: block;
  margin-top: -30px;
  margin-left: 60px;
  }
  .times{
  margin-top: 10px; 
  margin-left: 45px;
  color: #999;
  }
  .times img{
  position: relative;
  top: 5px;
  right: -100px;
  
  }
  
  .db-box6 {
  margin-top: 20px;
  
  }
  .db-box6 p{
  font-size: 16px;
  text-align: center;
  margin-top: 20px;
  }
  .db-box6 p a{
  	text-decoration: none;
  	color: red;
  }
</style>