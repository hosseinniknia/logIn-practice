<script setup>
import { RouterLink } from 'vue-router'
import { computed } from 'vue'

import ModeToggle from '@/components/ModeToggle.vue'
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'

import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()

const metadata = computed(() => authStore.user?.user_metadata ?? null)

const navLinks = [
  { href: '/', label: 'Log In' },
  { href: '/signup', label: 'Sign Up' },
]
</script>

<template>
  <header class="fixed top-4 left-1/2 -translate-x-1/2 w-full md:w-5/6 lg:w-4/6 z-50">
    <div
      class="flex items-center justify-between px-4 py-3 bg-white/10 dark:bg-black/20 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-lg rounded-full"
    >
      <RouterLink to="/" class="font-bold text-xl text-primary"> BOMBOCLAT </RouterLink>

      <nav v-if="!authStore.user" class="hidden md:flex items-center space-x-6">
        <RouterLink
          v-for="link in navLinks"
          :key="link.href"
          :to="link.href"
          class="text-sm font-medium transition-colors hover:text-primary"
        >
          {{ link.label }}
        </RouterLink>
      </nav>

      <nav v-else class="hidden md:flex items-center space-x-6">
        <span>Welcome, {{ metadata?.username }}</span>
      </nav>

      <div class="flex items-center space-x-2">
        <ModeToggle />

        <Sheet>
          <SheetTrigger class="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              class="flex flex-col justify-center items-center gap-1"
            >
              <span class="block w-5 h-0.5 bg-current rounded"></span>
              <span class="block w-5 h-0.5 bg-current rounded"></span>
              <span class="block w-5 h-0.5 bg-current rounded"></span>
            </Button>
          </SheetTrigger>

          <SheetContent side="top" class="pt-10">
            <nav class="flex flex-col space-y-4 text-lg m-5">
              <RouterLink
                v-for="link in navLinks"
                :key="link.href"
                :to="link.href"
                class="font-medium hover:text-primary"
              >
                {{ link.label }}
              </RouterLink>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  </header>
</template>
