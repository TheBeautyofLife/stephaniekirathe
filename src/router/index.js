import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import VueHead from 'vue-head'

Vue.use(VueRouter)

Vue.use(VueHead, {
  separator: ' | ',
  complement: 'Welcome to Stephanie\'s Kirathe personal website'
})

const routes = [
  {
    path: '/',
    name: 'About',
    component: Home
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: () => import('../views/Portfolio.vue')
  },
  {
    path: '/contactme',
    name: 'Contacts',
    component: () => import('../views/Contact.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active',
  routes
})

export default router
