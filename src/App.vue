<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/layout/header.vue'
import bg from '../src/assets/images/sphere.png'

import { watch, onMounted } from 'vue'
import { useAuthStore } from './stores/auth'
import { useToast } from 'primevue/usetoast'
import Toast from 'primevue/toast'

const authStore = useAuthStore()
const toast = useToast()

watch(
  () => authStore.error,
  (newError) => {
    if (newError) {
      // PrimeVue Toast format
      toast.add({ 
        label: 'Error',
        severity: 'danger', 
        summary: 'Authentication Error', 
        detail: newError.message || 'Invalid credentials', 
        life: 6000 
      });

      authStore.resetError();
    }
  }
);

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
    <Toast position="bottom-right"/>
  </div>
</template>