import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FavoritesMovies from '@/views/FavoritesMovies.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: FavoritesMovies
    }
  ]
})

export default router
