import { createRouter, createWebHistory } from 'vue-router'

import { useAuthStore } from '@/stores/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('../components/LogIn.vue'),
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

router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore()

  if (!authStore.initialized) {
    await authStore.fetchUser()
  }

  if (to.meta.requiresAuth && !authStore.user){
    next('/')
  } else if ( to.path === '/' && authStore.user) {
    next('/dashboarduser')
  } else {
    next()
  }
})

export default router
