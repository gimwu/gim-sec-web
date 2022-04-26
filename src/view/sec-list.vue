<template>
  <top/>
  <headd/>
  <div class="goods-list">
    <div class="list-con">
      <div class="item sell-out">
        <div class="goods-img">
          <img data-v-e0a087e4="" src="https://img.mall4j.com/2022/02/ebbc902c666645c78f371bbdba5cf82a.jpg" alt="">
        </div>
        <div class="time-box">
          <div class="text" style="text-align: center;">
            距离结束还剩
          </div>
          <div class="time"><span class="time-item">35</span> <span
              class="time-text">天</span> <span class="time-item">02</span> <span
              class="time-text">:</span> <span class="time-item">11</span> <span
              class="time-text">:</span> <span class="time-item">50</span></div>
        </div>
        <div class="goods-name"></div>
        <div class="rest-number">
          <div class="number-box">
            <div class="percent" style="width: 0%;"></div>
          </div>
          <div class="number-text">
            已售
            <span class="number">0%</span>
          </div>
        </div>
        <div class="goods-price">
          <div class="price">
            ￥
            <span class="big">39</span>
            .00
          </div>
          <div class="old-price">￥199.00</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Top from '../components/Top';
import headd from '../components/Head';

export default {
  name: "sec-list",
  components: {
    Top,
    headd
  }
}
</script>

<style scoped>

.goods-list {
  margin-top: 10px;
  padding-bottom: 0;
}

.goods-list .list-con {
  display: flex;
  flex-wrap: wrap;
}

.goods-list .list-con .item {
  position: relative;
  width: 285px;
  margin-top: 20px;
  margin-right: 20px;
  transition: all .2s;
  cursor: pointer;
}

.goods-list .list-con .item .goods-img {
  width: 285px;
  height: 285px;
  line-height: 285px;
  text-align: center;
  font-size: 0;
}

.goods-list .list-con .item .goods-img img {
  max-width: 80%;
  max-height: 80%;
  vertical-align: middle;
  -o-object-fit: scale-down;
  object-fit: scale-down;
}

.goods-list .list-con .item .time-box[data-v-e0a087e4] {
  background: #f9f9f9;
  display: flex;
  align-items: center;
  padding: 0 10px;
  position: absolute;
  left: 0;
  top: 240px;
  height: 45px;
  width: 100%;
  box-sizing: border-box;
}

.goods-list .list-con .item .time-box .text{
  margin-right: 10px;
}

.goods-list .list-con .item .time-box .time{
  display: flex;
  align-items: center;
  font-size: 14px;
}
</style>
