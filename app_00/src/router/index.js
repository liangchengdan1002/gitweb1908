import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index'

import gusi from "../views/gusi"

import Detail from "../components/team/Detail"
import Zjg from "../components/team/zjg"
import ceshi from "../views/ceshi"
Vue.use(VueRouter)

const routes = [
  {path: '/',name: 'index',component: Index},
  {
    path: '/gusi',
    name: 'gusi',
    component: gusi
  },
  {
    path: '/detail',
    // name: 'Logins',
    component: Detail
  },
  {
    path: '/del',
    // name: 'Logins',
    component: Zjg
  },
  {
    path: '/ceshi',
    // name: 'Logins',
    component: ceshi
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
