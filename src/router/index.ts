import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect: 'home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/hash',
    name: 'Hash',
    component: () => import('../views/Hash.vue')
  },
  {
    path: '/encode',
    name: 'Encode',
    component: () => import('../views/Encode.vue')
  },
  {
    path: '/json',
    name: 'Json',
    component: () => import('../views/Json.vue')
  },
  {
    path: '/link',
    name: 'Link',
    component: () => import('../views/Link.vue')
  },
  {
    path: '/video',
    name: 'Video',
    component: () => import('../views/Video.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
