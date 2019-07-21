<template>
  <div>
    <Header/>
    <Search/>
    <router-view/>
  </div>
</template>
<script>
  import Header from "@/components/Header";
  import Search from '@/components/Search'
export default {
  components: {
    Header,
    Search,
   
    
  }
};
</script>

