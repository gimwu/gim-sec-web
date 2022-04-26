<template>
  <top/>
  <headd/>
  <StepBox/>
  <div class="cart-table">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="all" label="全部" width="180" type="selection" />
      <el-table-column prop="name" label="商品" width="180" />
      <el-table-column prop="price" label="单价" />
      <el-table-column prop="nums" label="数量"/>
      <el-table-column prop="price" label="小计"/>
      <el-table-column prop="do" label="操作"/>
    </el-table>
  </div>
  <div class="cart-bottom">

  </div>
</template>

<script>
import Top from '../components/Top';
import headd from '../components/Head';
import StepBox from "@/components/StepBox";

const tableData = [
  {
    all: true,
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]

export default {
  name: "cart-view",
  components: {
    Top,
    headd,
    StepBox
  },
  data() {
    return {
      tableData
    };
  },
}
</script>

<style scoped>


</style>
