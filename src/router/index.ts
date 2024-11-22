import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import StreamView from '../views/StreamView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/stream/:id',
      name: 'stream',
      component: StreamView
    }
  ]
})

export default router