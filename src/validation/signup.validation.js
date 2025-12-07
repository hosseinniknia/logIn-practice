import * as Yup from 'yup'

export const signupSchema = Yup.object({
  fullName: Yup.string().required('Full name is required'),
  email: Yup.string()
    .email('Please write the correct format of Email!')
    .required('Email is required'),
  username: Yup.string()
    .required('Username is required')
    .min(3, 'Username must be at least 3 characters'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be 8 characters long')
    .matches(/[0-9]/, 'Password requires a number')
    .matches(/[a-z]/, 'Password requires a lowercase letter')
    .matches(/[A-Z]/, 'Password requires an uppercase letter')
    .matches(/[^\w]/, 'Password requires a symbol'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Must match "password" field value')
    .required('Confirm password is required'),
})
