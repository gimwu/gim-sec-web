<template>
  <div class="user-list">
    <div class="user-table">
      <el-table :data="adminList.list" class="box">
        <el-table-column prop="Id" label="ID" width="170px"/>
        <el-table-column prop="Username" label="账号"/>
        <el-table-column prop="Nickname" label="昵称"/>
        <el-table-column prop="Avatar" label="头像"/>
        <el-table-column prop="LastLoginTime" label="最后一次登录时间" width="250px"/>
        <el-table-column prop="do" label="操作" width="120px">
          <template v-slot="scope">
            <div class="button">
              <el-button type="primary" @click="openEdit(scope.$index)">编辑商品</el-button>
              <el-button type="danger" style="margin-left: 0" @click="deleteAdmin(scope.$index)">删除商品</el-button>
            </div>
          </template>
        </el-table-column>
      </el-table>
      <el-button type="success" @click="createAdminVisible = true">新增商品</el-button>
    </div>
  </div>

  <el-dialog v-model="createAdminVisible" title="新增管理员" width="30%">
    <el-form :model="Vo" :inline="true" :label-position='right'>
      <el-form-item label="用户名">
        <el-input v-model="Vo.Username"/>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="Vo.Password"/>
      </el-form-item>
      <el-form-item label="昵称">
        <el-input v-model="Vo.Nickname"/>
      </el-form-item>
      <el-form-item label="头像">
        <el-input v-model="Vo.Avatar"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="createAdmin">Create</el-button>
        <el-button @click="createAdminVisible = false">Cancel</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>

  <el-dialog v-model="editAdminVisible" title="编辑管理员" width="30%">
    <el-form :model="Vo" :inline="true" :label-position='right'>
      <el-form-item label="用户名">
        <el-input v-model="Vo.Username"/>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="Vo.Password"/>
      </el-form-item>
      <el-form-item label="昵称">
        <el-input v-model="Vo.Nickname"/>
      </el-form-item>
      <el-form-item label="头像">
        <el-input v-model="Vo.Avatar"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="editAdmin">Edit</el-button>
        <el-button @click="editAdminVisible = false">Cancel</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
import api from "@/utils/request";
import {ElMessage} from 'element-plus'
import {ref} from 'vue'

const createAdminVisible = ref(false)

const editAdminVisible = ref(false);

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
  name: "adminList",
  mounted() {
    this.getAdminList()
  },
  methods: {
    createAdmin() {
      api({
        method: "POST",
        url: "http://localhost:8071/api/v1/admin",
        data: this.Vo
      }).then(
          successInsert(),
          this.createAdminVisible = false
      ).catch(
          error => {
            errorInsert("我试试")
            errorInsert(error.data.msg)
          }
      );
    },
    openEdit(row) {
      this.editGoodsVisible = true
      console.log(row)
      console.log(this.adminList.list[row])
      this.Vo = this.adminList.list[row]
    },
    editAdmin() {
      api({
        method: "PUT",
        url: "http://localhost:8071/api/v1/admin",
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
    deleteAdmin(row) {
      console.log(row);
      console.log(this.adminList.list[row].Id);
      api({
        method: "DELETE",
        url: "http://localhost:8071/api/v1/admin",
        data: {
          id: this.adminList.list[row].Id
        }
      }).then(
          data => {
            if (data.data.code == 200) {
              this.getAdminList()
            }
          }
      )
    },
    getAdminList() {
      api({
        method: "GET",
        url: "http://localhost:8071/api/v1/admin/queryAdminPage",
        params: {
          pageNum: 1,
          pageSize: 15
        },
        data: {}
      }).then(info => {
        this.adminList.count = info.data.data.count
        this.adminList.list = info.data.data.list
      });
      console.log(this.adminList.list)
    }
  },
  data() {
    return {
      adminList: {
        count: 0,
        list: []
      },
      createAdminVisible,
      editAdminVisible,
      Vo: {
        Username: "",
        Password: "",
        Nickname: "",
        Avatar: "",
      }
    }
  }
}
</script>

<style scoped>

</style>
