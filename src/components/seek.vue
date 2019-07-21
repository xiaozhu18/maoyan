<template>
  <div>
    <Header :show="show"/>
    <mt-search v-model.trim="value" autofocus placeholder="搜电影、搜影院" @input="InputEl"></mt-search>
    <p>{{value}}</p>
  </div>
</template>
<script>
import Header from "@/components/Header";

export default {
  data() {
    return {
      show: true,
      value: ""
    };
  },
  methods: {
    async getMovieData() {
      this.$load.open({
        text: "加载中...",
        spinnerType: "fading-circle"
      });

      let { data } = await this.$axios.get("api/ajax/search", {
        params: {
          kw: this.value,
          cityId: 20,
          stype: -1
        },
        responseType: "json" //解决跨域
      });

      console.log(data);
      this.$load.close();
    },

    //延时
    InputEl() {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.getMovieData();
      }, 500);
    }
  },
  components: {
    Header
  }
};
</script>
<style lang="scss" >
.mint-search {
  height: 3.9375rem;
  position: absolute;
  top: 3.125rem;
  width: 100%;

  .mint-searchbar {
    background: #f5f5f5;

    .mint-searchbar-inner {
      height: 1.3125rem;
      border-radius: 5px;

      i {
        font-size: 1.125rem;
        color: #b2b0b0;
      }

      .mint-searchbar-core {
        padding-left: 0.5rem;
      }
    }
  }

  .mint-searchbar-cancel {
    display: none !important;
  }
}
</style>
 

