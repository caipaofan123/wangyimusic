<template>
  <div class="home-container">
    <!-- 推荐歌单 -->
    <van-cell class="title" title="推荐歌单" />
    <van-grid :border="false" :column-num="3">
      <van-grid-item v-for="item in recommendList" :key="item.id">
        <van-image width="100" height="100" :src="item.picUrl" />
        <p class="music-name van-multi-ellipsis--l2">
          {{ item.name }}
        </p>
      </van-grid-item>
    </van-grid>
    <van-cell title="最佳匹配" />
    <van-cell
      :label="
        (item.song && item.song.artists[0] && item.song.artists[0].name) ||
        '未知歌手'
      "
      :title="item.name"
      v-for="item in newSongList"
      :key="item.id"
    >
      <template>
        <van-icon color="#000" name="play-circle-o" size="28" />
      </template>
    </van-cell>
  </div>
</template>

<script>
import { getRecommendListApi, getNewSongApi } from '@/apis';

export default {
  name: 'WangyimusicIndex',

  data() {
    return {
      recommendList: [],
      newSongList: [],
    };
  },

  mounted() {
    this.getPersonalized();
    this.getNewSong();
  },

  methods: {
    async getPersonalized() {
      try {
        const res = await getRecommendListApi({
          limit: 6,
        });
        console.log(res);
        this.recommendList = res.data.result;
      } catch (err) {
        console.log('出错误了');
      }
    },
    async getNewSong() {
      try {
        const res = await getNewSongApi({
          limit: 9,
        });
        console.log(res.data.result);
        this.newSongList = res.data.result;
      } catch (err) {
        console.log('出错误了');
      }
    },
  },
};
</script>

<style lang="less" scoped>
.home-container {
  .title {
    background-color: #c71d24;
    color: #fff;
  }

  .music-name {
    font-size: 12px;
    text-align: left;
    line-height: 20px;
    width: 100%;
    padding: 0 5px;
    box-sizing: border-box;
    height: 37px;
  }

  /deep/.van-grid-item__content {
    padding: 10px 0px;
  }

  .van-cell__value {
    flex: 0 0 28px;
    padding-top: 7px;
  }
}
</style>
