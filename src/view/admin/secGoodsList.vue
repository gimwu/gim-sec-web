<template>
  <div class="user-list">
    <div class="user-table">
      <el-table :data="goodsList.list" class="box">
        <el-table-column prop="Id" label="ID" width="170px"/>
        <el-table-column prop="Name" label="名称" width="140px"/>
        <el-table-column prop="Price" label="价格"/>
        <el-table-column prop="Stock" label="库存"/>
        <el-table-column prop="Photo" label="图片"/>
        <el-table-column prop="Content" label="描述"/>
        <el-table-column prop="BelongUsername" label="所属用户"/>
        <el-table-column prop="secKillStart" label="开始时间"/>
        <el-table-column prop="secKillEnd" label="结束时间"/>
        <el-table-column prop="do" label="操作"/>
      </el-table>
    </div>
  </div>
</template>

<script>
import api from "@/utils/request";

export default {
  name: "secGoodsList",
  mounted() {
    this.getSecOrderList()
  },
  methods: {
    getSecOrderList() {
      api({
        method: "GET",
        url: "http://localhost:8081/api/v1/secGoods/querySecGoodsPage",
        params: {
          pageNum:0,
          pageSize:15
        },
        data:{}
      }).then(info => {
        this.goodsList.count=info.data.data.count
        this.goodsList.list=info.data.data.list
      });
      console.log(this.Info)
    }
  },
  data(){
    return{
      goodsList:{
        count:0,
        list:[]
      }
    }
  }
}
</script>

<style scoped>

</style>
