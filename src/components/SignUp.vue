<script setup>
  //vue requirement
import { ref } from 'vue'

//shadcn ui components
import { Button } from '@/components/ui/button'
import { Field, FieldGroup, FieldLabel, FieldSet } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

//vee validate
import { useForm, useField } from 'vee-validate'
import { signupSchema } from '@/validation/signup.validation'

//composables => signUp
import { useAuth } from '@/composables/useAuth'

const { signUp } = useAuth()

//vee validate
const { handleSubmit } = useForm({
  validationSchema: signupSchema,
})

//validation fields
const { value: fullName, errorMessage: fullNameError } = useField('fullName', undefined, {
  validateOnValueUpdate: true,
})

const { value: email, errorMessage: emailError } = useField('email', undefined, {
  validateOnValueUpdate: true,
})

const { value: username, errorMessage: usernameError } = useField('username', undefined, {
  validateOnValueUpdate: true,
})

const { value: password, errorMessage: passwordError } = useField('password', undefined, {
  validateOnValueUpdate: true,
})

const { value: confirmPassword, errorMessage: confirmPasswordError } = useField(
  'confirmPassword',
  undefined,
  { validateOnValueUpdate: true },
)

//submit API call
const onSubmit = handleSubmit(async (values) => {
  console.log(values)
  const { email, password, fullName, username } = values

  const { data, error } = await signUp(email, password, fullName, username)

  if (error) {
    console.log(error)
    return
  }

  console.log('User created: ', data.user.id)
})

//toggle password
const showPassword = ref(false)
const showConfirmPassword = ref(false)
const togglePassword = () => (showPassword.value = !showPassword.value)
const toggleConfirmPassword = () => (showConfirmPassword.value = !showConfirmPassword.value)
</script>

<template>
  <div class="min-h-screen flex items-center justify-center p-4 pt-32">
    <Card
      class="w-full max-w-md p-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl"
    >
      <CardHeader>
        <CardTitle class="text-center text-2xl font-semibold">Sign Up</CardTitle>
      </CardHeader>

      <CardContent>
        <form @submit.prevent="onSubmit" class="space-y-6">
          <FieldSet>
            <FieldGroup class="space-y-2">
              <Field>
                <FieldLabel for="full-name">Full Name</FieldLabel>
                <Input
                  id="full-name"
                  type="text"
                  placeholder="John Doe"
                  v-model="fullName"
                  :class="
                    fullNameError
                      ? 'border-red-500 focus:border-red-500 focus:ring-red-500 shadow-red-500/40 shadow-md'
                      : 'border-white/30'
                  "
                />
              </Field>

              <Field>
                <FieldLabel for="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  v-model="email"
                  :class="
                    emailError
                      ? 'border-red-500 focus:border-red-500 focus:ring-red-500 shadow-red-500/40 shadow-md'
                      : 'border-white/30'
                  "
                />
              </Field>

              <Field>
                <FieldLabel for="username">Username</FieldLabel>
                <Input
                  id="username"
                  type="text"
                  placeholder="john_doe"
                  v-model="username"
                  :class="
                    usernameError
                      ? 'border-red-500 focus:border-red-500 focus:ring-red-500 shadow-red-500/40 shadow-md'
                      : 'border-white/30'
                  "
                />
              </Field>

              <Field>
                <FieldLabel for="password">Password</FieldLabel>
                <div class="relative">
                  <Input
                    id="password"
                    :type="showPassword ? 'text' : 'password'"
                    placeholder="********"
                    v-model="password"
                    :class="
                      passwordError
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-500 shadow-red-500/40 shadow-md'
                        : 'border-white/30'
                    "
                  />
                  <button
                    type="button"
                    class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 text-sm cursor-pointer"
                    @click="togglePassword"
                  >
                    {{ showPassword ? 'Hide' : 'Show' }}
                  </button>
                </div>
              </Field>

              <Field>
                <FieldLabel for="confirm-password">Confirm Password</FieldLabel>
                <div class="relative">
                  <Input
                    id="confirm-password"
                    :type="showConfirmPassword ? 'text' : 'password'"
                    placeholder="********"
                    v-model="confirmPassword"
                    :class="
                      confirmPasswordError
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-500 shadow-red-500/40 shadow-md'
                        : 'border-white/30'
                    "
                  />
                  <button
                    type="button"
                    class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 text-sm cursor-pointer"
                    @click="toggleConfirmPassword"
                  >
                    {{ showConfirmPassword ? 'Hide' : 'Show' }}
                  </button>
                </div>
              </Field>

              <Field v-if="!!fullNameError || !!emailError || !!usernameError || !!passwordError || !!confirmPasswordError">
                <p class="text-red-500 text-sm">{{ fullNameError }}</p>
                <p class="text-red-500 text-sm">{{ emailError }}</p>
                <p class="text-red-500 text-sm">{{ usernameError }}</p>
                <p class="text-red-500 text-sm">{{ passwordError }}</p>
                <p class="text-red-500 text-sm">{{ confirmPasswordError }}</p>
              </Field>
            </FieldGroup>

            <Field class="mt-4">
              <Button type="submit" class="w-full cursor-pointer">Sign Up</Button>
            </Field>
          </FieldSet>
        </form>
      </CardContent>
    </Card>
  </div>
</template>
