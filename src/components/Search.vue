<template>
  <div class="search">
    <div class="cirty">
      <span class="cirty-name" @click="toCirtys" >广州</span>
      <i class="cirty-arrow"></i>
    </div>
    <div class="switch-hot">
      <div
        class="hot-item"
        v-for="(item,index ) in hot"
        :key="index"
        v-text="item.name"
        @click="tored(index)"
        :class="{
           'active':tab===index
        }"
      ></div>
    </div>
    <div class="search-cirty" @click="seek()"></div>
  </div>
</template>
<script>

export default {
 
  data() {
    return {
      hot: [
        {
          name: "正在热映",
          path: "HotMovie"
        },
        {
          name: "即将上映",
          path: "UpcomingMovie"
        }
      ],
      tab: 0,
     
    };
  },
  methods: {
    tored(index) {
      this.tab = index;
      let name = this.hot[index].path;
      this.$router.push({ name });
    },

    seek(){
      this.$router.push({name:'seek'});
    },
    toCirtys(){
      this.$router.push({name:'Cirtys'})
    }
  }
};
</script>
<style lang="scss" scoped>
.search {
  line-height: 2.75rem;
  width: 100%;
  height: 2.75rem;
  border-bottom: 0.0625rem solid #e6e6e6;
  display: flex;
  position: fixed;
  top: 3.125rem;
  left: 0;
  background: #fff;
  z-index: 10;

  .cirty {
    display: flex;
    position: relative;
    flex: 1;
    padding-left: 0.9375rem;

    .cirty-name {
      font-size: 15px;
      color: #666;
    }

    .cirty-arrow {
      display: block;
      border: 0.25rem solid;
      border-color: #b0b0b0 transparent transparent;
      position: absolute;
      top: 48%;
      right: 35%;
    }
  }

  .switch-hot {
    display: flex;
    font-size: 0.9375rem;
    flex: 3;
    font-weight: 700;
    color: #666;
    justify-content: space-around;

    .hot-item {
      width: 5rem;
      text-align: center;
    }
  }

  .search-cirty {
    background: url("../assets/search.png") no-repeat 2.375rem 0.75rem;
    width: 2.8125rem;
    height: 2.5rem;
    background-size: 1.25rem;
    display: flex;
    flex: 1;
  }
}

.active {
  color: #ef4238;
  border-bottom: 0.125rem solid #ef4238;
}
</style>

