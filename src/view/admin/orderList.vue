<template>
  <div class="user-list">
    <div class="user-table">
      <el-table :data="orderList.list" class="box">
        <el-table-column prop="Id" label="ID" width="170px"/>
        <el-table-column prop="BelongUsername" label="所属用户"/>
        <el-table-column prop="Price" label="总价"/>
        <el-table-column prop="OrderStatus" label="状态"/>
      </el-table>
    </div>
  </div>
</template>

<script>
import api from "@/utils/request";

export default {
  name: "orderList",
  mounted() {
    this.getOrderList()
  },
  methods: {
    getOrderList() {
      api({
        method: "GET",
        url: "http://localhost:8070/api/v1/order/queryOrderPage",
        params: {
          pageNum:0,
          pageSize:15
        },
        data:{}
      }).then(info => {
        this.orderList.count=info.data.data.count
        this.orderList.list=info.data.data.list
      });
    }
  },
  data(){
    return{
      orderList:{
        count:0,
        list:[]
      }
    }
  }
}
</script>

<style scoped>

</style>
