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
    path: '/portfolio/alero',
    name: 'AleroCorp',
    component: () => import('../views/projects/Alero.vue')
  },
  {
    path: '/portfolio/aleroerpapp',
    name: 'AleroCorpERP',
    component: () => import('../views/projects/AleroERP.vue')
  },
  {
    path: '/portfolio/classandsasskenya',
    name: 'Classandsasskenya',
    component: () => import('../views/projects/ClassSass.vue')
  },
  {
    path: '/portfolio/gananadevelopers',
    name: 'Gananadevelopers',
    component: () => import('../views/projects/GananaDev.vue')
  },
  {
    path: '/portfolio/paintdepo',
    name: 'Paintdepo',
    component: () => import('../views/projects/PaintDepo.vue')
  },
  {
    path: '/portfolio/muharabeauty',
    name: 'Muharabeauty',
    component: () => import('../views/projects/Muhara.vue')
  },
  {
    path: '/portfolio/brickcom',
    name: 'Muharabeauty',
    component: () => import('../views/projects/Brickcom.vue')
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
  },
  {
    path: '/blog',
    name: 'Contacts',
    component: () => import('../views/Blog/index.vue')
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
