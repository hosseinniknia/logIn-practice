import { defineStore } from 'pinia'
import { supabase } from '@/lib/supabase'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
  }),
  actions: {
    async fetchUser() {
      const { data, error } = await supabase.auth.getSession()

      if (error) {
        console.error('error', error)
        this.user = null
      } else {
        this.user = data.session?.user
      }
    },
    async signOut() {
      await supabase.auth.signOut()
      this.user = null
    },
  },
})
