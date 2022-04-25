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
</style>
