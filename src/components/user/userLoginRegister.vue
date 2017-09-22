<template>

  <el-row>
      <el-row>
          <el-col :span="4" :offset="10">
              <h2 style="color:#00cd66;margin-bottom:50px;">用户登录</h2>
          </el-col>
      </el-row>
      <el-col :span="5" :offset="14" class="wrap">
        <template>
           <el-tabs v-model="activeName" type="border-card" @tab-click='handleClick'>
               <el-tab-pane label="登录" name='login'>  
                  <el-form :inline="true" >

                    <el-form-item label="账号">
                         <el-input id="userId" v-model="loginName" placeholder="请输入账号"></el-input>
                         <!-- <p id="userId_err"></p> -->
                     </el-form-item>

                     <el-form-item label="密码">
                         <el-input v-model="loginPassword" type="password"  placeholder="请输入密码"></el-input>
                     </el-form-item>

                     <el-button type="default" @click="login()">登录</el-button>
                  </el-form> 
               </el-tab-pane>

               <el-tab-pane label="注册" name='register'>
                     <el-form :inline="true">
                        <el-form-item label="手机号码">
                           <el-input v-model="phoneNum" placeholder="请输入手机号码"></el-input>
                        </el-form-item>
                        <el-form-item label="用户姓名">
                           <el-input v-model="registerName" placeholder="请输入姓名"></el-input>
                        </el-form-item>
                        <el-form-item label="用户密码">
                           <el-input v-model="registerPassword" type="password" placeholder="请输入密码"></el-input>
                        </el-form-item>
                        <el-button type="defalut" @click="register()">注册</el-button>
                    </el-form> 
               </el-tab-pane>
           </el-tabs>
        </template>
      </el-col>
  </el-row>
</template>

<script>
   export default {
       data() {
           return {
              activeName:'register',//
              //注册
              phoneNum:'',//手机号码
              registerName:'',//姓名
              registerPassword:'',//注册密码
              //登录
              loginName:'',//账号
              loginPassword:'',//密码
           };
       },

       methods:{
           handleClick(tab,event) {
               console.log(tab,event);
           },
          //注册请求
           register() {
                var phoneNum = this.phoneNum;
                var name = this.registerName;
                var password = this.registerPassword;

               this.$axios.post('/api/register',{
                  phoneNum:phoneNum,
                  name:name,
                  password:password 
               })
               .then((res) => {
                   console.log(res);
                   if (res.data == 1) {
                      alert("注册成功");
                      this.activeName = "login";
                   }else{
                      alert("未知错误，请重试！");
                   }
               })
               .catch((res) => {
                   console.log(res);
               })
           },
           //登录请求
           login() {
               this.$axios.post('/api/userLogin',{
                  username:this.loginName,
                  password:this.loginPassword
               })
               .then((res) => {
                  console.log(res);
                  if(res.data == 1){
                    window.location.href = "/userindex";
                  }else{
                    alert("登录失败，请刷新重试");
                  }
               })
               .catch((res) => {
                   console.log(res);
               })
           },

           // userId() {
           //     var userId_err = document.getElementById("userId_err");
           //     var userId = document.getElementById('userId');

           //    if(userId.vaule == ""){
           //       userId_err.innerHTML = "学号不能为空";
           //    }
           // }
       }
   }
</script>

<style>

</style>
