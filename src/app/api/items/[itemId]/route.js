import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function DELETE(req, { params }) {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get('access_token')?.value
    const { itemId } = await params
    console.log('Item ID:', itemId)

    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const backendRes = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/items/${itemId}`,
      {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )

    let data = null

    if (backendRes.status === 204) {
      return new NextResponse(null, { status: 204 })
    }

    if ([401, 403, 404].includes(backendRes.status)) {
      try {
        data = await backendRes.json()
      } catch (err) {
        console.warn('Expected JSON error response, but failed to parse:', err)
        data = { error: 'Invalid JSON from backend' }
      }
    }

    // Respond accordingly
    return NextResponse.json(data || {}, { status: backendRes.status })
  } catch (err) {
    console.error('Error deleting item:', err)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
