<template>
  <top></top>
  <headd></headd>
  <banner></banner>
  <div class="content">
    <div class="sec-goods">
      <div class="list-tit">
        <div class="text">
          <span class="tit">秒杀专区</span>
          <span class="description">精选商品，限时秒杀</span>
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
    </div>
    <div class="sec-goods">
      <div class="list-tit">
        <div class="text">
          <span class="tit">商城热销</span>
          <span class="description">口碑好物，无限回购</span>
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
    </div>
  </div>
</template>

<script>
import Top from '../components/Top';
import headd from '../components/Head';
import banner from '../components/banner';

export default {
  name: "index-view",
  components: {
    Top,
    headd,
    banner
  }
}
</script>

<style scoped>
@import '../style/commom.css';

.content {
  width: 1200px;
  margin: auto;
}

.sec-goods .list-tit .text .tit {
  font-size: 24px;
}

.sec-goods .list-tit .text .description {
  font-size: 12px;
  margin-left: 10px;
  color: #999;
}

.sec-goods .list-con {
  display: flex;
  flex-wrap: wrap;
}

.sec-goods .list-con .item {
  position: relative;
  width: 285px;
  margin-top: 20px;
  margin-right: 20px;
  transition: all .2s;
  cursor: pointer;
}

.sec-goods .list-con .item .goods-img {
  width: 285px;
  height: 285px;
  line-height: 285px;
  text-align: center;
  font-size: 0;
}

.sec-goods .list-con .item .goods-img img {
  max-width: 80%;
  max-height: 80%;
  vertical-align: middle;
  -o-object-fit: scale-down;
  object-fit: scale-down;
}

.sec-goods .list-con .item .goods-msg {
  text-align: center;
  padding: 15px 10px 0;
}

.sec-goods .list-con .item .goods-msg .goods-name {
  height: 20px;
  line-height: 14px;
  font-size: 14px;
  max-width: 100%;
}

.sec-goods .list-con .item .goods-msg .goods-price {
  display: flex;
  justify-content: center;
  height: 16px;
  line-height: 16px;
  margin-top: 10px;
  overflow: hidden;
  overflow-x: hidden;
  overflow-y: hidden;
}
</style>
