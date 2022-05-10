<template>
  <div class="login_page fillcontain">
    <div class="manage_tip">
      <p>Backstage Admin System</p>
    </div>
    <el-form :model="loginForm" :rules="rules" ref="loginForm">
      <el-form-item prop="username">
        <el-input v-model="loginForm.username" placeholder="username"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" v-model="loginForm.Password" placeholder="password"><span>dsfsf</span></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('loginForm')" class="submit_btn">Login</el-button>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>
import api from "@/utils/request";

export default {
  name: "adminLogin",
  data() {
    return {
      loginForm: {
        username: 'gimmick',
        Password: '123456',
        Id: '',
      },
      rules: {
        username: [
          {required: true, message: 'Please input the username', trigger: 'blue'}
        ],
        Password: [
          {required: true, message: 'Please input the Password', trigger: 'blue'}
        ],
      },
      showLogin: false
    }
  },
  methods: {
    submitForm() {
      api({
        method: "POST",
        url: "http://localhost:8080/api/v1/user/login",
        data: {
          Telephone: this.loginForm.username,
          Password: this.loginForm.Password
        }
      }).then(info => {
        api.defaults.headers.Authorization = "Bearer "+info.data.msg[0]
        this.$router.push("/index")
      });
      console.log(this.Info)
    }
  }
}
</script>

<style scoped>

</style>
