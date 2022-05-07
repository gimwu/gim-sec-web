<template>
  <div class="side-nav side-nav-zh">
    <div class="item">
      <a href="javascript:void(0)" class="item-a active">我的订单</a>
      <a href="javascript:void(0)" class="item-a active">个人中心</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideNav"
}
</script>

<style scoped>
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
</style>
