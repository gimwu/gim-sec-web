<template>
  <div class="user-list">
    <div class="user-table">
      <el-table :data="tableData" class="box">
        <el-table-column prop="id" label="ID"/>
        <el-table-column prop="name" label="名称"/>
        <el-table-column prop="nums" label="电话号码"/>
        <el-table-column prop="price" label="用户类型"/>
        <el-table-column prop="allPrice" label="最后一次登录时间" width="150px"/>
        <el-table-column prop="do" label="操作"/>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "userList"
}
</script>

<style scoped>

</style>
