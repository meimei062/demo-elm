import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../layout'

Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  // { path: '/login', component: () => import(/* webpackChunkName:'page-login' */ '@/page/login.vue') },
  {
    path: '/login',
    component: Layout,
    children: [
      {
        path: '',
        component: () => import(/* webpackChunkName:'page-login' */ '@/page/login.vue'),
        meta: { title: 'Login' }
      }
    ]
  },
  {
    path: '/main',
    name: 'main',
    component: Layout,
    meta: { title: 'Main' },
    children: [
      {
        path: '',
        component: () => import/* webpackChunkName:'page-main' */('@/page/main.vue'),
        meta: { title: 'Main' }
      },
      {
        path: 'goods',
        name: 'Goods',
        components: () => import(/* webpackChunkName:'page-main' */ '@/page/goods.vue'),
        meta: { title: 'Goods Title' }
      }
    ]
  },
  {
    path: '/error',
    component: () => import(/* webpackChunkName:'page-404' */ '@/page/error.vue')
  },
  { path: '*', redirect: '/error' }
]

const router = new Router({
  routes
})

export default router
