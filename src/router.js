import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Layout from '@/components/layout/Layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: 'home',
          component: ()=> import('./views/home')
        },
        {
          path: '403',
          component: ()=> import('./components/403')
        },
        {
          path: '*',
          component: ()=> import('./components/404')
        }
      ]
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
})
