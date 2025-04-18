// This is a Next.js API route that handles user login.

import { decodeJwt } from '@/app/_lib/utils/jwt'
import { NextResponse } from 'next/server'
import { proceedLogin } from '@/app/_lib/login-services'

export async function POST(req) {
  console.log('Login API called')
  const { email, password } = await req.json()

  const data = await proceedLogin(email, password)
  console.log('API Data:', data)

  if (!data || !data.access_token || !data.refresh_token) {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
  }

  const now = Math.floor(Date.now() / 1000)

  const accessPayload = decodeJwt(data.access_token)
  const accessMaxAge = accessPayload?.exp ? accessPayload.exp - now : 15 * 60 // 15 minutes

  const refreshPayload = decodeJwt(data.refresh_token)
  const refreshMaxAge = refreshPayload?.exp
    ? refreshPayload.exp - now
    : 60 * 60 * 24 * 3 // 3 days

  const response = NextResponse.json({ user: data.user_info })

  // Set secure, HttpOnly cookies
  response.cookies.set('access_token', data.access_token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: accessMaxAge, // 15 minutes
    sameSite: 'Strict',
    path: '/'
  })

  response.cookies.set('refresh_token', data.refresh_token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: refreshMaxAge, // 3 days
    sameSite: 'Strict',
    path: '/'
  })

  return response
}
