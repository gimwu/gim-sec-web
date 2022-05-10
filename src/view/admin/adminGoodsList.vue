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
        <el-table-column prop="do" label="操作" width="120px">
          <template v-slot="scope">
            <div class="button">
              <el-button type="primary" @click="openEdit(scope.$index)">编辑商品</el-button>
              <el-button type="danger" style="margin-left: 0" @click="deleteGoods(scope.$index)">删除商品</el-button>
            </div>
          </template>
        </el-table-column>
      </el-table>
      <el-button type="success" @click="createGoodsVisible = true">新增商品</el-button>
    </div>
  </div>

  <el-dialog v-model="createGoodsVisible" title="新增商品" width="30%">
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
      <el-form-item>
        <el-button type="primary" @click="createGoods">Create</el-button>
        <el-button @click="createGoodsVisible = false">Cancel</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>

  <el-dialog v-model="editGoodsVisible" title="编辑商品" width="30%">
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
      <el-form-item>
        <el-button type="primary" @click="editGoods">Edit</el-button>
        <el-button @click="editGoodsVisible = false">Cancel</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
import api from "@/utils/request";
import {ElMessage} from 'element-plus'
import {ref} from 'vue'

const createGoodsVisible = ref(false)

const editGoodsVisible = ref(false);

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
  name: "goodsList",
  mounted() {
    this.getGoodsList()
  },
  methods: {
    createGoods() {
      api({
        method: "POST",
        url: "http://localhost:8083/api/v1/goods",
        data: this.Vo
      }).then(
          data =>{
            if (data.data.code ==200){
              successInsert()
              this.createGoodsVisible = false;
              this.getGoodsList();
            }
          }
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
      console.log(this.pageVO.list[row])
      this.Vo = this.pageVO.list[row]
    },
    editGoods() {
      api({
        method: "PUT",
        url: "http://localhost:8083/api/v1/goods",
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
    deleteGoods(row) {
      console.log(row);
      console.log(this.pageVO.list[row].Id);
      api({
        method: "DELETE",
        url: "http://localhost:8083/api/v1/goods",
        data: {
          id: this.pageVO.list[row].Id
        }
      }).then(
          data =>{
            if (data.data.code ==200){
              this.getGoodsList()
            }
          }
      )
    },
    getGoodsList() {
      api.get("http://localhost:8083/api/v1/goods/queryGoodsPage?pageNum=0&pageSize=10").then(page => {
        this.pageVO.count = page.data.data.count;
        this.pageVO.list = page.data.data.list;
        console.log(this.pageVO.list)
      })
      console.log("success")
    },
    goinGoods(id) {
      this.$router.push({
        path: "/goods-detail",
        query: {id: id},
      });
    }
  },
  data() {
    return {
      pageVO: {
        list: [], // 返回的列表
        count: 0
      },
      Vo: {
        "Id": "",
        "Name": "",
        "Price": 0.00,
        "Stock": 0,
        "Photo": "",
        "Content": ""
      },
      createGoodsVisible,
      editGoodsVisible
    }
  }
}
</script>

<style scoped>

</style>
