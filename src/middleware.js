import { NextResponse } from 'next/server'

export function middleware(request) {
  console.log('🛡️ Middleware is running!')
  const token = request.cookies.get('access_token')?.value
  const url = request.nextUrl

  const isProtectedRoute = url.pathname === '/'

  if (isProtectedRoute && !token) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  if (url.pathname === '/login' && token) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/']
}
