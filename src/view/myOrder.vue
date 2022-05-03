<template>
  <top/>
  <headd/>

  <div class="user-center base">
    <div class="content flex-box">
      <div class="side-nav side-nav-zh">
        <div class="item">
          <a href="javascript:void(0)" class="item-a active">我的订单</a>
          <a href="javascript:void(0)" class="item-a active">个人中心</a>
        </div>
      </div>
      <div class="con-box uc-order">
        <div class="uc-nav">
          <el-tabs v-model="activeName" class="nav-box" @tab-click="handleClick">
            <el-tab-pane class="nav-item active" label="全部订单" name="first">
              <span class="text">全部订单</span>
            </el-tab-pane>
            <el-tab-pane class="nav-item active" label="待付款" name="second">
              <span class="text">待付款</span>
            </el-tab-pane>
            <el-tab-pane class="nav-item active" label="待发货" name="third">
              <span class="text">待发货</span>
            </el-tab-pane>
            <el-tab-pane class="nav-item active" label="已发货" name="fourth">
              <span class="text">已发货</span>
            </el-tab-pane>
            <el-tab-pane class="nav-item active" label="已完成" name="44">
              <span class="text">已完成</span>
            </el-tab-pane>
          </el-tabs>
        </div>
        <div class="order-list">
          <div class="order-table">
            <el-table :data="tableData" class="box">
              <el-table-column prop="name" label="商品" width="180" />
              <el-table-column prop="nums" label="数量"/>
              <el-table-column prop="price" label="单价"/>
              <el-table-column prop="allPrice" label="总额"/>
              <el-table-column prop="status" label="状态"/>
              <el-table-column prop="do" label="操作"/>
            </el-table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Top from '../components/Top';
import headd from '../components/Head';

export default {
  name: "myOrder",
  components: {
    Top,
    headd,
  }
}
</script>

<style scoped>
@import '../style/commom.css';

.base {
  min-height: 65vh;
  padding-bottom: 40px !important;
}

.user-center .flex-box {
  display: flex;
  margin-top: 30px;
}

.content {
  width: 1200px;
  margin: auto;
}

.user-center .flex-box .side-nav-zh {
  width: 120px;
}

.user-center .flex-box .side-nav .item {
  padding-bottom: 15px;
}

.user-center .flex-box .side-nav .item .item-a .active {
  color: #e1251b;
  font-weight: 600;
}

.user-center .flex-box .side-nav .item .item-a {
  display: block;
  height: 24px;
  line-height: 24px;
  color: #999;
}

.user-center .uc-nav .nav-box {
  position: relative;
  bottom: -1px;
  flex: 1;
  display: flex;
}

.nav-item .active {
  color: #e1251b;
  border-bottom: 1px solid #e1251b;
  padding: 0 20px 12px;
  font-size: 14px;
  margin-left: 40px;
}

.user-center .uc-nav .nav-box .nav-item .text {
  display: inline-block;
  line-height: 1;
  padding: 0 20px 12px;
  font-size: 14px;
  transition: all .2s ease;
}

.user-center .order-list .order-table {
  margin-bottom: 20px;
}

</style>
