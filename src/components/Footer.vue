<template>
  <footer id="footer">
    <div
      v-for="(item,index) in tab"
      :key="index"
      class="tabBar"
      @click="toTab(index)"
      :class="{
        'red':t==index
    }"
    >
      <i :class="item.icon" :style="{
        color:t==index?'#F03D37':'#000'
        }"></i>
      <span v-text="item.name"></span>
    </div>
  </footer>
</template>
<script>
import "@/lib/iconfont/iconfont.css";

export default {
  data() {
    return {
      tab: [
        {
          name: "电影",
          icon: "iconfont icon-dianying",
          path:'HotMovie'
        },
        {
          name: "影院",
          icon: "iconfont icon-yingyuana",
          path:'Cinema'
        },
        {
          name: "我的",
          icon: "iconfont icon-wode",
          path:'Login'
        }
      ],
      t:0
    };
  },
  methods: {
    toTab(tab) {
      this.t = tab;
      let name=this.tab[tab].path
      this.$router.push({ name, })
    }
  }
};
</script>
<style lang="scss" scoped>
#footer {
  display: flex;
  height: 3rem;
  width: 100%;
background: #fff;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  left: 0;
  border: 1px solid gainsboro;

  .tabBar {
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-top: 0.3125rem;
    i {
      display: block;
      font-size: 1.5625rem;
      text-align: center;
      color: #000;
    }
    span {
      display: block;
      font-size: 0.625rem;
    }
  }
  .red {
    color: red;
  }
}
</style>


