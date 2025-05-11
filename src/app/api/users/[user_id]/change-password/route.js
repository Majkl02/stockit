import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function PUT(req, { params }) {
  const { user_id } = await params

  try {
    const cookieStore = await cookies()
    const token = cookieStore.get('access_token')?.value

    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await req.json()

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/users/${user_id}/change-password`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(body)
      }
    )

    console.log('Response:', res)

    const data = await res.json()

    if (!res.ok) {
      console.error('Backend error response:', data)
      return NextResponse.json(data, { status: res.status })
    }

    return NextResponse.json(data)
  } catch (err) {
    console.error(`Error updating password for user ${user_id}:`, err)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
