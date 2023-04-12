import { createRouter, createWebHashHistory } from 'vue-router'
import MainFile from '@/components/main-file.vue'
import feedBackFile from '@/components/feedback-file.vue'

const routes = [
  {
    path: '/',
    component: MainFile,
    name: 'mainpage',
    props: true
  },
  {
    path: '/feedback',
    component: feedBackFile,
    name: 'feedbackpage',
    props: true
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
