<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/layout/header.vue'
import bg from '../src/assets/images/sphere.png'

import { watch, onMounted, computed } from 'vue'
import { useAuthStore } from './stores/auth'
import { useToast } from 'primevue/usetoast'
import Toast from 'primevue/toast'

const authStore = useAuthStore()
const toast = useToast()

const metadata = computed(() => authStore.user?.user_metadata ?? null)

watch(
  () => authStore.error,
  (newError) => {
    if (newError) {
      // PrimeVue Toast format
      toast.add({
        severity: 'error',
        summary: 'Authentication Error',
        detail: newError.message || 'Invalid credentials',
        life: 6000,
      })

      authStore.resetError()
    }
  },
)

watch(
  () => authStore.isJustLoggedin,
  (newValue) => {
    console.log('DEBUG: isJustLoggedin changed to:', newValue)
    if (newValue === true) {
      toast.add({
        severity: 'success',
        summary: 'Wlcome!',
        detail: `Hello ${metadata.value?.username || 'User'}, glad to see you!`,
        life: 6000,
      })
      authStore.completeWelcome()
    }
  },
  { immediate: true },
)

onMounted(async () => {
  try {
    await authStore.fetchUser()
  } catch (err) {
    console.log('2. Caught error in App.vue mount: ', err)
  }
})
</script>

<template>
  <div class="min-h-screen bg-cover bg-center" :style="{ backgroundImage: `url(${bg})` }">
    <Header />
    <RouterView v-slot="{ Component }">
      <Transition name="fade-slide" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
    <Toast position="bottom-right" />
  </div>
</template>
