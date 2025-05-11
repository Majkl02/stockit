import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function POST(req) {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get('access_token')?.value

    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await req.json()
    const url = body.url
    console.log('url', url)

    const completeUrl = `${process.env.NEXT_PUBLIC_API_URL}${url}`

    const backendRes = await fetch(completeUrl, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/octet-stream'
      }
    })

    console.log('backendRes:', backendRes)

    if (!backendRes.ok) {
      let errorData
      try {
        errorData = await backendRes.json()
      } catch {
        errorData = { error: 'Failed to fetch file' }
      }
      return NextResponse.json(errorData, { status: backendRes.status })
    }

    const arrayBuffer = await backendRes.arrayBuffer()

    return new Response(arrayBuffer, {
      status: 200,
      headers: {
        'Content-Type': backendRes.headers.get('Content-Type') || 'image/jpeg'
      }
    })
  } catch (err) {
    console.error('Error proxying file download:', err)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
