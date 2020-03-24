<template>
  <el-container>
    <el-card shadow="hover" class="login-card">
      <span class="login-title ">用户登录</span>
      <el-form ref="form" :model="form">
      <div>
        <el-input placeholder="请输入用户名" class="login-padding" v-model="form.username">
          <template slot="prepend"><i class="el-icon-user-solid login-icon"></i></template>
        </el-input>
      </div>
      <div>
        <el-input placeholder="请输入密码" type="password" class="login-padding" show-password v-model="form.password">
          <template slot="prepend"><i class="el-icon-key login-icon"></i></template>
        </el-input>
      </div>
      <el-button type="primary" round class="login-button" @click="login">登录</el-button>
      <el-link type="primary" :underline="false" class="login-link">注册</el-link>
      <el-link :underline="false"class="login-link">找回密码</el-link>
      </el-form>
    </el-card>
  </el-container>
</template>

<script>
  import { getTest,login } from "@/api/hello";
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: "",
      form:{
        username: "",
        password: ""
      }
    }
  },
  created() {
    this.showHello();
  },
  methods:{
    showHello(){
      getTest().then(res =>{
        this.msg = res.data
      })
    },
    login(){
      console.log(this.form)
      login(this.form).then(res =>{
        if(res.data == '1'){
          alert("login success!")
        }else{
          alert("login fail!")
        }
      })
    }
  }
}
</script>

<style scoped>
  .login-card{
    width: 400px;
    height: 300px;
    position: absolute;
    left:50%;
    top:50%;
    transform: translate(-50%, -50%);
  }
  .login-title{
    margin-left:40%;
    transform: translate(-50%, -50%);
  }
  .login-padding{
    margin-top: 30px;
  }
  .login-button{
    margin-top: 30px;
    width: 100%;
  }
  .login-icon{
    font-size: 20px;
  }
  .login-link{
    margin-left: 25%;
    margin-top: 15px;
  }
</style>
