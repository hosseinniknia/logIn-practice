<script setup>
import { Field, FieldDescription, FieldGroup, FieldLabel, FieldSet } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { ref } from 'vue'
import { useAuth } from '@/composables/useAuth'

const { login } = useAuth()

const username = ref('')
const password = ref('')

function handleSubmit() {
  login(username.value, password.value)
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center p-4">
    <Card
      class="w-full max-w-md p-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl"
    >
      <CardHeader>
        <CardTitle class="text-center text-2xl font-semibold"> Login </CardTitle>
      </CardHeader>

      <CardContent>
        <FieldSet>
          <FieldGroup class="space-y-4">
            <Field>
              <FieldLabel for="username">Username</FieldLabel>
              <Input id="username" type="text" placeholder="Max Leiter" v-model="username" />
            </Field>

            <Field>
              <FieldLabel for="password">Password</FieldLabel>
              <Input id="password" type="password" placeholder="********" v-model="password" />
            </Field>
          </FieldGroup>
          <Button class="w-full mt-4" @click="handleSubmit">Login</Button>
        </FieldSet>
      </CardContent>
    </Card>
  </div>
</template>
