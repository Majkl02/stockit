export async function proceedLogin(
  email,
  password,
  setInvalidCreds,
  setBadRequest
) {
  try {
    const res = await fetch('/api/v1/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })

    console.log('Response:', res)

    if (res.status === 401) {
      setInvalidCreds(true)
      return
    }

    if (res.status === 400) {
      setBadRequest(true)
      return
    }

    const data = await res.json()

    return data
  } catch (err) {
    console.error('Login error:', err)
    alert('There was an error during login process :(')
  }
}
