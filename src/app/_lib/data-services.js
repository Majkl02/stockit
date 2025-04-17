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

export async function refreshAccessToken(token) {
  try {
    const res = await fetch('/api/v1/auth/refresh', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    })

    if (!res.ok) return null
    return await res.json()
  } catch (err) {
    console.error('Token refresh failed', err)
    return null
  }
}
