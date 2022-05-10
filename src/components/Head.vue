<template>
  <div class="head">
      <el-menu class="menu" router :default-active="activeIndex" >
        <el-menu-item index="/index">首页</el-menu-item>
        <el-menu-item index="/goods-list">商品列表</el-menu-item>
        <el-menu-item index="/sec-list">秒杀专场</el-menu-item>
      </el-menu>
    </div>
</template>

<script>
export default {
  name: "Head-components"
}
</script>

<style scoped>

.head {
  background: #fff;
  width: 100%;
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 5%);
  height: 94px;
  display: flex;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  padding-top: 20px;
  box-sizing: border-box;
}


.head .menu .item {
  position: relative;
  display: block;
  line-height: 52px;
  height: 52px;
  padding: 0 30px;
  font-size: 14px;
}

.head .menu {
  display: flex;
  margin-left: 100px;
}

a, a:hover {
  text-decoration: none;
  outline: none;
  color: #000;
}
</style>
