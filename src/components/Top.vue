<template>
  <div class="top">
    <div class="con">
      <el-menu class="right" router :default-active="activeIndex" >
        <el-menu-item class="item-a" index="/index">商城首页</el-menu-item>
        <el-menu-item class="item-a" index="/my-order">我的订单</el-menu-item>
        <el-menu-item class="item-a" index="/user-center">个人中心</el-menu-item>
        <el-menu-item class="item-a" index="/admin-login">卖家中心</el-menu-item>
        <el-menu-item class="item-a" index="/cart">购物车</el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  name: "Top-components"
}
</script>

<style scoped>

.top {
  width: 100%;
  height: 36px;
  line-height: 36px;
  color: #999;
  background-color: #f7f7f7;
  margin-top: 0;
  font-size: 12px;
}

.top .con {
  width: 1200px;
  height: 36px;
  display: flex;
  margin: auto;
}

.top .con .right {
  display: flex;
}

.top .con .right .item-a{
  padding: 0 10px 0 11px;
  position: relative;
  z-index: 90;
  display: block;
  color: #999;
}

body {
  min-width: 1200px;
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
  color: #000;
  font-family: -apple-system,system-ui,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,Helvetica Neue,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei;
}
</style>
