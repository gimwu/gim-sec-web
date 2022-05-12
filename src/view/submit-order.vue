<template>
  <Top/>
  <headd/>
  <step-box/>
  <div class="sumbit-box">
    <div class="tit">
      <span data-v-5e1e5056="" class="text">收货地址</span>
    </div>
    <div class="address">
      <el-radio-group class="group" size="large" v-model="addr">
        <el-radio-button class="item" :label="item.addr" :key="item" v-for="item in addr">
          <div class="address">
            <div class="name">
              <span class="name">{{ item.username }}</span>
            </div>
            <div class="address-detail">{{ item.addr }}</div>
            <div data-v-5e1e5056="" class="del-edit"><span data-v-5e1e5056="" class="edit"></span> <span
                data-v-5e1e5056="" class="del"></span></div>
          </div>
        </el-radio-button>
        <el-radio-button class="item">添加地址</el-radio-button>
      </el-radio-group>
    </div>

    <div class="submit-box goods-info">
      <div class="tit"><span class="text">商品信息</span></div>
      <div>
        <el-table :data="goodsList.list" class="box">
          <el-table-column prop="Name" label="商品"/>
          <el-table-column prop="Price" label="单价"/>
          <el-table-column prop="Sum" label="数量"/>
          <el-table-column prop="Price" label="小记"/>
        </el-table>
      </div>
    </div>

    <div class="submit-box">
      <el-descriptions column="1" v-model="goodsList.list">
        <el-descriptions-item label="商品总数">
          <span class="con">{{goodsList.count}}个</span>
        </el-descriptions-item>
        <el-descriptions-item label="商品总价">
          <span class="con">{{allPrice}}</span>
        </el-descriptions-item>
      </el-descriptions>
    </div>

    <el-button color="#e1251b" @click="addOrder()">提交订单</el-button>
  </div>
</template>

<script>
import Top from '../components/Top';
import headd from '../components/Head';
import StepBox from "@/components/StepBox";
import api from "@/utils/request";

export default {
  name: "submit-order",
  components: {
    Top,
    headd,
    StepBox,
  },
  mounted() {
    this.getAddr();
    this.getInfo(this.$route.query);
  },
  methods: {
    getAddr() {
      api({
        method: "GET",
        url: "http://localhost:8080/api/v1/user/queryMyAddr",
      }).then(info => {
        this.addr = info.data.data
        console.log(this.addr);
      }).catch(error =>{
        if (error.response.data.code == 401) {
          this.$router.replace("/login")
        }
      });
    },
    getInfo(query) {
      this.goodsList.list.push(query);
      for (let i = this.goodsList.list.length - 1; i >= 0; i--) {
        this.allPrice += this.goodsList.list[i].Price;
        this.goodsIds.push(this.goodsList.list[i].Id)
      }
      console.log(this.goodsList.list)
    },
    addOrder() {
      api({
            method: "POST",
            url: "http://localhost:8070/api/v1/order",
            data: {
              goodsIds: this.goodsIds,
            }
          }
      ).then(info => {
        if (info.data.code == 200) {
          console.log("成功购买");
          this.$router.push({
            path: "/payment",
            query: {
              id: info.data.data.Id,
            },
          });
        }
      }).catch(error => {
        if (error.response.data.code == 401) {
          this.$router.replace("/login")
        }
      });
    },
  },
  data() {
    return {
      addr: [
        {
          addr: "",
          Id: "",
          username: "",
        }
      ],
      order: {},
      goodsList:{
        list: [],
        count: 0,
      },
      allPrice: 0,
      goodsIds: [],
    }
  },
};
</script>

<style scoped>

.sumbit-box .address .group .item .address .name {
  margin: 5px 0 10px;
  display: flex;
  align-items: center;
}

.sumbit-box .address .group .item .address .address-detail {
  color: #999;
  line-height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  position: relative;
}

.submit-box{
  margin-right: 15px;
}

.con {
  color: #e1251b;
  font-size: 18px;
  font-weight: 600;
}
</style>
