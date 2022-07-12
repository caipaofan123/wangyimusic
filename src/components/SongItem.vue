<template>
    <van-cell
      :label="
        `${author}-${name}`
      "
      :title="name">
      <template>
        <van-icon color="#000" name="play-circle-o" size="28" @click='goPlay(id)'/>
      </template>
    </van-cell>
</template>

<script>
export default {
    name: 'WangyimusicSongItem',
    props:{
        name: String,
        author: String,
        id:Number,
    },
    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        goPlay(id){
            this.$router.push({
                path: '/play',
                query:{
                    id,
                }
            })
        }
    },
};
</script>

<style lang="scss" scoped>

</style>