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
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/organizations/${id}`,
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
        { error: `Failed to fetch organization with ID ${id}` },
        { status: res.status }
      )
    }

    const data = await res.json()
    return NextResponse.json(data)
  } catch (err) {
    console.error(`Error fetching organization ${id}:`, err)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function DELETE(_, { params }) {
  const { id } = await params
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get('access_token')?.value

    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/organizations/${id}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
    )

    if (!res.ok) {
      return NextResponse.json(
        { error: `Failed to delete organization with ID ${id}` },
        { status: res.status }
      )
    }

    return NextResponse.json({
      message: 'Organization deleted successfully',
      status: res.status
    })
  } catch (err) {
    console.error(`Error deleting organization ${id}:`, err)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
