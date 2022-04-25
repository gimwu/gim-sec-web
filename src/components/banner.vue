<template>
  <div class="banner">
    <el-carousel trigger="click" height="450px">
      <el-carousel-item v-for="item in bannerList" :key="item">
        <el-image style="width: 1920px; height: 100%" :src=item />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "banner-components",
  data() {
    return{
      bannerList: [
        require('@/static/red.png'),
        require('@/static/red2.png'),
        require('@/static/green.png'),
      ]
    }
  },
}
</script>

<style scoped>

</style>
