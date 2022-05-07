<template>
  <div class="admin">
    <aheader />
    <div class="manage_page fillcontain">
      <el-row style="height: 100%">
        <el-col :span="4" style="min-height: 100%; background-color: #324057">
          <el-menu :default-active="defaultActive" style="min-height: 100%" theme="dark" router>
              <template v-slot:title><i class="el-icon-document"></i>dataManager</template>
              <el-menu-item index="user-list">用户管理</el-menu-item>
              <el-menu-item index="admin-goods-list">商品管理</el-menu-item>
              <el-menu-item index="sec-goods-list">秒杀商品</el-menu-item>
              <el-menu-item index="order-list">普通订单</el-menu-item>
              <el-menu-item index="sec-order-list">秒杀订单</el-menu-item>
              <el-menu-item index="admin-list">管理员管理</el-menu-item>
          </el-menu>
        </el-col>
        <el-col :span="20" style="height:100%;overflow:auto">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import Aheader from '../components/admin-header';
export default {
  name: "admin-view",
  components:{
    Aheader,
  }
}
</script>

<style scoped>

</style>
