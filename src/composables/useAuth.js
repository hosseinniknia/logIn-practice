import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'
import { loginApi, signupApi } from './api/authApi'

export function useAuth() {
  const auth = useAuthStore()
  const router = useRouter()

  async function login(email, password) {
    const success = await auth.login(email, password)

    if (success) {
      router.push('/dashboarduser')
    } else {
      alert('Invalid LogIn')
    }
  }

  function logout() {
    auth.logout()
    router.push('/')
  }

  return { auth, login, logout }
}
