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

    if (!res.ok) {
      const errorResponse = await res.json()
      console.error('Backend error response:', errorResponse)
      return NextResponse.json(errorResponse, { status: res.status })
    }

    return NextResponse.json({
      status: 204,
      message: 'Password updated successfully'
    })
  } catch (err) {
    console.error(`Error updating password for user ${user_id}:`, err)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
