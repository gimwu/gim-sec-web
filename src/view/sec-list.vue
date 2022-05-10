<template>
  <top/>
  <headd/>
  <div class="goods-sort">
    <div class="sort-con sorts">
      <div class="name">排序：</div>
      <div>
        <el-radio-group class="group" size="large" v-model="radio" @change="getPage">
          <el-radio-button class="item" label="created_at">默认</el-radio-button>
          <el-radio-button class="item" label="price">价格</el-radio-button>
        </el-radio-group>
      </div>
    </div>
  </div>
  <div class="list-con">
    <div class="item" v-for="item in pageVO.list" :key="item" @click="goinGoods(item.Id)">
      <div class="goods-img">
        <img :src="require('@/static/sec-1.jpeg')" alt=""></div>
      <div class="goods-msg">
        <div class="goods-name">{{ item.Name }}</div>
        <div class="goods-price">
          <div class="price">
            ￥
            <span class="big">{{ item.Price }}</span> <span class="small" data-v-dc4c5898="">.00</span></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Top from '../components/Top';
import headd from '../components/Head';
import api from "@/utils/request";

export default {
  name: "sec-list",
  components: {
    Top,
    headd
  },
  mounted() {
    this.getPage()
  },
  methods: {
    getPage() {
      api({
        method: "GET",
        url: "http://localhost:8081/api/v1/secGoods/querySecGoodsPage",
        params: {
          pageNum: 0,
          pageSize: 10,
          order: this.radio,
        }
      }).then(page => {
        this.pageVO.count = page.data.data.count;
        this.pageVO.list = page.data.data.list;
      })
    },
    goinGoods(id){
      this.$router.push({
        path: "/sec-detail",
        query: {id:id},
      });
    },
  },
  data() {
    return {
      pageVO: {
        list: [], // 返回的列表
        count: 0,
      },
      radio: "",
    }
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

.list .goods-sort .sort-con .group .item:hover {
  color: #e1251b;
}

.goods-sort .sort-con .group .item {
  display: inline-block;
  transition: all .2s;
  -webkit-transition: all .2s;
  cursor: pointer;
}

.goods-sort .sort-con:last-child {
  border: 0;
}
</style>
