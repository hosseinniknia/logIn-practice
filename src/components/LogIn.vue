<script setup>
import { Field, FieldDescription, FieldGroup, FieldLabel, FieldSet } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { ref } from 'vue'

import { useForm, useField } from 'vee-validate'
import { required, email, min } from '@vee-validate/rules'
import { useAuth } from '@/composables/useAuth'

const { login } = useAuth()

const { handleSubmit } = useForm()

const { value: username, errorMessage: usernameError } = useField('username', (value) => {
  if (!required(value)) return 'Username is required'
  if (!email(value)) return 'Must be a valid email'
  if (!min(value, { length: 3 })) return 'Username must be at least 3 characters'
  return true
})

const { value: password, errorMessage: passwordError } = useField('password', (value) => {
  if (!required(value)) return 'Password is required'
  if (!min(value, { length: 6 })) return 'Password must be at least 6 characters'
  return true
})

const onSubmit = handleSubmit((values) => {
  login(values.username, values.password)
})
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
              <FieldLabel for="username">Email</FieldLabel>
              <Input id="username" type="text" placeholder="example@gmail.com" v-model="username" />
              <p class="text-red-500 text-sm">{{ usernameError }}</p>
            </Field>

            <Field>
              <FieldLabel for="password">Password</FieldLabel>
              <Input id="password" type="password" placeholder="********" v-model="password" />
              <p class="text-red-500 text-sm">{{ passwordError }}</p>
            </Field>
          </FieldGroup>
          <Button class="w-full mt-4" type="submit" @click="onSubmit">Login</Button>
        </FieldSet>
      </CardContent>
    </Card>
  </div>
</template>
