<template>
  <el-menu :default-active="defaultActive" style="min-height: 100%" theme="dark" router>
    <template v-slot:title><i class="el-icon-document"></i>dataManager</template>
    <el-menu-item index="order">普通订单</el-menu-item>
    <el-menu-item index="sec-order">秒杀订单</el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: "SideNav"
}
</script>

<style scoped>
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
</style>
