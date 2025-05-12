import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function POST(req) {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get('access_token')?.value

    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { searchParams, pathname } = new URL(req.url)
    const itemId = pathname.split('/').pop() // Get {itemId} from /attachments/item/{itemId}

    const type = searchParams.get('type')
    const position = searchParams.get('position')

    // Get form data (supports multipart/form-data)
    const incomingFormData = await req.formData()
    const file = incomingFormData.get('file')

    const formData = new FormData()
    formData.append('file', file)

    const backendRes = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/attachments/item/${itemId}?type=${type}&position=${position}`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: formData
      }
    )

    let data = null
    if ([400, 401, 403, 404, 500].includes(backendRes.status)) {
      try {
        data = await backendRes.json()
      } catch (err) {
        console.warn('Expected JSON error response, but failed to parse:', err)
        data = { error: 'Invalid JSON from backend' }
      }
    }

    return NextResponse.json(data || {}, { status: backendRes.status })
  } catch (err) {
    console.error('Error proxying attachment POST to backend:', err)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
