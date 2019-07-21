<template>
  <div class="expect">
    <p class="title">近期最受期待</p>
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
</template>
<script>
import "@/lib/iconfont/iconfont.css";
import state from "@/observeable";
export default {
  data() {
    return {
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
    };
  },
  methods: {
    //收藏
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
.expect {
  margin-top: 5.8125rem;
  height: 12.25rem;
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
    margin-top: 0.625rem;
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
