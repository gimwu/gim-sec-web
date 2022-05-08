<template>
  <div class="user-list">
    <div class="user-table">
      <el-table :data="userVo.list" class="box">
        <el-table-column prop="Id" label="ID" width="170px"/>
        <el-table-column prop="name" label="名称" width="100px"/>
        <el-table-column prop="telephone" label="电话号码" width="120px"/>
        <el-table-column prop="userType" label="用户类型"/>
        <el-table-column prop="LastTimeLogin" label="最后一次登录时间" width="230px"/>
        <el-table-column prop="do" label="操作"/>
      </el-table>
    </div>
  </div>
</template>

<script>
import api from "@/utils/request";

export default {
  name: "userList",
  mounted() {
    this.getUserList()
  },
  methods: {
    getUserList() {
      api({
        method: "GET",
        url: "http://localhost:8080/api/v1/user/queryUserPage",
        params: {
          pageNum:0,
          pageSize:15
        },
        data:{}
      }).then(info => {
        this.userVo.count=info.data.data.count
        this.userVo.list=info.data.data.list
      });
      console.log(this.Info)
    }
  },
  data(){
    return{
      userVo:{
        count:0,
        list:[]
      }
    }
  }
}
</script>

<style scoped>

</style>
