import * as Yup from 'yup'

export const loginSchema = Yup.object({
  email: Yup
    .string()
    .email('Please write the correct format of Email!')
    .required('Email is required'),
  password: Yup.string()
    .required('No password provided.')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
})
