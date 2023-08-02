import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Watchlist from '../views/Watchlist.vue'
import FStat from '../views/FStat.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/wl',
      name: 'wl',
      component: Watchlist
    },
    {
      path: '/fs',
      name: 'fs',
      component: FStat
    }
  ]
})

export default router
