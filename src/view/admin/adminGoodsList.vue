<template>
  <div class="goods-list">
    <div class="goods-table">
      <el-table :data="tableData" class="box">
        <el-table-column prop="id" label="ID"/>
        <el-table-column prop="name" label="名称"/>
        <el-table-column prop="price" label="价格"/>
        <el-table-column prop="stock" label="库存"/>
        <el-table-column prop="photo" label="图片"/>
        <el-table-column prop="content" label="描述"/>
        <el-table-column prop="belongUsername" label="所属用户"/>
        <el-table-column prop="do" label="操作"/>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "goodsList"
}
</script>

<style scoped>

</style>
