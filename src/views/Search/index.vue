<template>
  <div>
    <van-search v-model="uname" shape="round" placeholder="请输入搜索关键词" />
    <!-- 热门搜索 -->
    <template v-if="this.songs.length == 0">
      <van-cell title="热门搜索" />
      <div style="padding: 10px 16px">
        <van-tag
          style="margin-right: 15px; background: hotpink"
          text-color="#ad0000"
          color="gold"
          size="large"
          plain
          round
          type="primary"
          @click="fn(item.first)"
          v-for="(item, index) in tags"
          :key="index"
        >
          {{ item.first }}
        </van-tag>
      </div>
    </template>
    <template v-else>
      <van-cell title="最佳匹配" />

      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <van-cell
          v-for="item in songs"
          :key="item.id"
          :title="item.name"
          :label="`${item.ar[0].name}-${item.name}`"
        />
      </van-list>
    </template>
  </div>
</template>

<script>
import { getSearchTagApi, searchResultListApi } from '@/apis';
export default {
  name: 'WangyimusicIndex',

  data() {
    return {
      tags: [],
      uname: '',
      songs: [],
      finished: '',
      loading: '',
    };
  },
  created() {
    this.getTagList();
    // this.searchResultList(this.uname)
  },
  mounted() {},
  watch: {
    uname(newval) {
      if (newval.length == 0) {
        this.songs.length = 0;
        console.log(this.songs);
      }
    },
  },
  methods: {
    async getTagList() {
      try {
        const res = await getSearchTagApi();
        console.log(res.data.result.hots);
        this.tags = res.data.result.hots;
      } catch (err) {
        console.log('出错误了');
      }
    },
    async fn(val) {
      this.uname = val;
      try {
        const res = await searchResultListApi({
          keywords: this.uname,
        });
        console.log(res.data.result.songs);
        this.songs = res.data.result.songs;
        this.$toast('获取成功');
      } catch (error) {
        this.$toast('获取失败');
      }
    },
    onLoad() {},

    // async searchResultList(val) {
    //   try {
    //     const res = await searchResultListApi(val);
    //     console.log(res.data.result.songs);
    //     this.songs = res.data.result.songs;
    //   } catch (err) {
    //     console.log('出错误了');
    //   }
    // },
  },
};
</script>

<style lang="scss" scoped></style>
