<template>
  <div class="coming-list">
    <div class="schedule" v-for="(item,index) in list" :key="index">
      <div class="item">
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
              
            </div>

            <div class="score">
              <span class="grade" v-text="item.wish"></span>
              <span class="score-suffix">人想看</span>
            </div>

            <p class="cast">主演: {{item.star}}</p>

            <p class="show-info" >{{item.rt}}上映</p>
          </div>
          <div class="c-lr">
            <div
              class="ticket"
              :style="{
              background:item.showst==1? '#FAAF00':'#3C9FE6'
              }
              "
            >{{item.showst==1?'想看':'预售'}}</div>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>
<script>
import state from "@/observeable.js";

export default {
  data() {
    return {
      list: [
      	{
      "id": 626524,
			"haspromotionTag": false,
			"img": "http://p0.meituan.net/w.h/movie/d7fd2828dae44e8bb601031f0f3c47523508943.jpg",
			"version": "v3d",
			"nm": "精灵小王子",
			"preShow": false,
			"sc": 0,
			"globalReleased": false,
			"wish": 5817,
			"star": "拉斯穆斯·哈迪克,艾米·萨维尔,吉姆·卡特",
			"rt": "2019-07-20",
			"showInfo": "2019-07-20 本周六上映",
			"showst": 4,
			"wishst": 0,
			"comingTitle": "7月20日 周六"
      	}, {
			"id": 1284311,
			"haspromotionTag": false,
			"img": "http://p0.meituan.net/w.h/movie/27951f677a3c72d7e3a4532229c88efa3700862.jpg",
			"version": "",
			"nm": "心之山",
			"preShow": false,
			"sc": 0,
			"globalReleased": false,
			"wish": 397,
			"star": "胡建群,倪颂夏,焦雯倩",
			"rt": "2019-07-20",
			"showst": 1,
			"wishst": 0,
			"comingTitle": "7月20日 周六"
		}, {
			"id": 1229894,
			"haspromotionTag": false,
			"img": "http://p1.meituan.net/w.h/movie/6d4a99c589994b6959f71a6c3d8c9cc09531829.jpg",
			"version": "",
			"nm": "灰猴",
			"preShow": true,
			"sc": 0,
			"globalReleased": false,
			"wish": 2895,
			"star": "王大治,高峰,王靖云",
			"rt": "2019-07-23",
			"showInfo": "今天14家影院放映14场",
			"showst": 4,
			"wishst": 0,
			"comingTitle": "7月23日 周二"
		}, {
			"id": 1240752,
			"haspromotionTag": false,
			"img": "http://p1.meituan.net/w.h/moviemachine/0e52c4bb21353806f954c626bdf9a20d1844818.jpg",
			"version": "",
			"nm": "小Q",
			"preShow": true,
			"sc": 0,
			"globalReleased": false,
			"wish": 41655,
			"star": "任达华,梁咏琪,罗仲谦",
			"rt": "2019-07-25",
			"showInfo": "2019-07-25 下周四上映",
			"showst": 4,
			"wishst": 0,
			"comingTitle": "7月25日 周四"
		}, {
			"id": 644501,
			"haspromotionTag": false,
			"img": "http://p1.meituan.net/w.h/movie/34808e8df47b3c20a5239d5b6101392c3419636.jpg",
			"version": "",
			"nm": "隧道尽头",
			"preShow": true,
			"sc": 0,
			"globalReleased": false,
			"wish": 3086,
			"star": "莱昂纳多·斯巴拉格利亚,克拉拉·拉戈,Uma Salduende",
			"rt": "2019-07-25",
			"showInfo": "2019-07-25 下周四上映",
			"showst": 4,
			"wishst": 0,
			"comingTitle": "7月25日 周四"
		}, {
			"id": 1284304,
			"haspromotionTag": false,
			"img": "http://p0.meituan.net/w.h/movie/6dfa417d5c77626cf24ee64bd2ebc11f147181.jpg",
			"version": "",
			"nm": "我的心里住着一只猫",
			"preShow": false,
			"sc": 0,
			"globalReleased": false,
			"wish": 613,
			"star": "马伟帆,肖雯佳,马原",
			"rt": "2019-07-25",
			"showst": 1,
			"wishst": 0,
			"comingTitle": "7月25日 周四"
		}, {
			"id": 1205779,
			"haspromotionTag": false,
			"img": "http://p0.meituan.net/w.h/movie/29d4b848f1835efaabfa8ee39c959b731433302.jpg",
			"version": "",
			"nm": "回到过去拥抱你",
			"preShow": false,
			"sc": 0,
			"globalReleased": false,
			"wish": 75904,
			"star": "侯明昊,彭昱畅,盖玥希",
			"rt": "2019-07-26",
			"showInfo": "2019-07-26 下周五上映",
			"showst": 4,
			"wishst": 0,
			"comingTitle": "7月26日 周五"
		}, {
			"id": 1211270,
			"haspromotionTag": false,
			"img": "http://p0.meituan.net/w.h/movie/005955214d5b3e50c910d7a511b0cb571445301.jpg",
			"version": "v3d imax",
			"nm": "哪吒之魔童降世",
			"preShow": true,
			"sc": 9.6,
			"globalReleased": false,
			"wish": 70441,
			"star": "吕艳婷,囧森瑟夫,瀚墨",
			"rt": "2019-07-26",
			"showInfo": "今天104家影院放映127场",
			"showst": 4,
			"wishst": 0,
			"comingTitle": "7月26日 周五"
		}, {
			"id": 1226558,
			"haspromotionTag": false,
			"img": "http://p0.meituan.net/w.h/movie/1890a564c74d8865750bb1b19b9fc72a1935745.jpg",
			"version": "",
			"nm": "跳舞吧！大象",
			"preShow": true,
			"sc": 0,
			"globalReleased": false,
			"wish": 30679,
			"star": "艾伦,金春花,彭杨",
			"rt": "2019-07-26",
			"showInfo": "2019-07-26 下周五上映",
			"showst": 4,
			"wishst": 0,
			"comingTitle": "7月26日 周五"
		}, {
			"id": 343133,
			"haspromotionTag": false,
			"img": "http://p0.meituan.net/w.h/movie/44ee28e1c3aedc16222f06ea15fbdeb23171263.jpg",
			"version": "",
			"nm": "巴比龙",
			"preShow": false,
			"sc": 0,
			"globalReleased": false,
			"wish": 4206,
			"star": "查理·汉纳姆,拉米·马雷克,汤米·弗拉纳根",
			"rt": "2019-07-26",
			"showInfo": "2019-07-26 下周五上映",
			"showst": 4,
			"wishst": 0,
			"comingTitle": "7月26日 周五"
		}  
      ],
      state
    };
  },
  methods: {
    async ComingList() {
       this.$load.open({
        text: "加载中...",
        spinnerType: "fading-circle"
      });
 
  }
}
  };
</script>
<style lang="scss" scoped>
.coming-list {
  background: #fff;

  .schedule {
    .date {
      padding: 0.5rem 0 0.5rem 0.9375rem;
      font-size: 0.875rem;
      color: #333;
    }

    .item {
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
              background: url("../../assets/v3d.png") no-repeat 0 1%;
              background-size: 2.6875rem 0.875rem;
            }
            .v3d {
              background: url("../../assets/3D.png") no-repeat 0 1%;
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
            font-size: 0.8125rem;
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
  }

  
}
</style>


