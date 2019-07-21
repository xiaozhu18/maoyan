<template>
  <div class="header">
    <i class="iconfont icon-fanhui" v-if="show" @click="back()"></i>
    猫眼电影
  </div>
</template>

<script>
import "@/lib/iconfont/iconfont.css";

export default {
  props: ["show"],
  methods: {
    back() {
      this.$router.go(-1);
    }
  }
};
</script>


<style scoped lang="scss">
.header {
  background: #e54847;
  width: 100%;
  height: 3.125rem;
  font-size: 1.125rem;
  text-align: center;
  line-height: 3.125rem;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  .iconfont {
    width: 1.375rem;
    height: 1.375rem;
    position: absolute;
    left: 10px;
    top: 0;
    font-size: 1.75rem;
  }
}
</style>
