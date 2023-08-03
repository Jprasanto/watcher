import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Watchlist from '../views/Watchlist.vue'
import FStat from '../views/FStat.vue'
import Stock from '../views/Stock.vue'

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
    },
    {
      path: '/ticker',
      name: 'ticker',
      component: Stock
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (localStorage.getItem("access_token") && to.name === 'login') {
    next({ name: 'home' })
  } else if (localStorage.getItem("access_token") && to.name === 'register') {
    next({ name: 'home' })
  } else if (!localStorage.getItem("access_token") && to.name === 'home') {
    next({ name: 'login' })
  } else if (!localStorage.getItem("access_token") && to.name === 'fs') {
    next({ name: 'login' })
  } else if (!localStorage.getItem("access_token") && to.name === 'wl') {
    next({ name: 'login' })
  }
  else {
    next()
  }
})

export default router
