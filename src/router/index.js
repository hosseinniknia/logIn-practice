import { createRouter, createWebHistory } from 'vue-router'
import LogIn from '@/components/LogIn.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LogIn,
    },
    {
      path: '/signup',
      name: 'signup',

      component: () => import('../components/SignUp.vue'),
    },
    {
      path: '/dashboarduser',
      name: 'dashboarduser',
      component: () => import('../components/DashboardUser.vue'),
      meta: { requiresAuth: true },
    },
  ],
})

export default router
