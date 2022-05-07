<template>
  <div class="user-list">
    <div class="user-table">
      <el-table :data="tableData" class="box">
        <el-table-column prop="id" label="ID"/>
        <el-table-column prop="username" label="账号"/>
        <el-table-column prop="nickname" label="昵称"/>
        <el-table-column prop="avatar" label="头像"/>
        <el-table-column prop="lastLoginTime" label="最后一次登录时间" width="150px"/>
        <el-table-column prop="do" label="操作"/>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "adminList"
}
</script>

<style scoped>

</style>
