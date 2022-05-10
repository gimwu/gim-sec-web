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
        <el-table-column prop="do" label="操作" width="120px">
          <template v-slot="scope">
            <div class="button">
              <el-button type="primary" @click="openEdit(scope.$index)">编辑秒杀商品</el-button>
              <el-button type="danger" style="margin-left: 0" @click="deleteSecGoods(scope.$index)">删除秒杀商品</el-button>
            </div>
          </template>
        </el-table-column>
      </el-table>
      <el-button type="success"  @click="createSecGoodsVisible = true">新增秒杀商品</el-button>
    </div>
  </div>

  <el-dialog v-model="createSecGoodsVisible" title="新增用户" width="30%">
    <el-form :model="Vo" :inline="true" :label-position='right'>
      <el-form-item label="商品名称">
        <el-input v-model="Vo.Name"/>
      </el-form-item>
      <el-form-item label="价格">
        <el-input v-model="Vo.Price"/>
      </el-form-item>
      <el-form-item label="库存">
        <el-input v-model="Vo.Stock"/>
      </el-form-item>
      <el-form-item label="图片">
        <el-input v-model="Vo.Photo"/>
      </el-form-item>
      <el-form-item label="描述">
        <el-input v-model="Vo.Content" type="textarea"/>
      </el-form-item>
      <el-form-item label="所属用户">
        <el-input v-model="Vo.BelongUsername"/>
      </el-form-item>
      <el-form-item label="秒杀开始时间">
        <el-input v-model="Vo.secKillStart"/>
      </el-form-item>
      <el-form-item label="秒杀结束时间">
        <el-input v-model="Vo.secKillEnd"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="createSecGoods">Create</el-button>
        <el-button @click="createSecGoodsVisible = false">Cancel</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>

  <el-dialog v-model="editSecGoodsVisible" title="编辑用户" width="30%">
    <el-form :model="Vo" :inline="true" :label-position='right'>
      <el-form-item label="用户名称">
        <el-input v-model="Vo.Name"/>
      </el-form-item>
      <el-form-item label="电话号码">
        <el-input v-model="Vo.Telephone"/>
      </el-form-item>
      <el-form-item label="登录密码">
        <el-input v-model="Vo.Password"/>
      </el-form-item>
      <el-form-item label="用户类型">
        <el-input v-model="Vo.UserType"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="editSecGoods">Edit</el-button>
        <el-button @click="editSecGoodsVisible = false">Cancel</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
import api from "@/utils/request";
import {ElMessage} from 'element-plus'
import {ref} from 'vue'

const createSecGoodsVisible = ref(false)

const editSecGoodsVisible = ref(false);

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
          pageNum: 0,
          pageSize: 15
        },
        data: {}
      }).then(info => {
        this.goodsList.count = info.data.data.count
        this.goodsList.list = info.data.data.list
      });
      console.log(this.Info)
    },
    createSecGoods() {
      api({
        method: "POST",
        url: "http://localhost:8081/api/v1/secGoods",
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
      this.editSecGoodsVisible = true
      this.Vo = this.goodsList.list[row]
    },
    editSecGoods() {
      api({
        method: "PUT",
        url: "http://localhost:8081/api/v1/secGoods",
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
    deleteSecGoods(row) {
      api({
        method: "DELETE",
        url: "http://localhost:8081/api/v1/secGoods",
        data: {
          id: this.goodsList.list[row].Id
        }
      }).then(
          data => {
            if (data.data.code == 200) {
              this.getSecOrderList()
            }
          }
      )
    },
  },
  data() {
    return {
      goodsList: {
        count: 0,
        list: []
      },
      Vo:{
        Id:"",
        Name: "",
        Price: "",
        Stock: "",
        Photo: "",
        Content: "",
        BelongUsername: "",
        secKillStart: "",
        secKillEnd: "",
      },
      createSecGoodsVisible,
      editSecGoodsVisible,
    }
  }
}
</script>

<style scoped>

</style>
