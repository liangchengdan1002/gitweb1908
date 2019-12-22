import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from "../views/Index"
import Logins from "../views/Logins"
import Ceshi from "../views/Ceshi"
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/login',
    // name: 'Logins',
    component: Logins
  },
  {
    path: '/ceshi',
    component: Ceshi
  }
  // {
  //   path: '/',
  //   name: '',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
