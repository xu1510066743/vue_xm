import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Shouye from '@/components/Shouye'
import Xiaoxi from '@/components/Xiaoxi'
import Shangcheng from '@/components/Shangcheng'
import Fangdong from '@/components/Fangdong'
import Me from '@/components/Me'

Vue.use(Router)

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
      component: Shangcheng
    },
    {
      path: '/fangdong',
      component: Fangdong
    },
    {
      path: '/me',
      component: Me
    }
  ]
})
