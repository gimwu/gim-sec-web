<template>
  <div class="user-list">
    <div class="user-table">
      <el-table :data="adminList.list" class="box">
        <el-table-column prop="Id" label="ID" width="170px"/>
        <el-table-column prop="Username" label="账号"/>
        <el-table-column prop="Nickname" label="昵称"/>
        <el-table-column prop="Avatar" label="头像"/>
        <el-table-column prop="LastLoginTime" label="最后一次登录时间"  width="250px"/>
        <el-table-column prop="do" label="操作"/>
      </el-table>
    </div>
  </div>
</template>

<script>
import api from "@/utils/request";
export default {
  name: "adminList",
  mounted() {
    this.getAdminList()
  },
  methods: {
    getAdminList() {
      api({
        method: "GET",
        url: "http://localhost:8071/api/v1/admin/queryAdminPage",
        params: {
          pageNum:1,
          pageSize:15
        },
        data:{}
      }).then(info => {
        this.adminList.count=info.data.data.count
        this.adminList.list=info.data.data.list
      });
      console.log(this.adminList.list)
    }
  },
  data(){
    return{
      adminList:{
        count:0,
        list:[]
      }
    }
  }
}
</script>

<style scoped>

</style>
