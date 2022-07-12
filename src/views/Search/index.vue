<template>
  <div>
    <van-search
      v-model="uname"
      shape="round"
      placeholder="请输入搜索关键词"
      @input="inputFn"
    />
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
        <!-- <van-cell
          v-for="(item, index) in songs"
          :key="index"
          :title="item.name"
          :label="`${item.ar[0].name}-${item.name}`"
        /> -->
        <SongItem
          v-for="(item, index) in songs"
          :key="index"
          :id="item.id"
          :name="item.name"
          :author="item.ar[0].name"
        ></SongItem>
      </van-list>
    </template>
  </div>
</template>

<script>
import SongItem from "@/components/SongItem.vue"
import { getSearchTagApi, searchResultListApi } from "@/apis"
export default {
  name: "WangyimusicIndex",

  data() {
    return {
      tags: [],
      uname: "",
      songs: [],
      finished: false,
      loading: false,
      page: 1,
      limit: 20,
      timer: null,
    }
  },
  created() {
    this.getTagList()
    // this.searchResultList(this.uname)
  },
  components: {
    SongItem,
  },
  mounted() {},
  // watch: {
  //   uname(newval) {
  //     if (newval.length == 0) {
  //       this.songs.length = 0;
  //       console.log(this.songs);
  //     }
  //   },
  // },
  methods: {
    async getTagList() {
      try {
        const res = await getSearchTagApi()
        console.log(res.data.result.hots)
        this.tags = res.data.result.hots
      } catch (err) {
        console.log("出错误了")
      }
    },
    async fn(val) {
      this.page = 1
      this.finished = false
      this.uname = val
      this.songs = await this.getList()
    },
    async onLoad() {
      this.page++
      const res = await this.getList()
      if (res.length == 0) {
        this.finished = true
        this.loading = false
        return
      }
      this.songs = [...this.songs, ...res]
      this.loading = false
    },

    async inputFn() {
      if (this.timer) {
        clearInterval(this.timer)
      }
      this.timer = setTimeout(async () => {
        this.page = 1
        this.finished = false
        if (!this.uname.trim()) {
          this.songs = []
          return
        }
        this.songs = await this.getList()
      }, 1000)
    },
    async getList() {
      try {
        const res = await searchResultListApi({
          keywords: this.uname,
          limit: this.limit,
          offset: (this.page - 1) * this.limit,
        })

        return res.data.result.songs || []
        // this.$toast('获取成功');
      } catch (error) {
        // this.$toast('获取失败');
        // return []
      }
    },

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
}
</script>

<style scoped></style>
