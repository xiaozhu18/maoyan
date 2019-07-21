<template>
	<div id="app">
		<ul class="y-header">
		<i class="iconfont icon-fanhui" @click="back()"></i>
		<p>中影DY影城(萝岗店)</p>
		</ul>
		<ul class="db-box">
			<div class="db-box1">
			<h2>中影DY影城(萝岗店)</h2>
			<span class="cont">黄浦区开创大道1934号</span>
			<img src="../assets/img/p24.jpg" class="p24"/>
			</div>
		</ul>
		<ul class="db-box2">
			<div class="db-box3">
				 <div class="expect">
				    <div class="expect-list">
				      <ul>
				        <li v-for="(item, index) in list" :key="index">
				          <div class="poster">
				            <router-link to="/Details"><img :src="state.dealImgUrl(item.img,'128.180')" alt></router-link>
				            <span class="toggle-wish">
				              <i class="iconfont icon-zan1" @click="collect($event,index)" ></i>
				            </span>
				            <div class="wish">
				              <span class="wish-num" v-text="item.wish">13123</span>
				              人想看
				            </div>
				          </div>
				          <h5 class="name" v-text="item.nm">哥斯拉2：怪兽之王</h5>
				          <p class="date" v-text="item.comingTitle">5月31日</p>
				        </li>
				      </ul>
				    </div>
			  	</div>
			</div>
			<div class="movie-info">
				<div class="movie-title">
					<span class="title">扫毒2天地对决</span>
					<span class="grade">9.0分</span>
					<p class="movie-desc ">100分钟 | 剧情 | 刘德华,古天乐,苗侨伟</p>
				</div>
				
			</div>
		</ul>
		<ul class="db-box4">
			<mt-navbar v-model="selected">
			  <mt-tab-item id="1">今天7月17日<span class="drop"></span></mt-tab-item>
			  <mt-tab-item id="2">明天7月18日<span class="drop"></span></mt-tab-item>
			  <mt-tab-item id="3">后天7月19日<span class="drop"></span></mt-tab-item>
			</mt-navbar>
			<!-- tab-container -->
			<mt-tab-container v-model="selected">
			  <mt-tab-container-item id="1">
			  	<div class="db-box5">
				<ul class="item">
					<li>
						<div class="begin">20:45</div>
						<div class="end">22:25散场</div>
				    </li>
					<li >
						<div class="hall">粤语 2D</div>
						<div class="end">4号厅</div>
					</li>
					<li class="price">
						<span class="d">¥38</span>
					</li>
					<li class="button-block">		
						<div class="button"><span>停售</span></div>
					</li>
				</ul>
			</div>
			<div class="db-box5">
				<ul class="item">
					<li>
						<div class="begin">21:20</div>
						<div class="end">23:00散场</div>
				    </li>
					<li >
						<div class="hall">粤语 2D</div>
						<div class="end">4号厅</div>
					</li>
					<li class="price">
						<span class="d">¥38</span>
					</li>
					<router-link to='/Ticket'>
						<li class="button-block">		
						<div class="button1"><span>购票</span></div>
						</li>
					</router-link>
				</ul>
			</div>
			<div class="db-box5">
				<ul class="item">
					<li>
						<div class="begin">22:10</div>
						<div class="end">23:50散场</div>
				    </li>
					<li >
						<div class="hall">粤语 2D</div>
						<div class="end">2号厅</div>
					</li>
					<li class="price">
						<span class="d">¥38</span>
					</li>
					<li class="button-block">		
						<div class="button1"><span>购票</span></div>
					</li>
				</ul>
			</div>
			<div class="db-box5">
				<ul class="item">
					<li>
						<div class="begin">22:40</div>
						<div class="end">00:20散场</div>
				    </li>
					<li >
						<div class="hall">粤语 2D</div>
						<div class="end">2号厅</div>
					</li>
					<li class="price">
						<span class="d">¥38</span>
					</li>
					<li class="button-block">		
						<div class="button1"><span>购票</span></div>
					</li>
				</ul>
			</div>
			  </mt-tab-container-item>
			  <mt-tab-container-item id="2">
			  	<div class="db-box5">
				<ul class="item">
					<li>
						<div class="begin">09:10</div>
						<div class="end">10:50散场</div>
				    </li>
					<li >
						<div class="hall">粤语 2D</div>
						<div class="end">2号厅</div>
					</li>
					<li class="price">
						<span class="d">¥38</span>
					</li>
					<li class="button-block">		
						<div class="button1"><span>购票</span></div>
					</li>
				</ul>
			</div>
			  	<div class="db-box5">
				<ul class="item">
					<li>
						<div class="begin">10:10</div>
						<div class="end">11:50散场</div>
				    </li>
					<li >
						<div class="hall">粤语 2D</div>
						<div class="end">2号厅</div>
					</li>
					<li class="price">
						<span class="d">¥38</span>
					</li>
					<li class="button-block">		
						<div class="button1"><span>购票</span></div>
					</li>
				</ul>
			</div>
			   <div class="db-box5">
				<ul class="item">
					<li>
						<div class="begin">21:10</div>
						<div class="end">23:50散场</div>
				    </li>
					<li >
						<div class="hall">粤语 2D</div>
						<div class="end">2号厅</div>
					</li>
					<li class="price">
						<span class="d">¥38</span>
					</li>
					<li class="button-block">		
						<div class="button1"><span>购票</span></div>
					</li>
				</ul>
			</div>
			<div class="db-box5">
				<ul class="item">
					<li>
						<div class="begin">21:20</div>
						<div class="end">23:00散场</div>
				    </li>
					<li >
						<div class="hall">粤语 2D</div>
						<div class="end">4号厅</div>
					</li>
					<li class="price">
						<span class="d">¥38</span>
					</li>
					<li class="button-block">		
						<div class="button1"><span>购票</span></div>
					</li>
				</ul>
			</div>
			<div class="db-box5">
				<ul class="item">
					<li>
						<div class="begin">22:10</div>
						<div class="end">23:50散场</div>
				    </li>
					<li >
						<div class="hall">粤语 2D</div>
						<div class="end">2号厅</div>
					</li>
					<li class="price">
						<span class="d">¥38</span>
					</li>
					<li class="button-block">		
						<div class="button1"><span>购票</span></div>
					</li>
				</ul>
			</div>
			<div class="db-box5">
				<ul class="item">
					<li>
						<div class="begin">22:40</div>
						<div class="end">00:20散场</div>
				    </li>
					<li >
						<div class="hall">粤语 2D</div>
						<div class="end">2号厅</div>
					</li>
					<li class="price">
						<span class="d">¥38</span>
					</li>
					<li class="button-block">		
						<div class="button1"><span>购票</span></div>
					</li>
				</ul>
			</div>
			  </mt-tab-container-item>
			  <mt-tab-container-item id="3">
			  <div class="db-box5">
				<ul class="item">
					<li>
						<div class="begin">09:10</div>
						<div class="end">10:50散场</div>
				    </li>
					<li >
						<div class="hall">粤语 2D</div>
						<div class="end">2号厅</div>
					</li>
					<li class="price">
						<span class="d">¥38</span>
					</li>
					<li class="button-block">		
						<div class="button1"><span>购票</span></div>
					</li>
				</ul>
			</div>
			  	<div class="db-box5">
				<ul class="item">
					<li>
						<div class="begin">10:10</div>
						<div class="end">11:50散场</div>
				    </li>
					<li >
						<div class="hall">粤语 2D</div>
						<div class="end">2号厅</div>
					</li>
					<li class="price">
						<span class="d">¥38</span>
					</li>
					<li class="button-block">		
						<div class="button1"><span>购票</span></div>
					</li>
				</ul>
			</div>
			<div class="db-box5">
				<ul class="item">
					<li>
						<div class="begin">11:10</div>
						<div class="end">12:50散场</div>
				    </li>
					<li >
						<div class="hall">粤语 2D</div>
						<div class="end">2号厅</div>
					</li>
					<li class="price">
						<span class="d">¥38</span>
					</li>
					<li class="button-block">		
						<div class="button1"><span>购票</span></div>
					</li>
				</ul>
			</div>
			   <div class="db-box5">
				<ul class="item">
					<li>
						<div class="begin">22:10</div>
						<div class="end">23:50散场</div>
				    </li>
					<li >
						<div class="hall">粤语 2D</div>
						<div class="end">2号厅</div>
					</li>
					<li class="price">
						<span class="d">¥38</span>
					</li>
					<li class="button-block">		
						<div class="button1"><span>购票</span></div>
					</li>
				</ul>
			</div>
			<div class="db-box5">
				<ul class="item">
					<li>
						<div class="begin">21:20</div>
						<div class="end">23:00散场</div>
				    </li>
					<li >
						<div class="hall">粤语 2D</div>
						<div class="end">4号厅</div>
					</li>
					<li class="price">
						<span class="d">¥38</span>
					</li>
					<li class="button-block">		
						<div class="button1"><span>购票</span></div>
					</li>
				</ul>
			</div>
			<div class="db-box5">
				<ul class="item">
					<li>
						<div class="begin">22:10</div>
						<div class="end">23:50散场</div>
				    </li>
					<li >
						<div class="hall">粤语 2D</div>
						<div class="end">2号厅</div>
					</li>
					<li class="price">
						<span class="d">¥38</span>
					</li>
					<li class="button-block">		
						<div class="button1"><span>购票</span></div>
					</li>
				</ul>
			</div>
			<div class="db-box5">
				<ul class="item">
					<li>
						<div class="begin">22:40</div>
						<div class="end">00:20散场</div>
				    </li>
					<li >
						<div class="hall">粤语 2D</div>
						<div class="end">2号厅</div>
					</li>
					<li class="price">
						<span class="d">¥38</span>
					</li>
					<li class="button-block">		
						<div class="button1"><span>购票</span></div>
					</li>
				</ul>
			</div>
			  </mt-tab-container-item>
			</mt-tab-container>
			
		</ul>
	</div>
</template>

<script>
import "@/lib/iconfont/iconfont.css";
import state from "@/observeable";
export default {
  data(){
  	return{
  		num:1,
		selected:"1",
		active:"tab-container2",
		  list: [
      	{
			"id": 1203134,
			"img": "http://p0.meituan.net/w.h/movie/ae98a8b942495de97ddde12170f9b38d92428.jpg",
			"wish": 315126,
			"wishst": 0,
			"nm": "摸金校尉之九幽将军",
			"comingTitle": "10月1日 周二"
		}, {
			"id": 1197417,
			"img": "http://p0.meituan.net/w.h/movie/ebcc1a8e22cecd24bcd436d6a8afcc4c2917624.jpg",
			"wish": 213576,
			"wishst": 0,
			"nm": "使徒行者2：谍影行动",
			"comingTitle": "8月7日 周三"
		}, {
			"id": 1215605,
			"img": "http://p1.meituan.net/w.h/movie/648bbced128324a4b4ccf7db6c564a251744344.jpg",
			"wish": 163082,
			"wishst": 0,
			"nm": "速度与激情：特别行动",
			"comingTitle": "8月23日 周五"
		}, {
			"id": 1207237,
			"img": "http://p1.meituan.net/w.h/movie/74368fecd16f25a7e632e13447f217c0298371.jpg",
			"wish": 123921,
			"wishst": 0,
			"nm": "沉默的证人",
			"comingTitle": "8月2日 周五"
		}, {
			"id": 1209269,
			"img": "http://p0.meituan.net/w.h/movie/b73baf844cbbc2f434f5fcd5d046679d936451.jpg",
			"wish": 122896,
			"wishst": 0,
			"nm": "全职高手之巅峰荣耀",
			"comingTitle": "8月16日 周五"
		}, {
			"id": 342903,
			"img": "http://p1.meituan.net/w.h/movie/bdf410afd0cae110baca2a77415389751024783.jpg",
			"wish": 95506,
			"wishst": 0,
			"nm": "上海堡垒",
			"comingTitle": "8月9日 周五"
		}, {
			"id": 341379,
			"img": "http://p1.meituan.net/w.h/movie/92bdf5e3faa703a819a1e8f11cf6c0d81756031.jpg",
			"wish": 76553,
			"wishst": 0,
			"nm": "保持沉默",
			"comingTitle": "8月23日 周五"
		}, {
			"id": 1205779,
			"img": "http://p0.meituan.net/w.h/movie/29d4b848f1835efaabfa8ee39c959b731433302.jpg",
			"wish": 75904,
			"wishst": 0,
			"nm": "回到过去拥抱你",
			"comingTitle": "7月26日 周五"
		}, {
			"id": 1250700,
			"img": "http://p0.meituan.net/w.h/movie/4c01895cfd53e82f7c3048c407974a6b4739229.jpg",
			"wish": 72933,
			"wishst": 0,
			"nm": "攀登者",
			"comingTitle": "9月30日 周一"
		}, {
			"id": 1211270,
			"img": "http://p0.meituan.net/w.h/movie/005955214d5b3e50c910d7a511b0cb571445301.jpg",
			"wish": 70441,
			"wishst": 0,
			"nm": "哪吒之魔童降世",
			"comingTitle": "7月26日 周五"
		}
      ],
      state
  	}
  },
   methods: {
    back() {
      this.$router.go(-1);
    },
    collect(ev, index) {

      if (this.tab[index] == 1) {

        ev.target.style.color = "red";
        this.$Toast({
          message: "已收藏",
          duration: 1000,
          iconClass: "iconfont icon-zan1"
        });
        this.tab[index] = 0;

      } else if (this.tab[index] == 0) {

        ev.target.style.color = "#cdd3e4";
        this.$Toast({
          message: "已取消收藏",
          duration: 1000,
          iconClass: "iconfont icon-zan1"
        });
        this.tab[index] = 1;

      }
    }
  }
};
</script>

<style lang="scss" scoped>
#app{
	background-color: #f0f0f0;
    width: 100%!important;
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
  .db-box{
  	margin-top: 50px;
  	width: 100%;
  	height: 97px;
  	background: #fff;
  	line-height: 40px;
  }
  .db-box1 h2{
  	font-size: 17px;
    line-height: 24px;
    font-weight: 700;
    color: #333;
  }
  .cont{
  	margin-top: 2px;
    font-size: 13px;
    line-height: 18.5px;
    color: #999;
  }
  .db-box1{
  	padding-top: 20px;
  	margin-left: 20px;
  	height: 74px;
  	width: 100%;
  }
  .p24{
  	position: absolute;
    right: 20px;
    top: 80px;
    border-left: 1px solid #d8d8d8;
  }
  .db-box2{
  	height: 260px;
  	width: 100%;
  	background: #fff;
  	border-bottom: 1px solid gainsboro;
  }
  .db-box3{
  	height: 188px;
  	width: 100%;
  	background-color: #40454d;
   /* opacity: .55;*/
  }
  .movie-title{
  	height: 67px;
  	width: 100%;
  	margin: 0 auto;
  	text-align: center;
  }
  .title{
  	font-size: 17px;
    color: #333;
    font-weight: 700;
  }
  .grade{
  	color: #ffb400;
    font-size: 16px;
  }
  .movie-desc{
  	margin-top: 5px;
    height: 18.5px;
    line-height: 18.5px;
    font-size: 13px;
    color: #999;
  }
  .mint-navbar .mint-tab-item.is-selected {
    border-bottom: 6px solid #f03d37;
    color: #f03d37;
    margin-bottom: -3px;
}
.db-box5{
	background: #fff;
	height: 77px;
	width: 100%;
	border: 0.5px solid #ccc;
}
.item{
	padding-top: 20px;
	margin-left: 20px;
	height: 43px;
	width: 100%;
}
.item li {
	height: 43px;
	width: 25%;
	list-style: none;
	float: left;
	text-align: center;
	line-height: 40px;
}
.begin{
	font-size: 20px;
    color: #333;
    line-height: 1;
    white-space: nowrap;
}
.end{
	margin-top: 5px;
    color: #999;
    font-size: 11px;
    line-height: 1;
    white-space: nowrap;
}
.hall{
	margin-top: 2px;
    line-height: 18px;
    font-size: 13px;
    color: #333;
    white-space: normal;
}
.d{
	line-height: 1;
    color: #f03d37;
    margin-top: 1px;
    font-size: 19px;
}
.button{
	height: 27px;
    line-height: 28px;
    font-size: 12px;
    background-color: #ccc;
    color: #fff;
    border-radius: 4px;
    text-align: center;
    width: 45px;
}
.button1{
	height: 27px;
    line-height: 28px;
    font-size: 12px;
    background-color: red;
    color: #fff;
    border-radius: 4px;
    text-align: center;
    width: 45px;
}
.expect {
 height: 10.25rem;
    font-size: 0.875rem;
    color: #333;
    padding: 0.75rem 0 0.75rem 0.9375rem;
    overflow-x: auto;
    overflow-y: hidden;
    background: #fff;
    margin-bottom: 0.875rem;

  .expect-list {
    height: 10.625rem;
    width: 21.625rem;
    overflow: auto;
    /*margin-top: 0.625rem;*/
    //隐藏滚动条
    &::-webkit-scrollbar {
      display: none;
    }

    ul {
      width: 21.625rem;
      height: 10.625rem;
      list-style: none;
      display: flex;

      li {
        width: 5.3125rem;
        height: 9.75rem;
        margin-right: 1rem;

        .poster {
          width: 5.3125rem;
          height: 7.1875rem;
          position: relative;
          margin-bottom: 5px;

          img {
            width: 100%;
            height: 100%;
          }
          .toggle-wish {
            display: block;
            width: 1.75rem;
            height: 1.75rem;
            position: absolute;
            top: 0;
            left: 0;
            background: rgba(61, 63, 71, 0.6);
            border-bottom-right-radius: 10px;

            .icon-zan1 {
              position: absolute;
              left: 50%;
              top: 50%;
              transform: translate(-50%, -50%);
              color: #cdd3e4;
            }
          }

          .wish {
            color: #faaf00;
            font-size: 0.6875rem;
            font-weight: 600;
            position: absolute;
            left: 0.25rem;
            bottom: 0.125rem;
            background-image: linear-gradient(
              -180deg,
              rgba(77, 77, 77, 0),
              #000
            );
            width: 5.3125rem;
          }
        }

        .name {
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          color: #222;
          font-size: 0.8125rem;
        }

        .date {
          font-size: 0.75rem;
          color: #999;
        }
      }
    }
  }
}
</style>