import { NextResponse } from 'next/server'
import { decodeJwt } from '@/app/_lib/utils/jwt'

export async function POST(req) {
  const refreshToken = req.cookies.get('refresh_token')?.value

  if (!refreshToken) {
    return NextResponse.json(
      { error: 'Missing refresh token' },
      { status: 401 }
    )
  }

  console.log('🔁 Refresh token:', refreshToken)

  try {
    // Call your actual auth backend with the refresh token
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/refresh`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${refreshToken}`
        }
      }
    )

    if (!res.ok) {
      console.warn('🔁 Backend refresh failed')
      return NextResponse.json({ error: 'Refresh failed' }, { status: 401 })
    }

    const data = await res.json()

    const now = Math.floor(Date.now() / 1000)
    const accessPayload = decodeJwt(data.access_token)
    const refreshPayload = decodeJwt(data.refresh_token)

    const response = NextResponse.json({ success: true })

    response.cookies.set('access_token', data.access_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: accessPayload.exp - now,
      sameSite: 'Strict',
      path: '/'
    })

    response.cookies.set('refresh_token', data.refresh_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: refreshPayload.exp - now,
      sameSite: 'Strict',
      path: '/'
    })

    return response
  } catch (err) {
    console.error('❌ Error refreshing token:', err)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
