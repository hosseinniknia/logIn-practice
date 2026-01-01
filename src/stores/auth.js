import { defineStore } from 'pinia'
import { supabase } from '@/lib/supabase'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    session: null,
    initialized: false,
  }),
  actions: {
    async fetchUser() {
      const { data, error } = await supabase.auth.getSession()

      if (error) {
        console.error('error', error)
        this.user = null
        this.session = null
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
  },
})
