import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/Layout/layout'
import Login from '@/views/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      redirect: 'home',
      children: [
        {
          path: 'home',
          component: () => import('@/views/home/home'),
          name: 'Home'
        },
        {
          path: 'collection',
          component: () => import('@/views/collection/collection'),
          name: 'Collection'
        },
        {
          path: 'vip',
          component: () => import('@/views/vip/vip'),
          name: 'Vip'
        },
        {
          path: 'personal',
          component: () => import('@/views/personal/personal'),
          name: 'Personal'
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
