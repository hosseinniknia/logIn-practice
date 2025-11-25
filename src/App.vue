<script setup>
import { RouterLink, RouterView } from 'vue-router'
import LogIn from './components/LogIn.vue';
import ModeToggle from './components/ModeToggle.vue';
</script>

<template>
  <LogIn></LogIn>
  <mode-toggle></mode-toggle>
</template>