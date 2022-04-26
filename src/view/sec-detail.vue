<template>
  <top/>
  <headd/>
  <div class="detail base">
    <div class="content">
      <div class="detail-up">
        <div class="img">
          <div class="big-img">
            <img src="https://img.mall4j.com/2021/09/b4ec16c934f54117b4d60e1fb09cd4b8.png" alt="">
          </div>
        </div>
        <div class="info">
          <div class="name-box">
            <div class="name">Sulwhasoo 雪花秀 顺行洗面奶 柔和洁面泡沫层清洁洁面乳200ml</div>
            <div class="des">
              <div title="顺行洗面奶" class="brief">
                顺行洗面奶
              </div>
            </div>
          </div>

          <div class="price-box">
            <div class="item goods-price"><span class="tit">价格</span>
              <div class="con">
                <div class="price">
                  ￥
                  <span class="big">99</span>
                  .00
                </div>
              </div>
              <span class="tit">剩余库存</span>
              <div class="con">
                965
              </div>
            </div>
          </div>

          <div class="sku-box">
            <div class="items"><span class="tit">数量</span>
              <div class="con">
                <div onselectstart="return false" class="goods-number"><span class="reduce limit">-</span> <input
                    type="number" oninput="value=value.replace(/[^\d]/g,'')" class="number"> <span
                    class="increase">+</span></div>
              </div>
            </div>
          </div>

          <div class="btns group-btn">
            <a href="javascript:void(0)" class="alone-group"><span
                class="group-price">￥99.00</span> <span
                class="group-text">单独购买</span></a> <a href="javascript:void(0)" class="add-cart add-cart-group"><span>加入购物车</span></a>
          </div>
        </div>
      </div>
      <div class="detail-down detail-comment">

      </div>
    </div>
  </div>
</template>

<script>
import Top from '../components/Top';
import headd from '../components/Head';

export default {
  name: "goods-detail",
  components: {
    Top,
    headd
  }
}
</script>

<style scoped>

.content {
  width: 1200px;
  margin: auto;
}

.detail .detail-up {
  display: flex;
  margin-top: 20px;
}

.detail .detail-up .img {
  width: 450px;
  margin-right: 40px;
}

.detail .detail-up .img .big-img {
  width: 100%;
  height: 450px;
  text-align: center;
  line-height: 430px;
  font-size: 0;
  position: relative;
}

.detail .detail-up .img .big-img img {
  max-width: 100%;
  max-height: 100%;
  vertical-align: middle;
}

.detail .detail-up .info {
  flex: 1;
}

.detail .detail-up .info .name-box {
  margin-bottom: 15px;
  margin-top: 5px;
}

.detail .detail-up .info .price-box {
  background: #f9f9f9;
  border-top: 1px dotted #eee;
  border-bottom: 1px dotted #eee;
  padding: 0 0 13px;
  line-height: 24px;
  margin-top: -1px;
  margin-bottom: 20px;
}

.detail .detail-up .info .name-box .name {
  width: 710px;
  font-size: 24px;
  line-height: 28px;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  position: relative;
  word-wrap: break-word;
  word-break: break-all;
}

.detail .detail-up .info .name-box .des {
  margin-top: 7px;
  color: #999;
  line-height: 18px;
  font-size: 12px;
  padding-right: 15px;
}

.detail .detail-up .info .name-box .des .brief, .detail .detail-up .info .name-box .des .discount-info {
  max-width: 550px;
  line-clamp: 2;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-break: break-all;
  text-overflow: ellipsis;
}

.detail .detail-up .info .name-box .des .discount-info {
  color: #999;
  margin-top: 5px;
}

.detail .detail-up .info .name-box .des .discount-info .go-discount {
  color: #005ea7;
}

.detail .detail-up .info .name-box .des .discount-info .go-discount .arr {
  font-family: Consolas;
}

.detail .detail-up .info .price-box .item.goods-price {
  height: 30px;
  line-height: 35px;
}

.detail .detail-up .info .price-box .item {
  display: flex;
  margin-top: 15px;
}

.detail .detail-up .info .price-box .item .tit {
  margin: 0 15px;
  color: #999;
}

.detail .detail-up .info .price-box .item.goods-price .con {
  display: flex;
}

.detail .detail-up .info .price-box .item.goods-price .con .price {
  font-size: 18px;
  height: 30px;
  line-height: 30px;
  display: flex;
  align-items: baseline;
}

.detail .detail-up .info .price-box .item.goods-price .con .price .big {
  font-size: 26px;
}

.price {
  font-family: arial;
  font-size: 12px;
  color: #e1251b;
  display: flex;
  align-items: baseline;
}

.detail .detail-up .info .price-box .item .tit {
  margin: 0 15px;
  color: #999;
}

.detail .detail-up .info .price-box .item.goods-price .con {
  display: flex;
}

.detail .detail-up .info .price-box .item .con {
  flex: 1;
}

.detail .detail-up .info .sku-box .items {
  display: flex;
  margin-top: 10px;
}

.detail .detail-up .info .sku-box .items .tit {
  margin: 0 15px;
  color: #999;
  display: block;
  line-height: 30px;
}

.detail .detail-up .info .sku-box .items .con {
  flex: 1;
  display: flex;
  flex-wrap: wrap;
}

.detail .detail-up .info .sku-box .items .con .goods-number {
  height: 30px;
}

.detail .detail-up .info .sku-box .items .con .goods-number .limit {
  cursor: not-allowed;
  color: #ccc;
}

.detail .detail-up .info .sku-box .items .con .goods-number .number {
  border: 0;
  width: 60px;
  height: 30px;
  text-align: center;
  font-family: arial;
  vertical-align: top;
}

.detail .detail-up .info .sku-box .items .con .goods-number .increase, .detail .detail-up .info .sku-box .items .con .goods-number .reduce {
  display: inline-block;
  vertical-align: top;
  width: 30px;
  height: 30px;
  background: #e9e9e9;
  font-size: 22px;
  text-align: center;
  line-height: 26px;
  color: #999;
  cursor: pointer;
}
</style>
