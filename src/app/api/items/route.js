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

    const backendRes = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/items`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(body)
      }
    )

    const data = await backendRes.json()
    return NextResponse.json(data, { status: backendRes.status })
  } catch (err) {
    console.error('Error proxying POST to backend:', err)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
