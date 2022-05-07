<template>
  <div class="user-list">
    <div class="user-table">
      <el-table :data="orderList.list" class="box">
        <el-table-column prop="Id" label="ID" width="170px"/>
        <el-table-column prop="Username" label="所属用户"/>
        <el-table-column prop="GoodsName" label="商品名称"/>
        <el-table-column prop="Price" label="总价"/>
        <el-table-column prop="OrderStatus" label="状态"/>
        <el-table-column prop="do" label="操作"/>
      </el-table>
    </div>
  </div>
</template>

<script>
import api from "@/utils/request";

export default {
  name: "secOrderList",
  mounted() {
    this.getSecOrderList()
  },
  methods: {
    getSecOrderList() {
      api({
        method: "GET",
        url: "http://localhost:8082/api/v1/secOrder/querySecOrderPage",
        params: {
          pageNum:0,
          pageSize:15
        },
        data:{}
      }).then(info => {
        this.orderList.count=info.data.data.count
        this.orderList.list=info.data.data.list
      });
      console.log(this.Info)
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
