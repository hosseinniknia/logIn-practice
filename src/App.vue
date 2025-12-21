<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/layout/header.vue'
import bg from '../src/assets/images/sphere.png'

import { useAuthStore } from './stores/auth'
import { onMounted } from 'vue'

const authStore = useAuthStore()

onMounted(() => {
  authStore.fetchUser()
})

import DashboardUser from './components/DashboardUser.vue'
</script>

<template>
  <div class="min-h-screen bg-cover bg-center" :style="{ backgroundImage: `url(${bg})` }">
    <Header></Header>
    <RouterView v-slot="{ Component }">
      <Transition name="fade-slide" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </div>
</template>
