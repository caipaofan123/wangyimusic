<template>
  <div>
    <h1>
      <van-nav-bar :title="title" />
      <!-- <van-nav-bar :title="$route.meta.title" /> -->
    </h1>
    <router-view></router-view>
    <h1>
      <van-tabbar route>
        <van-tabbar-item icon="home-o" to="/layout/home">首页</van-tabbar-item>
        <van-tabbar-item icon="search" to="/layout/search">搜素</van-tabbar-item>
      </van-tabbar>
    </h1>
  </div>
</template>

<script>
export default {
  name: 'WangyimusicIndex',

  data() {
    return {
        title:''
    };
  },

  mounted() {
    this.title=this.$route.meta.title
  },
  watch:{
    $route(newval){
        this.title=newval.meta.title
    }
  },

  methods: {},
};
</script>

<style scoped>
 
</style>
