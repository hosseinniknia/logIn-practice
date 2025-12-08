import * as z from 'zod'
import { toTypedSchema } from '@vee-validate/zod'

export const signupSchema = toTypedSchema(
  z
    .object({
      fullName: z.string().min(3, 'Full name must be at least 3 characters'),
      email: z.string().email('Please write the correct format of Email!'),
      username: z.string().min(3, 'Username must be at least 3 characters'),
      password: z
        .string()
        .min(8, 'Password must be 8 characters long')
        .regex(/[0-9]/, 'Password requires a number')
        .regex(/[a-z]/, 'Password requires a lowercase letter')
        .regex(/[A-Z]/, 'Password requires an uppercase letter')
        .regex(/[^\w]/, 'Password requires a symbol'),
      confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: 'Passwords do not match',
      path: ['confirmPassword'],
    }),
)

