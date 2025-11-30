import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: null,
  }),


  actions: {

    async login(email, password) {
      if (email === 'test@test.com' && password === '123456') {
        this.user = { email }
        this.token = 'fake-token'
        return true
      }
      return false
    },

    async signup(userData) {
      this.user = { ...userData }
      this.token = 'some random token'
      return true
    },

    logout() {
      this.user = null
      this.token = null
    },
  },


  getters: {
    isLoggedIn: (state) => !!state.user,
  },
})
