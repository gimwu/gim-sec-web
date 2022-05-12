<template>
  <div class="con-box uc-order">
    <div class="uc-nav">
      <el-tabs v-model="activeName" class="nav-box" @tab-click="handleClick">
        <el-tab-pane class="nav-item active" label="全部订单" name="">
          <el-table :data="orderList.list" class="box">
            <el-table-column prop="Id" label="ID" width="170px"/>
            <el-table-column prop="Price" label="总价"/>
            <el-table-column prop="OrderStatus" label="状态"/>
          </el-table>
        </el-tab-pane>
        <el-tab-pane class="nav-item active" label="待付款" name="1">
          <el-table :data="orderList.list" class="box">
            <el-table-column prop="Id" label="ID" width="170px"/>
            <el-table-column prop="Price" label="总价"/>
            <el-table-column prop="OrderStatus" label="状态"/>
          </el-table>
        </el-tab-pane>
        <el-tab-pane class="nav-item active" label="待发货" name="2">
          <el-table :data="orderList.list" class="box">
            <el-table-column prop="Id" label="ID" width="170px"/>
            <el-table-column prop="Price" label="总价"/>
            <el-table-column prop="OrderStatus" label="状态"/>
          </el-table>
        </el-tab-pane>
        <el-tab-pane class="nav-item active" label="已发货" name="3">
          <el-table :data="orderList.list" class="box">
            <el-table-column prop="Id" label="ID" width="170px"/>
            <el-table-column prop="Price" label="总价"/>
            <el-table-column prop="OrderStatus" label="状态"/>
          </el-table>
        </el-tab-pane>
        <el-tab-pane class="nav-item active" label="已完成" name="4">
          <el-table :data="orderList.list" class="box">
            <el-table-column prop="Id" label="ID" width="170px"/>
            <el-table-column prop="Price" label="总价"/>
            <el-table-column prop="OrderStatus" label="状态"/>
          </el-table>
        </el-tab-pane>
        <el-tab-pane class="nav-item active" label="已取消" name="5">
          <el-table :data="orderList.list" class="box">
            <el-table-column prop="Id" label="ID" width="170px"/>
            <el-table-column prop="Price" label="总价"/>
            <el-table-column prop="OrderStatus" label="状态"/>
          </el-table>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="order-list">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import api from "@/utils/request";

export default {
  name: "myorder-order",
  data() {
    return{
      orderList:{
        list:[]
      },
      activeName: "",
    }
  },
  methods:{
    handleClick(activeName) {
      api({
        method: "GET",
        url: "http://localhost:8082/api/v1/secOrder/queryMyOrder",
        params: {
          pageNum:0,
          pageSize:15,
          params:{
            orderStatus: activeName,
          }
        },
        data:{}
      }).then(info => {
        console.log(info.data)
        this.orderList.count=info.data.data.count
        this.orderList.list=info.data.data.list
      }).catch(error =>{
        if (error.response.data.code == 401) {
          this.$router.replace("/login")
        }
      });
    },
  }
}
</script>

<style scoped>

</style>
