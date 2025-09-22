import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ProjetsView from '@/views/Projets.vue'
import NotFoundView from '@/views/NotFoundView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/projets', name: 'projets', component: ProjetsView },
  { path: '/contact', name: 'contact', component: () => import('@/views/ContactView.vue') },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFoundView }, // route 404
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
