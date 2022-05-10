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
        <div class="item" v-for="item in pageVO.list" :key="item" @click="goinGoods(item.Id)">
          <div class="goods-img">
            <img :src="require('@/static/sec-1.jpeg')" alt=""></div>
          <div class="goods-msg">
            <div class="goods-name">{{item.Name}}</div>
            <div class="goods-price">
              <div class="price">
                ￥
                <span class="big">{{item.Price}}</span> <span class="small" data-v-dc4c5898="">.00</span></div>
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
        <div class="item" v-for="item in goodsVo.list" :key="item" @click="goinGoods(item.Id)">
          <div class="goods-img">
            <img :src="require('@/static/sec-1.jpeg')" alt=""></div>
          <div class="goods-msg">
            <div class="goods-name">{{item.Name}}</div>
            <div class="goods-price">
              <div class="price">
                ￥
                <span class="big">{{item.Price}}</span> <span class="small" data-v-dc4c5898="">.00</span></div>
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
import api from '../utils/request';
export default {
  name: "index-view",
  components: {
    Top,
    headd,
    banner
  },
  mounted() {
    this.getPage()
    this.getGoodsList()
  },
  methods:{
    getPage() {
      api.get("http://localhost:8081/api/v1/secGoods/querySecGoodsPage?pageNum=1&pageSize=15").
      then(page => {
        this.pageVO.count = page.data.data.count;
        this.pageVO.list = page.data.data.list;
        console.log(this.pageVO.list)
      })
      console.log("success")
    },
    goinGoods(id){
      this.$router.push({
        path: "/goods-detail",
        query: {id:id},
      });
    },
    getGoodsList() {
      api.get("http://localhost:8083/api/v1/goods/queryGoodsPage?pageNum=0&pageSize=10").
      then(page => {
        this.goodsVo.count = page.data.data.count;
        this.goodsVo.list = page.data.data.list;
      })
      console.log("success")
    },
  },
  data(){
    return{
      pageVO: {
        list: [], // 返回的列表
        count:0
      },
      goodsVo:{
        list: [],
        count: 0,
      }
    }
  }
}
</script>

<style scoped>
@import '../style/commom.css';
</style>
