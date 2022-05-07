<template>
  <div class="goods-list">
    <div class="goods-table">
      <el-table :data="pageVO.list" class="box">
        <el-table-column prop="Id" label="ID" width="170px"/>
        <el-table-column prop="Name" label="名称" width="160px"/>
        <el-table-column prop="Price" label="价格"/>
        <el-table-column prop="Stock" label="库存"/>
        <el-table-column prop="Photo" label="图片"/>
        <el-table-column prop="Content" label="描述"/>
        <el-table-column prop="BelongUsername" label="所属用户"/>
        <el-table-column prop="do" label="操作"/>
      </el-table>
    </div>
  </div>
</template>

<script>
import api from "@/utils/request";

export default {
  name: "goodsList",
  mounted() {
    this.getGoodsList()
  },
  methods:{
    getGoodsList() {
      api.get("http://localhost:8083/api/v1/goods/queryGoodsPage?pageNum=0&pageSize=10").
      then(page => {
        this.pageVO.count = page.data.data.count;
        this.pageVO.list = page.data.data.list;
        console.log(this.pageVO.list)
      })
      console.log("success")
    },
    goinGoods(id){
      this.$router.push({
        path: "/goods-detail",
        query: {id:id},
      });
    }
  },
  data(){
    return{
      pageVO: {
        list: [], // 返回的列表
        count:0
      },
    }
  }
}
</script>

<style scoped>

</style>
