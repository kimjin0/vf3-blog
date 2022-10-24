import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/BlogVue.vue') }]
  },

  {
    path: '/write',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/BlogWrite.vue') }]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }

]

export default routes
