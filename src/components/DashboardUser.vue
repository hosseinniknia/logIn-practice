<script setup>
import { useAuthStore } from '@/stores/auth'

const auth = useAuthStore()
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-900">
    <h1 class="text-4xl font-bold">Welcome, {{ auth.user?.email || 'Guest' }}!</h1>
  </div>
</template>
