import { log } from 'console'
import { LogOut } from 'lucide-vue-next'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: null,
  }),

  actions: {
    setAuthData(data) {
      this.user = data.user
      this.user = data.token
    },

    LogOut() {
      this.user = null
      this.token = null
    },
  },

  getters: {
    isLoggedIn: (state) => !!state.user,
  },
})
