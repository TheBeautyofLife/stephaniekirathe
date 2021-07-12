import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import VueHead from 'vue-head'

Vue.use(VueRouter)

Vue.use(VueHead, {
  separator: ' | ',
  complement: 'Stephanie\'s Kirathe personal website'
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
    path: '/gallery',
    name: 'Portfolio',
    component: () => import('../views/Gallery.vue')
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
