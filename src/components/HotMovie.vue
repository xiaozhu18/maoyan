<template>
  <main>
    <ul>
      <li v-for="(item,index) in movieList" :key="index" :data-id="item.id">
        <!-- 左边 -->     
        <div class="img">
          <router-link to="/Details"><img :src="state.dealImgUrl(item.img,'128.180')" alt></router-link>
        </div>
        <!-- 右边 -->
        <div class="content">
          <div class="c-lf">
            <div class="move-title">
              <div class="title" v-text="item.nm"></div>
              <i class="imax" v-if="item.version=='v3d imax'" :class="{v3d_Max:1}"></i>
              <i class="imax" v-else-if="item.version=='v3d'" :class="{v3d:1}"></i>
            </div>

            <div class="score" v-if="item.showst==3 && item.sc">
              <span class="score-suffix">观众评</span>
              <span class="grade" v-text="item.sc"></span>
            </div>

            <div class="score" v-else-if="item.showst==4">
              <span class="grade" v-text="item.wish"></span>
              <span class="score-suffix">人想看</span>
            </div>

            <div
              class="score"
              v-else-if="item.showst==3 && !item.sc && !item.star"
              style="margin-bottom:0"
            >
              <span class="NoGrade">暂无评分</span>
            </div>

            <p class="cast" v-if="item.star">主演: {{item.star}}</p>
            <p class="cast" v-else></p>
            <p class="show-info" v-text="item.showInfo" v-if="item.showst==3"></p>
            <p class="show-info" v-text="item.showInfo" v-else-if="item.showst==4"></p>
          </div>
          <div class="c-lr">
            <div
              class="ticket"
              :style="{
                backgroundColor:item.globalReleased?'#f03d37':'#3c9fe6'
                }"
            >{{item.globalReleased?"购票":"预售"}}</div>
          </div>
        </div>
      </li>
      <div class="LoadMovies" @click="loadMore()">加载更多...</div>
    </ul>
  </main>
</template>
<script>
import state from "./../observeable.js";

export default {
  data() {
    return {
      movieList: [
      {
			"id": 1229534,
			"haspromotionTag": false,
			"img": "http://p0.meituan.net/w.h/movie/bb9f75599bfbb2c4cf77ad9abae1b95c1376927.jpg",
			"version": "v2d imax",
			"nm": "银河补习班",
			"preShow": false,
			"sc": 9.5,
			"globalReleased": true,
			"wish": 221884,
			"star": "邓超,白宇,任素汐",
			"rt": "2019-07-18",
			"showInfo": "今天217家影院放映2964场",
			"showst": 3,
			"wishst": 0
		}, {
			"id": 1218141,
			"haspromotionTag": false,
			"img": "http://p0.meituan.net/w.h/movie/8d3efdc44af04c3254fc9e4ad5334ae32660685.jpg",
			"version": "",
			"nm": "扫毒2天地对决",
			"preShow": false,
			"sc": 9,
			"globalReleased": true,
			"wish": 320805,
			"star": "刘德华,古天乐,苗侨伟",
			"rt": "2019-07-05",
			"showInfo": "今天216家影院放映1822场",
			"showst": 3,
			"wishst": 0
		}, {
			"id": 1189879,
			"haspromotionTag": false,
			"img": "http://p0.meituan.net/w.h/moviemachine/7b9b0725ab5feae642e1fbba9fbb90fe3702078.jpg",
			"version": "v3d imax",
			"nm": "狮子王",
			"preShow": false,
			"sc": 8.9,
			"globalReleased": true,
			"wish": 191819,
			"star": "唐纳德·格洛弗,塞斯·罗根,詹姆斯·厄尔·琼斯",
			"rt": "2019-07-12",
			"showInfo": "今天215家影院放映1509场",
			"showst": 3,
			"wishst": 0
		}, {
			"id": 1219932,
			"haspromotionTag": false,
			"img": "http://p0.meituan.net/w.h/movie/bdae65883df68cb0ccce1b46194f12528633293.png",
			"version": "v3d",
			"nm": "未来机器城",
			"preShow": false,
			"sc": 0,
			"globalReleased": true,
			"wish": 106805,
			"star": "冯远征,石班瑜,韩莹棣",
			"rt": "2019-07-19",
			"showInfo": "今天207家影院放映899场",
			"showst": 3,
			"wishst": 0
		}, {
			"id": 1226558,
			"haspromotionTag": false,
			"img": "http://p0.meituan.net/w.h/movie/1890a564c74d8865750bb1b19b9fc72a1935745.jpg",
			"version": "",
			"nm": "跳舞吧！大象",
			"preShow": true,
			"sc": 0,
			"globalReleased": false,
			"wish": 30640,
			"star": "艾伦,金春花,彭杨",
			"rt": "2019-07-26",
			"showInfo": "2019-07-26 下周五上映",
			"showst": 4,
			"wishst": 0
		}, {
			"id": 1203673,
			"haspromotionTag": false,
			"img": "http://p0.meituan.net/w.h/movie/03b6254e94e18c99c6b080f2fecada2414201605.jpg",
			"version": "",
			"nm": "游戏人生 零",
			"preShow": false,
			"sc": 0,
			"globalReleased": true,
			"wish": 38572,
			"star": "松冈祯丞,茅野爱衣,日笠阳子",
			"rt": "2019-07-19",
			"showInfo": "今天176家影院放映662场",
			"showst": 3,
			"wishst": 0
		}, {
			"id": 1205779,
			"haspromotionTag": false,
			"img": "http://p0.meituan.net/w.h/movie/29d4b848f1835efaabfa8ee39c959b731433302.jpg",
			"version": "",
			"nm": "回到过去拥抱你",
			"preShow": false,
			"sc": 0,
			"globalReleased": false,
			"wish": 75867,
			"star": "侯明昊,彭昱畅,盖玥希",
			"rt": "2019-07-26",
			"showInfo": "2019-07-26 下周五上映",
			"showst": 4,
			"wishst": 0
		}, {
			"id": 1198925,
			"haspromotionTag": false,
			"img": "http://p0.meituan.net/w.h/moviemachine/5dac476535359b7bb951ff15d37a9d0b153821.jpg",
			"version": "v3d imax",
			"nm": "蜘蛛侠：英雄远征",
			"preShow": false,
			"sc": 9,
			"globalReleased": true,
			"wish": 502087,
			"star": "汤姆·赫兰德,杰克·吉伦哈尔,塞缪尔·杰克逊",
			"rt": "2019-06-28",
			"showInfo": "今天162家影院放映460场",
			"showst": 3,
			"wishst": 0
		}, {
			"id": 345797,
			"haspromotionTag": false,
			"img": "http://p0.meituan.net/w.h/movie/99b46395a2675e1cf3510032a1088fa54610159.jpg",
			"version": "",
			"nm": "猪八戒传说",
			"preShow": false,
			"sc": 0,
			"globalReleased": true,
			"wish": 25888,
			"star": "曾志伟,殷若曦,贾冰",
			"rt": "2019-07-19",
			"showInfo": "今天96家影院放映278场",
			"showst": 3,
			"wishst": 0
		}, {
			"id": 1211270,
			"haspromotionTag": false,
			"img": "http://p0.meituan.net/w.h/movie/005955214d5b3e50c910d7a511b0cb571445301.jpg",
			"version": "v3d imax",
			"nm": "哪吒之魔童降世",
			"preShow": true,
			"sc": 9.6,
			"globalReleased": false,
			"wish": 70313,
			"star": "吕艳婷,囧森瑟夫,瀚墨",
			"rt": "2019-07-26",
			"showInfo": "今天104家影院放映127场",
			"showst": 4,
			"wishst": 0
		}, {
			"id": 1229688,
			"haspromotionTag": false,
			"img": "http://p0.meituan.net/w.h/moviemachine/b06dfa72a4ba8ca1be23c985f5993c2a1066144.jpg",
			"version": "",
			"nm": "看不见的小孩",
			"preShow": false,
			"sc": 0,
			"globalReleased": true,
			"wish": 55649,
			"star": "裴蒂·赫格莉,陈锦昀,段超",
			"rt": "2019-07-19",
			"showInfo": "今天120家影院放映181场",
			"showst": 3,
			"wishst": 0
		}, {
			"id": 1240752,
			"haspromotionTag": false,
			"img": "http://p1.meituan.net/w.h/moviemachine/0e52c4bb21353806f954c626bdf9a20d1844818.jpg",
			"version": "",
			"nm": "小Q",
			"preShow": true,
			"sc": 0,
			"globalReleased": false,
			"wish": 41632,
			"star": "任达华,梁咏琪,罗仲谦",
			"rt": "2019-07-25",
			"showInfo": "2019-07-25 下周四上映",
			"showst": 4,
			"wishst": 0
		}
      ], //初始化电影数
      ComingMovies: [
      
      
      
      ], //加载电影
      moviesId: [
      1229534,
		1218141,
		1189879,
		1219932,
		1226558,
		1203673,
		1205779,
		1198925,
		345797,
		1211270,
		1229688,
		1240752,
		1211345,
		1243361,
		1229894,
		644501,
		1260459,
		1212,
		414997,
		1234461,
		1235560,
		1230509,
		246264,
		626524,
		1211698,
		1204720,
		246061,
		1262593,
		1254277,
		1207254,
		1218727,
		1234382,
		1211064,
		338400,
		368109,
		1279689,
		1204589,
		343133,
		341989,
		337625,
		1215829,
		1213262,
		1214680,
		1215550,
		1229020,
		1243904,
		1233255,
		1226516,
		1229752,
		1285074,
		1205938,
		450933,
		884508,
		595448,
		1207141,
		1240821,
		1227693,
		1218725,
		1228910,
		1250668,
		1281776,
		1215938,
		1281596,
		1242431,
		1184988,
		1282371
      
      ], //电影总数
      movieIds:  [
		1229534,
		1218141,
		1189879,
		1219932,
		1226558,
		1203673,
		1205779,
		1198925,
		345797,
		1211270,
		1229688,
		1240752,
		1211345,
		1243361,
		1229894,
		644501,
		1260459,
		1212,
		414997,
		1234461,
		1235560,
		1230509,
		246264,
		626524,
		1211698,
		1204720,
		246061,
		1262593,
		1254277,
		1207254,
		1218727,
		1234382,
		1211064,
		338400,
		368109,
		1279689,
		1204589,
		343133,
		341989,
		337625,
		1215829,
		1213262,
		1214680,
		1215550,
		1229020,
		1243904,
		1233255,
		1226516,
		1229752,
		1285074,
		1205938,
		450933,
		884508,
		595448,
		1207141,
		1240821,
		1227693,
		1218725,
		1228910,
		1250668,
		1281776,
		1215938,
		1281596,
		1242431,
		1184988,
		1282371
	],
      state
    };
  },
  methods: {
    async InitMove() {
      this.$load.open({
        text: "加载中...",
        spinnerType: "fading-circle"
      });
  }
}
  }

</script>

<style lang="scss" scoped>
main {
  ul {
    margin-top: 5.8125rem;
    padding-top: 0.75rem;
    margin-bottom: 2.875rem;

    li {
      padding: 0 0.9375rem;
      display: flex;
      height: 6.25rem;
      margin-bottom: 0.8125rem;

      .img {
        width: 4rem;
        height: 5.625rem;
        margin-right: 0.625rem;

        img {
          width: 4rem;
          height: 5.625rem;
        }
      }

      .content {
        display: flex;
        justify-content: space-between;
        border-bottom: 0.0625rem solid #e6e6e6;
        width: 100%;

        .c-lf {
          display: flex;
          flex-direction: column;
          font-size: 0.8125rem;
          color: #666;
          line-height: 1.125rem;
          margin-right: 0.625rem;

          .move-title {
            display: flex;
            margin: 0.125rem 0 0.5rem;

            .title {
              max-width: 9.9375rem;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              font-size: 1.0625rem;
              color: #333;
              font-weight: 700;
              margin-right: 0.3125rem;
            }

            .imax {
              display: inline-block;
              width: 2.6875rem;
              height: 0.875rem;
              margin-top: 0.0625rem;
            }
            .v3d_Max {
              background: url("../assets/v3d.png") no-repeat 0 1%;
              background-size: 2.6875rem 0.875rem;
            }
            .v3d {
              background: url("../assets/3D.png") no-repeat 0 1%;
              background-size: 1.0625rem 0.875rem;
            }
          }

          .score {
            margin-bottom: 0.125rem;

            .score-suffix {
              margin-right: 0.3125rem;
            }

            .grade {
              font-weight: 700;
              color: #faaf00;
              font-size: 0.9375rem;
            }

            .NoGrade {
              font-size: 0.875rem;
            }
          }

          .cast {
            width: 12.8125rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            margin-bottom: 0.25rem;
          }
        }

        .ticket {
          width: 47px;
          height: 28px;
          line-height: 28px;
          text-align: center;
          box-sizing: border-box;
          background-color: #f03d37;
          color: #fff;
          border-radius: 4px;
          white-space: nowrap;
          font-size: 12px;
          cursor: pointer;
          margin-top: 60%;
        }
      }
    }

    .LoadMovies {
      padding-bottom: 0.625rem;
      font-size: 0.875rem;
      color: #6b6b6b;
      text-align: center;
    }
  }
}
</style>

