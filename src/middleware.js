import { NextResponse } from 'next/server'
import { decodeJwt } from '@/app/_lib/utils/jwt'

const REFRESH_THRESHOLD = 60 * 5 // 5 minutes

//TODO: Pridat logout vsade kde je redirect na login
//TODO: Problem ak sa odhlasujem z profilu!!!

export async function middleware(request) {
  const accessToken = request.cookies.get('access_token')?.value
  const refreshToken = request.cookies.get('refresh_token')?.value
  const url = request.nextUrl
  const pathname = url.pathname
  console.log('🛡️ Middleware is running!', pathname)

  const isLoginPage = pathname === '/login'
  const isApiRoute = pathname.startsWith('/api/')

  // ✅ Allow login and API routes
  if (isLoginPage || isApiRoute) {
    if (isLoginPage && accessToken) {
      return NextResponse.redirect(new URL('/', request.url))
    }
    return NextResponse.next()
  }

  // 🔐 Not authenticated
  if (!accessToken || !refreshToken) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // 🧠 Decode token and check expiry
  const payload = decodeJwt(accessToken)
  const now = Math.floor(Date.now() / 1000)
  const isExpiringSoon = payload?.exp && payload.exp - now < REFRESH_THRESHOLD

  if (isExpiringSoon && refreshToken) {
    console.log('Refreshing token...')
    try {
      const refreshRes = await fetch(`${url.origin}/api/refresh`, {
        method: 'POST',
        headers: {
          cookie: request.headers.get('cookie') || ''
        }
      })

      if (refreshRes.ok) {
        const response = NextResponse.next()
        const setCookies = refreshRes.headers.getSetCookie?.()

        if (setCookies) {
          const cookies = Array.isArray(setCookies) ? setCookies : [setCookies]
          for (const cookie of cookies) {
            response.headers.append('set-cookie', cookie)
          }
        }
        console.log('Token refreshed successfully!')
        return response
      } else {
        console.warn('🔁 Refresh failed in middleware')
        return NextResponse.redirect(new URL('/login', request.url))
      }
    } catch (err) {
      console.error('❌ Middleware refresh error:', err)
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }

  // ✅ Token valid and not expiring
  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next|favicon.ico|login|.*\\.svg$).*)']
}
