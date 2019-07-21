<template>
  <main>
    <Expect/>
    <MoviesComing/>
  </main>
</template>
<script>
import Expect from "./expect";
import MoviesComing from "./MoviesComing";
import state from "@/observeable.js";
export default {
  data() {
    return {
      tab: state.tab
    };
  },
  components: {
    Expect,
    MoviesComing
  }
};
</script>
<style scoped>
main {
  background: #f5f5f5;
      margin-bottom: 2.375rem;
}
</style>



