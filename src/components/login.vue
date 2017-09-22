<template>
  <el-row>
      <el-row>
          <el-col :span="6" :offset="9">
              <h2 style="color:#00cd66;margin-bottom:50px;">在线学习资源管理系统</h2>
          </el-col>
      </el-row>
      <el-row style="margin-top:50px;">
         <el-col :span="4" :offset="9" class="wrap">
            <el-form :inline="true">
               <el-form-item label="账号">
                  <el-input id="username" v-model="username" placeholder="请输入账号"></el-input>
              </el-form-item>

               <el-form-item label="密码">
                  <el-input id="password" v-model="password" type="password"  placeholder="请输入密码"></el-input>
              </el-form-item>
              <br>
              <el-button type="default" style="margin-left:90px;" @click="login()">登录</el-button>
            </el-form>
         </el-col>
      </el-row>
  </el-row>
</template>

<script>
   export default {
       data() {
           return {
              username:'',
              password:'',
              //color:'#00cd66',
           };
       },

       methods:{
           //登录请求
           login() {
                  var username = this.username;
                  var password = this.password;
                  console.log(username);
           this.$axios.post('/api/login',{
                  username:username,
                  password:password,
               })
               .then((res) => {
                  console.log(res);
                  if(res.data == 1){
                     window.location.href="/admin";
                  }else{
                     alert("账号或密码错误!")
                  }
               })
               .catch((err) => {
                   console.log(err);
               })
           },
       }
   }
</script>

<style>

</style>
