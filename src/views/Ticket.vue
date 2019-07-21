<template>
	<ul class="y-header">
		<i class="iconfont icon-fanhui" @click="back()"></i>
		<p>选座购票</p>
		</ul>
</template>

<script>
	export default {
  data(){
  	return {
		
  	}
  },
   methods: {
    back() {
      this.$router.go(-1);
    },
  }
};
</script>

<style lang="scss" scoped>
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
</style>