import { createRouter, createWebHistory } from 'vue-router'
import firstPage from '../views/firstPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: firstPage
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('../views/main.vue'),
    props: true
  },
  {
    path: '/editqueue',
    name: 'editqueue',
    component: () => import('../views/EditQueue.vue')
  },
  {
    path: '/queue/:id',
    name: 'queue',
    component: () => import('../views/Queue.vue')
  },
  {
    path: '/members',
    name: 'members',
    component: () => import('../views/members.vue')
  },
  {
       path: '/create',
       name: 'create',
       component: () => import('../views/create.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
