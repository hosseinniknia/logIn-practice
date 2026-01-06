<script setup>
//shadcn components and ref
import { Field, FieldDescription, FieldGroup, FieldLabel, FieldSet } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth'

//vee validate
import { useForm, useField } from 'vee-validate'
import { loginSchema } from '@/validation/login.validation'

//composable
import { useAuth } from '@/composables/useAuth'
import { useRouter } from 'vue-router'

const router = useRouter()

const authStore = useAuthStore()

const { signIn } = useAuth()

const { handleSubmit } = useForm({
  validationSchema: loginSchema,
  validateOnValueUpdate: true,
})

const { value: email, errorMessage: emailError } = useField('email')

const { value: password, errorMessage: passwordError } = useField('password')

//submit API call
const onSubmit = handleSubmit(async (values) => {
  console.log(values)
  const { email, password } = values
  const { data, error } = await signIn(email, password)

  if (error) {
    authStore.error = error
    return
  }

  authStore.handleLogInSuccess(data.session)

  router.replace('/dashboarduser')
})

const showPassword = ref(false)
const togglePassword = () => (showPassword.value = !showPassword.value)
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
        <form @submit.prevent="onSubmit">
          <FieldSet>
            <FieldGroup class="space-y-2">
              <Field>
                <FieldLabel for="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="text"
                  placeholder="example@gmail.com"
                  v-model="email"
                  :class="[
                    emailError
                      ? 'border-red-500 focus:border-red-500 focus:ring-red-500 shadow-red-500/40 shadow-md'
                      : 'border-white/30',
                  ]"
                />
                <p class="text-red-500 text-sm">{{ emailError }}</p>
              </Field>

              <Field>
                <FieldLabel for="password">Password</FieldLabel>
                <div class="relative">
                  <Input
                    :type="showPassword ? 'text' : 'password'"
                    id="password"
                    placeholder="********"
                    v-model="password"
                    :class="[
                      passwordError
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-500 shadow-red-500/40 shadow-md'
                        : 'border-white/30',
                    ]"
                  />

                  <button
                    type="button"
                    class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 text-sm"
                    @click="togglePassword"
                  >
                    {{ showPassword ? 'Hide' : 'Show' }}
                  </button>
                </div>
                <p class="text-red-500 text-sm">{{ passwordError }}</p>
              </Field>
            </FieldGroup>
            <Button class="w-full mt-4" type="submit">Login</Button>
          </FieldSet>
        </form>
      </CardContent>
    </Card>
  </div>
</template>
