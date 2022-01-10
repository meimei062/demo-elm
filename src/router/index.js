import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../layout'

Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/main'
  },
  // { path: '/login', component: () => import(/* webpackChunkName:'page-login' */ '@/page/login.vue') },
  {
    path: '/test',
    component: () => import(/* webpackChunkName:'page-test' */ '@/page/test.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName:'page-login' */ '@/page/login.vue'),
    meta: { title: 'Login' }
  },
  {
    path: '/location',
    name: 'Location',
    component: () => import(/* webpackChunkName:'page-location' */ '@/page/location/location.vue'),
    meta: { title: 'Location' }
  },
  {
    path: '/city',
    name: 'City',
    component: () => import(/* webpackChunkName:'page-location' */ '@/page/location/city.vue'),
    meta: { title: 'City' }
  },
  {
    path: '/main',
    name: 'main',
    component: () => import(/* webpackChunkName:'page-main' */ '@/page/main.vue'),
    meta: { title: 'Main' }
  },
  {
    path: '/goods',
    name: 'Goods',
    component: () => import(/* webpackChunkName:'page-main' */ '@/page/goods.vue'),
    meta: { title: 'Goods Title' }
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
