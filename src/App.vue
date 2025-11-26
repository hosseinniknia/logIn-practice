<script setup>
import { RouterLink, RouterView } from 'vue-router'
import LogIn from './components/LogIn.vue'
import Header from './components/layout/header.vue'
</script>

<template>
  <Header></Header>
  <router-view></router-view>
</template>
