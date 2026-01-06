import { defineStore } from 'pinia'
import { supabase } from '@/lib/supabase'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    error: null,
    session: null,
    initialized: false,
    isJustLoggedin: false,
  }),
  actions: {
    async fetchUser() {
      const { data, error } = await supabase.auth.getSession()

      if (error) {
        console.error('1. Store recieved error:', error)
        this.error = error
        this.user = null
        this.session = null
        throw error
      } else {
        this.user = data.session?.user ?? null
        this.session = data.session
      }

      supabase.auth.onAuthStateChange((_event, session) => {
        this.session = session
        this.user = session?.user ?? null
      })

      this.initialized = true
    },
    async signOut() {
      await supabase.auth.signOut()
      this.user = null
      this.session = null
    },
    handleLogInSuccess(userSession) {
      this.user = userSession.user
      this.session = userSession
      this.isJustLoggedin = true
      console.log('Store: Login status set to true for', this.user?.user_metadata?.username)
    },
    completeWelcome() {
      this.isJustLoggedin = false
    },
    resetError() {
      this.error = null
    },
  },
})
