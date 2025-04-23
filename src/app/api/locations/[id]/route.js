import { NextResponse } from 'next/server'
import { headers } from 'next/headers'
import * as cookie from 'cookie'

export async function GET(_, { params }) {
  const { id } = await params
  try {
    const headerList = await headers()
    const rawCookies = headerList.get('cookie') || ''
    const parsed = cookie.parse(rawCookies)
    const token = parsed['access_token']

    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const res = await fetch(`http://localhost:8888/api/v1/locations/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    })

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
