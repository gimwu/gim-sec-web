<template>
  <div class="step-box">
    <div class="left">
      <el-icon :size="38">
        <shopping-cart-full/>
      </el-icon>
      <span class="text">购物车</span>
    </div>
    <div class="steps">
      <el-steps :active="1" finish-status="success" simple style="margin-top: 20px" space="200px">
        <el-step title="选择购买商品"/>
        <el-step title="确认订单信息"/>
        <el-step title="支付完成订单"/>
      </el-steps>
    </div>
  </div>

</template>

<script>
import shoppingCartFull from "@element-plus/icons-vue/dist/es/shopping-cart-full.mjs";

export default {
  name: "StepBox",
  components: {
    shoppingCartFull
  }
}
</script>

<style scoped>

.step-box {
  display: flex;
  height: 70px;
  padding: 0 20px 7px;
  margin-top: 10px;
  box-shadow: 0 5px 5px -3px rgb(0 0 0 / 5%);
  margin-bottom: 30px;
  border-bottom: 2px solid #e1251b;
}

.step-box .left {
  flex: 1;
  margin-top: 16px;
}

.step-box .left .text {
  line-height: 38px;
  font-size: 15px;
  font-weight: 600;
}

.step-box .steps {
  display: flex;
}

</style>
