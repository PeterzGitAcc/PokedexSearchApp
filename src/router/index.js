import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PokedexView from '../views/PokedexView.vue'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/pokedex',
      name: 'pokedex',
      component: () => import('@/views/PokedexView.vue')
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
    },
    {
      path: '/pokemon/:id',
      name: 'pokemonDetails',
      component: () => import('@/views/PokemonDetailView.vue'),
      
    }
  ]
})

export default router
