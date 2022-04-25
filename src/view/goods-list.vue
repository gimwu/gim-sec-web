<template>
  <top/>
  <headd/>
  <crumb/>
  <div class="goods-sort">
    <div class="sort-con categorys">
      <div class="name">分类：</div>
      <div class="group">
        <span class="item active">全部</span>
        <span class="item">医疗保健</span>
        <span class="item">服饰鞋包</span>
        <span class="item">美妆护肤</span>
        <span class="item">手机电脑</span>
        <span class="item">数码周边</span>
        <span class="item">运动户外</span>
        <span class="item">居家餐厨</span>
        <span class="item">家用电器</span>
        <span class="item">办公文具</span>
      </div>
    </div>
    <div class="sort-con sorts">
      <div class="name">排序：</div>
      <div class="group"><span class="item active">默认</span> <span
          class="item">
            销量
        <!----> <!----></span> <span class="item">
            价格
        <!----> <!----></span></div>
    </div>
  </div>
  <div class="list-con">
    <div class="item">
      <div class="goods-img">
        <img :src="require('@/static/sec-1.jpeg')" alt=""></div>
      <div class="goods-msg">
        <div class="goods-name">ORIGINS 悦木之源 菌菇水200ml+CLINIQUE 倩碧无油黄油125ml</div>
        <div class="goods-price">
          <div class="price">
            ￥
            <span class="big">39</span> <span class="small" data-v-dc4c5898="">.00</span></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Top from '../components/Top';
import headd from '../components/Head';
import crumb from '../components/Crumb';

export default {
  name: "goods-list",
  components: {
    Top,
    headd,
    crumb
  }
}
</script>

<style scoped>
@import '../style/commom.css';
.goods-sort {
  background: #fff;
  padding: 0 20px;
  margin-bottom: 20px;
}

.goods-sort .sort-con {
  display: flex;
  padding: 20px 0 0 10px;
  border-bottom: 1px dashed #ddd;
}

.goods-sort .sort-con .name {
  color: #999;
  margin-right: 20px;
}

.goods-sort .sort-con .group {
  flex: 1;
  margin-bottom: 4px;
}

.goods-sort .sort-con .group .item.active, .list .goods-sort .sort-con .group .item:hover {
  color: #e1251b;
}

.goods-sort .sort-con .group .item {
  display: inline-block;
  padding: 0 30px 16px 0;
  transition: all .2s;
  -webkit-transition: all .2s;
  cursor: pointer;
}

.goods-sort .sort-con:last-child {
  border: 0;
}
</style>
