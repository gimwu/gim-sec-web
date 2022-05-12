<template>
  <top/>
  <headd/>

  <div class="user-center base">
    <div class="content flex-box">
      <el-menu :default-active="defaultActive" style="min-height: 100%" theme="dark" router>
        <template v-slot:title><i class="el-icon-document"></i>dataManager</template>
        <el-menu-item index="order">普通订单</el-menu-item>
        <el-menu-item index="sec-order">秒杀订单</el-menu-item>
      </el-menu>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import Top from '../../components/Top';
import headd from '../../components/Head';

export default {
  name: "myOrder",
  components: {
    Top,
    headd,
  }
}
</script>

<style scoped>
@import '../../style/commom.css';

.base {
  min-height: 65vh;
  padding-bottom: 40px !important;
}

.user-center .flex-box {
  display: flex;
  margin-top: 30px;
}

.content {
  width: 1200px;
  margin: auto;
}

.user-center .flex-box .side-nav-zh {
  width: 120px;
}

.user-center .flex-box .side-nav .item {
  padding-bottom: 15px;
}

.user-center .flex-box .side-nav .item .item-a .active {
  color: #e1251b;
  font-weight: 600;
}

.user-center .flex-box .side-nav .item .item-a {
  display: block;
  height: 24px;
  line-height: 24px;
  color: #999;
}

.user-center .uc-nav .nav-box {
  position: relative;
  bottom: -1px;
  flex: 1;
  display: flex;
}

.nav-item .active {
  color: #e1251b;
  border-bottom: 1px solid #e1251b;
  padding: 0 20px 12px;
  font-size: 14px;
  margin-left: 40px;
}

.user-center .uc-nav .nav-box .nav-item .text {
  display: inline-block;
  line-height: 1;
  padding: 0 20px 12px;
  font-size: 14px;
  transition: all .2s ease;
}

.user-center .order-list .order-table {
  margin-bottom: 20px;
}

</style>
