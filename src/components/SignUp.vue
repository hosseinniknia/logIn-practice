<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Field, FieldDescription, FieldGroup, FieldLabel, FieldSet } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
</script>

<template>
  <div class="min-h-screen flex items-center justify-center p-4 bg-background">
    <Card class="w-full max-w-md shadow-lg border rounded-xl">
      <CardHeader>
        <CardTitle class="text-center text-2xl font-semibold"> Sign Up </CardTitle>
      </CardHeader>

      <CardContent>
        <form class="space-y-6">
          <FieldSet>
            <FieldGroup class="space-y-4">
              <Field>
                <FieldLabel for="full-name">Full Name</FieldLabel>
                <Input id="full-name" type="text" placeholder="John Doe" />
              </Field>

              <Field>
                <FieldLabel for="email">Email</FieldLabel>
                <Input id="email" type="email" placeholder="john@example.com" />
              </Field>

              <Field>
                <FieldLabel for="username">Username</FieldLabel>
                <Input id="username" type="text" placeholder="john_doe" />
              </Field>

              <Field>
                <FieldLabel for="password">Password</FieldLabel>
                <Input id="password" type="password" placeholder="********" />
              </Field>

              <Field>
                <FieldLabel for="confirm-password">Confirm Password</FieldLabel>
                <Input id="confirm-password" type="password" placeholder="********" />
              </Field>
            </FieldGroup>

            <Field class="mt-4">
              <Button type="submit" class="w-full"> Sign Up </Button>
            </Field>
          </FieldSet>
        </form>
      </CardContent>
    </Card>
  </div>
</template>
