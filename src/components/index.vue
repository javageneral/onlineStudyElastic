<template>
  <div class="index">
    <!-- 顶部 -->
    <el-row>
        <el-col :span="24">
            <div class="index_title_wrap">
               <span class="index_title"> {{title}} </span>
               <span class="index_logout"><a class="logOut" href="/login">【退出】</a></span>
               <span class="index_user"> {{user}} </span>
             </div>
        </el-col>
    </el-row>

    <!-- 导航栏 -->
    <el-row>
       <el-col :span="3">
          <el-menu default-active="1" @open="handleOpen" @close="handleClose" theme="light" router>

              <el-submenu index="1">
                  <template slot="title">课程管理</template>
                    <el-menu-item style="min-width:150px;" index="/admin/library">库管理</el-menu-item>
                    <el-menu-item style="min-width:150px;" index="/admin/vedio">录像管理</el-menu-item>
              </el-submenu>

              <el-menu-item index="/admin/userManage">用户管理</el-menu-item>

              <el-menu-item index="/admin/about">关于我们</el-menu-item>
          </el-menu>
       </el-col>
       
       <router-view></router-view>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      title: '在线学习资源管理系统',
      user:"admin"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   .index_title_wrap{
      width: 100%;
      background: #00cd66;
      height: 70px;
   }
   .index_title {
    color: white;
    margin-left: 20px;
    font-family: 微软雅黑;
    font-size: 30px;
    line-height: 70px;
    height:100%;
   }
   .index_user {
    color: white;
    height:100%;
    float: right;  
    margin-right:10px;
    line-height: 70px;
   }
   .index_logout {
    height:100%;
    margin-right: 20px;
    color: white;
    float: right;
    line-height: 70px;
   }
   .index_menu {
    background: #4eee94;
   }
   .logOut{
    text-decoration: none;
    color: white;
   }
</style>
