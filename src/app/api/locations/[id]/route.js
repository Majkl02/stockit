import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function GET(_, { params }) {
  const { id } = await params
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get('access_token')?.value

    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/locations/${id}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
    )

    if (!res.ok) {
      return NextResponse.json(
        { error: `Failed to fetch location with ID ${id}` },
        { status: res.status }
      )
    }

    const data = await res.json()
    return NextResponse.json(data)
  } catch (err) {
    console.error(`Error fetching location ${id}:`, err)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function PUT(req, { params }) {
  const { id } = params

  try {
    const cookieStore = await cookies()
    const token = cookieStore.get('access_token')?.value

    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await req.json()

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/locations/${id}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(body)
      }
    )

    const data = await res.json()

    if (!res.ok) {
      console.error('Backend error response:', data)
      return NextResponse.json(data, { status: res.status })
    }

    return NextResponse.json(data)
  } catch (err) {
    console.error(`Error updating location ${id}:`, err)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
