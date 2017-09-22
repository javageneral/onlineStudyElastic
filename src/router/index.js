import Vue from 'vue'
import Router from 'vue-router'

import index from '@/components/index.vue'// 主页面框架
import login from '@/components/login'//管理员登录
import userLoginRegister from '@/components/user/userLoginRegister'//用户登录注册
import userindex from '@/components/user/userindex' //用户登录主页面
import userManage from '@/components/admin/userManage' //用户管理页面
import library from '@/components/admin/library'//库管理
import vedio from '@/components/admin/vedio'//录像管理
import about from '@/components/admin/about'//关于我们
import modifyPwd from '@/components/user/modifyPwd'//修改密码
import study from '@/components/user/study'//课程学习
import personal from '@/components/user/personal'//个人资源库


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/admin',
      component: index,
      children:[
        {
          path:'userManage',
          component:userManage
        },
        {
          path:'library',
          component:library
        },
        {
          path:'vedio',
          component:vedio
        },
        {
          path:'about',
          component:about
        },
      ]
    },
    {
      path: '/userindex',
      component: userindex,
      children:[
         {
          path:'modifyPwd',
          component:modifyPwd
         },
         {
          path:'personal',
          component:personal
         },
         {
          path:'study',
          component:study
         }
      ]
    },
    {
      path:'/login',
      name:'login',
      component:login
    },
    {
      path:'/userLoginRegister',
      component:userLoginRegister,
    },
    
  ]
})
