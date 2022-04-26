<template>
  <div class="head">
    <div class="menu" data-v-b760fbc6="">
      <a href="/" aria-current="page" class="item item-on nuxt-link-exact-active nuxt-link-active">首页</a>
      <a href="/list?st=0" class="item">商品列表</a>
      <a href="/list?st=1" class="item">新品推荐</a>
      <a href="/flash-sale" class="item" data-v-b760fbc6="">秒杀专场</a>
    </div>
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

.head .menu .item.item-on, .head .menu .item:hover {
  color: #e1251b;
}

a, a:hover {
  text-decoration: none;
  outline: none;
  color: #000;
}
</style>
