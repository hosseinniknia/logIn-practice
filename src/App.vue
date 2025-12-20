<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/layout/header.vue'
import bg from '../src/assets/images/sphere.png'
</script>

<template>
  <div class="min-h-screen bg-cover bg-center" :style="{ backgroundImage: `url(${bg})` }">
    <Header></Header>
    <router-view></router-view>
  </div>
</template>
