<template>
  <Top/>
  <headd/>

  <div class="user-center base">
    <div class="content flex-box">
      <side-nav/>
    </div>
    <div class="con-box home">
      <div class="my-info">
        <div class="info-box">
          <div class="portrait-box">
            <el-avatar :size="50" :src="circleUrl" />
          </div>
          <div class="name-box">
            <div data-v-1165621e="" class="level-box"><div data-v-1165621e="" class="text">余&nbsp;&nbsp;&nbsp;额：</div> <div data-v-1165621e="" class="to-balance">
              0元
            </div></div>
          </div>
        </div>
      </div>
      <div class="buy-member">
      </div>
      <div class="order-list">
      </div>
    </div>
  </div>
</template>

<script>
import Top from '../components/Top';
import headd from '../components/Head';
import sideNav from "@/components/SideNav";

export default {
  name: "user-center",
  components: {
    Top,
    headd,
    sideNav
  }
}
</script>

<style scoped>

</style>
