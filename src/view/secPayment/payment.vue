<template>
  <Top/>
  <headd/>
  <step-box/>
  <div class="payment-con">
    <div class="pay-box">
      <div class="pay-info">
        <el-icon>
          <check/>
        </el-icon>
        <div class="item">
          <div class="tit">订单提交成功，请尽快付款！</div>
          <div class="total-pay">
            应付总额：
            <span class="price"></span></div>
        </div>
        <div class="item">
          <div class="time">
            请尽快付款，否则交易会被取消。
          </div>
        </div>
      </div>
    </div>
    <div class="section-payment">
      <el-button color="#e1251b" @click="updateOrder()">立即付款</el-button>
    </div>


  </div>
</template>

<script>
import Top from '../../components/Top';
import headd from '../../components/Head';
import StepBox from "@/components/StepBox";
import check from "@element-plus/icons-vue/dist/es/check.mjs";
import api from "../../utils/request"

export default {
  name: "view-payment",
  components: {
    Top,
    headd,
    StepBox,
    check
  },
  mounted() {
    this.getPage(this.$route.query);
  },
  methods: {
    getPage(query) {
      console.log(query.id);
      this.id = query.id;
      this.allPrice = query.allPrice
    },
    updateOrder() {
      api({
        method: "PUT",
        url: "http://localhost:8070/api/v1/order/payment",
        data: {
          Id: this.id,
        }
      }).then(info =>{
        if (info.data.code == 200) {
          console.log("成功购买");
          this.$router.push({
            path: "/my-order"
          });
        }
      })
    },
  },
  data() {
    return {
      id: "",
      allPrice: 0,
    }
  },
}
</script>

<style scoped>

.payment-con .pay-box {
  background: #f9f9f9;
  padding: 20px;
}

.payment-con .pay-box .pay-info {
  padding-left: 52px;
  position: relative;
}

.payment-con .pay-box .pay-info .item {
  display: flex;
  justify-content: space-between;
}

.payment-con .pay-box .pay-info .item .tit {
  font-size: 14px;
  height: 20px;
  line-height: 20px;
  flex: 1;
  font-weight: 600;
}

.payment-con .pay-box .pay-info .item .total-pay {
  height: 20px;
  line-height: 20px;
}

.payment-con .pay-box .pay-info .item .total-pay .price {
  font-size: 18px;
  display: inline-block;
  vertical-align: top;
  line-height: 20px;
  margin-right: 3px;
}

.time {
  margin-top: 20px;
}
</style>
