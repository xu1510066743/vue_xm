import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Shouye from '@/components/Shouye'
import Xiaoxi from '@/components/Xiaoxi'
import Shangcheng from '@/components/Shangcheng'
import Fangdong from '@/components/Fangdong'
import Me from '@/components/Me'

// 商城
import My from '@/components/shangcheng/My'
import Home from '@/components/shangcheng/Home'
import Detail from '@/components/shangcheng/Detail'
import Gouwuche from '@/components/shangcheng/Gouwuche'
//租房子
import Host from '@/components/fangdong/Host'
import Hezu from '@/components/fangdong/Hezu'
//我的

import Set from '@/components/wo/Set'
import Tuichu from '@/components/wo/Tuichu'
import Suggest from '@/components/wo/Suggest'
import Adivce from '@/components/wo/Adivce'
Vue.use(Router)
//地图
import Map from '@/components/map/Map'
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/shouye',
      component: Shouye
    },
    {
      path: '/xiaoxi',
      component: Xiaoxi
    },
    {
      path: '/shangcheng',
      redirect:'/home',
      component: Shangcheng,
      children:[
        {
        path: '/my',
        component: My
        },
        {
          path: '/home',
          component: Home,
        },
        
      ]
    },
    {
      path: '/fangdong',
      component: Fangdong,
      redirect:"/host",
      children:[
        {path:'/host',
        component:Host,
        },
        {path:'/hezu',
        component:Hezu,
        },

      ]
    },
    {
      path: '/me',
      component: Me
    },
    {
      path: '/detail/:id',
      component: Detail,
    },
    {
      path: '/gouwuche',
      component: Gouwuche
    },
    //wo路由规则
    {
      path: '/set',
      component: Set
    },
    {
      path: '/adivce',
      component: Adivce
    },
    {
      path: '/suggest',
      component: Suggest
    },
    {
      path: '/tuichu',
      component: Tuichu
    },
    {
      path: '/map',
      component: Map
    },




  ]
})
