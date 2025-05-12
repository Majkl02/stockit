import { NextResponse } from 'next/server'
import { decodeJwt } from '@/app/_lib/utils/jwt'

const REFRESH_THRESHOLD = 60 * 5 // 5 minutes

export async function middleware(request) {
  const accessToken = request.cookies.get('access_token')?.value
  const refreshToken = request.cookies.get('refresh_token')?.value
  const url = request.nextUrl
  const pathname = url.pathname
  console.log('🛡️ Middleware is running!', pathname)

  const isLoginPage = pathname === '/login'
  const isApiRoute = pathname.startsWith('/api/')

  // Allow login and API routes
  if (isLoginPage || isApiRoute) {
    if (isLoginPage && accessToken) {
      return NextResponse.redirect(new URL('/', request.url))
    }
    return NextResponse.next()
  }

  // Not authenticated
  if (!refreshToken) {
    console.warn('Refresh token missing. Triggering logout...')

    // Create a response with expired cookies
    const response = NextResponse.redirect(
      new URL('/login?sessionExpired=true', request.url)
    )
    response.cookies.set('access_token', '', {
      httpOnly: true,
      path: '/',
      expires: new Date(0)
    })
    response.cookies.set('refresh_token', '', {
      httpOnly: true,
      path: '/',
      expires: new Date(0)
    })

    return response
  }

  // Decode token and check expiration
  const payload = decodeJwt(accessToken)
  const now = Math.floor(Date.now() / 1000)
  const isExpiringSoon = payload?.exp && payload.exp - now < REFRESH_THRESHOLD

  if (isExpiringSoon || !accessToken) {
    console.log('Refreshing access token...')
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

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next|favicon.ico|login|.*\\.svg$).*)']
}
