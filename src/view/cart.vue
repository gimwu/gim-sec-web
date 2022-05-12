<template>
  <top/>
  <headd/>
  <StepBox/>
  <div class="cart-table">
    <el-table :data="tableData" style="width: 100%" @selection-change="handleSelectionChange">
      <el-table-column prop="all" label="全部" width="180" type="selection"/>
      <el-table-column prop="name" label="商品" width="180"/>
      <el-table-column prop="price" label="单价"/>
      <el-table-column prop="num" label="数量"/>
      <el-table-column prop="allPrice" label="小计"/>
      <el-table-column prop="do" label="操作">
        <template v-slot="scope">
          <el-button @click="deleteCart(scope.$index)">Cancel</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-button @click="addOrder()">下单</el-button>
  </div>
  <div class="cart-bottom">

  </div>
</template>

<script>
import Top from '../components/Top';
import headd from '../components/Head';
import StepBox from "@/components/StepBox";
import api from '../utils/request';


export default {
  name: "cart-view",
  components: {
    Top,
    headd,
    StepBox
  },
  data() {
    return {
      tableData: [],
      tableVal: [],
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    getList() {
      api({
        method: "GET",
        url: "http://localhost:8083/api/v1/goods/getMyCart"
      }).then(info => {
        if (info.data.code == 200) {
          this.tableData = info.data.data
        }
      }).catch(error => {
        if (error.response.data.code == 401) {
          this.$router.replace("/login")
        }
      });
    },
    deleteCart(id) {
      api({
        method: "DELETE",
        url: "http://localhost:8083/api/v1/godos/deleteCart",
        data: {
          goodsId: this.tableData[id].Id,
        }
      })
    },
    handleSelectionChange(val) {
      this.tableVal = val;
    },
    addOrder() {
      let a = [];
      for (let i = this.tableVal.length - 1; i >= 0; i--) {
        a.push(this.tableVal[i].Id);
      }
      api({
            method: "POST",
            url: "http://localhost:8070/api/v1/order",
            data: {
              goodsIds: a,
            }
          }
      ).then(info => {
        if (info.data.code == 200) {
          this.$router.push({
            path: "/payment",
            query: {
              id: info.data.data.Id,
            },
          });
        }
      }).catch(error => {
        if (error.response.data.code == 401) {
          this.$router.replace("/login")
        }
      });
    },
  }
}
</script>

<style scoped>


</style>
