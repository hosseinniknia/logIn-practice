<script setup>
import { useAuthStore } from '@/stores/auth'
import { computed } from 'vue'

import { useRouter } from 'vue-router'

const router = useRouter()

const auth = useAuthStore()

const user = computed(() => auth.user)

const metadata = computed(() => auth.user.user_metadata)

const logout = () => {
  auth.signOut()
  router.push('/')
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-linear-to-br from-indigo-900">
    <div
      class="w-full max-w-md p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl"
    >
      <h1 class="text-2xl font-semibold text-white mb-4">Dashboard</h1>
      <div class="space-y-2 text-white/90">
        <p>
          <span class="text-white/60">Email:</span>
          {{ user?.email }}
        </p>
      </div>

      <hr class="my-3 border border-white/20" />

      <div class="space-y-2 text-white/90">
        <p>
          <span class="text-white/60">Full Name:</span>
          {{ metadata?.full_name }}
        </p>
      </div>

      <hr class="my-3 border border-white/20" />

      <div class="space-y-2 text-white/90">
        <p>
          <span class="text-white/60">Username:</span>
          {{ metadata?.username }}
        </p>
      </div>

      <div class="mt-8">
        <button
          class="w-full py-2 rounded-lg bg-red-500/10 hover:bg-red-500 text-white transition"
          @click="logout"
        >
          Logout
        </button>
      </div>
    </div>
  </div>
</template>
