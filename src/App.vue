<script setup>
import { RouterLink, RouterView } from 'vue-router'
import LogIn from './components/LogIn.vue'
import ModeToggle from './components/ModeToggle.vue'
</script>

<template>
  <router-link to="/signup">Sign Up</router-link>
  <router-link to="/">Log In</router-link>
  <router-view></router-view>
  <mode-toggle></mode-toggle>
</template>
