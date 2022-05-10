<template>
  <div class="user-list">
    <div class="user-table">
      <el-table :data="userVo.list" class="box">
        <el-table-column prop="Id" label="ID" width="170px"/>
        <el-table-column prop="name" label="名称" width="100px"/>
        <el-table-column prop="telephone" label="电话号码" width="120px"/>
        <el-table-column prop="userType" label="用户类型"/>
        <el-table-column prop="LastTimeLogin" label="最后一次登录时间" width="230px"/>
        <el-table-column prop="do" label="操作" width="120px">
          <template v-slot="scope">
            <div class="button">
              <el-button type="primary" @click="openEdit(scope.$index)">编辑用户</el-button>
              <el-button type="danger" style="margin-left: 0" @click="deleteUser(scope.$index)">删除用户</el-button>
            </div>
          </template>
        </el-table-column>
      </el-table>
      <el-button type="success" @click="createUserVisible = true">新增用户</el-button>
    </div>
  </div>

  <el-dialog v-model="createUserVisible" title="新增用户" width="30%">
    <el-form :model="Vo" :inline="true" :label-position='right'>
      <el-form-item label="用户名称">
        <el-input v-model="Vo.name"/>
      </el-form-item>
      <el-form-item label="电话号码">
        <el-input v-model="Vo.telephone"/>
      </el-form-item>
      <el-form-item label="登录密码">
        <el-input v-model="Vo.password"/>
      </el-form-item>
      <el-form-item label="用户类型">
        <el-input v-model="Vo.userType"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="createUser">Create</el-button>
        <el-button @click="createUserVisible = false">Cancel</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>

  <el-dialog v-model="editUserVisible" title="编辑用户" width="30%">
    <el-form :model="Vo" :inline="true" :label-position='right'>
      <el-form-item label="用户名称">
        <el-input v-model="Vo.name"/>
      </el-form-item>
      <el-form-item label="电话号码">
        <el-input v-model="Vo.telephone"/>
      </el-form-item>
      <el-form-item label="登录密码">
        <el-input v-model="Vo.password"/>
      </el-form-item>
      <el-form-item label="用户类型">
        <el-input v-model="Vo.userType"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="editUser">Edit</el-button>
        <el-button @click="editUserVisible = false">Cancel</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
import api from "@/utils/request";
import {ElMessage} from 'element-plus'
import {ref} from 'vue'

const createUserVisible = ref(false)

const editUserVisible = ref(false);

const successInsert = () => {
  ElMessage({
    message: "添加成功",
    type: 'success',
  })
}

const errorInsert = (msg) => {
  ElMessage({
    message: msg,
    type: 'error'
  })
}
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
          pageNum: 0,
          pageSize: 15
        },
        data: {}
      }).then(info => {
        this.userVo.count = info.data.data.count
        this.userVo.list = info.data.data.list
      });
    },
    createUser() {
      api({
        method: "POST",
        url: "http://localhost:8080/api/v1/user",
        data: this.Vo
      }).then(
          successInsert(),
          this.createUserVisible = false
      ).catch(
          error => {
            errorInsert("我试试")
            errorInsert(error.data.msg)
          }
      );
    },
    openEdit(row) {
      this.editUserVisible = true
      this.Vo = this.userVo.list[row]
    },
    editUser() {
      api({
        method: "PUT",
        url: "http://localhost:8080/api/v1/user",
        data: this.Vo
      }).then(
          successInsert(),
          this.editGoodsVisible = false
      ).catch(
          error => {
            errorInsert(error.data.msg)
          }
      );
    },
    deleteUser(row) {
      api({
        method: "DELETE",
        url: "http://localhost:8080/api/v1/user",
        data: {
          id: this.userVo.list[row].Id
        }
      }).then(
          data => {
            if (data.data.code == 200) {
              this.getUserList()
            }
          }
      )
    },
  },
  data() {
    return {
      userVo: {
        count: 0,
        list: []
      },
      createUserVisible,
      editUserVisible,
      Vo: {
        name: "",
        telephone: "",
        password: "",
        userType: "",
      }
    }
  }
}
</script>

<style scoped>

.button {
  margin-left: 0;
}

</style>
