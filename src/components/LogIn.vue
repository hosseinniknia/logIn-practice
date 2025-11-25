<script setup>
import { Field, FieldDescription, FieldGroup, FieldLabel, FieldSet } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
</script>

<template>
  <div class="min-h-screen flex items-center justify-center p-4 bg-background">
    <Card class="w-full max-w-md shadow-lg border rounded-xl">
      <CardHeader>
        <CardTitle class="text-center text-2xl font-semibold"> Login </CardTitle>
      </CardHeader>

      <CardContent>
        <FieldSet>
          <FieldGroup class="space-y-4">
            <Field>
              <FieldLabel for="username">Username</FieldLabel>
              <Input id="username" type="text" placeholder="Max Leiter" />
              <FieldDescription></FieldDescription>
            </Field>

            <Field>
              <FieldLabel for="password">Password</FieldLabel>
              <Input id="password" type="password" placeholder="********" />
              <FieldDescription></FieldDescription>
            </Field>
          </FieldGroup>
          <Button class="w-full mt-4">Login</Button>    
        </FieldSet>
      </CardContent>
    </Card>
  </div>
</template>
