<template>
  <div class="crumbs">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/manage' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item v-for="(item, index) in $route.meta" :key="index">{{item}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: "crumb-components",
  data() {
    return{
    }
  },
};

</script>

<style scoped>
.crumbs {
  font-size: 12px;
  line-height: 1;
  padding: 23px 0 20px;
}
</style>
