import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Layout from '../views/layout/Layout'

export const constantRouterMap = [
  {
    path: '/login',
    component: () => import('@/views/login/Login'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    name: 'Dashboard',
    hidden: true,
    children: [
      { path: 'dashboard', component: () => import('@/views/dashboard/Dashboard') }
    ]
  },
  {
    path: '/system',
    component: Layout,
    hidden: true,
    children: [
      { path: 'user', component: () => import('@/views/user/Index') },
      { path: 'role', component: () => import('@/views/role/Index') },
      { path: 'permission', component: () => import('@/views/permission/Index') }
    ]
  },
  {
    path: '/performance',
    component: Layout,
    hidden: true,
    children: [
      { path: 'view', component: () => import('@/views/performance/view/Index') },
      { path: 'count', component: () => import('@/views/performance/count/Index') },
    ]
  },

]


export default new Router({
  mode: 'history', // 后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

