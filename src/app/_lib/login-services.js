export async function proceedLogin(email, password) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/login`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      }
    )

    // DEBUG
    // console.log('Response:', res)

    return await res.json()
  } catch (err) {
    console.error('Login error:', err)
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
