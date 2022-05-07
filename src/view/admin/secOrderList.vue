<template>
  <div class="user-list">
    <div class="user-table">
      <el-table :data="tableData" class="box">
        <el-table-column prop="id" label="ID"/>
        <el-table-column prop="username" label="所属用户"/>
        <el-table-column prop="goodsName" label="商品名称"/>
        <el-table-column prop="price" label="总价"/>
        <el-table-column prop="orderStatus" label="状态"/>
        <el-table-column prop="do" label="操作"/>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "secOrderList"
}
</script>

<style scoped>

</style>
