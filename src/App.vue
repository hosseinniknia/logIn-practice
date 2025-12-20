<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/layout/header.vue'
import bg from '../src/assets/images/sphere.png'

import { useAuthStore } from './stores/auth';
import { onMounted } from 'vue';

const authStore = useAuthStore();

onMounted(() => {
  authStore.fetchUser();
})
</script>

<template>
  <div class="min-h-screen bg-cover bg-center" :style="{ backgroundImage: `url(${bg})` }">
    <Header></Header>
    <router-view></router-view>
  </div>
</template>
