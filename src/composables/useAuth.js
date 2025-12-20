import { supabase } from '@/lib/supabase'

export function useAuth() {
  async function signUp(email, password, fullName, username) {
    console.log('Signing up:', email)

    const result = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
          username: username
        }
      }
    })

    console.log('signUp result:', result)
    return result
  }

  async function signIn(email, password) {
    return await supabase.auth.signInWithPassword({ email, password })
  }

  return { signUp, signIn }
}
