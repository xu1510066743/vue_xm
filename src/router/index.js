import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Shouye from '@/components/Shouye'
import Xiaoxi from '@/components/Xiaoxi'
import Shangcheng from '@/components/Shangcheng'
import Fangdong from '@/components/Fangdong'
import Me from '@/components/Me'//Me  代表暴露出来的name值   @/components/Me代表 Me.vue的路径

//主页的 租房 服务  买卖

import Zufang from '@/components/shouye/Zufang'
import Fuwu from '@/components/shouye/Fuwu'
import Maimai from '@/components/shouye/Maimai'
// 租房里的 合租  整租  公寓   豪宅
import Hezu from '@/components/shouye/zufang/Hezu'
import Zhengzu from '@/components/shouye/zufang/Zhengzu'
import Gongyu from '@/components/shouye/zufang/Gongyu'
import Haozai from '@/components/shouye/zufang/Haozai'

//合租的详情页
import Detailhezu from '@/components/shouye/zufang/Detailhezu'








//服务里的3块内容 保洁 搬家 维修
import Baojie from '@/components/shouye/fuwu/Baojie'
import Banjia from '@/components/shouye/fuwu/Banjia'
import Weixiu from '@/components/shouye/fuwu/Weixiu'
//搬家里的5块内容
import Mbxb from '@/components/shouye/fuwu/banjia/Mbxb'
import Jbzb from '@/components/shouye/fuwu/banjia/Jbzb'
import Xhdb from '@/components/shouye/fuwu/banjia/Xhdb'
import Jzbj from '@/components/shouye/fuwu/banjia/Jzbj'
import Qybj from '@/components/shouye/fuwu/banjia/Qybj'
//买卖里的2块内容 国内房产  海外房产
import Gnfc from '@/components/shouye/maimai/Gnfc'
import Hwfc from '@/components/shouye/maimai/Hwfc'
//详情页
import Detail1 from '@/components/shouye/maimai/Detail1'




//注册
import Register from '@/components/dlzc/Register'
//登录
import Login from '@/components/dlzc/Login'
//账号密码错误
import Zhmmcu from '@/components/dlzc/Zhmmcu'
//找回密码
import Zhmm from '@/components/dlzc/Zhmm'




//客服服务
import Kffw from '@/components/xiaoxi/Kffw'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      redirect:'/register',
      component: HelloWorld,
      children:[
         {
            path: '/shouye',//to 后面的路径值
            component: Shouye  //暴露出来的name名字
          },
       
      ]
    },
   
    {
      path: '/xiaoxi',
      component: Xiaoxi
    },
    {
      path: '/shangcheng',
      component: Shangcheng,
      children:[

      ]
    },
    {
      path: '/fangdong',
      component: Fangdong
    },
    {
      path: '/me',
      component: Me
    },
    {//首页里的3块内容 租房 服务  买卖
      path: '/zufang',
      component: Zufang,
    },
    {
      path: '/fuwu',
      component: Fuwu
    },
    {
      path: '/maimai',
      component: Maimai
    },
    {//租房里的4块内容 合租 整租 公寓  豪宅
      path: '/hezu',//to 后面的路径值
      component: Hezu  //暴露出来的name名字
    },
    {
      path: '/zhengzu',
      component: Zhengzu
    },
    {
      path: '/gongyu',
      component: Gongyu  
    },
    {
      path: '/haozai',
      component: Haozai  
    },
    {//合租的详情页
      path: '/detailhezu/:id',
      component: Detailhezu  
    },
    {//服务里的3块内容 保洁 搬家 维修
      path: '/baojie',
      component: Baojie  
    },
    {//搬家里的5块内容 
      path: '/banjia',
      redirect:'/mbxb',
      component: Banjia,     
      children:[
        {
          path: '/mbxb',
          component: Mbxb  
        },
        {
          path: '/jbzb',
          component: Jbzb  
        },
        {
          path: '/xhdb',
          component: Xhdb  
        },
        {
          path: '/jzbj',
          component: Jzbj  
        },
        {
          path: '/qybj',
          component: Qybj  
        },
      ]  
    },
    {//维修
      path: '/weixiu',
      component: Weixiu  
    },
    {//买卖里的2块内容 国内房产  海外房产
      path: '/gnfc',
      component: Gnfc  
    },
    {
      path: '/hwfc',
      component: Hwfc  
    },
    {//详情
      path: '/detail1/:id',
      component: Detail1  
    },
    {//注册
      path: '/register',
      component: Register  
    },
    {//登录
      path: '/login',
      component: Login  
    },
     {//账号密码错误
      path: '/zhmmcu',
      component: Zhmmcu  
    },
     {//找回密码
      path: '/zhmm',
      component: Zhmm  
    },
    {//客服服务
      path: '/kffw',
      component: Kffw  
    },
  ]
})
