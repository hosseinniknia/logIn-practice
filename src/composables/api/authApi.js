export async function loginApi(email, password) {
  await new Promise(res => setTimeout(res, 300));

  if (email === 'test@test.com' && password === '123456') {
    return {
      user: { email },
      token: 'fake-token'
    };
  }

  throw new Error('Invalid credentials');
}

export async function signupApi(userData) {
  await new Promise(res => setTimeout(res, 300));

  return {
    user: { ...userData },
    token: 'random-token'
  };
}
