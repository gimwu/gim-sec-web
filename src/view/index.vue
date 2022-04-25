<template>
  <top></top>
  <headd></headd>
  <div class="block">
    <span class="demonstration">Switch when indicator is clicked</span>
    <el-carousel trigger="click" height="100px">
      <el-carousel-item v-for="item in bannerList" :key="item">
        <el-image style="width: 100px; height: 100px" :src=item />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import Top from '../components/Top'
import headd from '../components/Head';

export default {
  name: "index-view",
  components: {
    Top,
    headd,
  },
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
@import '../style/commom.css';

</style>
