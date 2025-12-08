import * as z from 'zod'
import { toTypedSchema } from '@vee-validate/zod'

export const loginSchema = toTypedSchema(
  z.object({
    email: z.string().email('Please write the correct format of Email!'),
    password: z.string().min(8, 'Password is too short - should be 8 chars minimum.'),
  }),
)
