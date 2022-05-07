<template>
  <div class="top">
    <div class="con">
      <div class="left"></div>
      <div class="right">
        <div class="item"><span data-route="index" class="item-a" @click="$router.push('/admin')">平台</span></div>
        <div class="item"><span data-route="index2" class="item-a" @click="$router.push('/order-list')">订单</span></div>
        <div class="item"><span data-route="index2" class="item-a" @click="$router.push('/index')">商城前台</span></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "admin-navbar"
}
</script>

<style scoped>

.top {

  line-height: 36px;
  background-color: #324157;


  width: 100%;
  height: 70px;
  font-size: 22px;
  color: #fff;
}

.top .con {
  display: flex;
  margin: auto;
}

.top .con .right {
  display: flex;
  padding-right: 15px;
  padding-left: 15px;
}

.top .con .right .item {
  position: relative;
}

.top .con .right .item .item-a, .top .con .right .item{
  padding: 0 10px 0 11px;
  position: relative;
  z-index: 90;
  display: block;

}

/*body {*/
/*  min-width: 1200px;*/
/*  min-height: 100vh;*/
/*  position: relative;*/
/*  overflow-x: hidden;*/
/*  font-family: -apple-system,system-ui,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,Helvetica Neue,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei;*/
/*}*/

</style>
